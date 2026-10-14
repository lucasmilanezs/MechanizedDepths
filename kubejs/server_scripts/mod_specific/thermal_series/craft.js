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
    S: '#forge:plates/steel',
    G: 'integrateddynamics:crystalized_menril_chunk',
    F: 'kubejs:forged_assembly' 
    }).id('kubejs:thermal/crafting/machine_frame');
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
    I: '#forge:gears/invar',
    R: 'thermal:rf_coil'
    }).id('kubejs:thermal/crafting/machine_bottler');
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
    I: '#forge:gears/invar',
    R: 'thermal:rf_coil',
    O: 'kubejs:obsidianite',
    B: 'immersiveengineering:blastbrick_reinforced',
    F: 'thermal:machine_frame'
    }).id('kubejs:thermal/crafting/machine_crucible');
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
    E: '#forge:gears/electrum',
    R: 'kubejs:machine_internals',
    O: 'kubejs:vitrified_obsidian',
    B: 'minecraft:iron_block',
    F: 'thermal:machine_frame'
    }).id('kubejs:thermal/crafting/machine_press');
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
    E: '#forge:gears/electrum',
    R: 'kubejs:machine_internals',
    O: 'kubejs:vitrified_obsidian',
    H: 'immersiveengineering:heavy_engineering',
    F: 'thermal:machine_frame'
    }).id('kubejs:thermal/crafting/machine_refinery');
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
    R: 'kubejs:machine_internals'
    }).id('kubejs:thermal/crafting/machine_chiller');
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
    R: 'kubejs:calibrated_internals',
    O: 'kubejs:vitrified_obsidian',
    B: 'kubejs:blaze_glass_compound',
    F: 'thermal:machine_frame'
    }).id('kubejs:thermal/crafting/machine_insolator');
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
    R: 'kubejs:calibrated_internals',
    O: 'kubejs:vitrified_obsidian',
    B: 'kubejs:empowered_blazing_steel',
    F: 'thermal:machine_frame'
    }).id('kubejs:thermal/crafting/machine_pyrolyzer');
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
    R: 'kubejs:calibrated_internals',
    P: 'thermal_extra:polyolefin_plate',
    E: 'thermal:enderium_gear',
    F: 'thermal:machine_frame'
    }).id('kubejs:thermal/crafting/nitratic_igniter');
});

//ENDOTHERMIC DEHYDRATOR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal_extra:endothermic_dehydrator' });
  event.shaped('thermal_extra:endothermic_dehydrator', [
    ' S ',
    'HFH',
    'ERE'
  ], {
    S: '#forge:ingots/soul_infused',
    E: 'thermal:enderium_gear',
    R: 'kubejs:calibrated_internals',
    H: 'thermal_extra:soul_infused_glass',
    F: 'thermal:machine_frame'
    }).id('kubejs:thermal/crafting/endothermic_dehydrator');
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
    R: 'kubejs:calibrated_internals',
    A: 'thermal_extra:polyolefin_plate',
    B: 'thermal_extra:twinite_glass',
    F: 'thermal:machine_frame'
    }).id('kubejs:thermal/crafting/fluid_mixer');
});

//SEQUENTIAL FABRICATOR
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_crafter' });
  event.shaped(
    Item.of('thermal:machine_crafter'),
    [
        ' A ',
        'BCB',
        'DED'
    ],
    {
        A: 'minecraft:crafting_table',
        D: '#forge:gears/lead',
        B: 'kubejs:laminated_alloy_plate',
        C: 'thermal:machine_frame',
        E: 'thermal:rf_coil'
    }).id('kubejs:thermal/crafting/machine_crafter')
});

// COMPONENT ASSEMBLY
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal_extra:crafting/component_assembly' });
  event.shaped(
      Item.of('thermal_extra:component_assembly'),
      [
          'ABA',
          'CDC',
          'EEE'
      ],
      {
          D: 'actuallyadditions:iron_casing',
          E: 'kubejs:organic_polymer_mesh',
          C: 'create:mechanical_arm',
          A: 'mekanism:elite_control_circuit',
          B: 'thermal:machine_crafter'
      }).id('kubejs:thermal/crafting/component_assembly')
});
// IGNEOUS EXTRUDER
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:device_rock_gen' });
  event.shaped('thermal:device_rock_gen', [
    'IXI',
    'GCG',
    'IPI'
  ], {
    I: '#forge:plates/invar',
    X: '#forge:gears/constantan',
    G: '#forge:glass',
    C: 'minecraft:piston',
    P: 'kubejs:machine_internals'
  }).id('kubejs:thermal/crafting/device_rock_gen');
});

// AQUATIC ENTRAPPER
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:device_fisher' });
  event.shaped('thermal:device_fisher', [
    'IXI',
    'GCG',
    'IPI'
  ], {
    I: '#minecraft:planks',
    X: '#forge:gears/copper',
    G: '#forge:glass',
    C: 'minecraft:fishing_rod',
    P: 'kubejs:machine_internals'
  }).id('kubejs:thermal/crafting/device_fisher');
});

// ITEM COLLECTOR
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:device_collector' });
  event.shaped('thermal:device_collector', [
    'IXI',
    'GCG',
    'IPI'
  ], {
    I: '#forge:plates/tin',
    X: '#forge:ender_pearls',
    G: '#forge:glass',
    C: 'minecraft:hopper',
    P: 'kubejs:machine_internals'
  }).id('kubejs:thermal/crafting/device_collector');
});

// ARBOREAL EXTRACTOR
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:device_tree_extractor' });
  event.shaped('thermal:device_tree_extractor', [
    'IXI',
    'GCG',
    'IPI'
  ], {
    I: '#minecraft:planks',
    X: '#forge:gears/iron',
    G: '#forge:glass',
    C: 'minecraft:bucket',
    P: 'kubejs:machine_internals'
  }).id('kubejs:thermal/crafting/device_tree_extractor');
});

// AQUEOUS ACCUMULATOR
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:device_water_gen' });
  event.shaped('thermal:device_water_gen', [
    'IXI',
    'GCG',
    'IPI'
  ], {
    I: '#forge:plates/copper',
    X: '#forge:plates/iron',
    G: '#forge:glass',
    C: 'minecraft:bucket',
    P: 'kubejs:machine_internals'
  }).id('kubejs:thermal/crafting/device_water_gen');
});

// DEVICE NULLIFIER
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:device_nullifier' });
  event.shaped('thermal:device_nullifier', [
    'IXI',
    'GCG',
    'IPI'
  ], {
    I: '#forge:plates/tin',
    X: '#forge:dusts/redstone',
    G: '#forge:glass',
    C: 'minecraft:lava_bucket',
    P: 'kubejs:machine_internals'
  }).id('kubejs:thermal/crafting/device_nullifier');
});

// INSIGHTFUL CONDENSER
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:device_xp_condenser' });
  event.shaped('thermal:device_xp_condenser', [
    'IXI',
    'GCG',
    'IPI'
  ], {
    I: '#forge:plates/silver',
    X: '#forge:gears/lapis',
    G: '#forge:glass',
    C: 'thermal:xp_crystal',
    P: 'kubejs:machine_internals'
  }).id('kubejs:thermal/crafting/device_xp_condenser');
});

// FLUX DRILL
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:flux_drill' });
  event.shaped('thermal:flux_drill', [
    ' I ',
    'XGC',
    '  R'
  ], {
    X: 'thermal:drill_head',
    I: '#forge:plates/iron',
    C: 'kubejs:calibrated_internals',
    G: '#forge:gears/tin',
    R: '#forge:rods/iron'
  }).id('kubejs:thermal/crafting/flux_drill');
});

// FLUX SAW
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:flux_saw' });
  event.shaped('thermal:flux_saw', [
    ' I ',
    'XGC',
    '  R'
  ], {
    X: 'thermal:saw_blade',
    I: '#forge:plates/iron',
    C: 'kubejs:calibrated_internals',
    G: '#forge:gears/tin',
    R: '#forge:rods/iron'
  }).id('kubejs:thermal/crafting/flux_saw');
});

// FLUXOMAGNET
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:flux_magnet' });
  event.shaped('thermal:flux_magnet', [
    'IRI',
    'LCL',
    ' P '
  ], {
    I: '#forge:plates/iron',
    R: '#forge:dusts/redstone',
    L: '#forge:plates/lead',
    C: 'kubejs:calibrated_internals',
    P: 'thermal:rf_coil'
  }).id('kubejs:thermal/crafting/flux_magnet');
});

// FLUID RESERVOIR
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:fluid_reservoir' });
  event.shaped('thermal:fluid_reservoir', [
    'CRC',
    'GBG',
    ' P '
  ], {
    C: '#forge:plates/copper',
    R: 'thermal:cured_rubber',
    G: '#forge:glass',
    B: 'minecraft:bucket',
    P: 'kubejs:calibrated_internals'
  }).id('kubejs:thermal/crafting/fluid_reservoir');
});

// FLUX CAPACITOR
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:flux_capacitor' });
  event.shaped('thermal:flux_capacitor', [
    'RLR',
    'LCL',
    ' R '
  ], {
    R: '#forge:dusts/redstone',
    L: '#forge:plates/lead',
    C: 'kubejs:calibrated_internals'
  }).id('kubejs:thermal/crafting/flux_capacitor');
});

// HAZMAT FABRIC
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:hazmat_fabric' });
  event.shaped('2x thermal:hazmat_fabric', [
    ' M ',
    'SHS',
    ' M '
  ], {
    M: 'kubejs:organic_polymer_mesh',
    S: '#forge:string',
    H: 'thermal:cured_rubber'
  }).id('kubejs:thermal/crafting/hazmat_fabric');
});

// DIVING FABRIC
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:diving_fabric' });
  event.shaped('2x thermal:diving_fabric', [
    ' M ',
    'SHS',
    ' M '
  ], {
    M: 'kubejs:organic_polymer_mesh',
    S: '#forge:string',
    H: '#forge:gems/prismarine'
  }).id('kubejs:thermal/crafting/diving_fabric');
});

// HAZMAT HELMET
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:armor/hazmat_helmet' });
  event.shaped('thermal:hazmat_helmet', [
    'XIX',
    'IGI'
  ], {
    X: 'thermal:hazmat_fabric',
    I: '#forge:plates/iron',
    G: 'kubejs:blaze_glass_compound'
  }).id('kubejs:thermal/crafting/hazmat_helmet');
});

// DIVING HELMET
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:armor/diving_helmet' });
  event.shaped('thermal:diving_helmet', [
    'XIX',
    'IGI'
  ], {
    X: 'thermal:diving_fabric',
    I: '#forge:plates/gold',
    G: 'kubejs:blaze_glass_compound'
  }).id('kubejs:thermal/crafting/diving_helmet');
});

// MACHINE SPEED AUGMENT
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:augments/machine_speed_augment' });
  event.shaped('thermal:machine_speed_augment', [
    ' G ',
    'EXE',
    ' G '
  ], {
    G: '#forge:gears/lumium',
    E: '#forge:plates/electrum',
    X: 'thermal:rf_coil'
  }).id('kubejs:thermal/crafting/machine_speed_augment');
});

// MACHINE EFFICIENCY AUGMENT
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:augments/machine_efficiency_augment' });
  event.shaped('thermal:machine_efficiency_augment', [
    ' P ',
    'LXL',
    ' P '
  ], {
    P: 'kubejs:laminated_alloy_plate',
    L: '#forge:plates/lumium',
    X: 'thermal:rf_coil'
  }).id('kubejs:thermal/crafting/machine_efficiency_augment');
});

// MACHINE OUTPUT AUGMENT
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:augments/machine_output_augment' });
  event.shaped('thermal:machine_output_augment', [
    ' G ',
    'PXP',
    ' G '
  ], {
    G: '#forge:gears/lumium',
    P: 'kubejs:laminated_alloy_plate',
    X: 'thermal:redstone_servo'
  }).id('kubejs:thermal/crafting/machine_output_augment');
});

// HARDENED INTEGRAL COMPONENTS
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:augments/upgrade_augment_1' });
  event.shaped('thermal:upgrade_augment_1', [
    'IGI',
    'RXR',
    'IGI'
  ], {
    I: '#forge:plates/invar',
    G: '#forge:glass',
    R: '#forge:dusts/redstone',
    X: 'kubejs:laminated_alloy_plate'
  }).id('kubejs:thermal/crafting/upgrade_augment_1');
});

// REINFORCED INTEGRAL COMPONENTS
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:augments/upgrade_augment_2' });
  event.shaped('thermal:upgrade_augment_2', [
    'IGI',
    'RXR',
    'IGI'
  ], {
    I: '#forge:plates/electrum',
    G: 'kubejs:refined_quartz',
    R: '#forge:gears/signalum',
    X: 'thermal:upgrade_augment_1'
  }).id('kubejs:thermal/crafting/upgrade_augment_2');
});

// ALCHEMICAL IMBUER
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:potion_infuser' });
  event.shaped('thermal:potion_infuser', [
    'RBR',
    'CGC',
    'XCX'
  ], {
    R: 'thermal:cured_rubber',
    B: 'minecraft:glass_bottle',
    C: '#forge:plates/copper',
    G: '#forge:gears/silver',
    X: '#forge:gems/cinnabar'
  }).id('kubejs:thermal/crafting/potion_infuser');
});

// ALCHEMICAL QUIVER
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:potion_quiver' });
  event.shaped('thermal:potion_quiver', [
    'CXC',
    'BGS',
    'RCR'
  ], {
    C: '#forge:plates/copper',
    X: '#forge:gems/cinnabar',
    B: 'minecraft:glass_bottle',
    G: '#forge:gears/silver',
    S: '#forge:string',
    R: 'thermal:cured_rubber'
  }).id('kubejs:thermal/crafting/potion_quiver');
});

// DECOCTIVE DIFFUSER
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:device_potion_diffuser' });
  event.shaped('thermal:device_potion_diffuser', [
    'IXI',
    'NCN',
    'IPI'
  ], {
    I: '#forge:plates/silver',
    X: '#forge:gears/constantan',
    N: '#forge:gems/cinnabar',
    C: 'minecraft:glass_bottle',
    P: 'thermal:redstone_servo'
  }).id('kubejs:thermal/crafting/device_potion_diffuser');
});
//====================COMPATIBILITY RECIPES==================


