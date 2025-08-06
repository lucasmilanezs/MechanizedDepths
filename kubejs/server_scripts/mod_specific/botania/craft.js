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
    '   ',
    'LLL',
    'LPL'
  ], {
    L: 'botania:livingrock',
    P: 'kubejs:botanic_processor'
  }).id('kubejs:botania/runic_altar');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME