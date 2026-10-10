// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================



//====================CHANGED RECIPES==================

//FLUX CRAFTER
ServerEvents.recipes(event => {
    event.remove({ id: 'extendedcrafting:flux_crafter' });
    event.shaped(
    Item.of('extendedcrafting:flux_crafter'),
    [
        'AAA',
        'BCB',
        'BBB'
    ],
    {
        C: 'minecraft:crafting_table',
        B: '#forge:ingots/redstone_ingot',
        A: '#forge:plates/gold'
    }).id('kubejs:extended_crafting/crafting/flux_crafter');
});

//AUTO FLUX CRAFTER
ServerEvents.recipes(event => {
    event.remove({ id: 'extendedcrafting:auto_flux_crafter' }); 
    event.shaped(
    Item.of('extendedcrafting:auto_flux_crafter'),
    [
        'ABA',
        'CDC',
        'EEE'
    ],
    {
        C: 'mekanism:advanced_control_circuit',
        E: '#forge:ingots/redstone_alloy',
        A: '#forge:gears/rose_gold',
        D: 'extendedcrafting:flux_crafter',
        B: 'thermal:machine_crafter'
    }).id('kubejs:extended_crafting/crafting/auto_flux_crafter');
});

//FLUX ALTERNATOR
ServerEvents.recipes(event => {
    event.remove({ id: 'extendedcrafting:flux_alternator' });
    event.shaped(
    Item.of('extendedcrafting:flux_alternator', 2),
    [
        ' A ',
        'BCB',
        'DDD'
    ],
    {
        D: '#forge:ingots/redstone_ingot',
        A: 'immersiveengineering:wire_electrum',
        C: 'kubejs:redstone_component',
        B: '#forge:plates/electrum'
    }).id('kubejs:extended_crafting/crafting/flux_alternator');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME