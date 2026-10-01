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
    (args.output / ".nojekyll").write_text("", encoding="utf-8")
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
    page = ("<!doctype html><html lang=\"en-US\"><meta charset=\"utf-8\">"
            "<meta name=\"viewport\" content=\"width=device-width,initial-scale=1\">"
            "<title>Mechanized Depths — Playtest</title><main>"
            "<h1>Mechanized Depths — Playtest</h1>"
            "<p>The current channel updates before each game launch through "
            "packwiz-installer in the Prism profile.</p>"
            "<p>Named versions:</p><ol>" + rows + "</ol>"
            "<p><a href=\"catalog.json\">JSON catalog</a></p></main></html>\n")
    (args.output / "index.html").write_text(page, encoding="utf-8")
    print(json.dumps({"site": str(args.output), "active": releases["active"],
                      "revision": current["revision"], "releases": len(items)}))


if __name__ == "__main__":
    main()
