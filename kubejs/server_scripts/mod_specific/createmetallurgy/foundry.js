// CREATE METALLURGY - FOUNDRY RECIPES 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

// MOLTEN TITANIUM
ServerEvents.recipes(event => {
  event.custom({
    type: "createmetallurgy:melting",
    ingredients: [{ item: "kubejs:titanium_sponge_pure" }],
    processingTime: 60,
    results: [
      { fluid: "kubejs:molten_titanium", amount: 144 }
    ]
  }).id("kubejs:melting/titanium");
});


// MOLTEN SILICON
ServerEvents.recipes(event => {
  event.custom({
    type: "createmetallurgy:melting",
    ingredients: [{ item: "kubejs:polysilicon" }],
    processingTime: 60,
    results: [
      { fluid: "kubejs:molten_silicon", amount: 90 }
    ]
  }).id("kubejs:melting/silicon");
});

// MOLTEN VESSEL FRAME
ServerEvents.recipes(event => {
  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "heated",
    ingredients: [{ item: "kubejs:ingot_vesselframe" }],
    processingTime: 60,
    results: [
      { fluid: "kubejs:molten_vessel_frame", amount: 90 }
    ]
  }).id("kubejs:createmetallurgy/melting/molten_vessel_frame");
});
//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME




