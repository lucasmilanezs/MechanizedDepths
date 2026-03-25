// EXTENDED CRAFTING - FLUX CRAFTER 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

// REDSTONE FLUX SUPER COIL
ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_flux_crafter(
        Item.of('kubejs:redstone_flux_super_coil', 3),     
    [
        'RER',
        'ERE',
        'RER'
    ], {
        R: 'thermal:rf_coil',
        E: '#forge:ingots/electrum'
    }, 2000);
});

//REDSTONE FLUX RESONATOR
ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_flux_crafter(
        Item.of('kubejs:rf_resonator', 3),     
    [
        'RER',
        'ERE',
        'RER'
    ], {
        R: 'kubejs:redstone_flux_super_coil',
        E: 'kubejs:inductive_alloy'
    }, 8000);
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME