// IMMERSIVE ENGINEERING - METAL PRESS RECIPE CHANGES
/*

*/
//
//===============CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:metal_press',
    energy: 2400,
    input: {
      base_ingredient: {
        item: 'kubejs:empowered_blaze_powder'
      },
      count: 8
    },
    mold: 'immersiveengineering:mold_rod',
    result: {
      item: 'kubejs:empowered_blaze_rod',
      count: 1
    }
  }).id('kubejs:immersiveengineering/metal_press/empowered_blaze_rod');
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:metal_press',
    energy: 2400,
    input: { tag: 'forge:ingots/twinite' },
    mold: 'immersiveengineering:mold_wire',
    result: {
      base_ingredient: { item: 'kubejs:twinite_wire' },
      count: 2
    }
  }).id('kubejs:immersiveengineering/metal_press/twinite_wire');
});





//==================CHANGED RECIPES==================

ServerEvents.recipes(event => {
  event.remove({
    type: 'immersiveengineering:metal_press',
    output: 'immersiveengineering:graphite_electrode'
  });
});

//==================COMPATIBILITY RECIPES==================

/*
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:metal_press',
    energy: 2400,
    input: {
      base_ingredient: {
        item: 'kubejs:empowered_blaze_powder'
      },
      count: 8
    },
    mold: 'immersiveengineering:mold_rod',
    result: {
      item: 'kubejs:empowered_blaze_rod',
      count: 1
    }
  });
});
*/