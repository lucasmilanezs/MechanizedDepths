// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.custom({
    type: 'pneumaticcraft:refinery',
    input: {
      type: 'pneumaticcraft:fluid',
      amount: 10,
      tag: 'forge:crude_oil'
    },
    results: [
      {
        amount: 2,
        fluid: 'pneumaticcraft:diesel'
      },
      {
        amount: 3,
        fluid: 'pneumaticcraft:kerosene'
      },
      {
        amount: 3,
        fluid: 'pneumaticcraft:gasoline'
      },
      {
        amount: 2,
        fluid: 'pneumaticcraft:lpg'
      }
    ],
    temperature: {
      min_temp: 373
    }
  }).id(recipeId);
});
*/

//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  event.custom({
    type: 'pneumaticcraft:refinery',
    input: {
      type: 'pneumaticcraft:fluid',
      amount: 100,
      fluid: 'industrialforegoing:ether_gas'
    },
    results: [
      {
        amount: 20,
        fluid: 'kubejs:void_heavy_oil'
      },
      {
        amount: 30,
        fluid: 'kubejs:spectral_oil'
      },
      {
        amount: 30,
        fluid: 'kubejs:aetheric_vapor'
      },
    ],
    temperature: {
      min_temp: 300
    }
  }).id('pneumaticraft:refinery/ether_gas_refining');
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
