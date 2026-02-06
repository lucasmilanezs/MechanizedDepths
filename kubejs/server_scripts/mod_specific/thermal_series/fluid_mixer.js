// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

// LIQUID OBSSESSION
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal_extra:fluid_mixer',
    energy: 10000,
    ingredients: [
      { fluid: 'kubejs:liquid_love', amount: 500 },
      { fluid: 'kubejs:liquid_fear', amount: 500 },
    ],
    result: [
      { fluid: 'kubejs:liquid_obsession', amount: 1000 }
    ]
  }).id('kubejs:thermal_extra/liquid_obsession');
});

//PHOTORESIST
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal_extra:fluid_mixer',
    energy: 10000,
    ingredients: [
      { fluid: 'kubejs:industrial_solvent', amount: 500 },
      { fluid: 'immersiveengineering:phenolic_resin', amount: 500 },
    ],
    result: [
      { fluid: 'kubejs:photoresist_fluid', amount: 1000 }
    ]
  }).id('kubejs:thermal_extra/photoresist');
});

// MINERAL SLUDGE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal_extra:fluid_mixer',
    energy: 10000,
    ingredients: [
      { fluid: 'kubejs:slag_slurry', amount: 500 },
      { fluid: 'mekanism:sulfuric_acid', amount: 500 },
    ],
    result: [
      { fluid: 'kubejs:mineral_sludge', amount: 1000 }
    ]
  }).id('kubejs:thermal_extra/mineral_sludge');
});

//VOID HEAVY OIL -> SPECTRAL OIL
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal_extra:fluid_mixer',
    energy: 50000,
    ingredients: [
      { fluid: 'kubejs:void_heavy_oil', amount: 1000 },
      { fluid: 'mekanism:steam', amount: 250 },
    ],
    result: [
      { fluid: 'kubejs:spectral_oil', amount: 750 }
    ]
  }).id('kubejs:thermal_extra/spectral_oil_synthesis');
});

//SPECTRAL OIL -> AETHERIC VAPOR
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal_extra:fluid_mixer',
    energy: 70000,
    ingredients: [
      { fluid: 'kubejs:spectral_oil', amount: 750 },
      { fluid: 'mekanism:steam', amount: 250 },
    ],
    result: [
      { fluid: 'kubejs:aetheric_vapor', amount: 500 }
    ]
  }).id('kubejs:thermal_extra/aetheric_vapor_synthesis');
});


//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME