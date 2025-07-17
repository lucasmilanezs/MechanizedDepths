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

//ENERGIZED GLOWSTONE
ServerEvents.recipes((event) => {
  event.remove({ id: 'thermal:machines/crucible/crucible_glowstone_dust' });
  event.remove({ id: 'thermal:machines/crucible/crucible_glowstone_block' });
  event.custom({
    type: 'thermal:crucible',
    ingredient: { item: 'mekanism:ingot_refined_glowstone' },
    result: [
      { fluid: 'thermal:glowstone', amount: 250 }
    ],
    energy: 6000
  });
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME