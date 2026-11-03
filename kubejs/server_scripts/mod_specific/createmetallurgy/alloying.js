// CREATE METALLURGY - ALLOYING RECIPES

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//RECIPE NAME

//====================CHANGED RECIPES==================
// THERMAL EXTRA ALLOYS
// Foundry alloying is the only way to form them; each one sits on its own heat source.
ServerEvents.recipes(event => {
  [
    'thermal_extra:machine/smelter/soul_infused_ingot',
    'thermal_extra:machine/smelter/twinite_ingot',
    'thermal_extra:machine/smelter/shellite_ingot',
    'thermal_extra:machine/smelter/dragonsteel_ingot',
    'thermal_extra:machine/smelter/abyssal_ingot',
    'thermal_extra:soul_infused_dust',
    'thermal_extra:twinite_dust',
    'thermal_extra:shellite_dust',
    'thermal_extra:dragonsteel_dust',
    'thermal_extra:abyssal_dust',
    'createmetallurgy:alloying/obdurium'
  ].forEach(id => event.remove({ id: id }));

  const ALLOYS = {
    soul_infused: {
      heat: 'superheated',
      ingredients: [
        { tag: 'forge:ingots/iron' },
        { tag: 'forge:ingots/copper' },
        { tag: 'forge:dusts/soul_sand' },
        { tag: 'forge:dusts/soul_sand' }
      ]
    },
    twinite: {
      heat: 'blazing_composite',
      ingredients: [
        { tag: 'forge:ingots/tin' },
        { tag: 'forge:ingots/tin' },
        { tag: 'forge:dusts/obsidian' },
        { item: 'minecraft:blaze_powder' },
        { fluid: 'kubejs:melted_blaze_metal', amount: 250 }
      ]
    },
    shellite: {
      heat: 'entropic_mycelite',
      ingredients: [
        { tag: 'forge:ingots/lead' },
        { tag: 'forge:ingots/nickel' },
        { item: 'minecraft:shulker_shell' },
        { item: 'minecraft:shulker_shell' },
        { fluid: 'kubejs:spectral_oil', amount: 250 }
      ]
    },
    dragonsteel: {
      heat: 'aetherforged_cinderblock',
      ingredients: [
        { tag: 'forge:ingots/enderium' },
        { item: 'thermal_extra:ancient_dust' },
        { fluid: 'kubejs:aetheric_vapor', amount: 250 }
      ]
    },
    abyssal: {
      heat: 'echo_fused_obsidianite',
      ingredients: [
        { tag: 'forge:dusts/netherite' },
        { item: 'minecraft:echo_shard' },
        { item: 'thermal_extra:ancient_dust' },
        { item: 'thermal_extra:ancient_dust' },
        { fluid: 'kubejs:void_heavy_oil', amount: 250 }
      ]
    }
  };

  Object.keys(ALLOYS).forEach(name => {
    event.custom({
      type: 'createmetallurgy:alloying',
      heatRequirement: ALLOYS[name].heat,
      ingredients: ALLOYS[name].ingredients,
      processingTime: 100,
      results: [
        { fluid: 'thermal_extra:' + name, amount: 180 },
        { fluid: 'createmetallurgy:molten_slag', amount: 50 }
      ]
    }).id('kubejs:createmetallurgy/alloying/' + name);
  });

  // Obdurium feeds on the slag every earlier alloy leaves behind; it is cast over an abyssal ingot.
  event.custom({
    type: 'createmetallurgy:alloying',
    heatRequirement: 'superheated',
    ingredients: [
      { fluid: 'createmetallurgy:molten_slag', amount: 500 },
      { tag: 'forge:ingots/compressed_iron' },
      { tag: 'forge:ingots/compressed_iron' },
      { tag: 'forge:ingots/refined_obsidian' }
    ],
    processingTime: 200,
    results: [{ fluid: 'kubejs:molten_obdurate_slag', amount: 180 }]
  }).id('kubejs:createmetallurgy/alloying/molten_obdurate_slag');
});
//====================COMPATIBILITY RECIPES==================

//RECIPE NAME