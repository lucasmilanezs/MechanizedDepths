// CAST CHILLER TEST:
StartupEvents.registry('item', event => {
  event.create('chiller_plate_cast')
    .texture('kubejs:item/chiller_plate_cast')
    .displayName('Chiller Plate Cast')
});

// Incomplete Obsidian Core (custom:incomplete_obsidian_core)
StartupEvents.registry('item', event => {
  event.create('incomplete_obsidian_core')
    .displayName('Incomplete Obsidian Core')
    .tooltip([
      Text.of('§8Um núcleo em formação...').italic()
    ])
    .texture('custom:item/incomplete_obsidian_core')
})

// ========================= Tools =========================
// Stone Hammer (custom:stone_hammer)
// Metal Hammer (custom:metal_hammer)
// Diamond Hammer (custom:diamond_hammer)
StartupEvents.registry('item', event => {
  event.create('stone_hammer')
    .displayName('Stone Hammer')
    .maxDamage(64)
    .tag('forge:tools/hammers')
    .unstackable();

  event.create('metal_hammer')
    .displayName('Metal Hammer')
    .maxDamage(256)
    .tag('forge:tools/hammers')
    .unstackable();

  event.create('diamond_hammer')
    .displayName('Diamond Hammer')
    .maxDamage(1024)
    .tag('forge:tools/hammers')
    .unstackable();
});

// ========================= Special / Other =========================

// PLACEHOLDER SUB (custom:placeholder_sub)
StartupEvents.registry('item', event => {
  event.create('placeholder_sub')
    .displayName('Placeholder Sub')
    .texture('custom:item/placeholder_sub')
    .maxStackSize(64)
})

// INCOMPLETE CRUCIBLE (kubejs:incomplete_crucible)
StartupEvents.registry('item', event => {
  event.create('incomplete_crucible')
    .displayName('Incomplete Crucible')
    .texture('custom:item/incomplete_crucible')
});

// `startup_scripts/blocks.js`
StartupEvents.registry('block', event => {
  event.create('melted_blaze_metal_block')
    .displayName('Melted Blaze Metal')
    .lightLevel(14)
});

// INCOMPLETE SILICON WAFER (kubejs:incomplete_silicon_wafer)
StartupEvents.registry('item', event => {
  event.create('incomplete_silicon_wafer')
    .displayName('Incomplete Silicon Wafer')
    .texture('custom:item/incomplete_silicon_wafer');
});





