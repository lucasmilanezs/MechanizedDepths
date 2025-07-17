// CREATE METALLURGY - CRUCIBLE RECIPES 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================



//====================CHANGED RECIPES==================

// TUNGSTEN 
ServerEvents.recipes(event => {
  event.custom({
    type: "createmetallurgy:bulk_melting",
    ingredients: [
      { item: "createmetallurgy:wolframite_dust" }
    ],
    minHeatRequirement: 9,
    maxHeatRequirement: 50,
    processingTime: 200,
    results: [
      {
        fluid: "createmetallurgy:molten_tungsten",
        amount: 90
      }
    ]
  }).id("kubejs:bulk_melting/wolframite_to_tungsten_crucible");
});

// TUNGSTEN 
ServerEvents.recipes(event => {
  event.custom({
    type: "createmetallurgy:bulk_melting",
    ingredients: [
      { item: "createmetalwork:tungsten_dust" }
    ],
    minHeatRequirement: 9,
    maxHeatRequirement: 50,
    processingTime: 200,
    results: [
      {
        fluid: "createmetallurgy:molten_tungsten",
        amount: 90
      }
    ]
  }).id("kubejs:bulk_melting/dust_to_tungsten_crucible");
});
//====================COMPATIBILITY RECIPES==================

//RECIPE NAME