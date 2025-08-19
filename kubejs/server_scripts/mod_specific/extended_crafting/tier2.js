// EXTENDED CRAFTING TIER 2 RECIPES

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

// AE2 CONTROLLER
ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_table('ae2:controller', [
  'SSUSS',
  'SFEFS',
  'UFCFU',
  'SFEFS',
  'SSUSS'
], {
  S: 'ae2:smooth_sky_stone_block',
  F: 'ae2:fluix_crystal',
  E: 'ae2:engineering_processor',
  U: 'mekanism:ultimate_control_circuit',
  C: 'ae2:energy_acceptor',
}).tier(2);
});

// MATER DATA
ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_table('kubejs:matter_data', [
  'PPPPP',
  'PDDDP',
  'PCCCP',
  'PDDDP',
  'PPPPP'
], {
  P: 'thermal_extra:polyolefin_plate',
  D: 'ae2:matter_ball',
  C: 'kubejs:dense_processor',
}).tier(2);
});


//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

