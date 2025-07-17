// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

// REMOVE ARC TUNGSTEN 
ServerEvents.recipes(event => {
  event.remove({ id: 'immersiveengineering:arcfurnace/dust_tungsten' });
  event.remove({ id: 'immersiveengineering:arcfurnace/raw_ore_tungsten' });
})

//FOUNDRY BASIN
ServerEvents.recipes(event => {~
  event.remove({ id: 'createmetallurgy:crafting/content/foundry_basin' });
  event.shaped('createmetallurgy:foundry_basin', [
    'ABA',
    'ARA',
    'AAA'
  ], {
    A: 'createmetallurgy:tungsten_ingot',
    B: 'kubejs:meattherial',
    R: 'createmetallurgy:refractory_mortar',
  }).id('kubejs:foundry_basin');
})

// FOUNDRY LID
ServerEvents.recipes(event => {
  event.remove({ id: 'createmetallurgy:crafting/content/foundry_lid' });
  event.shaped('createmetallurgy:foundry_lid', [
    '   ',
    'ABA',
    'A A'
  ], {
    A: 'createmetallurgy:tungsten_ingot',
    B: 'kubejs:meattherial'
  }).id('kubejs:foundry_lid');
})

ServerEvents.recipes(event => {
  event.remove({ id: 'createmetallurgy:crafting/content/glassed_foundry_lid' });
  event.shaped('createmetallurgy:glassed_foundry_lid', [
    'ABA',
    'G G'
  ], {
    A: 'createmetallurgy:tungsten_ingot',
    B: 'kubejs:meattherial',
    G: 'kubejs:vitrified_obsidian'
  }).id('kubejs:glassed_foundry_lid');
})

// BLAZING COMPOSITE
ServerEvents.recipes(event => {
  event.shaped('kubejs:blazing_composite', [
    'COC',
    'NCN',
    'COC'
  ], {
    C: 'kubejs:calcined_blaze_composite',
    N: 'kubejs:obsidianite',
    O: 'minecraft:obsidian'
  }).id('kubejs:blazing_composite');
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

