// IMMERSIVE ENGINEERING - ARC FURNACE RECIPE CHANGES

// GENERAL TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    input: { item: 'main_item' },
    additives: [
      { item: 'secondary1' },
      { item: 'secondary2' },
      { item: 'secondary3' }
    ],
    results: [
      { item: 'result' }
    ],
    secondaries: [
      { item: 'secondary_result1' }, 
    ],
    
    time: 400,
    energy: 51200
  });
});
*/
//===============CUSTOM RECIPES==================


// INDUCTIVE ALLOY (kubejs:inductive_alloy)
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    input: { item: 'enderio:energetic_alloy_ingot' },
    additives: [
      { item: 'thermal:constantan_ingot' },
      { item: 'thermal:lapis_dust' },
      { item: 'thermal:quartz_dust' }
    ],
    results: [
      { item: 'kubejs:inductive_alloy' }
    ],
    time: 400,
    energy: 51200
  });
});

// OSGLOGLIUM (kubejs:osgloglium)
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    input: { item: 'kubejs:inductive_alloy' },
    additives: [
      { item: 'mekanism:ingot_refined_glowstone' }
    ],
    results: [
      { item: 'kubejs:osgloglium', count: 1 }
    ],
    time: 300,
    energy: 60000
  });
});

// REFINED QUARTZ (kubejs:refined_quartz)
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    input: { item: 'kubejs:inductive_alloy' },
    additives: [
      { base_ingredient: { item: 'mekanism:ingot_refined_obsidian' }, count: 1 },
      { base_ingredient: { item: 'minecraft:quartz' }, count: 2 }
    ],
    results: [
      { item: 'kubejs:refined_quartz', count: 1 }
    ],
    time: 360,
    energy: 70000
  });
});


// =============== CHANGED RECIPES ===============


// =============== COMPATIBILITY RECIPES ===============
// ENERGETIC ALLOY 
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    input: { item: 'minecraft:gold_ingot' },
    additives: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:glowstone_dust' }
    ],
    results: [
      { item: 'enderio:energetic_alloy_ingot' }
    ],
    time: 400,
    energy: 60000
  });
});

