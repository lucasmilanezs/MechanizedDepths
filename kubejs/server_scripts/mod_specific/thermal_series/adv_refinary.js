// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================
/*
// WATER 
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal_extra:advanced_refinery',
    energy: 10000,
    ingredients: [
      {
        fluid: 'minecraft:water' , amount: 4000
      }
    ],
    result: [
      { item: 'kubejs:calcined_blaze_composite' },
      { item: 'minecraft:netherrack', chance: 0.25},
      { item: 'thermal:sulfur_dust', chance: 0.1 }
    ]
  }).id('kubejs:thermal_extra/dehydrate_lava');
});
*/
//INDUSTRIAL SOLVENT
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal_extra:advanced_refinery',
    energy: 10000,
    ingredients: [
      { fluid: 'kubejs:aqueous_organic_solvent', amount: 1000 }
    ],
    result: [
      { fluid: 'kubejs:industrial_solvent', amount: 500 }
    ]
  }).id('kubejs:thermal_extra/industrial_solvent');
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME