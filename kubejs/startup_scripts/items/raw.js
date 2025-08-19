// Runic Stone (custom:runic_stone)
StartupEvents.registry('item', event => {
  event.create('runic_stone')
    .displayName('Runic Stone')
    .tooltip("A stone inscribed with glowing memories")
    .texture('custom:item/runic_stone') 
    .maxStackSize(64);
});

// OBSIDIANITE
StartupEvents.registry('item', event => {
  event.create('obsidianite')
    .displayName('Obsidianite')
    .texture('custom:item/obsidianite')

});

// FERRISIL SLAG (kubejs:ferrisil_slag)
StartupEvents.registry('item', event => {
  event.create('ferrisil_slag')
    .displayName('Ferrisil slag')
    .texture('custom:item/ferrisil_slag');
});

// VITROCLASTIC SLAG (kubejs:vitroclastic_slag)
StartupEvents.registry('item', event => {
  event.create('vitroclastic_slag')
    .displayName('Vitroclastic Slag')
    .texture('custom:item/vitroclastic_slag');
});

// LANTHANIC CRYSTAL (kubejs:lanthanic_crystal)
StartupEvents.registry('item', event => {
  event.create('lanthanic_crystal')
    .displayName('Lanthanic Crystal')
    .texture('custom:item/lanthanic_crystal');
});

// RAW CHROME (kubejs:raw_chrome)
StartupEvents.registry('item', event => {
  event.create('raw_chrome')
    .displayName('Raw Chrome')
    .texture('custom:item/raw_chrome');
});

// SILICON CRYSTAL SEED (kubejs:silicon_crystal_seed)
StartupEvents.registry('item', event => {
  event.create('silicon_crystal_seed')
    .displayName('Silicon Crystal Seed')
    .texture('custom:item/silicon_crystal_seed');
});