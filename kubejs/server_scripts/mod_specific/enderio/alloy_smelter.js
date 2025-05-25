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

// REFINED QUARTZ
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

// FLESH COMPOUND
ServerEvents.recipes(event => {
  event.recipes.enderio.alloy_smelting(
      Item.of("kubejs:flesh_compound"),
      [Ingredient.of("enderio:end_steel_ingot"), "4x minecraft:rotten_flesh", "enderio:soularium_ingot"]
  ).energy(10000).experience(3);
});

//=========================CHANGED RECIPES=========================

// DARK STEEL
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:alloy_smelting/dark_steel_ingot' });
  event.recipes.enderio.alloy_smelting(
      Item.of("enderio:dark_steel_ingot"),
      [Ingredient.of("thermal:steel_ingot"), "enderio:grains_of_infinity", "create:sturdy_sheet"]
  ).energy(10000).experience(3);
});

// END STEEL
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:alloy_smelting/end_steel_ingot' });
  event.recipes.enderio.alloy_smelting(
      Item.of("enderio:end_steel_ingot"),
      ["4x kubejs:crushed_endstone", "kubejs:resonant_dust", "enderio:dark_steel_ingot"]
  ).energy(10000).experience(3);
});

// SOULARIUM
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:alloy_smelting/soularium_ingot' });
  event.recipes.enderio.alloy_smelting(
      Item.of("enderio:soularium_ingot"),
      [Ingredient.of("minecraft:gold_ingot"), "3x kubejs:soul_grit", "kubejs:ashen_remnant"]
  ).energy(10000).experience(3);
});
//=========================COMPATIBILITY RECIPES=========================
