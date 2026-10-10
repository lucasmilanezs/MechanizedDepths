// THERMAL SERIES - FLUID ENCAPSULATOR

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================
// VITRIFIED OBSIDIAN
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal:bottler',
    ingredients: [
      { item: 'minecraft:sand' },
      { fluid: 'kubejs:obsidian_solution', amount: 500 }
    ],
    result: { item: 'kubejs:vitrified_obsidian' },
    energy: 4000
  }).id('kubejs:thermal/bottler/vitrified_obsidian');
});

// GELATINOUS ORGANIC SOLVENT
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal:bottler',
    ingredients: [
      { item: 'minecraft:slime_ball' },
      { fluid: 'kubejs:aqueous_organic_solvent', amount: 50 }
    ],
    result: { item: 'kubejs:gelatinous_organic_solvent' },
    energy: 4000
  }).id('kubejs:thermal/bottler/gelatinous_organic_solvent');
});

// SYNAPTIC INTERFACE ( joy )
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal:bottler',
    ingredients: [
      { item: 'kubejs:blank_synaptic_interface' },
      { fluid: 'kubejs:liquid_joy', amount: 2000 }
    ],
    result: { item: 'kubejs:synaptic_interface' },
    energy: 4000
  }).id('kubejs:thermal/bottler/synaptic_interface_from_liquid_joy');
});

// SYNAPTIC INTERFACE ( agony )
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal:bottler',
    ingredients: [
      { item: 'kubejs:blank_synaptic_interface' },
      { fluid: 'kubejs:liquid_agony', amount: 2000 }
    ],
    result: { item: 'kubejs:synaptic_interface' },
    energy: 4000
  }).id('kubejs:thermal/bottler/synaptic_interface_from_liquid_agony');
});

//====================CHANGED RECIPES==================

// REDSTONE INGOT
ServerEvents.recipes((event) => {
  event.remove({ id: 'extendedcrafting:redstone_ingot' });
  event.custom({
    type: 'thermal:bottler',
    ingredients: [
      { tag: 'forge:ingots/silver' },
      { fluid: 'thermal:redstone', amount: 450 }
    ],
    result: { item: 'extendedcrafting:redstone_ingot' },
    energy: 4000
  }).id('kubejs:thermal/bottler/redstone_ingot');
});

//CINNABAR
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:bottler',
    ingredients: [
      { item: 'minecraft:quartz' },
      { fluid: 'thermal:redstone', amount: 500 }
    ],
    result: { item: 'thermal:cinnabar' },
    energy: 6000
  }).id('kubejs:thermal/bottler/cinnabar');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME