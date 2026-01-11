// IMMERSIVE ENGINEERING - TABLE RECIPE CHANGES
// TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.remove({ output: 'immersiveengineering:treated_wood_horizontal' });
  event.shaped('4x immersiveengineering:treated_wood_horizontal', [
    'LLL',
    'LBL',
    'LLL'
  ], {
    L: 'kubejs:living_timber',
    B: 'immersiveengineering:creosote_bucket'
  });
*/

//==================CUSTOM RECIPES==================

// LIVING TIMBER
ServerEvents.recipes(event => {
  event.remove({ output: 'immersiveengineering:treated_wood_horizontal' });
  event.shaped('4x immersiveengineering:treated_wood_horizontal', [
    'LLL',
    'LBL',
    'LLL'
  ], {
    L: 'kubejs:living_timber',
    B: 'immersiveengineering:creosote_bucket'
  });
});

// ELECTRODE
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), 
    [
      'BPB',
      'WGW',
      ' D '
    ],
    {
      B: 'kubejs:blazing_steel',
      P: 'minecraft:paper',
      W: 'immersiveengineering:treated_wood_horizontal',
      G: 'immersiveengineering:ingot_hop_graphite',
      D: 'immersiveengineering:blue_dye'
    }
  );
});

// PRECISION MATRIX CORE
ServerEvents.recipes(event => {
  event.shaped('kubejs:precision_matrix_core', [
    'CIC',
    'RQR',
    'CIC'
  ], {
    I: 'kubejs:inductive_alloy',
    C: 'immersiveengineering:circuit_board',
    Q: 'thermal:quartz_dust',
    R: 'immersiveengineering:component_electronic_adv'
  });
});

//==================CHANGED RECIPES==================

// COKE BRICK
ServerEvents.recipes(event => {
  event.remove({ output: 'immersiveengineering:cokebrick' });
  event.shaped('3x immersiveengineering:cokebrick', [
    'IBI',
    'BVB',
    'IBI'
  ], {
    I: '#forge:plates/iron',
    B: 'minecraft:bricks',
    V: 'kubejs:vivid_infused_stone'
  });

// BLAST BRICK
  event.remove({ output: 'immersiveengineering:blastbrick' });
  event.shaped('immersiveengineering:blastbrick', [
    'IBI',
    'BVB',
    'IBI'
  ], {
    I: '#forge:plates/invar',
    B: 'minecraft:bricks',
    V: 'kubejs:vivid_infused_stone'
  });
}); 

// WATERMILL
ServerEvents.recipes(event => {
  event.remove({ output: 'immersiveengineering:waterlmill' });
  event.shaped('immersiveengineering:watermill', [
  ' S ',
  'SCS',
  ' S '
], {
  S: 'immersiveengineering:waterwheel_segment',
  C: 'immersiveengineering:component_iron'
});
// DYNAMO
  event.remove({ output: 'immersiveengineering:dynamo' });
  event.shaped('immersiveengineering:dynamo', [
    ' I ',
    'RMR',
    'SCS'
  ], {
    I: 'minecraft:copper_ingot',
    M: 'immersiveengineering:component_iron',
    R: 'minecraft:redstone',
    C: 'immersiveengineering:coil_lv',
    S: 'immersiveengineering:ingot_steel'
  });
});
// REINFORCED BLAST BRICK
ServerEvents.recipes(event => {
  event.remove({ output: 'immersiveengineering:blastbrick_reinforced' });
  event.shaped('immersiveengineering:blastbrick_reinforced', [
    'SPS',
    'PBP',
    'SPS'
  ], {
    S: 'kubejs:blazing_steel',
    P: '#forge:plates/steel',
    B: 'immersiveengineering:blastbrick'
  });
});

// MECHANICAL COMPONENT
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/component_steel' });
  event.remove({ id: 'immersiveengineering:crafting/component_iron' });
});
//==================COMPATIBILITY RECIPES==================



