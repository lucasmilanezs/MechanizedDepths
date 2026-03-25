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
        B: 'extendedcrafting:redstone_ingot',
        A: 'thermal:gold_plate'
    });
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
        E: 'enderio:redstone_alloy_ingot',
        A: 'thermal:rose_gold_gear',
        D: 'extendedcrafting:flux_crafter',
        B: 'thermal:machine_crafter'
    });
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
        D: 'extendedcrafting:redstone_ingot',
        A: 'immersiveengineering:wire_electrum',
        C: 'kubejs:redstone_component',
        B: 'thermal:electrum_plate'
    });
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME