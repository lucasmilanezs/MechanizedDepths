StartupEvents.registry('block', event => {
  event.create('vivid_infused_stone')
    .displayName('Vivid Infused Stone')
    .textureAll('custom:block/vivid_infused_stone') 
    .soundType('stone')
    .mapColor('stone')
    .hardness(1.5)
    .resistance(6.0);
});

StartupEvents.registry('block', event => {
  event.create('vitrified_obsidian')
    .displayName('Vitrified Obsidian')
    .textureAll('custom:block/vitrified_obsidian') 
    .soundType('glass')
    .mapColor('black')
    .hardness(1.7)
    .resistance(8.0)
    .defaultCutout()
});

StartupEvents.registry('block', event => {
  event.create('blazing_composite')
    .displayName('Blazing Composite')
    .material('stone')
    .requiresTool(true)
    .hardness(5.0)
    .resistance(6.0)
    .lightLevel(10)
    .textureAll('custom:block/blazing_composite');

  event.create('entropic_mycelite')
    .displayName('Entropic Mycelite')
    .material('stone')
    .requiresTool(true)
    .hardness(6.0)
    .resistance(8.0)
    .lightLevel(12)
    .texture(Direction.UP, 'custom:block/entropic_mycelite')
    .texture(Direction.DOWN, 'custom:block/entropic')
    .texture(Direction.NORTH, 'custom:block/entropic_mycelite_side')
    .texture(Direction.SOUTH, 'custom:block/entropic_mycelite_side')
    .texture(Direction.EAST,  'custom:block/entropic_mycelite_side')
    .texture(Direction.WEST,  'custom:block/entropic_mycelite_side');

  event.create('aetherforged_cinderblock')
    .displayName('Aetherforged Cinderblock')
    .material('stone')
    .requiresTool(true)
    .hardness(8.0)
    .resistance(10.0)
    .lightLevel(13)
    .textureAll('custom:block/aetherforged_cinderblock');

  event.create('echo_fused_obsidianite')
    .displayName('Echo-Fused Obsidianite')
    .material('stone')
    .requiresTool(true)
    .hardness(10.0)
    .resistance(12.0)
    .lightLevel(14)
    .texture(Direction.UP, 'custom:block/echo_fused_obsidianite_top')
    .texture(Direction.DOWN, 'custom:block/echo_fused_obsidianite_top')
    .texture(Direction.EAST, 'custom:block/echo_fused_obsidianite')
    .texture(Direction.WEST, 'custom:block/echo_fused_obsidianite')
    .texture(Direction.NORTH, 'custom:block/echo_fused_obsidianite')
    .texture(Direction.SOUTH, 'custom:block/echo_fused_obsidianite');
});

// FACILITY CASING
StartupEvents.registry('block', event => {
  event.create('facility_casing')
    .displayName('Facility Casing')
    .material('metal')
    .requiresTool(true)
    .hardness(5.0)
    .resistance(6.0)
    .soundType('metal')
    .textureAll('custom:block/facility_casing');
});

// FACILITY GLASS
StartupEvents.registry('block', event => {
  event.create('facility_glass')
    .displayName('Facility Glass')
    .textureAll('custom:block/facility_glass') 
    .soundType('glass')
    .mapColor('black')
    .hardness(1.7)
    .resistance(8.0)
    .defaultCutout()
});

// REFINED CRAFTING TABLE
StartupEvents.registry('block', event => {
  event.create('refined_crafting_table')
    .displayName('Refined Crafting Table')
    .material('metal')
    .requiresTool(true)
    .hardness(2.5)
    .resistance(8.0)
    .texture(Direction.UP,'custom:block/refined_crafting_table_top')
    .texture(Direction.DOWN,'custom:block/refined_crafting_table_top')
    .texture(Direction.NORTH,'custom:block/refined_crafting_table_front')
    .texture(Direction.SOUTH,'custom:block/refined_crafting_table_front')
    .texture(Direction.EAST,'custom:block/refined_crafting_table_front')
    .texture(Direction.WEST,'custom:block/refined_crafting_table_front')
});

// kubejs/startup_scripts/packed_gravel.js
StartupEvents.registry('block', event => {
  event.create('packed_gravel')
    .displayName('Packed Gravel')
    .textureAll('custom:block/packed_gravel')
    .soundType('gravel')
    .mapColor('gray')
    .hardness(1.5)
    .resistance(6.0)
});

// ---------------------------
// Chalcopyrite (Copper)
// ---------------------------
StartupEvents.registry('block', event => {
  event.create('chalcopyrite_ore')
    .displayName('Chalcopyrite Ore')
    .textureAll('custom:block/chalcopyrite_ore')
    .soundType('stone')
    .mapColor('yellow')
    .hardness(1.0)
    .resistance(2.0)
});

StartupEvents.registry('block', event => {
  event.create('chalcopyrite_ore_deepslate')
    .displayName('Chalcopyrite Ore Deepslate')
    .textureAll('custom:block/chalcopyrite_ore_deepslate')
    .soundType('stone')
    .mapColor('dark_gray')
    .hardness(2.0)
    .resistance(4.0)
});


// ---------------------------
// Cassiterite (Tin)
// ---------------------------
StartupEvents.registry('block', event => {
  event.create('cassiterite_ore')
    .displayName('Cassiterite Ore')
    .textureAll('custom:block/cassiterite_ore')
    .soundType('stone')
    .mapColor('light_gray')
    .hardness(1.0)
    .resistance(2.0)
});

StartupEvents.registry('block', event => {
  event.create('cassiterite_ore_deepslate')
    .displayName('Cassiterite Ore Deepslate')
    .textureAll('custom:block/cassiterite_ore_deepslate')
    .soundType('stone')
    .mapColor('dark_gray')
    .hardness(2.0)
    .resistance(4.0)
});


// ---------------------------
// Bauxite (Aluminum)
// ---------------------------
StartupEvents.registry('block', event => {
  event.create('bauxite_ore')
    .displayName('Bauxite Ore')
    .textureAll('custom:block/bauxite_ore')
    .soundType('stone')
    .mapColor('orange')
    .hardness(1.0)
    .resistance(2.0)
});

StartupEvents.registry('block', event => {
  event.create('bauxite_ore_deepslate')
    .displayName('Bauxite Ore Deepslate')
    .textureAll('custom:block/bauxite_ore_deepslate')
    .soundType('stone')
    .mapColor('dark_gray')
    .hardness(2.0)
    .resistance(4.0)
});


// ---------------------------
// Galena (Lead)
// ---------------------------
StartupEvents.registry('block', event => {
  event.create('galena_ore')
    .displayName('Galena Ore')
    .textureAll('custom:block/galena_ore')
    .soundType('stone')
    .mapColor('gray')
    .hardness(1.0)
    .resistance(2.0)
});

StartupEvents.registry('block', event => {
  event.create('galena_ore_deepslate')
    .displayName('Galena Ore Deepslate')
    .textureAll('custom:block/galena_ore_deepslate')
    .soundType('stone')
    .mapColor('dark_gray')
    .hardness(2.0)
    .resistance(4.0)
});


// ---------------------------
// Pentlandite (Nickel)
// ---------------------------
StartupEvents.registry('block', event => {
  event.create('pentlandite_ore')
    .displayName('Pentlandite Ore')
    .textureAll('custom:block/pentlandite_ore')
    .soundType('stone')
    .mapColor('brown')
    .hardness(1.0)
    .resistance(2.0)
});

StartupEvents.registry('block', event => {
  event.create('pentlandite_ore_deepslate')
    .displayName('Pentlandite Ore Deepslate')
    .textureAll('custom:block/pentlandite_ore_deepslate')
    .soundType('stone')
    .mapColor('dark_gray')
    .hardness(2.0)
    .resistance(4.0)
});


// ---------------------------
// Argentite (Silver)
// ---------------------------
StartupEvents.registry('block', event => {
  event.create('argentite_ore')
    .displayName('Argentite Ore')
    .textureAll('custom:block/argentite_ore')
    .soundType('stone')
    .mapColor('light_gray')
    .hardness(1.0)
    .resistance(2.0)
});

StartupEvents.registry('block', event => {
  event.create('argentite_ore_deepslate')
    .displayName('Argentite Ore Deepslate')
    .textureAll('custom:block/argentite_ore_deepslate')
    .soundType('stone')
    .mapColor('dark_gray')
    .hardness(2.0)
    .resistance(4.0)
});


// ---------------------------
// Gold-Bearing Quartz (Gold)
// ---------------------------
StartupEvents.registry('block', event => {
  event.create('gold_quartz_ore')
    .displayName('Gold Quartz Ore')
    .textureAll('custom:block/gold_quartz_ore')
    .soundType('stone')
    .mapColor('yellow')
    .hardness(1.0)
    .resistance(2.0)
});

StartupEvents.registry('block', event => {
  event.create('gold_quartz_ore_deepslate')
    .displayName('Gold Quartz Ore Deepslate')
    .textureAll('custom:block/gold_quartz_ore_deepslate')
    .soundType('stone')
    .mapColor('dark_gray')
    .hardness(2.0)
    .resistance(4.0)
});


// ---------------------------
// Hematite (Iron)
// ---------------------------
StartupEvents.registry('block', event => {
  event.create('hematite_ore')
    .displayName('Hematite Ore')
    .textureAll('custom:block/hematite_ore')
    .soundType('stone')
    .mapColor('red')
    .hardness(1.0)
    .resistance(2.0)
}); 

StartupEvents.registry('block', event => {
  event.create('hematite_ore_deepslate')
    .displayName('Hematite Ore Deepslate')
    .textureAll('custom:block/hematite_ore_deepslate')
    .soundType('stone')
    .mapColor('dark_gray')
    .hardness(2.0)
    .resistance(4.0)
});
