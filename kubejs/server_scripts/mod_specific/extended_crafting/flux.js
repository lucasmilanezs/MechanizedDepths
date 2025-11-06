// EXTENDED CRAFTING - FLUX CRAFTER 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

// REDSTONE FLUX SUPER COIL
ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_flux_crafter('kubejs:redstone_flux_super_coil', [
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
    event.recipes.extendedcrafting.shaped_flux_crafter('kubejs:rf_resonator', [
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