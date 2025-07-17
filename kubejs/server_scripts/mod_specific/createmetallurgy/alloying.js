// CREATE METALLURGY - ALLOYING RECIPES

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//RECIPE NAME

//====================CHANGED RECIPES==================
/*
//TWINITE INGOT
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal_extra:machine/smelter/twinite_ingot' });
  event.remove({ id: 'thermal_extra:twinite_dust' });
  event.custom({
    type: 'createmetallurgy:alloying',
    heatRequirement: 'blazing_composite',
    ingredients: [
      { item: 'kubejs:empowered_blazing_steel'},
      { item: 'kubejs:empowered_blazing_steel'},
      { item: 'thermal:tin_ingot' },
      { item: 'industrialforegoing:pink_slime_ingot' },
    ],
    processingTime: 100,
    results: [
      { fluid: 'thermal_extra:twinite', amount: 90 }
    ]
  }).id('kubejs:createmetallurgy/alloying/twinite_ingot');
});

//SHELLITE INGOT ( solid )
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal_extra:machine/smelter/shellite_ingot' });
  event.remove({ id: 'thermal_extra:shellite_dust' });
  event.custom({
    type: 'createmetallurgy:alloying',
    heatRequirement: 'entropic_mycelite',
    ingredients: [
      { item: 'thermal_extra:twinite_ingot' },
      { item: 'minecraft:shulker_shell' },
      { item: 'minecraft:shulker_shell' },
      { item: 'thermal:nickel_ingot' },
    ],
    processingTime: 100,
    results: [
      { fluid: 'thermal_extra:shellite', amount: 90 }
    ]
  }).id('kubejs:createmetallurgy/alloying/shellite_ingot');
});

//SHELLITE INGOT ( liquid )
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal_extra:machine/smelter/shellite_ingot' });
  event.remove({ id: 'thermal_extra:shellite_dust' });
  event.custom({
    type: 'createmetallurgy:alloying',
    heatRequirement: 'entropic_mycelite',
    ingredients: [
      { fluid: 'thermal_extra:twinite', amount: 90 },
      { item: 'minecraft:shulker_shell' },
      { item: 'minecraft:shulker_shell' },
      { item: 'thermal:nickel_ingot' },
    ],
    processingTime: 100,
    results: [
      { fluid: 'thermal_extra:shellite', amount: 90 }
    ]
  }).id('kubejs:createmetallurgy/alloying/shellite_liquid');
});

// DRAGONSTEEL INGOT (solid)
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal_extra:machine/smelter/dragonsteel_ingot' });
  event.remove({ id: 'thermal_extra:dragonsteel_dust' });
  event.custom({
    type: 'createmetallurgy:alloying',
    heatRequirement: 'aetherforged_cinderblock',
    ingredients: [
      { item: 'thermal_extra:shellite_ingot' },
      { item: 'minecraft:netherite_scrap'},
      { item: 'minecraft:netherite_scrap'},
      { item: 'thermal_extra:ancient_dust' }
    ],
    processingTime: 100,
    results: [
      { fluid: 'thermal_extra:dragonsteel', amount: 90 }
    ]
  }).id('kubejs:createmetallurgy/alloying/dragonsteel_ingot');
});

// DRAGONSTEEL INGOT (liquid)
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal_extra:machine/smelter/dragonsteel_ingot' });
  event.remove({ id: 'thermal_extra:dragonsteel_dust' });
  event.custom({
    type: 'createmetallurgy:alloying',
    heatRequirement: 'aetherforged_cinderblock',
    ingredients: [
      { fluid: 'thermal_extra:shellite', amount: 90 },
      { item: 'minecraft:netherite_scrap'},
      { item: 'minecraft:netherite_scrap'},
      { item: 'thermal_extra:ancient_dust'}
    ],
    processingTime: 100,
    results: [
      { fluid: 'thermal_extra:dragonsteel', amount: 90 }
    ]
  }).id('kubejs:createmetallurgy/alloying/dragonsteel_ingot_liquid');
});

// ABYSSAL INGOT (solid)
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal_extra:machine/smelter/abyssalite_ingot' });
  event.remove({ id: 'thermal_extra:abyssalite_dust' });
  event.custom({
    type: 'createmetallurgy:alloying',
    heatRequirement: 'aetherforged_cinderblock',
    ingredients: [
      { fluid: 'createmetallurgy:molten_void_steel', amount: 90 },
      { item: 'thermal_extra:dragonsteel_ingot' },
      { item: 'minecraft:echo_shard'},
      { item: 'minecraft:echo_shard'},
      { item: 'kubejs:resonant_dust' }
    ],
    processingTime: 100,
    results: [
      { fluid: 'thermal_extra:abyssal', amount: 90 }
    ]
  }).id('kubejs:createmetallurgy/alloying/abyssalite_ingot');
});

// ABYSSAL INGOT (liquid)
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal_extra:machine/smelter/abyssal_ingot' });
  event.remove({ id: 'thermal_extra:abyssal_dust' });
  event.custom({
    type: 'createmetallurgy:alloying',
    heatRequirement: 'aetherforged_cinderblock',
    ingredients: [
      { fluid: 'createmetallurgy:molten_void_steel', amount: 90 },
      { fluid: 'thermal_extra:dragonsteel', amount: 90 },
      { item: 'minecraft:echo_shard'},
      { item: 'minecraft:echo_shard'},
      { item: 'kubejs:resonant_dust' }
    ],
    processingTime: 100,
    results: [
      { fluid: 'thermal_extra:abyssal', amount: 90 }
    ]
  }).id('kubejs:createmetallurgy/alloying/abyssalite_ingot_liquid');
});
*/
//====================COMPATIBILITY RECIPES==================

//RECIPE NAME