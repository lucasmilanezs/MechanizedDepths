// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*
// kubejs/server_scripts/pneumaticcraft/assembly_recipes.js

ServerEvents.recipes(event => {
  // Example: Assembly Laser recipe (custom JSON)
  event
    .custom({
      type: "pneumaticcraft:assembly_laser",
      input: {
        type: "pneumaticcraft:stacked_item",
        count: 20,
        item: "pneumaticcraft:pressure_chamber_valve"
      },
      program: "laser",
      result: {
        count: 8,
        item: "pneumaticcraft:advanced_pressure_tube"
      }
    })
    .id("kubejs:pneumaticcraft/assembly/laser/advanced_pressure_tube_from_valves")
})
*/

//====================CUSTOM RECIPES==================

// DRILLED REDSTONE SUBSTRATE
ServerEvents.recipes(event => {
  event.custom({
      type: "pneumaticcraft:assembly_drill",
      input: {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "kubejs:redstone_circuit_substrate"
      },
      program: "drill",
      result: {
        count: 1,
        item: "kubejs:drilled_redstone_substrate"
      }
    }).id("kubejs:pneumaticcraft/assembly/drill/drilled_redstone_substrate")
});

// INTRICATE REDSTONE COMPONENT
ServerEvents.recipes(event => {
  event.custom({
      type: "pneumaticcraft:assembly_laser",
      input: {
        type: "pneumaticcraft:stacked_item",
        count: 1,
        item: "kubejs:drilled_redstone_substrate"
      },
      program: "laser",
      result: {
        count: 1,
        item: "kubejs:intricate_redstone_component"
      }
    }).id("kubejs:pneumaticcraft/assembly/laser/intricate_redstone_component")
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME