// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

//RECIPE NAME

//====================CHANGED RECIPES==================

// CALCINATED BLAZE COMPOSITE
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal_extra:endothermic_dehydrator',
    energy: 5000,
    ingredients: [
      {
        fluid: 'kubejs:melted_blaze_metal' , amount: 500
      }
    ],
    result: [
      {
        item: 'kubejs:calcined_blaze_composite'
      },
      {
        item: 'minecraft:netherrack',
        chance: 0.25
      },
      {
        item: 'thermal:sulfur_dust',
        chance: 0.1
      }
    ]
  }).id('kubejs:thermal_extra/dehydrate_lava');
});

// WATER TO MAGNESIUM DUST
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal_extra:endothermic_dehydrator',
    energy: 5000,
    ingredients: [
      {
        fluid: 'minecraft:water', amount: 1000
      }
    ],
    result: [
      {
        item: 'kubejs:dust_magnesium',
        chance: 0.1
      },
      {
        item: 'mekanism:salt',
        chance: 0.2
      },
      {
        item: 'minecraft:prismarine_shard',
        chance: 0.1
      },
      {
        item: 'minecraft:prismarine_crystals',
        chance: 0.05
      }
    ]
  }).id('kubejs:thermal_extra/dehydrate_water');
});

//BRINE TO MAGNESIUM DUST
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal_extra:endothermic_dehydrator',
    energy: 5000,
    ingredients: [
      {
        fluid: 'mekanism:brine', amount: 1000
      }
    ],
    result: [
      {
        item: 'kubejs:dust_magnesium',
        chance: 0.25
      },
      {
        item: 'mekanism:salt',
        chance: 0.25
      },
      {
        item: 'minecraft:prismarine_shard',
        chance: 0.15
      },
      {
        item: 'minecraft:prismarine_crystals',
        chance: 0.1
      }
    ]
  }).id('kubejs:thermal_extra/dehydrate_brine');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

