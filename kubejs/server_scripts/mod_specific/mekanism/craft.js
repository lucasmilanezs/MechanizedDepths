// MEKANISM - TABLE RECIPE CHANGES

//====================CUSTOM RECIPES==================

//====================CHANGED RECIPES==================

// STEEL CASING
ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:steel_casing' });
  event.shaped('mekanism:steel_casing', [
    'OGO',
    'GPG',
    'OGO'
  ], {
    O: 'mekanism:ingot_osmium',
    G: 'minecraft:black_stained_glass',
    P: 'kubejs:precision_matrix_core' 
    });
});

// METALLURGIC INFUSER
ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:metallurgic_infuser' });
  event.shaped('mekanism:metallurgic_infuser', [
    'OBO',
    'RSR',
    'OBO'
  ], {
    O: 'mekanism:ingot_osmium',
    S: 'mekanism:steel_casing',
    R: 'minecraft:redstone',
    B: 'minecraft:blast_furnace'
  });
});

// ELECTROLYTIC CORE
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:electrolytic_core' });
  event.shaped('mekanism:electrolytic_core', [
    'AEA',
    'SAS',
    'AEA'
  ], {
    A: 'mekanism:alloy_atomic',
    E: 'actuallyadditions:empowered_enori_crystal',
    S: 'thermal_extra:shellite_dust'
  });
});
//====================COMPATIBILITY RECIPES==================