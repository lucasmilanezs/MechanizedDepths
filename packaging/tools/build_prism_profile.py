"""Build a Prism bootstrap profile when the profile itself changes.

This is a manual, separately versioned asset. Named pack releases do not run
this command or rebuild the profile.
"""

from __future__ import annotations

import argparse
import hashlib
import io
import json
from pathlib import Path
import zipfile


BOOTSTRAP_SHA256 = "a8fbb24dc604278e97f4688e82d3d91a318b98efc08d5dbfcbcbcab6443d116c"
BOOTSTRAP_MAIN = "link.infra.packwiz.installer.bootstrap.Main"
PACK_TOML_URL = "https://lucasmilanezs.github.io/MechanizedDepths/playtest/pack.toml"
MINECRAFT_VERSION = "1.20.1"
FORGE_VERSION = "47.4.0"


def main() -> None:
    parser = argparse.ArgumentParser(description=__doc__)
    parser.add_argument("--bootstrap", required=True, type=Path)
    parser.add_argument("--profile-version", required=True)
    parser.add_argument("--output", required=True, type=Path)
    args = parser.parse_args()
    if not args.profile_version.startswith("v") or not args.profile_version[1:].isdigit():
        parser.error("profile version must be v followed by an integer")
    if args.output.exists():
        parser.error(f"output already exists: {args.output}")

    bootstrap = args.bootstrap.read_bytes()
    digest = hashlib.sha256(bootstrap).hexdigest()
    if digest != BOOTSTRAP_SHA256:
        parser.error(f"unexpected Packwiz bootstrap SHA-256: {digest}")
    with zipfile.ZipFile(io.BytesIO(bootstrap)) as jar:
        manifest = jar.read("META-INF/MANIFEST.MF").decode("utf-8", errors="replace")
        if f"Main-Class: {BOOTSTRAP_MAIN}" not in manifest:
            parser.error("Packwiz bootstrap JAR has an unexpected main class")

    instance_cfg = (
        "[General]\n"
        "ConfigVersion=1.3\n"
        "InstanceType=OneSix\n"
        "name=Mechanized Depths (Playtest)\n"
        "AutomaticJava=true\n"
        "OverrideCommands=true\n"
        "OverrideMemory=true\n"
        "MinMemAlloc=1024\n"
        "MaxMemAlloc=8192\n"
        f'PreLaunchCommand=\\"$INST_JAVA\\" -jar \\"$INST_MC_DIR/packwiz-installer-bootstrap.jar\\" -s client {PACK_TOML_URL}\n'
    )
    mmc_pack = {
        "formatVersion": 1,
        "components": [
            {"cachedName": "LWJGL 3", "cachedVersion": "3.3.1",
             "cachedVolatile": True, "dependencyOnly": True,
             "uid": "org.lwjgl3", "version": "3.3.1"},
            {"cachedName": "Minecraft", "cachedVersion": MINECRAFT_VERSION,
             "cachedRequires": [{"suggests": "3.3.1", "uid": "org.lwjgl3"}],
             "important": True, "uid": "net.minecraft", "version": MINECRAFT_VERSION},
            {"cachedName": "Forge", "cachedVersion": FORGE_VERSION,
             "cachedRequires": [{"equals": MINECRAFT_VERSION, "uid": "net.minecraft"}],
             "uid": "net.minecraftforge", "version": FORGE_VERSION},
        ],
    }
    profile_manifest = {
        "name": "Mechanized Depths (Playtest)",
        "profileVersion": args.profile_version,
        "channel": PACK_TOML_URL,
        "minecraft": MINECRAFT_VERSION,
        "forge": FORGE_VERSION,
        "packwizBootstrapVersion": "v0.0.3",
        "packwizBootstrapSha256": digest,
        "initialJavaMemoryMiB": 1024,
        "recommendedJavaMemoryMiB": 8192,
    }
    args.output.parent.mkdir(parents=True, exist_ok=True)
    with zipfile.ZipFile(args.output, "w", compression=zipfile.ZIP_DEFLATED) as archive:
        archive.writestr("instance.cfg", instance_cfg)
        archive.writestr("mmc-pack.json", json.dumps(mmc_pack, indent=2) + "\n")
        archive.writestr("profile-manifest.json", json.dumps(profile_manifest, indent=2) + "\n")
        archive.writestr("minecraft/packwiz-installer-bootstrap.jar", bootstrap)
    with zipfile.ZipFile(args.output) as archive:
        if archive.testzip() is not None:
            parser.error("generated Prism profile ZIP failed CRC validation")
    print(json.dumps({"profile": str(args.output),
                      "sha256": hashlib.sha256(args.output.read_bytes()).hexdigest()}))


if __name__ == "__main__":
    main()
