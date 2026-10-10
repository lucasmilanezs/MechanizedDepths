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
  }).id('kubejs:immersiveengineering/crafting/treated_wood_horizontal');
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
      G: 'minecraft:blue_dye'
    }
).id('kubejs:immersiveengineering/crafting/blueprint');
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
    }).id('kubejs:immersiveengineering/crafting/dynamo')
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
  }).id('kubejs:immersiveengineering/crafting/precision_matrix_core')
});

//==================CHANGED RECIPES==================

// KILN BRICK
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/alloybrick' });
  event.shaped(
    Item.of('immersiveengineering:alloybrick', 3),
    [
        'ABA',
        'BAB',
        'ABA'
    ],
    {
        A: 'minecraft:nether_brick',
        B: 'minecraft:brick'
    }).id('kubejs:immersiveengineering/crafting/alloybrick');
});

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
  }).id('kubejs:immersiveengineering/crafting/cokebrick');

// BLAST BRICK
  event.remove({ output: 'immersiveengineering:blastbrick' });
  event.shaped('3x immersiveengineering:blastbrick', [
    'IBI',
    'BVB',
    'IBI'
  ], {
    I: '#forge:plates/invar',
    B: 'minecraft:bricks',
    V: 'kubejs:vivid_infused_stone'
  }).id('kubejs:immersiveengineering/crafting/blastbrick');
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
}).id('kubejs:immersiveengineering/crafting/watermill')
});

// REINFORCED BLAST BRICK
ServerEvents.recipes(event => {
  event.remove({ output: 'immersiveengineering:blastbrick_reinforced' });
  event.shaped(
      Item.of('immersiveengineering:blastbrick_reinforced', 3),
      [
          'ABA',
          'CCC',
          'ABA'
      ],
      {
          B: 'kubejs:blazing_steel',
          A: '#forge:plates/steel',
          C: 'immersiveengineering:blastbrick'
    }).id('kubejs:immersiveengineering/crafting/blastbrick_reinforced');
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
    C: '#forge:ingots/copper',
    I: 'immersiveengineering:sheetmetal_iron'
  }).id('kubejs:immersiveengineering/crafting/rs_engineering');
});

// MV CAPACITOR
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/capacitor_mv' });
  event.shaped(
    Item.of('immersiveengineering:capacitor_mv'),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        E: '#forge:plates/iron',
        C: 'immersiveengineering:wire_copper',
        B: '#forge:plates/nickel',
        D: 'immersiveengineering:capacitor_lv',
        A: '#forge:treated_wood'
    }).id('kubejs:immersiveengineering/crafting/capacitor_mv')
});

// HV CAPACITOR
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:crafting/capacitor_hv' });
  event.shaped(
    Item.of('immersiveengineering:capacitor_hv'),
    [
        'ABA',
        'CDC',
        'AEA'
    ],
    {
        B: '#forge:plates/aluminum',
        C: 'immersiveengineering:wire_steel',
        D: 'immersiveengineering:capacitor_mv',
        A: '#forge:treated_wood',
        E: '#forge:ingots/hop_graphite'
    }).id('kubejs:immersiveengineering/crafting/capacitor_hv')
});
//==================COMPATIBILITY RECIPES==================



