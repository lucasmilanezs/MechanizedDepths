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
//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME




