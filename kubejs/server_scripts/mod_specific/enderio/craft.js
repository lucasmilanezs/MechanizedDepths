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

//====================COMPATIBILITY RECIPES==================