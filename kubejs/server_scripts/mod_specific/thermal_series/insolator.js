// THERMAL SERIES - INSOLATOR
// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:insolator',
    ingredients: [
      { item: 'thermal:phytogro' },
      { item: 'minecraft:vine' }
    ],
    result: { item: 'kubejs:organic_polymer_mesh' },
    energy: 3200
  });
});
//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME