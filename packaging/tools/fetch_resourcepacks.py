"""Fetch hash-locked build inputs from an HTTP directory or release assets.

The origin must expose each file with the exact filename from
packaging/local-resourcepacks.json. Bytes are verified before the builder uses
them; this command does not modify game source or Git state.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
from urllib.parse import quote
from urllib.request import urlopen


PACKAGING = Path(__file__).resolve().parents[1]


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--base-url", required=True,
                        help="HTTPS directory URL ending at the asset collection")
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    if not args.base_url.startswith("https://"):
        parser.error("build inputs must come from HTTPS")

    rules = json.loads((PACKAGING / "local-resourcepacks.json").read_text(encoding="utf-8"))
    entries = [*rules["resourcepacks"], *rules["openloader_required"]]
    names = [item["filename"] for item in entries]
    if len(names) != len(set(names)):
        parser.error("duplicate resourcepack filename")
    args.output.mkdir(parents=True, exist_ok=True)
    for entry in entries:
        name = entry["filename"]
        if Path(name).name != name or name in (".", ".."):
            parser.error(f"invalid resourcepack filename: {name}")
        target = args.output / name
        if target.exists():
            digest = hashlib.sha256(target.read_bytes()).hexdigest()
            if digest == entry["sha256"]:
                print(f"verified existing: {name}")
                continue
            parser.error(f"existing resourcepack hash mismatch: {target}")
        url = args.base_url.rstrip("/") + "/" + quote(name)
        with urlopen(url, timeout=90) as response:
            payload = response.read()
        digest = hashlib.sha256(payload).hexdigest()
        if digest != entry["sha256"]:
            parser.error(f"download hash mismatch: {name}")
        target.write_bytes(payload)
        print(f"downloaded and verified: {name}")


if __name__ == "__main__":
    main()
