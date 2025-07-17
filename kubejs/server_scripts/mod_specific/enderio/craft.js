// ENDERIO - TABLE RECIPE CHANGES

//====================CUSTOM RECIPES==================



//====================CHANGED RECIPES==================

// VOID CHASSIS
ServerEvents.recipes(event => {
  event.remove({ output: 'enderio:void_chassis' });
  event.shaped('enderio:void_chassis', [
    'ISI',
    'SES',
    'ISI'
  ], {
    S: 'thermal:steel_ingot',
    E: 'kubejs:entropic_drive',
    I: 'minecraft:iron_bars' 
    });
    
});
// ENSOULED CHASSIS
ServerEvents.recipes(event => {
  event.remove({ output: 'enderio:ensouled_chassis' });
  event.shaped('enderio:ensouled_chassis', [
    'SES',
    'EVE',
    'SES'
  ], {
    S: 'enderio:soul_chain',
    E: 'enderio:end_steel_ingot',
    V: 'enderio:void_chassis', 
    });
    
});

// PRIMITIVE ALLOY SMELTER
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:primitive_alloy_smelter' });
  event.shaped('enderio:primitive_alloy_smelter', [
    'FFF',
    'SCS',
    'SSS'
  ], {
    F: 'minecraft:furnace',
    C: 'enderio:void_chassis',
    S: 'minecraft:deepslate',
  });
});

// ALLOY SMELTER
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:alloy_smelter' });
  event.shaped('enderio:alloy_smelter', [
    'DAD',
    'FIF',
    'GCG'
  ], {
    F: 'minecraft:furnace',
    I: 'enderio:grains_of_infinity',
    C: 'minecraft:cauldron',
    G: 'enderio:iron_gear',
    A: 'enderio:primitive_alloy_smelter',
    D: 'enderio:dark_steel_ingot'
  });
});
//====================COMPATIBILITY RECIPES==================