// INDUSTRIAL FOREGOIN - TABLE CRAFTING RECIPES 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//RECIPE NAME

//====================CHANGED RECIPES==================

//PITY MACHINE FRAME
ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:machine_frame_pity' });
  event.shaped('industrialforegoing:machine_frame_pity', [
    'PEP',
    'WSW',
    'PWP'
  ], {
    S: 'enderio:ensouled_chassis',
    P: 'kubejs:organic_polymer_mesh',
    E: 'kubejs:emotionally_stable_circuit',
    W: '#minecraft:planks'
  });
});

//FLUID EXTRACTOR
ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:fluid_extractor' });
  event.shaped('industrialforegoing:fluid_extractor', [
    'LSL',
    'UPD',
    'LSL'
  ], {
    L: 'kubejs:laminated_alloy_plate',
    P: 'industrialforegoing:machine_frame_pity',
    D: 'create:mechanical_drill',
    S: '#forge:plates/steel',
    U: 'kubejs:redstone_component'
  });
});

//LATEX PROCESSING UNIT
ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:latex_processing_unit' });
  event.shaped('industrialforegoing:latex_processing_unit', [
    'LUL',
    'TPT',
    'LFL'
  ], {
    L: 'kubejs:laminated_alloy_plate',
    P: 'industrialforegoing:machine_frame_pity',
    T: 'mekanism:elite_fluid_tank',
    U: 'kubejs:redstone_component',
    F: 'thermal:machine_furnace'
  })
});

// DISSOLUTION CHAMBER
ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:dissolution_chamber' });
  event.shaped('industrialforegoing:dissolution_chamber', [
    'LCL',
    'TPM',
    'EGE'
  ], {
    L: 'industrialforegoing:plastic',
    P: 'industrialforegoing:machine_frame_pity',
    T: 'mekanism:ultimate_fluid_tank',
    C: 'ae2:sky_stone_chest',
    G: 'thermal:lumium_gear',
    E: 'enderio:energetic_alloy_ingot',
    M: 'create:mechanical_arm'
  })
});

// MOB SLAUGHTER FACTORY
ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:mob_slaughter_factory' });
  event.shaped('industrialforegoing:mob_slaughter_factory', [
    'PGP',
    'TSM',
    'ECE'
  ], {
    P: 'industrialforegoing:plastic',
    S: 'industrialforegoing:machine_frame_simple',
    T: 'mekanism:ultimate_fluid_tank',
    C: 'kubejs:redstone_component',
    G: 'thermal:lumium_gear',
    E: 'kubejs:mobgrindium_ingot',
    M: 'mob_grinding_utils:saw'
  })
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME