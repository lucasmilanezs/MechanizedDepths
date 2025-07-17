// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

// MONOSILICON INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:metallurgic_infusing",
    chemicalInput: {
      amount: 10,
      tag: "mekanism:carbon"
    },
    itemInput: {
      ingredient: {
        item: "kubejs:pure_silicon"
      }
    },
    output: {
      item: "kubejs:polysilicon",
    }
  }).id("kubejs:mekanism/infusing/monosilicon_ingot");
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
