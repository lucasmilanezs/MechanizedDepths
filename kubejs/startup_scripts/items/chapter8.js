console.info('Registering Chapter 8 Items');
// CHAPTER 7

// ORES

// METALS 

// ALLOYS

// DUSTS

// CALCINED BLAZE COMPOSITE (kubejs:calcined_blaze_composite)
StartupEvents.registry('item', event => {
  event.create('calcined_blaze_composite')
    .displayName('Calcined Blaze Composite')
    .texture('custom:item/calcined_blaze_composite')
});


// CRYSTALS

// CORES

// CIRCUITS/ELECTRONICS

// ORGANICS

// INTERMEDIATE PRODUCTS

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


