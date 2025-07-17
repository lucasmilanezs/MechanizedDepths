// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

//PURE SILICON
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:centrifuge',
    energy: 10000,
    ingredients: [
      { tag: 'forge:dusts/quartz', count: 8 }
    ],
    result: [
      { item: 'kubejs:pure_silicon', count: 1 },
      { item: 'ae2:silicon', count: 7 }
    ]
  }).id('kubejs:thermal_extra/pure_silicon');
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME