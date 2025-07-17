console.info('Registering Chapter 1 Items');

// CHAPTER 1

// ORES

// METALS 

// ALLOYS

// DUSTS

// CRYSTALS

// Runic Stone (custom:runic_stone)
StartupEvents.registry('item', event => {
  event.create('runic_stone')
    .displayName('Runic Stone')
    .tooltip("A stone inscribed with glowing memories")
    .texture('custom:item/runic_stone') 
    .maxStackSize(64);
});

// CORES

  // Precision Matrix Core (custom:precision_matrix_core)
StartupEvents.registry('item', event => {
  event.create('precision_matrix_core')
    .displayName('Precision Matrix Core')
    .texture('custom:item/precision_matrix')
    .glow(true)
    .unstackable();
});

// CIRCUITS/ELECTRONICS

// ORGANICS

// Living Timber (custom:living_timber)
StartupEvents.registry('item', event => {
    event.create('living_timber')
        .displayName('Living Timber')
        .tooltip('Timber infused with persistent memory')
        .texture('custom:item/living_timber') 
        .maxStackSize(64);
});

// INTERMEDIATE PRODUCTS
