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
// AETHERIC VAPOR, SPECTRAL OIL, VOID HEAVY OIL
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal_extra:advanced_refinery',
    energy: 10000,
    ingredients: [
      { fluid: 'industrialforegoing:ether_gas', amount: 1000 }
    ],
    result: [
      { fluid: 'kubejs:aetheric_vapor', amount: 300 },
      { fluid: 'kubejs:spectral_oil', amount: 300 },
      { fluid: 'kubejs:void_heavy_oil', amount: 200 }
    ]
  }).id('kubejs:thermal_extra/aetheric_spectral_void_refinery');
});

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