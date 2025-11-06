// THERMAL SERIES - TABLE RECIPE CHANGES

//====================CUSTOM RECIPES==================



//====================CHANGED RECIPES==================

// MACHINE FRAME
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_frame' });
  event.shaped('thermal:machine_frame', [
    'SGS',
    'GFG',
    'SGS'
  ], {
    S: 'thermal:steel_ingot',
    G: 'minecraft:glass',
    F: 'kubejs:forged_assembly' 
    });
});

// FLUID ENCAPSULATOR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_bottler' });
  event.shaped('thermal:machine_bottler', [
    'BBB',
    'OMO',
    'IRI'
  ], {
    B: 'minecraft:bucket',
    O: 'kubejs:obsidianite',
    M: 'thermal:machine_frame',
    I: 'thermal:invar_gear',
    R: 'thermal:rf_coil'
    });
});

// INVAR GEAR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:invar_gear' });
  event.shaped('thermal:invar_gear', [
    'NIN',
    'IEI',
    'NIN'
  ], {
    I: 'thermal:invar_ingot',
    E: 'enderio:energized_gear',
    N: 'thermal:invar_nugget'
    });
});

// MAGMA CRUCIBLE
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_crucible' });
  event.shaped('thermal:machine_crucible', [
    'OGO',
    'BFB',
    'IRI'
  ], {
    G: 'minecraft:glass',
    I: 'thermal:invar_gear',
    R: 'thermal:rf_coil',
    O: 'kubejs:obsidianite',
    B: 'immersiveengineering:blastbrick_reinforced',
    F: 'thermal:machine_frame'
    });
});

// ELECTRUM GEAR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:electrum_gear' });
  event.shaped('thermal:electrum_gear', [
    'NIN',
    'IEI',
    'NIN'
  ], {
    I: 'thermal:electrum_ingot',
    N: 'thermal:electrum_nugget',
    E: 'thermal:invar_gear'
    });
});

// MULTISERVO PRESS
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_press' });
  event.shaped('thermal:machine_press', [
    'OPO',
    'BFB',
    'ERE'
  ], {
    P: 'create:mechanical_press',
    E: 'thermal:electrum_gear',
    R: 'thermal:rf_coil',
    O: 'kubejs:vitrified_obsidian',
    B: 'minecraft:iron_block',
    F: 'thermal:machine_frame'
    });
});

// FRACIONATING STILL
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_refinery' });
  event.shaped('thermal:machine_refinery', [
    'OTO',
    'HFH',
    'ERE'
  ], {
    T: 'mekanism:basic_fluid_tank',
    E: 'thermal:electrum_gear',
    R: 'thermal:rf_coil',
    O: 'kubejs:vitrified_obsidian',
    H: 'immersiveengineering:heavy_engineering',
    F: 'thermal:machine_frame'
    });
});

// BLAST CHILLER
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_chiller' });
  event.shaped('thermal:machine_chiller', [
    'LTL',
    'IFI',
    'SRS'
  ], {
    S: 'thermal:signalum_gear',
    L: 'kubejs:laminated_alloy_plate',
    T: 'mekanism:basic_fluid_tank',
    I: 'minecraft:blue_ice',
    F: 'thermal:machine_frame',
    R: 'kubejs:redstone_flux_super_coil'
    });
});

// SIGNALUM GEAR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:signalum_gear' });
  event.shaped('thermal:signalum_gear', [
    'NIN',
    'IEI',
    'NIN'
  ], {
    I: 'thermal:signalum_ingot',
    N: 'thermal:signalum_nugget',
    E: 'thermal:electrum_gear'
    });
});

// LUMIUM GEAR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:lumium_gear' });
  event.shaped('thermal:lumium_gear', [
    'NIN',
    'ISI',
    'NIN'
  ], {
    I: 'thermal:lumium_ingot',
    N: 'thermal:lumium_nugget',
    S: 'thermal:signalum_gear'
    });
});
// PHYTOGENIC INSULATOR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_insolator' });
  event.shaped('thermal:machine_insolator', [
    'OMO',
    'BFB',
    'LRL'
  ], {
    M: 'minecraft:mud',
    L: 'thermal:lumium_gear',
    R: 'kubejs:rf_resonator',
    O: 'kubejs:vitrified_obsidian',
    B: 'kubejs:blaze_glass_compound',
    F: 'thermal:machine_frame'
    });
});

//PYROLIZER
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_pyrolyzer' });
  event.shaped('thermal:machine_pyrolyzer', [
    'OPO',
    'BFB',
    'LRL'
  ], {
    P: 'kubejs:empowered_blaze_rod',
    L: 'thermal:lumium_gear',
    R: 'kubejs:rf_resonator',
    O: 'kubejs:vitrified_obsidian',
    B: 'kubejs:empowered_blazing_steel',
    F: 'thermal:machine_frame'
    });
});

//TWINITE ROD
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal_extra:crafting/twinite_rod' });
});


//NITRATIC IGNITER
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal_extra:nitratic_igniter' });
  event.shaped('thermal_extra:nitratic_igniter', [
    ' G ',
    'PFP',
    'ERE'
  ], {
    G: 'immersiveengineering:graphite_electrode',
    R: 'kubejs:rf_resonator',
    P: 'thermal_extra:polyolefin_plate',
    E: 'thermal:enderium_gear',
    F: 'thermal:machine_frame'
    });
});

//ENDERIUM GEAR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:enderium_gear' });
  event.shaped('thermal:enderium_gear', [
    'NIN',
    'IEI',
    'NIN'
  ], {
    I: 'thermal:enderium_ingot',
    N: 'thermal:enderium_nugget',
    E: 'thermal:lumium_gear'
    });
});

//ENDOTHERMIC DEHYDRATOR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal_extra:endothermic_dehydrator' });
  event.shaped('thermal_extra:endothermic_dehydrator', [
    ' S ',
    'HFH',
    'ERE'
  ], {
    S: 'thermal_extra:soul_infused_ingot',
    E: 'thermal:enderium_gear',
    R: 'kubejs:rf_resonator',
    H: 'thermal_extra:soul_infused_glass',
    F: 'thermal:machine_frame'
    });
});

//FLUID MIXER
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal_extra:fluid_mixer' });
  event.shaped('thermal_extra:fluid_mixer', [
    'APA',
    'BFB',
    'ERE'
  ], {
    P: 'immersiveengineering:fluid_pump',
    E: 'thermal:enderium_gear',
    R: 'kubejs:rf_resonator',
    A: 'thermal_extra:polyolefin_plate',
    B: 'thermal_extra:twinite_glass',
    F: 'thermal:machine_frame'
    });
});

//====================COMPATIBILITY RECIPES==================


