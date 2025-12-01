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

// ROUTINE TABLET (kubejs:routine_tablet)
StartupEvents.registry('item', event => {
  event.create('rt:routine_tablet')
    .displayName('Routine Tablet')
    .maxStackSize(1)
});

// STEEL SAWBLADE (kubejs:sawblade_steel)
StartupEvents.registry('item', event => {
  event.create('sawblade_steel')
    .displayName('Steel Sawblade')
    .texture('custom:item/sawblade_steel')
    .unstackable()
    .maxDamage(32);
});

// DARK STEEL SAWBLADE (kubejs:sawblade_dark_steel)
StartupEvents.registry('item', event => {
  event.create('sawblade_dark_steel')
    .displayName('Dark Steel Sawblade')
    .texture('custom:item/sawblade_dark_steel')
    .unstackable()
    .maxDamage(64);
});

//DIAMOND TIPPED SAWBLADE (kubejs:sawblade_diamond)
StartupEvents.registry('item', event => {
  event.create('sawblade_diamond')
    .displayName('Diamond-Tipped Sawblade')
    .texture('custom:item/sawblade_diamond')
    .unstackable()
    .maxDamage(96);
});

//CARBIDE TIPPED SAWBLADE (kubejs:sawblade_carbide)
StartupEvents.registry('item', event => {
  event.create('sawblade_carbide')
    .displayName('Carbide-Tipped Sawblade')
    .texture('custom:item/sawblade_carbide')
    .unstackable()
    .maxDamage(128);
});

//ELEMENTIUM SAWBLADE (kubejs:sawblade_elementium)
StartupEvents.registry('item', event => {
  event.create('sawblade_elementium')
    .displayName('Elementium Sawblade')
    .texture('custom:item/sawblade_elementium')
    .unstackable()
    .maxDamage(128);
});

//MYTHRIL SAWBLADE (kubejs:sawblade_mythril)
StartupEvents.registry('item', event => {
  event.create('sawblade_mythril')
    .displayName('Mythril Sawblade')
    .texture('custom:item/sawblade_mythril')
    .unstackable()
    .maxDamage(256);
});

//TITANIUM PLATE
StartupEvents.registry('item', event => {
  event.create('plate_titanium')
    .displayName('Titanium Plate')
    .texture('custom:item/plate_titanium');
});

// TITANIUM ROD
StartupEvents.registry('item', event => {
  event.create('rod_titanium')
    .displayName('Titanium Rod')
    .texture('custom:item/rod_titanium');
});

// TITANIUM FRAME
StartupEvents.registry('item', event => {
  event.create('frame_titanium')
    .displayName('Titanium Frame')
    .texture('custom:item/frame_titanium');
});

//MECHANICAL HEART
StartupEvents.registry('item', event => {
  event.create('mechanical_heart')
    .displayName('Mechanical Heart')
    .texture('custom:item/mechanical_heart');
});

//CRYSTAL OF DEMONIC LOVE
StartupEvents.registry('item', event => {
  event.create('demonic_love')
    .displayName('Crystal of Demonic Love')
    .texture('custom:item/demonic_love');
});

// VOID TECH CARD
StartupEvents.registry('item', event => {
  event.create('void_tech_card')
    .displayName('Void Tech Card')
    .texture('custom:item/void_tech_card');
}); 

// VOID DATA
StartupEvents.registry('item', event => {
  event.create('void_data')
    .displayName('Void Data')
    .texture('custom:item/void_data');
});

// ROSE NEEDLE
StartupEvents.registry('item', event => {
  event.create('rose_needle')
    .displayName('Rose Needle')
    .texture('custom:item/rose_needle');
});

// TWINITE WIRE
StartupEvents.registry('item', event => {
  event.create('twinite_wire')
    .displayName('Twinite Wire')
    .texture('custom:item/twinite_wire');
});

// REFINED PLASTIC
StartupEvents.registry('item', event => {
  event.create('refined_plastic')
    .displayName('Refined Plastic')
    .texture('custom:item/refined_plastic');
});

//SOUL INFUSED COIL
StartupEvents.registry('item', event => {
  event.create('soul_infused_coil')
    .displayName('Soul Infused Coil')
    .texture('custom:item/soul_infused_coil');
});

//RAW CHALCOPYRITE
StartupEvents.registry('item', event => {
  event.create('chalcopyrite_raw')
    .displayName('Raw Chalcopyrite')
    .texture('custom:item/chalcopyrite_raw');
});

//RAW CASSITERITE
StartupEvents.registry('item', event => {
  event.create('cassiterite_raw')
    .displayName('Raw Cassiterite')
    .texture('custom:item/cassiterite_raw');
});

//RAW BAUXITE
StartupEvents.registry('item', event => {
  event.create('bauxite_raw')
    .displayName('Raw Bauxite')
    .texture('custom:item/bauxite_raw');
});

//RAW GALENA
StartupEvents.registry('item', event => {
  event.create('galena_raw')
    .displayName('Raw Galena')
    .texture('custom:item/galena_raw');
});

//RAW Pentlandite
StartupEvents.registry('item', event => {
  event.create('pentlandite_raw')
    .displayName('Raw Pentlandite')
    .texture('custom:item/pentlandite_raw');
});

//RAW ARGENTITE
StartupEvents.registry('item', event => {
  event.create('argentite_raw')
    .displayName('Raw Argentite')
    .texture('custom:item/argentite_raw');
});

//RAW GOLD-BEARING QUARTZ
StartupEvents.registry('item', event => {
  event.create('gold_quartz_raw')
    .displayName('Raw Gold-Bearing Quartz')
    .texture('custom:item/gold_quartz_raw');
});

//RAW HEMATITE
StartupEvents.registry('item', event => {
  event.create('hematite_raw')
    .displayName('Raw Hematite')
    .texture('custom:item/hematite_raw');
});