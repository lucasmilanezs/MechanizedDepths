// MOB GRINDING UTILITIES - TABLE RECIPE CHANGES

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//MOBGRINDIUM
ServerEvents.recipes(event => {
  event.shaped('kubejs:mobgrindium_ingot', [
    'FBG',
    'ASA',
    'GBF'
  ], {
    S: 'enderio:soularium_ingot',
    F: 'minecraft:rotten_flesh',
    G: 'minecraft:gunpowder',
    B: 'minecraft:bone',
    A: 'minecraft:string'
  });
});

//====================CHANGED RECIPES==================

//MOB MASHER
ServerEvents.recipes(event => {
  event.remove({ id: 'mob_grinding_utils:recipe_saw' });
  event.shaped(
    Item.of('mob_grinding_utils:saw'),
    [
        'ABA',
        'CDC',
        'BEB'
    ],
    {
        E: '#forge:storage_blocks/steel',
        A: 'minecraft:iron_sword',
        D: 'kubejs:redstone_component',
        B: 'kubejs:mobgrindium_ingot',
        C: 'mob_grinding_utils:spikes'
    });
});

//MOB FAN
ServerEvents.recipes(event => {
  event.remove({ id: 'mob_grinding_utils:recipe_fan' });
  event.shaped(
    Item.of('mob_grinding_utils:fan'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        C: 'kubejs:redstone_component',
        B: 'kubejs:mobgrindium_ingot',
        A: 'thermal:steel_plate'
    });
});

//MOB FAN DISTANCE UPGRADE
ServerEvents.recipes(event => {
  event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_speed' });
  event.shaped(
    Item.of('mob_grinding_utils:fan_upgrade_speed'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        A: '#forge:feathers',
        C: 'kubejs:rudimentary_redstone_component',
        B: 'kubejs:mobgrindium_ingot'
    });
});

//MOB FAN HEIGHT UPGRADE
ServerEvents.recipes(event => {
  event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_height' });
  event.shaped(
    Item.of('mob_grinding_utils:fan_upgrade_height'),
    [
        'ABA',
        ' B ',
        'ABA'
    ],
    {
        A: 'kubejs:mobgrindium_ingot',
        B: '#forge:feathers'
    });
});

//MOB FAN WIDTH UPGRADE
ServerEvents.recipes(event => {
  event.remove({ id: 'mob_grinding_utils:recipe_fan_upgrade_width' });
  event.shaped(
    Item.of('mob_grinding_utils:fan_upgrade_width'),
    [
        'A A',
        'BBB',
        'A A'
    ],
    {
        A: 'kubejs:mobgrindium_ingot',
        B: '#forge:feathers'
    });
});

//MOB MASHER SHARPNESS UPGRADE
ServerEvents.recipes(event => {
  event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_sharpness' });
  event.shaped(
    Item.of('mob_grinding_utils:saw_upgrade_sharpness'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        B: 'minecraft:iron_sword',
        C: 'kubejs:redstone_component',
        A: 'kubejs:mobgrindium_ingot'
    });
});

// MOB MASHER LOOTING UPGRADE
ServerEvents.recipes(event => {
  event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_looting' });
  event.shaped(
    Item.of('mob_grinding_utils:saw_upgrade_looting'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        C: 'kubejs:redstone_component',
        A: 'kubejs:mobgrindium_ingot',
        B: 'minecraft:lapis_lazuli'
    });
});

// MOB MASHER BEHEADING UPGRADE
ServerEvents.recipes(event => {
  event.remove({ id: 'mob_grinding_utils:recipe_saw_upgrade_beheading' });
  event.shaped(
    Item.of('mob_grinding_utils:saw_upgrade_beheading'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        C: 'minecraft:iron_helmet',
        B: 'minecraft:golden_helmet',
        D: 'kubejs:redstone_component',
        A: 'kubejs:mobgrindium_ingot'
    });
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME