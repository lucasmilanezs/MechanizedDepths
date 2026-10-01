"""Build a packwiz distribution from tracked game sources and pack metadata.

This command never writes to the playable CurseForge instance. Each run creates
a new directory under builds/packwiz and reports the exact source revision.
"""

from __future__ import annotations

import argparse
import hashlib
import json
import os
from pathlib import Path, PurePosixPath
import re
import shutil
import subprocess
import sys
import tomllib
import zipfile


ROOT = Path(__file__).resolve().parents[2]
PACKAGING = ROOT / "packaging"
OUTPUT_ROOT = ROOT / "builds" / "packwiz"


def git(*args: str) -> bytes:
    return subprocess.check_output(["git", *args], cwd=ROOT)


def selected(path: str, includes: list[str], excludes: list[str]) -> bool:
    if path.startswith(("kubejs/debug/", "kubejs/probe/")):
        return path.endswith("/.keep")
    def matches(rule: str) -> bool:
        return path.startswith(rule) if rule.endswith("/") else path == rule

    return any(matches(rule) for rule in includes) and not any(
        matches(rule) for rule in excludes
    )


def distribution_path(path: str) -> str:
    # Pages does not serve dotfiles; keep the source marker and its directory,
    # but give the distributed marker a public filename.
    if path.startswith(("kubejs/debug/", "kubejs/probe/")) and path.endswith("/.keep"):
        return path.removesuffix(".keep") + "directory.keep"
    return path


def copy_file(source: Path, dest: Path) -> None:
    dest.parent.mkdir(parents=True, exist_ok=True)
    shutil.copyfile(source, dest)


def add_curseforge_image(source_path: Path, output_path: Path,
                        image_path: Path, archive_name: str) -> None:
    """Add CurseForge's profile image field and its root-level ZIP member."""
    if output_path.exists():
        raise RuntimeError(f"CurseForge export already exists: {output_path}")
    with zipfile.ZipFile(source_path) as source, zipfile.ZipFile(output_path, "w") as dest:
        names = set(source.namelist())
        if archive_name in names:
            raise RuntimeError(f"profile image already in export: {archive_name}")
        if "manifest.json" not in names:
            raise RuntimeError("CurseForge export has no manifest.json")
        manifest = json.loads(source.read("manifest.json"))
        manifest["image"] = archive_name
        for member in source.infolist():
            content = ((json.dumps(manifest, ensure_ascii=False, separators=(",", ":")) + "\n").encode("utf-8")
                       if member.filename == "manifest.json" else source.read(member))
            dest.writestr(member, content)
        dest.write(image_path, archive_name, compress_type=zipfile.ZIP_DEFLATED)
    with zipfile.ZipFile(output_path) as check:
        if check.testzip() is not None:
            raise RuntimeError("CurseForge ZIP checksum validation failed")
        if json.loads(check.read("manifest.json"))["image"] != archive_name:
            raise RuntimeError("CurseForge image manifest entry was not written")
        if check.read(archive_name) != image_path.read_bytes():
            raise RuntimeError("CurseForge profile image bytes differ from source")


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--version", required=True, help="Build label, e.g. pt-1.0.0-rc.1")
    parser.add_argument("--export-curseforge", action="store_true")
    parser.add_argument("--require-clean", action="store_true")
    parser.add_argument("--audit-instance-mods", action="store_true")
    parser.add_argument("--packwiz", type=Path, help="Path to packwiz executable")
    args = parser.parse_args()

    if not args.version or any(c in args.version for c in '"\r\n\\/'):
        parser.error("invalid version label")
    revision = git("rev-parse", "HEAD").decode().strip()
    status = git("status", "--porcelain", "--untracked-files=normal").decode().strip()
    if args.require_clean and status:
        parser.error("working tree is not clean; build a committed revision")

    rules = json.loads((PACKAGING / "build.json").read_text(encoding="utf-8"))
    includes, excludes = rules["include"], rules["exclude"]
    image_name = rules["curseforge_profile_image"]
    image_parts = PurePosixPath(image_name).parts
    if (not image_name.startswith("profileImage/") or "\\" in image_name
            or any(part in (".", "..") for part in image_parts)
            or not image_name.lower().endswith(".png")):
        parser.error("CurseForge profile image must be a PNG under profileImage/")
    image_path = ROOT / image_name
    if not image_path.resolve().is_relative_to(ROOT.resolve()) or not image_path.is_file():
        parser.error("CurseForge profile image is missing or outside the workspace")
    image_bytes = image_path.read_bytes()
    if not image_bytes.startswith(b"\x89PNG\r\n\x1a\n"):
        parser.error("CurseForge profile image is not a PNG")
    image_sha256 = hashlib.sha256(image_bytes).hexdigest()
    tracked = [os.fsdecode(p) for p in git("ls-files", "-z").split(b"\0") if p]
    image_tracked = image_name in tracked
    if args.require_clean and not image_tracked:
        parser.error("CurseForge profile image must be tracked for a release build")
    # During migration, local .keep files may still be untracked. No other
    # untracked game content is allowed into the local build.
    markers = {
        p.relative_to(ROOT).as_posix()
        for base in (ROOT / "kubejs/debug", ROOT / "kubejs/probe")
        if base.is_dir()
        for p in base.rglob(".keep")
    }
    game_files = sorted(p for p in set(tracked) | markers if selected(p, includes, excludes))
    if not game_files:
        parser.error("no tracked game files selected")
    missing = [p for p in game_files if not (ROOT / p).is_file()]
    if missing:
        parser.error(f"selected tracked files are missing: {missing[:10]}")
    distribution_files = {distribution_path(path) for path in game_files}
    if len(distribution_files) != len(game_files):
        parser.error("distribution marker collides with another game file")

    disabled = {
        line.strip()
        for line in (PACKAGING / "disabled-mods.txt").read_text(encoding="utf-8").splitlines()
        if line.strip() and not line.lstrip().startswith("#")
    }
    distribution_excluded = {
        line.strip()
        for line in (PACKAGING / "distribution-excluded-mods.txt").read_text(encoding="utf-8").splitlines()
        if line.strip() and not line.lstrip().startswith("#")
    }
    metadata_root = PACKAGING / "packwiz"
    all_mods = sorted((metadata_root / "mods").glob("*.pw.toml"))
    unknown = (disabled | distribution_excluded) - {p.name for p in all_mods}
    if unknown:
        parser.error(f"mod exclusion list has unknown entries: {sorted(unknown)}")
    if disabled & distribution_excluded:
        parser.error("disabled and distribution-excluded mod lists overlap")
    active_mods = [p for p in all_mods if p.name not in disabled | distribution_excluded]
    resources = sorted((metadata_root / "resourcepacks").glob("*.pw.toml"))
    for source in [*active_mods, *resources]:
        data = tomllib.loads(source.read_text(encoding="utf-8"))
        if "filename" not in data or "download" not in data:
            parser.error(f"incomplete packwiz metadata: {source}")

    resource_rules = json.loads(
        (PACKAGING / "openloader-resourcepacks.json").read_text(encoding="utf-8")
    )
    openloader_required = resource_rules["openloader_required"]
    expected_metadata = {entry["metadata"] for entry in openloader_required}
    if {source.name for source in resources} != expected_metadata:
        parser.error("packwiz resourcepacks must match the required OpenLoader packs")
    required_paths: set[str] = set()
    for entry in openloader_required:
        relative = f"config/openloader/resources/{entry['filename']}"
        source = ROOT / relative
        if not source.is_file() or relative not in tracked:
            parser.error(f"required OpenLoader resourcepack must be tracked: {relative}")
        if relative not in game_files:
            parser.error(f"required OpenLoader resourcepack is excluded from the build: {relative}")
        payload = source.read_bytes()
        if hashlib.sha256(payload).hexdigest() != entry["sha256"]:
            parser.error(f"OpenLoader resourcepack hash mismatch: {relative}")
        metadata = tomllib.loads(
            (metadata_root / "resourcepacks" / entry["metadata"]).read_text(encoding="utf-8")
        )
        if metadata["filename"] != entry["filename"] or metadata["download"]["hash-format"] != "sha1":
            parser.error(f"OpenLoader pack metadata mismatch: {relative}")
        if hashlib.sha1(payload).hexdigest() != metadata["download"]["hash"]:
            parser.error(f"OpenLoader pack differs from CurseForge metadata: {relative}")
        with zipfile.ZipFile(source) as archive:
            pack = json.loads(archive.read("pack.mcmeta"))
        if pack["pack"]["pack_format"] != 15:
            parser.error(f"OpenLoader pack is not for Minecraft 1.20.1: {relative}")
        required_paths.add(relative)
    if args.audit_instance_mods:
        instance_mods = ROOT / "mods"
        if not instance_mods.is_dir():
            parser.error("local development mods/ directory not found")
        expected_active = {
            tomllib.loads(p.read_text(encoding="utf-8"))["filename"] for p in all_mods
            if p.name not in disabled
        }
        expected_disabled = {
            tomllib.loads(p.read_text(encoding="utf-8"))["filename"] for p in all_mods
            if p.name in disabled
        }
        actual_active = {p.name for p in instance_mods.glob("*.jar")}
        actual_disabled = {
            p.name.removesuffix(".disabled")
            for p in instance_mods.glob("*.jar.disabled")
        }
        if actual_active != expected_active or actual_disabled != expected_disabled:
            parser.error(
                "development mods differ from metadata; "
                f"active missing={sorted(expected_active - actual_active)}, "
                f"active extra={sorted(actual_active - expected_active)}, "
                f"disabled missing={sorted(expected_disabled - actual_disabled)}, "
                f"disabled extra={sorted(actual_disabled - expected_disabled)}"
            )

    OUTPUT_ROOT.mkdir(parents=True, exist_ok=True)
    destination = OUTPUT_ROOT / f"{args.version}-{revision[:12]}"
    if destination.exists():
        parser.error(f"output already exists: {destination}")
    destination.mkdir()
    for path in game_files:
        copy_file(ROOT / path, destination / distribution_path(path))
    # The development instance still uses GlobalPacks. The distribution uses
    # OpenLoader only, so copy its one nonempty datapack into OpenLoader.
    gas_source = ROOT / "datapacks/kubejs_gases"
    gas_files = sorted(p for p in gas_source.rglob("*") if p.is_file())
    if not gas_files or not (gas_source / "pack.mcmeta").is_file():
        parser.error("GlobalPacks gas datapack source is missing")
    untracked_gas = [p for p in gas_files if p.relative_to(ROOT).as_posix() not in tracked]
    if untracked_gas:
        parser.error(f"gas datapack contains untracked files: {untracked_gas[:5]}")
    gas_pack = json.loads((gas_source / "pack.mcmeta").read_text(encoding="utf-8"))
    if gas_pack["pack"]["pack_format"] != 26:
        parser.error("gas datapack format changed; review migration to OpenLoader")
    gas_paths: set[str] = set()
    for source in gas_files:
        relative = source.relative_to(gas_source)
        target = destination / "config/openloader/data/kubejs_gases" / relative
        if target.exists():
            parser.error(f"OpenLoader datapack collision: {target}")
        copy_file(source, target)
        gas_paths.add(target.relative_to(destination).as_posix())
    gas_pack["pack"]["pack_format"] = 15
    (destination / "config/openloader/data/kubejs_gases/pack.mcmeta").write_text(
        json.dumps(gas_pack, ensure_ascii=False, indent=2) + "\n", encoding="utf-8"
    )
    build_overrides = sorted((PACKAGING / "overrides").rglob("*"))
    build_overrides = [p for p in build_overrides if p.is_file()]
    override_paths = {p.relative_to(PACKAGING / "overrides").as_posix() for p in build_overrides}
    fancy_options = PACKAGING / "overrides/config/fancymenu/options.txt"
    if not fancy_options.is_file():
        parser.error("distribution FancyMenu options.txt is missing")
    fancy_text = fancy_options.read_text(encoding="utf-8")
    for key, value in (("modpack_mode", "true"), ("show_customization_overlay", "false")):
        pattern = rf"(?m)^B:{key}\s*=\s*'{value}';\s*$"
        if len(re.findall(pattern, fancy_text)) != 1:
            parser.error(f"distribution FancyMenu option must be {key}={value}")
    if override_paths & distribution_files:
        parser.error(f"packaging override collides with tracked game source: {sorted(override_paths & distribution_files)}")
    for source in build_overrides:
        copy_file(source, destination / source.relative_to(PACKAGING / "overrides"))
    for source in active_mods:
        copy_file(source, destination / "mods" / source.name)
    for source in resources:
        copy_file(source, destination / "resourcepacks" / source.name)
    index = destination / "index.toml"
    index.write_text('hash-format = "sha256"\n', encoding="utf-8")
    template = (metadata_root / "pack.toml.template").read_text(encoding="utf-8")
    template = template.replace("@VERSION@", args.version)
    template = template.replace("@INDEX_HASH@", hashlib.sha256(index.read_bytes()).hexdigest())
    (destination / "pack.toml").write_text(template, encoding="utf-8")

    executable = args.packwiz or shutil.which("packwiz")
    if not executable and os.name == "nt":
        executable = Path.home() / "go" / "bin" / "packwiz.exe"
    if not executable or not Path(executable).is_file():
        parser.error("packwiz executable not found; pass --packwiz")
    subprocess.run([str(executable), "refresh"], cwd=destination, check=True)

    pack = tomllib.loads((destination / "pack.toml").read_text(encoding="utf-8"))
    expected_hash = hashlib.sha256(index.read_bytes()).hexdigest()
    if pack["index"]["hash"] != expected_hash:
        raise RuntimeError("pack.toml does not match generated index.toml")
    entries = tomllib.loads(index.read_text(encoding="utf-8"))["files"]
    indexed = {item["file"] for item in entries}
    expected = distribution_files | gas_paths | override_paths | {
        f"mods/{p.name}" for p in active_mods
    } | {f"resourcepacks/{p.name}" for p in resources}
    if indexed != expected:
        raise RuntimeError(
            f"index mismatch: missing={sorted(expected - indexed)[:15]}, "
            f"unexpected={sorted(indexed - expected)[:15]}"
        )

    report = {
        "revision": revision,
        "version": args.version,
        "curseforge_profile_image": image_name,
        "curseforge_profile_image_sha256": image_sha256,
        "curseforge_profile_image_tracked": image_tracked,
        "dirty_worktree": bool(status),
        "game_files": len(game_files),
        "build_overrides": len(build_overrides),
        "active_mods": len(active_mods),
        "excluded_mods": len(disabled),
        "distribution_excluded_mods": sorted(distribution_excluded),
        "resourcepacks_by_metadata": len(resources),
        "openloader_required_resourcepacks": len(required_paths),
        "openloader_migrated_datapack_files": len(gas_paths),
        "complete": len(required_paths) == len(openloader_required),
        "index_sha256": expected_hash,
    }
    (destination.parent / f"{destination.name}.report.json").write_text(
        json.dumps(report, indent=2) + "\n", encoding="utf-8"
    )
    if args.export_curseforge:
        output = destination.parent / f"MechanizedDepths-{args.version}-CurseForge.zip"
        raw_output = destination.parent / f"MechanizedDepths-{args.version}-packwiz.zip"
        if output.exists() or raw_output.exists():
            parser.error(f"export already exists: {output}")
        subprocess.run(
            [str(executable), "curseforge", "export", "--side", "client", "--output", str(raw_output)],
            cwd=destination,
            check=True,
        )
        add_curseforge_image(raw_output, output, image_path, image_name)
        raw_output.unlink()
    print(json.dumps({"output": str(destination), **report}, indent=2))
    return 0


if __name__ == "__main__":
    try:
        sys.exit(main())
    except subprocess.CalledProcessError as exc:
        print(f"command failed: {exc}", file=sys.stderr)
        sys.exit(exc.returncode or 1)
