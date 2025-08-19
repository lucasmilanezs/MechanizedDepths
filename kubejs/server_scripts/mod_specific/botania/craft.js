// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

// 

//====================CHANGED RECIPES==================

//RUNIC ALTAR
ServerEvents.recipes(event => {
  event.remove({ id: 'botania:runic_altar_alt' });
  event.remove({ id: 'botania:runic_altar' });
  event.shaped('botania:runic_altar', [
    ' M ',
    'LLL',
    'LPL'
  ], {
    L: 'kubejs:lucent_plate',
    P: 'kubejs:botanic_processor',
    M: 'botania:mana_pearl'

  }).id('kubejs:botania/runic_altar');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME