// MEKANISM COMPRESSING RECIPES

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

//TITANIUM SPONGE RAW TO TITANIUM SPONGE PURE
ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:compressing",
    chemicalInput: {
      amount: 1,
      gas: "mekanism:osmium"
    },
    itemInput: {
      ingredient: {
        item: "kubejs:titanium_sponge_raw"
      }
    },
    output: {
      item: "kubejs:titanium_sponge_pure"
    }
  }).id("kubejs:compressing/titantium_sponge_pure");
});



//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME