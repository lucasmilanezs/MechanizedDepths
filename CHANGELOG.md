# Changelog

Controlled release history starts after the catalog migration.
`MechanizedDepths(pt1.0.0).zip` and `mechanizedDepths-2.0.0p.zip` are legacy
reference artifacts; their names do not follow the new version policy.

## pt-2.2.0

- Drafting Extensions (TECH) is now an actual chapter: input milestones
  unlock the tools and quality-of-life items built from them.
- Those items now cost their milestones, mostly on plates instead of ingots and other bits and bobs.
- Chapter 6: Machine Internals and Calibrated Internals (Flux Crafter) replace
  the RF super coil and resonator in Thermal machines. Integrated Dynamics
  joins the chapter: Menril processing (squeezers, drying basins, Menril Resin
  in the IE Squeezer) and its logic network.
- Thermal gears use their standard recipes again; the Machine Frame takes
  steel plates and crystallized Menril.
- Nature's Aura Tokens of Anger and Fear come from nether aura bottles, gold
  leaf and Vital Herbs ingredients, two per ritual.
- Ender IO Dormant Memory Cell slicing uses AE2 logic processors.
- New mods: Ender Storage, Akashic Tome, Thin Pillars. Starlight removed (the
  pt-2.1 hotfix).
- Removed leftover test recipes (Alloy Maw iron, Wafer Processing Facility
  diamond).

## pt-2.1.0

- Chapter 8 research: Chemistry Tech Cards unlock the Chemical Infuser,
  Crystallizer and Dissolution Chamber, then ilmenite processing.
- Titanium chemistry reworked: ilmenite is leached with hydrogen chloride (no
  more Acidic Flux), magnesium chloride recycles into magnesium and chlorine,
  ferrous solution crystallizes into iron dust.
- New companion mod, Mechanized Additions: fluid and chemical quest steps
  complete by looking at the machine or tank that holds them, and clicking the
  step opens its recipes in JEI. No more bucket proxies.
- Recipes accept tagged ingredients across mods; unification prefers Thermal
  Extra, Immersive Engineering and Immersive Posts outputs.
- Hammers: broken Tetra hammers no longer work in crafting; hand rods added;
  Ore Sorting Bench checks the hammer.
- Tetra: slimesteel gains Slimy (every third hit stuns, costs durability).
- Refined Quartz Plate changes texture with stack size, like Thermal plates.
- Quests for removed mods (SilentGear, Apotheosis) hidden; JEI client settings
  are now each player's own.
- Known issue: with Hexerei installed, JEI still lists the chapter 8 machine
  recipes locked by research (crafting stays locked). Fixed upstream; arrives
  with the next Recipe Machine Stages release.

## pt-2.0.0 — in preparation

- Packwiz distribution definition built from tracked game sources.
- Local caches and player preferences excluded from game overrides.
- Active and disabled mod inventory audited for the first controlled build.
- FancyMenu starts in Modpack Mode without the editing bar in new installs.
- OpenLoader injects the required current Suren FTB Quests and AETextures
  Backport resourcepacks; the distribution no longer needs GlobalPacks.
