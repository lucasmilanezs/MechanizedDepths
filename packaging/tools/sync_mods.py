"""Sync packwiz mod metadata with the development instance, touching only what changed.

The CurseForge app is the source of mod state: the jars in mods/ (active or
.jar.disabled) and their records in minecraftinstance.json. Metafiles are
matched by CurseForge project ID, never by file name. For each project:

- update: rewrite only `filename`, `hash` and `file-id`; every other field
  (side, name, manual edits) is kept byte for byte;
- add: create a metafile; `side` comes from --side or stays pending, and the
  builder refuses a metafile without a valid side;
- remove: delete the metafile and its exclusion-list entries;
- enable/disable: move the entry in disabled-mods.txt.

Unchanged files are never rewritten. Without --apply the plan is only printed.
No network access: hashes are computed from the local jars and cross-checked
against the SHA-1 CurseForge recorded at install time.
"""

from __future__ import annotations

import argparse
from dataclasses import dataclass
import hashlib
import json
from pathlib import Path
import re
import sys
import tomllib


ROOT = Path(__file__).resolve().parents[2]
PACKAGING = ROOT / "packaging"
METADATA = PACKAGING / "packwiz" / "mods"
DISABLED_LIST = PACKAGING / "disabled-mods.txt"
EXCLUDED_LIST = PACKAGING / "distribution-excluded-mods.txt"
MODS = ROOT / "mods"
INSTANCE = ROOT / "minecraftinstance.json"
SIDES = {"both", "client", "server"}
CURSEFORGE_MOD_CLASS = 6
SHA1_HASH_TYPE = 1


class SyncError(Exception):
    pass


@dataclass
class InstalledMod:
    project_id: int
    file_id: int
    filename: str
    disabled: bool
    sha1: str
    name: str
    slug: str


@dataclass
class Metafile:
    path: Path
    project_id: int
    file_id: int
    filename: str
    sha1: str
    side: str | None


def read_text(path: Path) -> str:
    with path.open(encoding="utf-8", newline="") as handle:
        return handle.read()


def write_text(path: Path, text: str) -> None:
    with path.open("w", encoding="utf-8", newline="") as handle:
        handle.write(text)


def newline_of(text: str) -> str:
    return "\r\n" if "\r\n" in text else "\n"


def toml_string(value: str) -> str:
    # JSON string escaping is valid TOML basic-string escaping.
    return json.dumps(value, ensure_ascii=False)


def sha1_of(path: Path) -> str:
    digest = hashlib.sha1()
    with path.open("rb") as handle:
        for chunk in iter(lambda: handle.read(1 << 20), b""):
            digest.update(chunk)
    return digest.hexdigest()


def load_installed() -> dict[int, InstalledMod]:
    instance = json.loads(INSTANCE.read_text(encoding="utf-8"))
    by_disk_name = {}
    for addon in instance["installedAddons"]:
        if addon.get("categoryClassID") != CURSEFORGE_MOD_CLASS:
            continue
        by_disk_name[addon["fileNameOnDisk"]] = addon

    installed: dict[int, InstalledMod] = {}
    errors = []
    jars = sorted([*MODS.glob("*.jar"), *MODS.glob("*.jar.disabled")])
    for jar in jars:
        addon = by_disk_name.get(jar.name)
        if addon is None:
            errors.append(f"{jar.name}: no CurseForge record in minecraftinstance.json "
                          "(installed by hand?)")
            continue
        file = addon["installedFile"]
        project_id = int(addon["addonID"])
        local_sha1 = sha1_of(jar)
        recorded = [h["value"] for h in file.get("hashes", []) if h.get("type") == SHA1_HASH_TYPE]
        if recorded and local_sha1 not in recorded:
            errors.append(f"{jar.name}: local SHA-1 differs from the CurseForge file; "
                          "the jar was modified or replaced")
            continue
        if project_id in installed:
            errors.append(f"{jar.name}: project {project_id} is installed twice "
                          f"(also {installed[project_id].filename})")
            continue
        installed[project_id] = InstalledMod(
            project_id=project_id,
            file_id=int(file["id"]),
            filename=file["fileName"],
            disabled=jar.name.endswith(".disabled"),
            sha1=local_sha1,
            name=addon["name"],
            slug=addon["webSiteURL"].rstrip("/").rsplit("/", 1)[-1],
        )
    if errors:
        raise SyncError("\n".join(errors))
    return installed


def load_metafiles() -> dict[int, Metafile]:
    metafiles: dict[int, Metafile] = {}
    for path in sorted(METADATA.glob("*.pw.toml")):
        data = tomllib.loads(read_text(path))
        curseforge = data.get("update", {}).get("curseforge")
        if not curseforge:
            raise SyncError(f"{path.name}: not a CurseForge metafile; maintain it by hand "
                            "or move it out of packwiz/mods")
        project_id = int(curseforge["project-id"])
        if project_id in metafiles:
            raise SyncError(f"{path.name}: project {project_id} already described by "
                            f"{metafiles[project_id].path.name}")
        metafiles[project_id] = Metafile(
            path=path,
            project_id=project_id,
            file_id=int(curseforge["file-id"]),
            filename=data["filename"],
            sha1=data["download"]["hash"],
            side=data.get("side"),
        )
    return metafiles


def list_entries(path: Path) -> set[str]:
    return {
        line.strip() for line in read_text(path).splitlines()
        if line.strip() and not line.lstrip().startswith("#")
    }


def edit_list(path: Path, add: set[str], remove: set[str]) -> None:
    """Insert entries in sorted position and drop removed ones; comments stay put."""
    text = read_text(path)
    newline = newline_of(text)
    lines = [line for line in text.splitlines() if line.strip() not in remove]
    for entry in sorted(add):
        index = len(lines)
        for i, line in enumerate(lines):
            stripped = line.strip()
            if stripped and not stripped.startswith("#") and stripped > entry:
                index = i
                break
        lines.insert(index, entry)
    write_text(path, newline.join(lines) + newline)


def replace_field(text: str, key: str, value: str, path: Path) -> str:
    pattern = re.compile(rf"(?m)^{re.escape(key)} = .*?(?=\r?$)")
    if len(pattern.findall(text)) != 1:
        raise SyncError(f"{path.name}: expected exactly one `{key}` line")
    return pattern.sub(lambda _: f"{key} = {value}", text)


def new_metafile(mod: InstalledMod, side: str | None, newline: str) -> str:
    lines = [f"name = {toml_string(mod.name)}", f"filename = {toml_string(mod.filename)}"]
    if side:
        lines.append(f"side = {toml_string(side)}")
    lines += [
        "",
        "[download]",
        'hash-format = "sha1"',
        f"hash = {toml_string(mod.sha1)}",
        'mode = "metadata:curseforge"',
        "",
        "[update]",
        "[update.curseforge]",
        f"file-id = {mod.file_id}",
        f"project-id = {mod.project_id}",
    ]
    return newline.join(lines) + newline


def parse_sides(values: list[str]) -> dict[str, str]:
    sides = {}
    for value in values:
        slug, sep, side = value.partition("=")
        if not sep or side not in SIDES:
            raise SyncError(f"--side expects slug=both|client|server, got {value!r}")
        sides[slug.removesuffix(".pw.toml")] = side
    return sides


def main() -> int:
    parser = argparse.ArgumentParser(description=__doc__.splitlines()[0])
    parser.add_argument("--apply", action="store_true", help="write the planned changes")
    parser.add_argument("--side", action="append", default=[], metavar="SLUG=SIDE",
                        help="side for a newly added mod, e.g. --side jade=both")
    args = parser.parse_args()

    try:
        sides = parse_sides(args.side)
        installed = load_installed()
        metafiles = load_metafiles()
    except SyncError as error:
        print(f"error: {error}", file=sys.stderr)
        return 1

    disabled = list_entries(DISABLED_LIST)
    excluded = list_entries(EXCLUDED_LIST)
    sample = next(iter(metafiles.values()), None)
    newline = newline_of(read_text(sample.path)) if sample else "\n"

    plan: list[str] = []
    writes: dict[Path, str] = {}
    deletes: list[Path] = []
    disable_add: set[str] = set()
    disable_remove: set[str] = set()
    exclude_remove: set[str] = set()
    errors: list[str] = []

    for project_id, mod in sorted(installed.items(), key=lambda item: item[1].filename.lower()):
        meta = metafiles.get(project_id)
        if meta is None:
            name = f"{mod.slug}.pw.toml"
            if (METADATA / name).exists():
                errors.append(f"{name}: exists for another project; cannot add {mod.filename}")
                continue
            side = sides.pop(mod.slug, None)
            writes[METADATA / name] = new_metafile(mod, side, newline)
            plan.append(f"add      {name}: {mod.filename} "
                        f"(side {side if side else 'PENDING - set it before building'})")
            if mod.disabled:
                disable_add.add(name)
            continue

        name = meta.path.name
        if (meta.filename, meta.sha1, meta.file_id) != (mod.filename, mod.sha1, mod.file_id):
            text = read_text(meta.path)
            text = replace_field(text, "filename", toml_string(mod.filename), meta.path)
            text = replace_field(text, "hash", toml_string(mod.sha1), meta.path)
            text = replace_field(text, "file-id", str(mod.file_id), meta.path)
            writes[meta.path] = text
            plan.append(f"update   {name}: {meta.filename} -> {mod.filename}")
        if mod.disabled and name not in disabled:
            if name in excluded:
                errors.append(f"{name}: disabled in the instance but listed in "
                              "distribution-excluded-mods.txt; resolve by hand")
                continue
            disable_add.add(name)
            plan.append(f"disable  {name}")
        elif not mod.disabled and name in disabled:
            disable_remove.add(name)
            plan.append(f"enable   {name}")

    for project_id, meta in sorted(metafiles.items(), key=lambda item: item[1].path.name):
        if project_id in installed:
            continue
        name = meta.path.name
        deletes.append(meta.path)
        plan.append(f"remove   {name}: {meta.filename}")
        if name in disabled:
            disable_remove.add(name)
        if name in excluded:
            exclude_remove.add(name)

    if sides:
        errors.append(f"--side given for mods that are not being added: {sorted(sides)}")
    pending = sorted(m.path.name for pid, m in metafiles.items()
                     if pid in installed and m.side not in SIDES)
    for name in pending:
        plan.append(f"pending  {name}: side is not set; the build will refuse it")

    if errors:
        print("error: " + "\n".join(errors), file=sys.stderr)
        return 1
    if not plan:
        print("Metadata matches the instance; nothing to do.")
        return 0

    print("\n".join(plan))
    if not args.apply:
        print("\nDry run. Re-run with --apply to write these changes.")
        return 0

    for path, text in writes.items():
        write_text(path, text)
        tomllib.loads(text)
    for path in deletes:
        path.unlink()
    if disable_add or disable_remove:
        edit_list(DISABLED_LIST, disable_add, disable_remove)
    if exclude_remove:
        edit_list(EXCLUDED_LIST, set(), exclude_remove)
    print("\nApplied. Review with: git diff -- packaging/")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())
