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
      { item: 'kubejs:inductive_alloy', count: 2 }
    ],
    time: 400,
    energy: 51200
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

