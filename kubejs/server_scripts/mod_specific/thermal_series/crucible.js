// THERMAL EXPANSION - MAGMA CRUCIBLE 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================]
// OBSIDIAN SOLUTION
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal:crucible',
    ingredient: { item: 'mekanism:dust_obsidian' },
    result: [
      { fluid: 'kubejs:obsidian_solution', amount: 500 }
    ],
    energy: 6000
  });
});
//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME