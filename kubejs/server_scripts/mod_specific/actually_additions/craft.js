// ACTUALLY ADDITIONS - TABLE CRAFTING RECIPES 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//RECIPE NAME

//====================CHANGED RECIPES==================

//IRON CASING
ServerEvents.recipes(event => {
  event.remove({ id: 'actuallyadditions:iron_casing' });
  event.shaped('actuallyadditions:iron_casing', [
    'III',
    'ICI',
    'III'
  ], {
    I: '#forge:ingots/iron',
    C: 'minecraft:chest'
  });
});

//====================COMPATIBILITY RECIPES==================

//RECIPE 