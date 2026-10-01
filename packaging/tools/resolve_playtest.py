"""Derive the playtest catalog from remote release branch heads.

Branch names `release/pt-X.Y.Z` are the catalog identities. The highest
numeric version is the current auto-update channel. Hotfix commits update the
revision of an existing entry without adding a version.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import re
import subprocess


ROOT = Path(__file__).resolve().parents[2]
BRANCH = re.compile(r"^refs/remotes/origin/release/pt-(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$")


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    result = subprocess.check_output(
        ["git", "for-each-ref", "--format=%(refname) %(objectname)",
         "refs/remotes/origin/release/"], cwd=ROOT, text=True
    )
    releases = []
    for line in result.splitlines():
        ref, revision = line.split(" ", 1)
        match = BRANCH.fullmatch(ref)
        if not match:
            continue
        if not re.fullmatch(r"[0-9a-f]{40}", revision):
            parser.error(f"invalid revision for {ref}")
        parts = tuple(int(item) for item in match.groups())
        releases.append((parts, {"version": "pt-" + ".".join(match.groups()),
                                 "revision": revision,
                                 "branch": ref.removeprefix("refs/remotes/origin/")}))
    if not releases:
        parser.error("no remote release/pt-X.Y.Z branches found")
    releases.sort(key=lambda item: item[0], reverse=True)
    catalog = {"schema": 1, "active": releases[0][1]["version"],
               "releases": [item[1] for item in releases]}
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(catalog, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"active": catalog["active"], "revision": releases[0][1]["revision"],
                      "count": len(releases)}))


if __name__ == "__main__":
    main()
