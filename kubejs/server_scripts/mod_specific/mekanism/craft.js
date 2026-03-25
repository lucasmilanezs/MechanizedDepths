// MEKANISM - TABLE RECIPE CHANGES

//====================CUSTOM RECIPES==================

// TITANIUM FRAME
ServerEvents.recipes(event => {
  event.shaped('kubejs:frame_titanium', [
    'TRT',
    'R R',
    'TRT'
  ], {
    T: 'kubejs:plate_titanium',
    R: 'kubejs:rod_titanium'
  });
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
  })
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
    })
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
      })
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
      })
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
    })
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
    })
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
    });
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
    });
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
    });
});


//====================COMPATIBILITY RECIPES==================