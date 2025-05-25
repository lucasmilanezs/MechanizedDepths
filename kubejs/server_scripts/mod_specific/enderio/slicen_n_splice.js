// ENDERIO - SLICE N' SPLICE 

// SYNTAX TEMPLATE:
/*
ServerEvents.recipes(event => {

  // removes all slicing recipes
  event.remove({ type: "enderio:slicing" });

  // adds a recipe that slices 2 apples, a bone, 2 rotten flesh, and an egg into a stick
  // uses the default value for energy
  event.recipes.enderio.slicing("stick", ["apple", "bone", "apple", "rotten_flesh", "egg", "rotten_flesh"]);

  // adds a recipe that slices any 3 glass, a stick, any ingot, 15 granite, any 3 iron ingots, and an apple into 15 stone
  // energy usage of 5000
  // uses the chaining function for energy
  event.recipes.enderio.slicing(Item.of("stone", 15), [
      "3x #forge:glass",
      "stick",
      Ingredient.of("#forge:ingots"),
      Item.of("granite", 15),
      "3x #forge:ingots/iron",
      "apple"
  ]).energy(5000);
});

*/

//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {

  // DORMANT MEMORY CELL — Slice 'n Splice
  event.recipes.enderio.slicing(
    Item.of("kubejs:dormant_memory_cell"),
    [
      "enderio:z_logic_controller",
      "enderio:ender_resonator",
      "enderio:skeletal_contractor",
      "enderio:end_steel_ingot",
      "enderio:basic_capacitor",
      "enderio:end_steel_ingot"
    ]
  ).energy(8000); // Ajuste conforme o pacing desejado
});

//BLANK SYNAPTIC INTERFACE — Slice 'n Splice
ServerEvents.recipes(event => {
  event.recipes.enderio.slicing(
    Item.of("kubejs:blank_synaptic_interface"),
    [
      "kubejs:flesh_compound",
      "enderio:z_logic_controller",
      "kubejs:flesh_compound",
      "kubejs:flesh_compound",
      "enderio:basic_capacitor",
      "kubejs:flesh_compound"
    ]
  ).energy(8000); // Ajuste conforme o pacing desejado
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME