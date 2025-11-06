// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.custom({
    "type": "ae2:transform",
    "circumstance": {
      "type": "fluid",
      "tag": "minecraft:water"                 
    },
    "ingredients": [
      { "item": "ae2:charged_certus_quartz_crystal" },
      { "item": "ae2:fluix_dust" }
    ],
    "result": {
      "item": "ae2:fluix_crystal"
    }
  }).id("kubejs:ae2/transform/fluix_crystal");
});
*/

//====================CUSTOM RECIPES==================

// kubejs/server_scripts/ae2_transform_fix.js
ServerEvents.recipes(event => {
  event.custom({
    type: "ae2:transform",
    circumstance: { type: "fluid", tag: "minecraft:water" },
    ingredients: [
      { item: "kubejs:packed_gravel" },
      { item: "minecraft:diamond" }
    ],
    result: { item: "minecraft:gold_nugget" }
  }).id("kubejs:ae2/transform/gold_nugget_from_gravel_valid");
});


//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

