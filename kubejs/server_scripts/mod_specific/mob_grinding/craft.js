// MOB GRINDING UTILITIES - TABLE RECIPE CHANGES

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//MOBGRINDIUM
ServerEvents.recipes(event => {
  event.shaped('kubejs:mobgrindium_ingot', [
    'FBG',
    'ASA',
    'GBF'
  ], {
    S: 'enderio:soularium_ingot',
    F: 'minecraft:rotten_flesh',
    G: 'minecraft:gunpowder',
    B: 'minecraft:bone',
    A: 'minecraft:string'
  });
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME