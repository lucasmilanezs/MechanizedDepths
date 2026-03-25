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

// COMPAT ORE SORTING
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:centrifuge',
    energy: 10000,
    ingredients: [
      { item: 'kubejs:cassiterite_raw' }
    ],
    result: [
      { item: 'thermal:raw_tin', count: 1 },
      { item: 'thermal:raw_tin', chance: 0.35 },
      { item: 'minecraft:raw_iron', chance: 0.15 }
    ]
  }).id('kubejs:thermal_compat/cassiterite_raw');

  event.custom({
    type: 'thermal:centrifuge',
    energy: 10000,
    ingredients: [
      { item: 'kubejs:chalcopyrite_raw' }
    ],
    result: [
      { item: 'minecraft:raw_copper', count: 1 },
      { item: 'minecraft:raw_iron', chance: 0.35 },
      { item: 'thermal:raw_silver', chance: 0.10 },
      { item: 'thermal:sulfur_dust', chance: 0.25 }
    ]
  }).id('kubejs:thermal_compat/chalcopyrite_raw');

  event.custom({
    type: 'thermal:centrifuge',
    energy: 10000,
    ingredients: [
      { item: 'kubejs:galena_raw' }
    ],
    result: [
      { item: 'thermal:raw_lead', count: 1 },
      { item: 'thermal:raw_silver', chance: 0.35 },
      { item: 'minecraft:raw_copper', chance: 0.25 }
    ]
  }).id('kubejs:thermal_compat/galena_raw');

  event.custom({
    type: 'thermal:centrifuge',
    energy: 10000,
    ingredients: [
      { item: 'kubejs:hematite_raw' }
    ],
    result: [
      { item: 'minecraft:raw_iron', count: 1 },
      { item: 'minecraft:raw_iron', chance: 0.65 }
    ]
  }).id('kubejs:thermal_compat/hematite_raw');

  event.custom({
    type: 'thermal:centrifuge',
    energy: 10000,
    ingredients: [
      { item: 'kubejs:pentlandite_raw' }
    ],
    result: [
      { item: 'thermal:raw_nickel', count: 1 },
      { item: 'minecraft:raw_iron', chance: 0.45 },
      { item: 'thermal:sulfur', chance: 0.45 }
    ]
  }).id('kubejs:thermal_compat/pentlandite_raw');

  event.custom({
    type: 'thermal:centrifuge',
    energy: 10000,
    ingredients: [
      { item: 'kubejs:argentite_raw' }
    ],
    result: [
      { item: 'thermal:raw_silver', count: 1 },
      { item: 'thermal:raw_silver', chance: 0.35 },
      { item: 'thermal:sulfur', chance: 0.45 }
    ]
  }).id('kubejs:thermal_compat/argentite_raw');

  event.custom({
    type: 'thermal:centrifuge',
    energy: 10000,
    ingredients: [
      { item: 'kubejs:bauxite_raw' }
    ],
    result: [
      { item: 'alltheores:raw_aluminum', count: 1 },
      { item: 'alltheores:raw_aluminum', chance: 0.35 },
      { item: 'minecraft:raw_iron', chance: 0.35 }
    ]
  }).id('kubejs:thermal_compat/bauxite_raw');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME