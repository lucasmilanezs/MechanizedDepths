// ENDER STORAGE - TABLE RECIPE CHANGES

//====================CUSTOM RECIPES==================

//====================CHANGED RECIPES==================

// ENDER CHEST
ServerEvents.recipes(event => {
  event.remove({ id: 'enderstorage:ender_chest' });
  event.shaped('enderstorage:ender_chest', [
    'SWS',
    'OCO',
    'SPS'
  ], {
    S: '#forge:ingots/soularium',
    W: '#forge:wool',
    O: '#forge:obsidian',
    C: '#forge:chests/wooden',
    P: '#forge:gems/ender_crystal'
  }).id('kubejs:enderstorage/crafting/ender_chest');
});

// ENDER TANK
ServerEvents.recipes(event => {
  event.remove({ id: 'enderstorage:ender_tank' });
  event.shaped('enderstorage:ender_tank', [
    'SWS',
    'OCO',
    'SPS'
  ], {
    S: '#forge:ingots/soularium',
    W: '#forge:wool',
    O: '#forge:obsidian',
    C: 'minecraft:cauldron',
    P: '#forge:gems/ender_crystal'
  }).id('kubejs:enderstorage/crafting/ender_tank');
});

// ENDER POUCH
ServerEvents.recipes(event => {
  event.remove({ id: 'enderstorage:ender_pouch' });
  event.shaped('enderstorage:ender_pouch', [
    'NLN',
    'LPL',
    'NWN'
  ], {
    N: '#forge:nuggets/soularium',
    L: '#forge:leather',
    P: '#forge:gems/ender_crystal',
    W: '#forge:wool'
  }).id('kubejs:enderstorage/crafting/ender_pouch');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
