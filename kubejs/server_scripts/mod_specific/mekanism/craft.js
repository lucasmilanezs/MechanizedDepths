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

// 

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

// ENRICHEMENT CHAMBER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:enrichment_chamber' });
  event.shaped('mekanism:enrichment_chamber', [
    'PBP',
    'CSC',
    'PBP'
  ], {
    C: 'kubejs:rudimentary_redstone_component',
    B: 'mekanism:basic_control_circuit',
    P: '#forge:plates/steel',
    S: 'mekanism:steel_casing'
  });
});

// OSMIUM COMPRESSOR
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:osmium_compressor' });
  event.shaped('mekanism:osmium_compressor', [
    'IAI',
    'TST',
    'IAI'
  ], {
    I: 'mekanism:alloy_infused',
    A: 'mekanism:advanced_control_circuit',
    T: 'mekanism:basic_fluid_tank',
    S: 'mekanism:steel_casing'
  });
});

// CRUSHER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:crusher' });
  event.shaped('mekanism:crusher', [
    'PCP',
    'WSW',
    'PCP'
  ], {
    P: '#forge:plates/steel',
    C: 'mekanism:basic_control_circuit',
    W: 'create:crushing_wheel',
    S: 'mekanism:steel_casing'
  });
});

//====================COMPATIBILITY RECIPES==================