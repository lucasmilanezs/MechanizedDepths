// IMMERSIVE ENGINEERING - ALLOY KILN RECIPE CHANGES
/*
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:alloy',
    input0: { item: 'material1' },
    input1: { item: 'material2' },
    result: {
      item: 'result_item',
      count: 1
    },
time: 200
  });
});
*/

//===============CUSTOM RECIPES==================

// BLAZING STEEL
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:alloy',
    input0: { item: 'thermal:steel_ingot' },
    input1: { item: 'minecraft:blaze_powder' },
    result: {
      item: 'kubejs:blazing_steel',
      count: 1
    },
    time: 300
  });
});

// OSGLOGLIUM
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:alloy',
    input0: { item: 'kubejs:inductive_alloy' },
    input1: { item: 'mekanism:ingot_refined_glowstone' },
    result: {
      item: 'kubejs:osgloglium',
      count: 1
    },
time: 200
  });
});

//=================CHANGED RECIPES==================

//=================COMPATIBILITY RECIPES==================

