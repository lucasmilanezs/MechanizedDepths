// MEKANISM - TABLE RECIPE CHANGES

//====================CUSTOM RECIPES==================

// TITANIUM FRAME
ServerEvents.recipes(event => {
  event.shaped('kubejs:frame_titanium', [
    'TRT',
    'R R',
    'TRT'
  ], {
    T: '#forge:plates/titanium',
    R: 'kubejs:rod_titanium'
  }).id('kubejs:mekanism/crafting/frame_titanium');
});

//====================CHANGED RECIPES==================

// STEEL CASING
ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:steel_casing' });
  event.shaped('mekanism:steel_casing', [
    'OGO',
    'GPG',
    'OGO'
  ], {
    O: '#forge:ingots/osmium',
    G: 'minecraft:black_stained_glass',
    P: 'kubejs:precision_matrix_core' 
    }).id('kubejs:mekanism/crafting/steel_casing');
});

// METALLURGIC INFUSER
ServerEvents.recipes(event => {
  event.remove({ output: 'mekanism:metallurgic_infuser' });
  event.shaped('mekanism:metallurgic_infuser', [
    'OBO',
    'RSR',
    'OBO'
  ], {
    O: '#forge:ingots/osmium',
    S: 'mekanism:steel_casing',
    R: 'minecraft:redstone',
    B: 'minecraft:blast_furnace'
  }).id('kubejs:mekanism/crafting/metallurgic_infuser');
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
  }).id('kubejs:mekanism/crafting/enrichment_chamber');
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
  }).id('kubejs:mekanism/crafting/osmium_compressor');
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
  }).id('kubejs:mekanism/crafting/crusher')
});

// FORMULAIC ASSEMBLICATOR
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:formulaic_assemblicator' });
  event.shaped(
    Item.of('mekanism:formulaic_assemblicator'),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        B: 'minecraft:crafting_table',
        C: 'mekanism:advanced_control_circuit',
        D: 'mekanism:steel_casing',
        E: 'minecraft:chest',
        A: 'kubejs:laminated_alloy_plate'
    }).id('kubejs:mekanism/crafting/formulaic_assemblicator')
});

// ELECTROLYTIC SEPARATOR
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:electrolytic_separator' });
  event.shaped(
      Item.of('mekanism:electrolytic_separator'),
      [
          'AAA',
          'BCB',
          'DED'
      ],
      {
          C: 'mekanism:electrolytic_core',
          E: 'actuallyadditions:iron_casing',
          D: 'actuallyadditions:empowered_void_crystal',
          B: 'mekanism:basic_fluid_tank',
          A: '#forge:plates/steel'
      }).id('kubejs:mekanism/crafting/electrolytic_separator')
});

// THERMAL EVAPORATION BLOCK
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:thermal_evaporation/block' });
  event.shaped(
      Item.of('mekanism:thermal_evaporation_block', 6),
      [
          'ABA',
          'BCB',
          'ABA'
      ],
      {
          A: '#forge:rods/steel',
          C: 'kubejs:blazing_steel',
          B: '#forge:plates/copper'
      }).id('kubejs:mekanism/crafting/thermal_evaporation_block')
});

// THERMAL EVAPORATION CONTROLLER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:thermal_evaporation/controller' });
  event.shaped(
    Item.of('mekanism:thermal_evaporation_controller'),
    [
        'ABA',
        'CDC',
        'CCC'
    ],
    {
        A: 'mekanism:advanced_control_circuit',
        C: 'mekanism:thermal_evaporation_block',
        B: 'ae2:semi_dark_monitor',
        D: 'kubejs:thermal_sensor'
    }).id('kubejs:mekanism/crafting/thermal_evaporation_controller')
});

// PRESSURIZED REACTION CHAMBER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:pressurized_reaction_chamber' });
  event.shaped(
    Item.of('mekanism:pressurized_reaction_chamber'),
    [
        'ABA',
        'CDC',
        'EFE'
    ],
    {
        E: 'mekanism:basic_chemical_tank',
        F: 'mekanism:dynamic_tank',
        A: '#forge:plates/lead',
        B: 'actuallyadditions:empowered_emeradic_crystal',
        D: 'mekanism:enrichment_chamber',
        C: 'mekanism:elite_control_circuit'
    }).id('kubejs:mekanism/crafting/pressurized_reaction_chamber')
});

// CHEMICAL DISSOLUTION CHAMBER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:chemical_dissolution_chamber' });
  event.shaped(
    Item.of('mekanism:chemical_dissolution_chamber'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        B: 'mekanism:basic_chemical_tank',
        A: 'kubejs:laminated_titanium_osmium_plate',
        D: 'mekanism:steel_casing',
        C: 'mekanism:ultimate_control_circuit'
    }).id('kubejs:mekanism/crafting/chemical_dissolution_chamber');
});

//CHEMICAL CRYSTALLIZER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:chemical_crystallizer' });
  event.shaped(
    Item.of('mekanism:chemical_crystallizer'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: 'kubejs:laminated_titanium_osmium_plate',
        D: 'mekanism:steel_casing',
        B: 'mekanism:fluorite_gem',
        C: 'mekanism:ultimate_control_circuit'
    }).id('kubejs:mekanism/crafting/chemical_crystallizer');
});

// CHEMICAL INFUSER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:chemical_infuser' });
  event.shaped(
    Item.of('mekanism:chemical_infuser'),
    [
        'ABA',
        'CDC',
        'ACA'
    ],
    {
        A: 'kubejs:laminated_titanium_osmium_plate',
        D: 'mekanism:steel_casing',
        B: 'mekanism:ultimate_control_circuit',
        C: 'mekanism:advanced_chemical_tank'
    }).id('kubejs:mekanism/crafting/chemical_infuser');
});

// BASIC ENERGY CUBE
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:energy_cube/basic' });
  event.shaped(
    Item.of('mekanism:basic_energy_cube'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        D: 'immersiveengineering:capacitor_hv',
        A: 'kubejs:redstone_component',
        B: 'mekanism:energy_tablet',
        C: '#forge:plates/iron'
    }).id('kubejs:mekanism/crafting/basic_energy_cube')
});


// FLUIDIC PLENISHER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:fluidic_plenisher' });
  event.shaped('mekanism:fluidic_plenisher', [
    'IAI',
    'CPC',
    'IAI'
  ], {
    I: '#forge:plates/tin',
    A: '#mekanism:alloys/infused',
    C: '#forge:circuits/advanced',
    P: 'mekanism:electric_pump'
  }).id('kubejs:mekanism/crafting/fluidic_plenisher');
});

// CHARGEPAD
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:chargepad' });
  event.shaped('mekanism:chargepad', [
    '###',
    'ACA',
    'SES'
  ], {
    '#': 'minecraft:polished_blackstone_pressure_plate',
    A: '#mekanism:alloys/infused',
    C: '#forge:circuits/advanced',
    S: '#forge:plates/steel',
    E: 'mekanism:energy_tablet'
  }).id('kubejs:mekanism/crafting/chargepad');
});

// LOGISTICAL SORTER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:logistical_sorter' });
  event.shaped('mekanism:logistical_sorter', [
    'I#I',
    'ACA',
    'III'
  ], {
    I: '#forge:plates/steel',
    '#': 'minecraft:piston',
    A: '#mekanism:alloys/infused',
    C: '#forge:circuits/advanced'
  }).id('kubejs:mekanism/crafting/logistical_sorter');
});

// JETPACK
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:jetpack' });
  event.shaped('mekanism:jetpack', [
    'RCR',
    'STS',
    ' S '
  ], {
    R: '#mekanism:alloys/reinforced',
    C: '#forge:circuits/elite',
    S: '#forge:plates/steel',
    T: 'mekanism:basic_chemical_tank'
  }).id('kubejs:mekanism/crafting/jetpack');
});

// FREE RUNNERS
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:free_runners' });
  event.shaped('mekanism:free_runners', [
    'C C',
    'A A',
    'E E'
  ], {
    C: '#forge:circuits/elite',
    A: '#mekanism:alloys/reinforced',
    E: 'mekanism:energy_tablet'
  }).id('kubejs:mekanism/crafting/free_runners');
});

// SCUBA MASK
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:scuba_mask' });
  event.shaped('mekanism:scuba_mask', [
    ' R ',
    'GCG',
    'S S'
  ], {
    R: '#mekanism:alloys/reinforced',
    G: '#forge:glass/silica',
    C: '#forge:circuits/advanced',
    S: '#forge:plates/steel'
  }).id('kubejs:mekanism/crafting/scuba_mask');
});

// SCUBA TANK
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:scuba_tank' });
  event.shaped('mekanism:scuba_tank', [
    ' C ',
    'ATA',
    'SSS'
  ], {
    C: '#forge:circuits/advanced',
    A: '#mekanism:alloys/reinforced',
    T: 'mekanism:basic_chemical_tank',
    S: '#forge:plates/steel'
  }).id('kubejs:mekanism/crafting/scuba_tank');
});

// ARMORED JETPACK
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:jetpack_armored' });
  event.shaped('mekanism:jetpack_armored', [
    'AUA',
    'ISI',
    ' P '
  ], {
    A: '#mekanism:alloys/atomic',
    U: '#forge:circuits/ultimate',
    I: '#forge:ingots/refined_obsidian',
    S: '#forge:storage_blocks/steel',
    P: 'mekanism:jetpack'
  }).id('kubejs:mekanism/crafting/jetpack_armored');
});

// ARMORED FREE RUNNERS
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:free_runners_armored' });
  event.shaped('mekanism:free_runners_armored', [
    ' U ',
    'APA',
    'ISI'
  ], {
    U: '#forge:circuits/ultimate',
    A: '#mekanism:alloys/atomic',
    P: 'mekanism:free_runners',
    I: '#forge:ingots/refined_obsidian',
    S: '#forge:storage_blocks/steel'
  }).id('kubejs:mekanism/crafting/free_runners_armored');
});

// FLAMETHROWER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:flamethrower' });
  event.shaped('mekanism:flamethrower', [
    'III',
    'ITS',
    'ACA'
  ], {
    I: '#forge:plates/tin',
    T: 'mekanism:basic_chemical_tank',
    S: 'minecraft:flint_and_steel',
    A: '#mekanism:alloys/atomic',
    C: '#forge:circuits/ultimate'
  }).id('kubejs:mekanism/crafting/flamethrower');
});

// ELECTRIC BOW
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:electric_bow' });
  event.shaped('mekanism:electric_bow', [
    '#A ',
    '# E',
    '#A '
  ], {
    '#': '#forge:string',
    A: '#mekanism:alloys/atomic',
    E: 'mekanism:energy_tablet'
  }).id('kubejs:mekanism/crafting/electric_bow');
});

// SOLAR GENERATOR
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanismgenerators:generator/solar' });
  event.shaped('mekanismgenerators:solar_generator', [
    '###',
    'AXA',
    'GEG'
  ], {
    '#': 'mekanismgenerators:solar_panel',
    A: '#mekanism:alloys/infused',
    X: 'kubejs:osgloglium',
    G: '#forge:ingots/refined_glowstone',
    E: 'mekanism:energy_tablet'
  }).id('kubejs:mekanismgenerators/crafting/solar_generator');
});

// ADVANCED SOLAR GENERATOR
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanismgenerators:generator/advanced_solar' });
  event.shaped('mekanismgenerators:advanced_solar_generator', [
    'PAP',
    'PAP',
    'OOO'
  ], {
    P: 'mekanismgenerators:solar_generator',
    A: '#mekanism:alloys/atomic',
    O: 'kubejs:osgloglium'
  }).id('kubejs:mekanismgenerators/crafting/advanced_solar_generator');
});

// WIND GENERATOR
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanismgenerators:generator/wind' });
  event.shaped('mekanismgenerators:wind_generator', [
    ' O ',
    'GAG',
    'ECE'
  ], {
    O: 'kubejs:osgloglium',
    G: '#forge:ingots/refined_glowstone',
    A: '#mekanism:alloys/atomic',
    E: 'mekanism:energy_tablet',
    C: '#forge:circuits/advanced'
  }).id('kubejs:mekanismgenerators/crafting/wind_generator');
});

// TELEPORTATION CORE
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:teleportation_core' });
  event.shaped('mekanism:teleportation_core', [
    'LAL',
    'GEG',
    'LAL'
  ], {
    L: '#forge:gems/lapis',
    A: '#mekanism:alloys/atomic',
    G: '#forge:plates/gold',
    E: '#forge:gems/ender_crystal'
  }).id('kubejs:mekanism/crafting/teleportation_core');
});

// TELEPORTER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:teleporter' });
  event.shaped('mekanism:teleporter', [
    'OXO',
    'XTX',
    'OXO'
  ], {
    O: 'kubejs:osgloglium',
    X: 'mekanism:steel_casing',
    T: 'mekanism:teleportation_core'
  }).id('kubejs:mekanism/crafting/teleporter');
});

// PORTABLE TELEPORTER
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:portable_teleporter' });
  event.shaped('mekanism:portable_teleporter', [
    ' E ',
    'OTO',
    ' E '
  ], {
    E: 'mekanism:energy_tablet',
    O: 'kubejs:osgloglium',
    T: 'mekanism:teleportation_core'
  }).id('kubejs:mekanism/crafting/portable_teleporter');
});

// CARDBOARD BOX
ServerEvents.recipes(event => {
  event.remove({ id: 'mekanism:cardboard_box' });
  event.shaped('mekanism:cardboard_box', [
    'SSS',
    'SAS',
    'SSS'
  ], {
    S: '#forge:sawdust',
    A: '#mekanism:alloys/infused'
  }).id('kubejs:mekanism/crafting/cardboard_box');
});
//====================COMPATIBILITY RECIPES==================