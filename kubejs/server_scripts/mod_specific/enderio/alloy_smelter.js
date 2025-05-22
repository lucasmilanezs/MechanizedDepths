// ENDERIO - ALLOY SMELTER
/*
ServerEvents.recipes(event => {
  event.recipes.enderio.alloy_smelting(
      Item.of("result"),
      [Ingredient.of("mekanism:ingot_refined_obsidian"), "kubejs:inductive_alloy", "2x minecraft:quartz"]
  ).energy(10000).experience(3);
});
*/

//=========================CUSTOM RECIPES=========================

// OSGLOGLIUM
ServerEvents.recipes(event => {
  event.recipes.enderio.alloy_smelting(
      Item.of("kubejs:refined_quartz"),
      [Ingredient.of("mekanism:ingot_refined_obsidian"), "kubejs:inductive_alloy", "2x minecraft:quartz"]
  ).energy(10000).experience(3);
});

// OSGLOGLIUM
ServerEvents.recipes(event => {
  event.recipes.enderio.alloy_smelting(
      Item.of("kubejs:osgloglium"),
      [Ingredient.of("mekanism:ingot_refined_glowstone"), "kubejs:inductive_alloy"]
  ).energy(10000).experience(3);
});
//=========================CHANGED RECIPES=========================

//=========================COMPATIBILITY RECIPES=========================
