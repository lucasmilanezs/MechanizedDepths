"""Resolve named playtest tags and mutable release-family branch heads.

Tags `pt-X.Y.Z` identify named releases. Branches `release/pt-X` carry one
major version: every minor and patch of it is a tag on that branch, and
hotfixes are commits on it. Branches `release/pt-X.Y` are the legacy
per-minor families (until pt-2.1); they are frozen and keep the tags they
already contain.

A tag belongs to the legacy branch `release/pt-X.Y` when that branch exists
and contains it; otherwise to `release/pt-X`, which must contain it. A
family's latest tag uses its branch head as the deployed revision; earlier
tags remain historical snapshots.
"""

from __future__ import annotations

import argparse
import json
from pathlib import Path
import re
import subprocess


ROOT = Path(__file__).resolve().parents[2]
BRANCH = re.compile(r"^release/pt-(0|[1-9][0-9]*)(?:\.(0|[1-9][0-9]*))?$")
TAG = re.compile(r"^pt-(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)\.(0|[1-9][0-9]*)$")


def git(*args: str) -> str:
    return subprocess.check_output(["git", *args], cwd=ROOT, text=True).strip()


def contains(head: str, revision: str) -> bool:
    return subprocess.run(["git", "merge-base", "--is-ancestor", revision, head],
                          cwd=ROOT, check=False).returncode == 0


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--local-branches", action="store_true",
                        help="Resolve local release branches for an unpublished preview")
    args = parser.parse_args()

    # (major,) for release/pt-X, (major, minor) for legacy release/pt-X.Y.
    branches: dict[tuple[int, ...], tuple[str, str]] = {}
    branch_root = ("refs/heads/release/" if args.local_branches
                   else "refs/remotes/origin/release/")
    for line in git("for-each-ref", "--format=%(refname) %(objectname)",
                    branch_root).splitlines():
        ref, revision = line.split(" ", 1)
        name = ref.removeprefix("refs/heads/").removeprefix("refs/remotes/origin/")
        match = BRANCH.fullmatch(name)
        if match:
            family = tuple(int(part) for part in match.groups() if part is not None)
            branches[family] = (name, revision)

    tagged: dict[tuple[int, ...], list[tuple[tuple[int, int, int], str, str]]] = {}
    for name in git("for-each-ref", "--format=%(refname:short)", "refs/tags/pt-*").splitlines():
        match = TAG.fullmatch(name)
        if not match:
            continue
        parts = tuple(map(int, match.groups()))
        revision = git("rev-list", "-n", "1", name)
        legacy = branches.get(parts[:2])
        major = branches.get(parts[:1])
        if legacy and contains(legacy[1], revision):
            family = parts[:2]
        elif major and contains(major[1], revision):
            family = parts[:1]
        else:
            parser.error(f"tag {name} is not contained in release/pt-{parts[0]}"
                         f" or a legacy release/pt-{parts[0]}.{parts[1]}")
        tagged.setdefault(family, []).append((parts, name, revision))

    releases = []
    for family, (branch, head) in branches.items():
        family_tags = sorted(tagged.pop(family, []), reverse=True)
        if not family_tags:
            parser.error(f"release family has no named tag: {branch}")
        for index, (parts, name, tag_revision) in enumerate(family_tags):
            releases.append((parts, {"version": name,
                                     "revision": head if index == 0 else tag_revision,
                                     "tagRevision": tag_revision,
                                     "branch": branch}))
    if not releases:
        parser.error("no release/pt-X branches with pt-X.Y.Z tags found")
    releases.sort(key=lambda item: item[0], reverse=True)
    catalog = {"schema": 1, "active": releases[0][1]["version"],
               "releases": [item[1] for item in releases]}
    args.output.parent.mkdir(parents=True, exist_ok=True)
    args.output.write_text(json.dumps(catalog, indent=2) + "\n", encoding="utf-8")
    print(json.dumps({"active": catalog["active"],
                      "revision": releases[0][1]["revision"],
                      "count": len(releases)}))


if __name__ == "__main__":
    main()
