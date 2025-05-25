// THERMAL SERIES - FRACTIONATING STILL 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================
// AQUE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:refinery',
    ingredients: [
      { fluid: 'immersiveengineering:plantoil', amount: 500 }
    ],
    result: [
      { fluid: 'kubejs:aqueous_organic_solvent', amount: 250 },
      {
        item: 'thermal:rosin',
        chance: 0.25
      }
    ],
    energy: 6000
  });
});
//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME