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
    input: { tag: 'forge:ingots/energetic_alloy' },
    additives: [
      { tag: 'forge:ingots/constantan' },
      { item: 'thermal:lapis_dust' },
      { tag: 'forge:dusts/quartz' }
    ],
    results: [
      { item: 'kubejs:inductive_alloy', count: 2 }
    ],
    time: 400,
    energy: 10000
  }).id('kubejs:immersiveengineering/arc_furnace/inductive_alloy');
});

// TITANIUM INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    input: { item: 'kubejs:titanium_sponge_pure' },
    additives: [],
    results: [
      { item: 'kubejs:ingot_titanium' }
    ],
    time: 400,
    energy: 100000
  }).id('kubejs:immersiveengineering/arc_furnace/ingot_titanium');
});

// =============== CHANGED RECIPES ===============


// =============== COMPATIBILITY RECIPES ===============
// ENERGETIC ALLOY 
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    input: { tag: 'forge:ingots/gold' },
    additives: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:glowstone_dust' }
    ],
    results: [
      { item: 'enderio:energetic_alloy_ingot' }
    ],
    time: 400,
    energy: 20000
  }).id('kubejs:immersiveengineering/arc_furnace/energetic_alloy_ingot');
});

