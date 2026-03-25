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
      'GGG',
      'BBB',
      'PPP'
    ],
    {
      B: 'kubejs:blazing_steel',
      P: 'minecraft:paper',
      G: 'immersiveengineering:ingot_hop_graphite'
    }
);
});

// KINETIC DYNAMO
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/dynamo' });
  event.shaped('immersiveengineering:dynamo',
    [
        'ABA',
        'CDC',
        'ACA'
    ],
    {
        C: 'kubejs:rudimentary_redstone_component',
        B: 'immersiveengineering:component_iron',
        D: 'immersiveengineering:coil_lv',
        A: '#forge:plates/steel'
    })
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
  })
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
})
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

// REDSTONE ENGINEERING BLOCK
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/rs_engineering' });
  event.shaped('immersiveengineering:rs_engineering', [
    'IRI',
    'RCR',
    'IRI'
  ], {
    R: 'kubejs:rudimentary_redstone_component',
    C: 'minecraft:copper_ingot',
    I: 'immersiveengineering:sheetmetal_iron'
  });
});
//==================COMPATIBILITY RECIPES==================



