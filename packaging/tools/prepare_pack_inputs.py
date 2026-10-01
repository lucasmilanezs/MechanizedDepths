"""Stage the four reviewed resourcepack ZIPs for a technical release.

Copies bytes to ignored builds/pack-inputs-v1/ after checking the SHA-256
locks. This does not upload or change Git state.
"""

from __future__ import annotations

import argparse
import hashlib
import json
from pathlib import Path
import shutil


ROOT = Path(__file__).resolve().parents[2]
RULES = ROOT / "packaging/local-resourcepacks.json"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--source", type=Path, default=ROOT / "resourcepacks")
    parser.add_argument("--output", type=Path, default=ROOT / "builds/pack-inputs-v1")
    args = parser.parse_args()
    if args.output.exists():
        parser.error(f"output already exists: {args.output}")
    config = json.loads(RULES.read_text(encoding="utf-8"))
    entries = [*config["resourcepacks"], *config["openloader_required"]]
    checked = []
    for entry in entries:
        name = entry["filename"]
        if Path(name).name != name:
            parser.error(f"invalid filename: {name}")
        path = args.source / name
        if not path.is_file():
            parser.error(f"missing: {path}")
        digest = hashlib.sha256(path.read_bytes()).hexdigest()
        if digest != entry["sha256"]:
            parser.error(f"hash mismatch: {path}")
        checked.append((path, name, digest))
    args.output.mkdir(parents=True)
    for path, name, _ in checked:
        shutil.copyfile(path, args.output / name)
    (args.output / "SHA256SUMS.txt").write_text(
        "".join(f"{digest}  {name}\n" for _, name, digest in checked),
        encoding="utf-8",
    )
    print(json.dumps({"output": str(args.output), "assets": len(checked),
                      "bytes": sum((args.output / name).stat().st_size for _, name, _ in checked)}))


if __name__ == "__main__":
    main()
