// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

//FERISIL SLAG
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:crystallizer',
    energy: 10000,
    ingredients: [
      { fluid: 'kubejs:mineral_sludge', amount: 500 },
      { item: 'minecraft:gravel', count: 1},
    ],
    result: [
      { item: 'kubejs:ferrisil_slag', count: 8 }
    ]
  }).id('kubejs:thermal_extra/ferrisil_slag');
});

//VITROCLASTIC SLAG
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:crystallizer',
    energy: 10000,
    ingredients: [
      { fluid: 'kubejs:mineral_sludge', amount: 500 },
      { tag: 'forge:dusts/quartz', count: 1},
    ],
    result: [
      { item: 'kubejs:vitroclastic_slag', count: 8 }
    ]
  }).id('kubejs:thermal_extra/vitroclastic_slag');
});

//LANTHANIC CRYSTAL
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:crystallizer',
    energy: 10000,
    ingredients: [
      { fluid: 'kubejs:mineral_sludge', amount: 500 },
      { tag: 'forge:dusts/lapis', count: 1},
    ],
    result: [
      { item: 'kubejs:lanthanic_crystal', count: 8 }
    ]
  }).id('kubejs:thermal_extra/lanthanic_crystal');
});

//CRYSTAL OF DEMONIC LOVE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:crystallizer',
    energy: 10000,
    ingredients: [
      { fluid: 'kubejs:liquid_love', amount: 500 },
      { item: 'kubejs:demonic_love', count: 1},
    ],
    result: [
      { item: 'kubejs:demonic_love', count: 2 }
    ]
  }).id('kubejs:thermal_extra/crystal_of_demonic_love');
});

//====================CHANGED RECIPES==================



//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME