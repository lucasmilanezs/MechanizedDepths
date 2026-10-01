"""Stage one current packwiz channel plus a named-version history for Pages."""

from __future__ import annotations

import argparse
from html import escape
import json
from pathlib import Path
import re
import shutil
import tomllib


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--pack-dir", required=True, type=Path)
    parser.add_argument("--report", required=True, type=Path)
    parser.add_argument("--releases", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--allow-dirty-preview", action="store_true")
    args = parser.parse_args()
    if args.output.exists():
        parser.error(f"site output already exists: {args.output}")
    releases = json.loads(args.releases.read_text(encoding="utf-8"))
    items = releases["releases"]
    if releases["schema"] != 1 or not items or items[0]["version"] != releases["active"]:
        parser.error("invalid or unsorted playtest release catalog")
    versions = [item["version"] for item in items]
    if len(versions) != len(set(versions)):
        parser.error("duplicate playtest version")
    for item in items:
        if not re.fullmatch(r"pt-(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)", item["version"]):
            parser.error(f"invalid playtest version: {item['version']}")
        if not re.fullmatch(r"[0-9a-f]{40}", item["revision"]):
            parser.error(f"invalid revision for {item['version']}")
        if not re.fullmatch(r"[0-9a-f]{40}", item["tagRevision"]):
            parser.error(f"invalid tag revision for {item['version']}")
    report = json.loads(args.report.read_text(encoding="utf-8"))
    current = items[0]
    if report["revision"] != current["revision"] or not report["complete"]:
        parser.error("pack report does not match the current complete release")
    if report["dirty_worktree"] and not args.allow_dirty_preview:
        parser.error("dirty source cannot be staged for publication")
    if not report["version"].startswith(current["version"] + "+g"):
        parser.error("pack label must include named version and revision")
    if not report["version"].endswith(current["revision"][:12]):
        parser.error("pack label does not match the revision")
    pack = tomllib.loads((args.pack_dir / "pack.toml").read_text(encoding="utf-8"))
    if pack["version"] != report["version"]:
        parser.error("pack.toml version differs from build report")
    if not (args.pack_dir / "index.toml").is_file():
        parser.error("packwiz index is missing")

    args.output.mkdir(parents=True)
    shutil.copytree(args.pack_dir, args.output / "playtest")
    public = {"schema": 1, "active": releases["active"],
              "pack": "playtest/pack.toml",
              "packwizVersion": report["version"],
              "indexSHA256": report["index_sha256"],
              "releases": [{"version": item["version"], "revision": item["revision"],
                            "tagRevision": item["tagRevision"],
                            "current": item["version"] == releases["active"]}
                           for item in items]}
    (args.output / "catalog.json").write_text(
        json.dumps(public, indent=2) + "\n", encoding="utf-8")
    rows = "\n".join(
        f'<li><strong>{escape(item["version"])}</strong> — revision '
        f'<code>{escape(item["revision"][:12])}</code>'
        f'{" (current)" if item["current"] else ""}</li>'
        for item in public["releases"]
    )
    manual_downloads = [
        ("Create Thermal Compat", "https://www.curseforge.com/minecraft/mc-mods/create-thermal-compat/files/5561483"),
        ("FTB Quest Localizer", "https://www.curseforge.com/minecraft/mc-mods/ftb-quest-localizer/files/7529230"),
        ("Hexerei", "https://www.curseforge.com/minecraft/mc-mods/hexerei/files/6314111"),
        ("Tetra Sight", "https://www.curseforge.com/minecraft/mc-mods/tetra-sight/files/6620884"),
        ("Vital Delight", "https://www.curseforge.com/minecraft/mc-mods/vital-delight/files/6759241"),
        ("Vital Herbs", "https://www.curseforge.com/minecraft/mc-mods/vital-herbs/files/6774483"),
        ("Suren's FTB Quests", "https://www.curseforge.com/minecraft/texture-packs/surens-ftb-quests/files/6385068"),
    ]
    manual_links = "".join(
        f'<li><a href="{escape(url)}">{escape(name)}</a></li>'
        for name, url in manual_downloads
    )
    command = ('"$INST_JAVA" -jar packwiz-installer-bootstrap.jar '
               'https://lucasmilanezs.github.io/MechanizedDepths/playtest/pack.toml')
    page = ("<!doctype html><html lang=\"en-US\"><meta charset=\"utf-8\">"
            "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
            "<title>Mechanized Depths — Playtest</title><main>"
            "<h1>Mechanized Depths — Playtest</h1>"
            "<p>The current packwiz channel updates before each game launch.</p>"
            "<h2>Named versions</h2><ol>" + rows + "</ol>"
            "<h2>Prism setup</h2><ol>"
            "<li>Install <a href=\"https://prismlauncher.org/download/\">Prism Launcher</a> "
            "and create a bare Minecraft 1.20.1 instance with Forge 47.4.0.</li>"
            "<li>Put the official <a href=\"https://github.com/packwiz/packwiz-installer-bootstrap/releases/download/v0.0.3/packwiz-installer-bootstrap.jar\">"
            "packwiz-installer-bootstrap.jar</a> in that instance's Minecraft folder.</li>"
            "<li>In Edit Instance → Settings → Custom Commands, enable custom commands "
            "and set this pre-launch command: <code>" + escape(command) + "</code></li>"
            "<li>Launch and complete any manual CurseForge downloads requested by "
            "the installer. Save each file at the exact path it specifies.</li></ol>"
            "<p>The current first install requires seven manual downloads because "
            "CurseForge blocks direct API access for these files:</p><ul>" + manual_links + "</ul>"
            "<p><a href=\"playtest/pack.toml\">Current pack.toml</a> · "
            "<a href=\"catalog.json\">JSON catalog</a> · "
            "<a href=\"https://packwiz.infra.link/tutorials/installing/packwiz-installer/\">"
            "Installer guide</a></p></main></html>\n")
    (args.output / "index.html").write_text(page, encoding="utf-8")
    print(json.dumps({"site": str(args.output), "active": releases["active"],
                      "revision": current["revision"], "releases": len(items)}))


if __name__ == "__main__":
    main()
