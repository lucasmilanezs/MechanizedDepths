// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//MEATTHERIAL
ServerEvents.recipes(event => {
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'kubejs:meat_bar' },
      { item: 'industrialforegoing:pink_slime_ingot' },
      { item: 'pneumaticcraft:ingot_iron_compressed' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
    output: {
      item: 'kubejs:meattherial',
      count: 1
    },
    processingTime: 600
  })
})


//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

