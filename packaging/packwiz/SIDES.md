# Packwiz mod sides

`packaging/packwiz/mods/*.pw.toml` is the source of truth for mod sides.
`packaging/tools/build_pack.py` copies those files and runs `packwiz refresh`
to generate `index.toml`. The index lists metafiles; the installer reads
each metafile's `side` when invoked with `-s client` or `-s server`.
Do not edit a generated index directly.

Use `client` for UI, rendering, and client-only libraries, `server` for
dedicated-server utilities, and `both` when gameplay, network data, or a
mandatory dependency needs the mod on each physical side. The two root
resourcepacks are client-only.

Some UI-related mods intentionally remain `both`:

- AppleSkin syncs accurate saturation and exhaustion from the server.
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