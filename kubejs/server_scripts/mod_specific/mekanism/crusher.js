// MEKANISM - CRUSHER

// SYNTAX TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: [
        { item: "minecraft:sandstone" },
        { item: "minecraft:chiseled_sandstone" },
        { item: "minecraft:cut_sandstone" },
        { item: "minecraft:smooth_sandstone" }
      ]
    },
    output: {
      count: 2,
      item: "minecraft:sand"
    }
  });
});
*/

//====================CUSTOM RECIPES==================



//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//QUARTZ DUST
ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:crushing",
    input: {
      ingredient: [
        { tag: "forge:gems/quartz" }
      ]
    },
    output: {
      count: 1,
      item: "thermal:quartz_dust"
    }
  });
});