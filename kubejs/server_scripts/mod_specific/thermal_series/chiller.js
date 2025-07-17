// THERMAL SERIES - CHILLER 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

// BLAZE GLASS COMPOUND
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:chiller',
    ingredients: [
      { fluid: 'kubejs:melted_blaze_metal', amount: 500 }
    ],
    result: { item: 'kubejs:blaze_glass_compound' },
    energy: 6000
  });
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:chiller',
    ingredients: [
      { fluid: 'minecraft:water', amount: 500 },
      { item: 'minecraft:gunpowder' }
    ],
    result: { item: 'thermal:ice_charge' },
    energy: 4000
  });
});

// TITANIUM SPONGE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:chiller',
    ingredients: [
      { item: 'kubejs:titanium_sponge_raw' }
    ],
    result: { item: 'kubejs:titanium_sponge_pure' },
    energy: 5000
  });
});


//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME