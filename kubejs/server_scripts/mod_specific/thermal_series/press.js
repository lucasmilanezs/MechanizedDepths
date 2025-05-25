// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================
// LAMINATED ALLOY PLATE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:press',
    ingredients: [
      { item: 'immersiveengineering:plate_steel' },
      { item: 'minecraft:glass_pane' }
    ],
    result: { item: 'kubejs:laminated_alloy_plate' },
    energy: 2400
  });
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:press',
    ingredients: [
      { item: 'minecraft:basalt', count: 24 }
    ],
    result: { item: 'kubejs:basalt_cluster' },
    energy: 2400
  });
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:press',
    ingredients: [
      { item: 'minecraft:obsidian', count: 8 }
    ],
    result: { item: 'kubejs:obsidian_cluster' },
    energy: 2400
  });
});
//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME