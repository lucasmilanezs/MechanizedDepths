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

// kubejs/startup_scripts/portable_crafting.js
StartupEvents.registry('item', event => {
  event.create('portable_crafting')
    .displayName('Portable Crafting Table')
    .maxDamage(32)              // durabilidade (32 usos)
    .texture('kubejs:item/portable_crafting');
});

// TORN PAGE (kubejs:torn_page)
StartupEvents.registry('item', event => {
  event.create('torn_page')
    .displayName('Torn Page')
    .texture('minecraft:item/paper');
});

//QUEST BOOK 1 (kubejs:quest_book)
StartupEvents.registry('item', event => {
  event.create('quest_book_1')
    .displayName('Quest Book')
    .texture('custom:item/quest_book_1');
});

// QUEST BOOK 2 (kubejs:quest_book_2)
StartupEvents.registry('item', event => {
  event.create('quest_book_2')
    .displayName('Book of Mind Architecture')
    .texture('custom:item/quest_book_2');
});

// QUEST BOOK 3 (kubejs:quest_book_3)
StartupEvents.registry('item', event => {
  event.create('quest_book_3')
    .displayName('Book of Perpetual Execution')
    .texture('custom:item/quest_book_3');
});

// QUEST BOOK 4 (kubejs:quest_book_4)
StartupEvents.registry('item', event => {
  event.create('quest_book_4')
    .displayName('Book of the Waking Machine')
    .texture('custom:item/quest_book_4');
});

// QUEST BOOK 5 (kubejs:quest_book_5)
StartupEvents.registry('item', event => {
  event.create('quest_book_5')
    .displayName('Book of Flower, Blood & Veil')
    .texture('custom:item/quest_book_5');
});




















