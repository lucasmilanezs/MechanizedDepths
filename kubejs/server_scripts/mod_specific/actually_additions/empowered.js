// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  event.custom({
    type: 'actuallyadditions:empowering',
    base: { item: 'kubejs:certite_crystal' },
    color: 5029631,
    energy: 25000,
    modifiers: [
      { item: 'create_new_age:overcharged_diamond' },
      { item: 'minecraft:quartz_block' },
      { item: 'ae2:quartz_block' },
      { item: 'kubejs:refined_quartz' }
    ],
    result: { item: 'kubejs:empowered_certite_crystal' },
    time: 50
  }).id('kubejs:empowering/certite_crystal');
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'actuallyadditions:empowering',
    base: { item: 'actuallyadditions:empowered_void_crystal' },
    color: 5029631,
    energy: 50000,
    modifiers: [
      { item: 'actuallyadditions:empowered_palis_crystal' },
      { item: 'actuallyadditions:empowered_diamatine_crystal' },
      { item: 'actuallyadditions:empowered_restonia_crystal' },
      { item: 'actuallyadditions:empowered_emeradic_crystal' }
    ],
    result: { item: 'kubejs:prismalith' },
    time: 50
  }).id('kubejs:empowering/prismalith');
});


//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

