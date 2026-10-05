# Packwiz mod sides

`packaging/packwiz/mods/*.pw.toml` is the source of truth for mod sides.
`packaging/tools/build_pack.py` copies those files and runs `packwiz refresh`
to generate `index.toml`. The index lists metafiles; the installer reads
each metafile's `side` when invoked with `-s client` or `-s server`.
Do not edit a generated index directly.

Use `client` for UI, rendering, and client-only libraries. Use `both` for
mods needed on the dedicated server and also included in client installs,
including server utilities for integrated worlds and local editing. This
build has no `server`-only mods. The two root resourcepacks are client-only.

The tested temporary server payload omitted AppleSkin. Keep it client-only
until this exact Forge/JAR combination is validated on the dedicated server.
Its client HUD still works, but saturation and exhaustion values may be less
accurate without the server component.

Some UI-related mods intentionally remain `both`:

- Jade's server installation enables additional information providers.
- JEIOres explicitly needs both sides to exchange worldgen data.
- JEI is a mandatory `BOTH` dependency of Recipe Machine Stages in this pack.
- Cloth Config is a mandatory `BOTH` dependency of AE2 Wireless Terminals,
  Custom Machinery, and Powah in this pack.

Review Forge `META-INF/mods.toml` mandatory dependencies before changing a
side. Also review disabled metadata: it is excluded today but may be enabled
later. CurseForge exports cannot retain packwiz side selection, so use the
packwiz installer for the side-filtered playtest server.

References: [packwiz metafile sides](https://packwiz.infra.link/reference/pack-format/mod-toml/),
[packwiz server installer](https://packwiz.infra.link/tutorials/installing/packwiz-installer/),
[AppleSkin](https://www.curseforge.com/minecraft/mc-mods/appleskin),
[Jade](https://www.curseforge.com/minecraft/mc-mods/jade),
[JEIOres](https://www.curseforge.com/minecraft/mc-mods/jeiores).