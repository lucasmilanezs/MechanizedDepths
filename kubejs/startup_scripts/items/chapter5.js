console.info('Registering Chapter 5 Items');
// CHAPTER 5

// ORES

// METALS 

// MOBGRINDIUM INGOT (kubejs:mobgrindium_ingot)
StartupEvents.registry('item', event => {
  event.create('mobgrindium_ingot')
    .displayName('Mobgrindium Ingot')
    .texture('custom:item/mob_grindium')
});

// ALLOYS

// DUSTS

// CRYSTALS

// SOUL GRIT + ASHEN REMNANT (custom:soul_grit), (custom:ashen_remnant)
StartupEvents.registry('item', event => {
  event.create('soul_grit')
    .displayName('Soul Grit')
    .texture('custom:item/soul_grit')

  event.create('ashen_remnant')
    .displayName('Ashen Remnant')
    .tooltip([
      Text.of('§7Some ashes still whisper. Not all that burned stayed silent.').italic()
    ])
    .texture('custom:item/ashen_remnant')
    
// CRUSHED ENDSTONE + RESONANT DUST (custom:crushed_endstone), (custom:resonant_dust)
  event.create('crushed_endstone')
    .displayName('Crushed Endstone')
    .texture('custom:item/crushed_endstone')

  event.create('resonant_dust')
    .displayName('Resonant Dust')
    .tooltip([
      Text.of('§7In certain grains of dust, echoes from other worlds can still be heard.').italic()
    ])
    .texture('custom:item/resonant_dust')
})

// CORES

// CIRCUITS/ELECTRONICS

// AGONY MODULE (kubejs:agony_module)
StartupEvents.registry('item', event => {
  event.create('agony_module')
    .displayName('Agony Module')
    .texture('custom:item/agony_module')
    .maxDamage(200)
    .unstackable()
});

// JOY MODULE (kubejs:joy_module)
StartupEvents.registry('item', event => {
  event.create('joy_module')
    .displayName('Joy Module')
    .texture('custom:item/joy_module')
    .maxDamage(200)
    .unstackable()

});

// DORMANT MEMORY CELL (kubejs:dormant_memory_cell)
StartupEvents.registry('item', event => {
  event.create('dormant_memory_cell')
    .displayName('Dormant Memory Cell')
    .tooltip([
      Text.of('§7For sure it will never awaken... right?').italic()
    ])
    .texture('custom:item/dormant_memory_celll')
    .glow(true)
});

// OVERTHINKER CELL (kubejs:overthinker_cell)
StartupEvents.registry('item', event => {
  event.create('overthinker_cell')
    .displayName('Overthinker Cell')
    .tooltip([
      Text.of('§7A cell that thinks too much.').italic()
    ])
    .texture('custom:item/overthinker_cell')
    .maxDamage(400)
    .unstackable()
});

// ORGANICS

// FLESH COMPOUND (kubejs:flesh_compound)
StartupEvents.registry('item', event => {
  event.create('flesh_compound')
    .displayName('Flesh Compound')
    .texture('custom:item/flesh_compound')
});

// SYNAPTIC INTERFACE (kubejs:synaptic_interface)
StartupEvents.registry('item', event => {
  event.create('synaptic_interface')
    .displayName('Synaptic Interface')
    .texture('custom:item/synaptic_interface')
    .glow(true)
});

// BLANK SYNAPTIC INTERFACE (kubejs:blank_synaptic_interface)
StartupEvents.registry('item', event => {
  event.create('blank_synaptic_interface')
    .displayName('Blank Synaptic Interface')
    .texture('custom:item/blank_synaptic_interface')
});

// INTERMEDIATE PRODUCTS