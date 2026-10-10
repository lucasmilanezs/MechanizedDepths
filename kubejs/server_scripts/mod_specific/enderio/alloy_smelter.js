// ENDERIO - ALLOY SMELTER
/*
ServerEvents.recipes(event => {
  event.recipes.enderio.alloy_smelting(
      Item.of("result"),
      [Ingredient.of("#forge:ingots/refined_obsidian"), "kubejs:inductive_alloy", "2x minecraft:quartz"]
  ).energy(10000).experience(3);
});
*/

//=========================CUSTOM RECIPES=========================


// FLESH COMPOUND
ServerEvents.recipes(event => {
  event.recipes.enderio.alloy_smelting(
      Item.of("4x kubejs:flesh_compound"),
      [Ingredient.of("#forge:ingots/end_steel"), "4x minecraft:rotten_flesh", "#forge:ingots/soularium"]
  ).energy(10000).experience(3).id('kubejs:enderio/alloy_smelting/flesh_compound');
});

//=========================CHANGED RECIPES=========================

// DARK STEEL
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:alloy_smelting/dark_steel_ingot' });
  event.recipes.enderio.alloy_smelting(
      Item.of("enderio:dark_steel_ingot"),
      [Ingredient.of("#forge:ingots/steel"), "enderio:grains_of_infinity", "create:sturdy_sheet"]
  ).energy(10000).experience(3).id('kubejs:enderio/alloy_smelting/dark_steel_ingot');
});

// END STEEL
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:alloy_smelting/end_steel_ingot' });
  event.recipes.enderio.alloy_smelting(
      Item.of("enderio:end_steel_ingot"),
      ["4x kubejs:crushed_endstone", "kubejs:resonant_dust", "#forge:ingots/dark_steel"]
  ).energy(10000).experience(3).id('kubejs:enderio/alloy_smelting/end_steel_ingot');
});

// SOULARIUM
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:alloy_smelting/soularium_ingot' });
  event.recipes.enderio.alloy_smelting(
      Item.of("enderio:soularium_ingot"),
      [Ingredient.of("#forge:ingots/gold"), "3x kubejs:soul_grit", "kubejs:ashen_remnant"]
  ).energy(10000).experience(3).id('kubejs:enderio/alloy_smelting/soularium_ingot');
});
//=========================COMPATIBILITY RECIPES=========================
