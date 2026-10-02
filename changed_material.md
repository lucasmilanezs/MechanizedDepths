# Asset origins and modifications

[Back to the pack README](readme.md)

Mechanized Depths includes original artwork, adapted sprites, and visual references from other projects. This page credits those projects and explains how their work contributes to the pack. Original project work is covered by the [MIT license](LICENSE); third-party material retains its authorship and upstream terms.

## Original artwork

Most of the pack's original pixel art are original and created by me, including the [profile icon](profileImage/discord_logo_final.png) and [menu landscape](kubejs/assets/custom/textures/gui/menu/paisagem-mecha.png). Sprites are drawn or finalized in Aseprite, with Photopea or Krita used where needed. 3D logos and minecraft-like titles are all made in Blockbench, using the minecraft tittle feature.

Custom items, machines, fluids, and interface elements combine original artwork with the adaptations credited below.

## Sources and adaptations

| Source | License or terms | Contribution to the pack |
| --- | --- | --- |
| [Create / The Creators of Create](https://github.com/Creators-of-Create/Create) | [MIT for code; All Rights Reserved for assets](https://github.com/Creators-of-Create/Create/blob/mc1.20.1/dev/LICENSE.md). | GUI, item, and icon elements inform reconstructed shapes and silhouettes, adapted to maintain visual consistency with Create's machinery. |
| [Applied Energistics 2](https://github.com/AppliedEnergistics/Applied-Energistics-2), including artwork by Ridanisaurus Rid and AlgorithmX2 et al | [CC BY-NC-SA 3.0 for textures and models](https://github.com/AppliedEnergistics/Applied-Energistics-2/blob/forge/v15.4.10/README.md#license). | Circuit and processor visuals are adapted into custom components, with altered motifs and compositions that connect them to AE2's visual language. |
| [Ender IO / Team Ender IO](https://github.com/Team-EnderIO/EnderIO/tree/1.20.1) | [CC0 1.0](https://github.com/Team-EnderIO/EnderIO/blob/1.20.1/LICENSE.txt). | Machine faces, parts, and fragments are reused or adapted into custom machines. Some faces remain unchanged; others are combined with pack artwork. |
| [Tinkers' Construct / SlimeKnights](https://github.com/SlimeKnights/TinkersConstruct/tree/1.20.1) | [MIT](https://github.com/SlimeKnights/TinkersConstruct/blob/1.20.1/LICENSE). | Tool-part templates are recolored with custom material palettes. The bone handle sprite is also reused in the pack's [Tetra](https://github.com/mickelus/tetra) integration. |
| [Industrial Foregoing / Buuz135](https://github.com/InnovativeOnlineIndustries/Industrial-Foregoing/tree/1.20), with textures credited upstream to CyanideX and the Unity team | [MIT mod license](https://github.com/InnovativeOnlineIndustries/Industrial-Foregoing/blob/1.20/LICENSE); upstream artwork credits also apply. | The plastic sprite is reused unchanged for the pack's plastic item. |
| [PneumaticCraft: Repressurized / Team Pneumatic](https://github.com/TeamPneumatic/pnc-repressurized/tree/1.20.1) | [GPLv3](https://github.com/TeamPneumatic/pnc-repressurized/blob/1.20.1/README.md#licensing-information). | A pressure-chamber wall texture is reused as the options-menu background. |
| [Hexerei / JoeFoxe](https://github.com/JoeFoxe/Hexerei-1.19/tree/1.20.1) | MIT, as declared by the installed 0.4.2.3 release. | The water texture is repurposed for the aqueous organic solvent item, with its visual content unchanged. |
| [Custom Machinery / Frinn38](https://github.com/Frinn38/Custom-Machinery) | LGPLv3, as declared by the installed mod. | GUI dimensions inform custom layouts. The stone-generator example model uses native mod and vanilla texture references. Custom machine visuals build on those layouts with pack artwork. |
| [Minecraft / Mojang and Microsoft](https://www.minecraft.net/) | [Minecraft usage guidelines](https://www.minecraft.net/en-us/usage-guidelines). | Vanilla proportions, block colors, and visual conventions inform sprite design. Models also reference native game textures. |
| [OpenGameArt](https://opengameart.org/) and [0x72](https://0x72.itch.io/) | CC0 or MIT, according to the individual template. | Pixel-grid guides are used for spacing and alignment. |

### Examples of reused files

The examples below show how specific upstream assets are used in the pack. Local filenames in the Ender IO rows are relative to `kubejs/assets/custom/textures/block/`; their source filenames are relative to `assets/enderio/textures/block/`.

| Local asset | Original asset | Adaptation |
| --- | --- | --- |
| `alloy_maw_bottom.png` | Ender IO: `soul_machine_bottom.png` | Renamed; image unchanged. |
| `neural_agonizer_bottom.png` | Ender IO: `soul_machine_bottom.png` | Renamed; image unchanged. |
| `codex_crucible_back.png` | Ender IO: `soul_machine_back.png` | Renamed; image unchanged. |
| `enhaced_machine_bottom.png` | Ender IO: `enhanced_machine_bottom.png` | Renamed; image unchanged. |
| `enhaced_machine_top.png` | Ender IO: `enhanced_machine_top.png` | Renamed; image unchanged. |
| Tetra single and double bone-handle overrides | Tinkers' Construct: `tool_handle_bone.png` | Copied unchanged into both handle overrides. |
| `custom/textures/item/plastic.png` | Industrial Foregoing: `textures/item/plastic.png` | Reused unchanged. |
| `custom/textures/gui/options_background.png` | PneumaticCraft: `pressure_chamber_wall.png` | Reused unchanged as a menu background. |
| `custom/textures/item/aqueous_organic_solvent.png` | Hexerei: `textures/block/water_still.png` | Repurposed for an item; pixels unchanged. |

The last three local paths are relative to `kubejs/assets/`. The neural agonizer bottom is also included in the custom OpenLoader resourcepack. Tinkers' generated textures are under `config/openloader/resources/TinkersConstructGeneratedPartTextures/`, alongside palettes and material definitions for diamond, obsidian, brass, infused iron, netherite, refined glowstone, and refined obsidian.

## Included resourcepacks

Both packs are included unchanged through OpenLoader. Packwiz also references their official CurseForge downloads, keeping the original projects available alongside the pack's overrides.

| Resourcepack | Author and original project | License |
| --- | --- | --- |
| AppliedEnergistics2-TexturesBackport | Gelitvecz, [official download](https://www.curseforge.com/minecraft/texture-packs/ae2-texturesbackport/files/6797920), based on [AE2](https://github.com/AppliedEnergistics/Applied-Energistics-2). | [CC BY-NC-SA 4.0](https://www.curseforge.com/minecraft/texture-packs/ae2-texturesbackport); the project also credits AE2's original artwork under CC BY-NC-SA 3.0. |
| Suren's FTB Quests | Suren, [official download](https://www.curseforge.com/minecraft/texture-packs/surens-ftb-quests/files/6385068), providing custom visuals for [FTB Quests](https://github.com/FTBTeam/FTB-Quests). | [All Rights Reserved](https://www.curseforge.com/minecraft/texture-packs/surens-ftb-quests). |

## Respect for original creators

This project is made with respect for the artists and developers whose work helps it exist. There is no intention to disrespect their work or present any third-party asset as my own.

Adaptations expand on existing designs, maintain visual consistency between systems, or use those designs as inspiration. Reused material remains credited to its original creators. These assets are used and distributed within the modpack ecosystem, rather than offered as a separate asset collection in any other project, and the original mods and resourcepacks are supplied alongside the derived material, **always**.

This doc can be outdated or incomplete sometimes (kinda hard to keep track of everything ;-;), so if any Author that had his work used as inspiration, reference or directly modified, and currently isn't mentioned here, please let me know!

Attribution and adaptation do not transfer ownership or replace the authors' terms. If a creator has a concern about how their work is used or credited, please reach out through [Discord](https://discord.gg/9zPQQ9Ezse) or [GitHub Issues](https://github.com/lucasmilanezs/MechanizedDepths/issues). I am happy to correct credits, revise an adaptation, or remove material when appropriate.

## AI-generated placeholders

**Every AI-generated artistic asset present in a playable build is temporary.** This applies to all artwork, including chapter titles, backgrounds, decorative images, and any other visual element.

These assets are concept mocks, placeholders, or replaceable prototypes used to explore ideas during development. None is intended to remain as permanent artwork in the pack. They will be replaced with artwork created by me or other artists, including commissioned work, as development progresses.

Last updated: **2026-10-02** · Maintained by **Lucas Milanez Spinosa**.
