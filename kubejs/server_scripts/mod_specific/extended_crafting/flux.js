// EXTENDED CRAFTING - FLUX CRAFTER 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================


// MACHINE INTERNALS
ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_flux_crafter(
        Item.of('kubejs:machine_internals'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: '#forge:plates/iron',
        B: '#forge:gears/lead',
        D: 'kubejs:redstone_component',
        C: 'thermal:rf_coil'
    }, 8000).id('kubejs:extended_crafting/extendedcrafting_shaped_flux_crafter/machine_internals');
});

// CALIBRATED INTERNALS
ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_flux_crafter(
        Item.of('kubejs:calibrated_internals'),
    [
        ' B ',
        'CDC',
        ' A '
    ],
    {
        A: '#forge:gears/lead',
        B: '#forge:rods/aluminum',
        D: 'kubejs:machine_internals',
        C: 'immersiveengineering:wirecoil_electrum_ins',
    }, 8000).id('kubejs:extended_crafting/extendedcrafting_shaped_flux_crafter/calibrated_internals');
});

// ENDER INTERNALS BASE
ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_flux_crafter(
        Item.of('kubejs:ender_internals_base'),
    [
        'ABA',
        'CDE',
        'ABA'
    ],
    {
        D: 'kubejs:calibrated_internals',
        B: 'thermal:enderium_gear',
        C: 'pneumaticcraft:printed_circuit_board',
        A: 'createmetallurgy:tungsten_sheet',
        E: 'kubejs:basic_electric_engine'
    }, 20000).id('kubejs:extended_crafting/extendedcrafting_shaped_flux_crafter/ender_internals_base');
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
