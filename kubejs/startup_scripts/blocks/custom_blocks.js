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
