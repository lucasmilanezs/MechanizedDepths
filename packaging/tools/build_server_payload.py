"""Build a manual dedicated-server ZIP from one committed Packwiz build.

The ZIP contains indexed overrides and server-eligible mod JARs. It does not
contain Packwiz descriptors or root resourcepacks. No Forge or world files are
included. Supply a local directory of JARs; every JAR is checked against the
Packwiz SHA-1 metadata before packaging.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path, PurePosixPath
import shutil
import tomllib
import zipfile


def digest(path: Path, algorithm: str) -> str:
    result = hashlib.new(algorithm)
    with path.open("rb") as source:
        for chunk in iter(lambda: source.read(1024 * 1024), b""):
            result.update(chunk)
    return result.hexdigest()


def safe_file(root: Path, name: str) -> Path:
    relative = PurePosixPath(name)
    if (
        not name
        or "\\" in name
        or relative.is_absolute()
        or any(part in ("", ".", "..") for part in relative.parts)
    ):
        raise ValueError(f"unsafe pack path: {name!r}")
    path = root.joinpath(*relative.parts)
    if not path.resolve().is_relative_to(root.resolve()) or not path.is_file():
        raise ValueError(f"missing or unsafe pack file: {name}")
    return path


def add_file(archive: zipfile.ZipFile, name: str, source: Path) -> None:
    info = zipfile.ZipInfo(name, date_time=(1980, 1, 1, 0, 0, 0))
    info.compress_type = zipfile.ZIP_DEFLATED
    info.external_attr = 0o644 << 16
    with archive.open(info, "w") as target, source.open("rb") as payload:
        shutil.copyfileobj(payload, target, length=1024 * 1024)


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--pack-dir", type=Path, required=True)
    parser.add_argument("--jar-dir", type=Path, required=True)
    parser.add_argument("--output", type=Path, required=True)
    parser.add_argument("--previous-manifest", type=Path)
    args = parser.parse_args()

    pack_dir = args.pack_dir.resolve()
    jar_dir = args.jar_dir.resolve()
    output = args.output.resolve()
    manifest_path = output.with_suffix(".manifest.json")
    cleanup_path = output.with_suffix(".remove.txt")
    if not pack_dir.is_dir() or not jar_dir.is_dir():
        parser.error("pack directory or JAR directory is missing")
    if output.exists() or manifest_path.exists() or cleanup_path.exists():
        parser.error("output ZIP, manifest, or removal list already exists")
    report_path = pack_dir.parent / f"{pack_dir.name}.report.json"
    report = json.loads(report_path.read_text(encoding="utf-8"))
    if report["dirty_worktree"] or not report["complete"]:
        parser.error("server payload requires a complete build from a clean commit")
    pack = tomllib.loads((pack_dir / "pack.toml").read_text(encoding="utf-8"))
    index_path = safe_file(pack_dir, pack["index"]["file"])
    index_hash = digest(index_path, "sha256")
    if (
        pack["version"] != report["version"]
        or pack["index"]["hash-format"] != "sha256"
        or pack["index"]["hash"] != index_hash
        or report["index_sha256"] != index_hash
    ):
        parser.error("pack, index, and build report do not match")
    index = tomllib.loads(index_path.read_text(encoding="utf-8"))
    if index["hash-format"] != "sha256":
        parser.error("server payload requires a SHA-256 Packwiz index")

    included: dict[str, Path] = {}
    checksums: dict[str, str] = {}
    excluded: list[str] = []
    override_count = mod_count = resource_count = 0
    for entry in index["files"]:
        indexed_name = entry["file"]
        source = safe_file(pack_dir, indexed_name)
        algorithm = entry.get("hash-format", index["hash-format"])
        if algorithm != "sha256" or digest(source, algorithm) != entry["hash"]:
            parser.error(f"index hash mismatch: {indexed_name}")
        if not entry.get("metafile", False):
            if indexed_name in included:
                parser.error(f"duplicate output path: {indexed_name}")
            included[indexed_name] = source
            checksums[indexed_name] = entry["hash"]
            override_count += 1
            continue

        metadata = tomllib.loads(source.read_text(encoding="utf-8"))
        side = metadata.get("side")
        if side not in {"both", "client", "server"}:
            parser.error(f"invalid side in {indexed_name}")
        if indexed_name.startswith("resourcepacks/"):
            resource_count += 1
            if side != "client":
                parser.error(f"root resourcepack must be client-only: {indexed_name}")
            continue
        if not indexed_name.startswith("mods/"):
            parser.error(f"unexpected metafile: {indexed_name}")
        filename = metadata["filename"]
        if Path(filename).name != filename or "\\" in filename or not filename.endswith(".jar"):
            parser.error(f"unsafe JAR filename: {indexed_name}")
        if metadata["download"]["hash-format"] != "sha1":
            parser.error(f"unsupported JAR hash format: {indexed_name}")
        jar = jar_dir / filename
        if not jar.is_file() or digest(jar, "sha1") != metadata["download"]["hash"]:
            parser.error(f"JAR missing or SHA-1 mismatch: {filename}")
        if side == "client":
            excluded.append(filename)
            continue
        archive_name = "mods/" + filename
        if archive_name in included:
            parser.error(f"duplicate output path: {archive_name}")
        included[archive_name] = jar
        checksums[archive_name] = digest(jar, "sha256")
        mod_count += 1

    if (
        mod_count + len(excluded) != report["active_mods"]
        or resource_count != report["resourcepacks_by_metadata"]
    ):
        parser.error("metafile counts differ from the build report")
    previous_jars: set[str] = set()
    if args.previous_manifest:
        previous = json.loads(args.previous_manifest.read_text(encoding="utf-8"))
        previous_jars = {
            PurePosixPath(name).name
            for name in previous["files"]
            if name.startswith("mods/") and name.endswith(".jar")
        }
    included_jars = {
        PurePosixPath(name).name for name in included if name.startswith("mods/")
    }
    cleanup = sorted((previous_jars | set(excluded)) - included_jars)
    manifest = {
        "source_revision": report["revision"],
        "pack_version": report["version"],
        "mod_jar_count": mod_count,
        "indexed_override_file_count": override_count,
        "excluded_client_only_mod_jars": sorted(excluded),
        "remove_from_previous_server_mods": cleanup,
        "files": dict(sorted(checksums.items())),
    }
    output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(output, "w", allowZip64=True) as archive:
        for name, source in sorted(included.items()):
            add_file(archive, name, source)
    with zipfile.ZipFile(output) as archive:
        if archive.testzip() is not None or set(archive.namelist()) != set(included):
            raise RuntimeError("server ZIP integrity check failed")
    manifest_path.write_text(
        json.dumps(manifest, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    cleanup_path.write_text("\n".join(cleanup) + "\n", encoding="utf-8")
    print(
        json.dumps(
            {
                "zip": str(output),
                "manifest": str(manifest_path),
                "remove_list": str(cleanup_path),
                "revision": report["revision"],
                "mods": mod_count,
                "overrides": override_count,
                "client_mods_excluded": len(excluded),
                "jars_to_remove": len(cleanup),
            },
            indent=2,
        )
    )


if __name__ == "__main__":
    main()