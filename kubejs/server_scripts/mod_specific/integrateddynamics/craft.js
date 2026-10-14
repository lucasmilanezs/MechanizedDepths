// INTEGRATED DYNAMICS - TABLE CRAFTING RECIPES 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//RECIPE NAME

//====================CHANGED RECIPES==================

// SQUEEZER
ServerEvents.recipes(event => {
  event.remove({ id: 'integrateddynamics:crafting/squeezer' })
    event.shaped(
    Item.of('integrateddynamics:squeezer'),
    [
        'ABA',
        'A A',
        'CCC'
    ],
    {
        A: '#forge:rods/steel',
        C: '#forge:plates/steel',
        B: 'create:mechanical_press'
    }
).id('kubejs:integrateddynamics/crafting/squeezer')});

// DRYING BASIN
ServerEvents.recipes(event => {
  event.remove({ id: 'integrateddynamics:crafting/drying_basin' })
    event.shaped(
    Item.of('integrateddynamics:drying_basin'),
    [
        'C C',
        'A A',
        'AAA'
    ],
    {
        A: '#minecraft:logs',
        C: '#forge:plates/steel'
    }
).id('kubejs:integrateddynamics/crafting/drying_basin')});

// ENERGY BATTERY
ServerEvents.recipes(event => {
  event.remove({ id: 'integrateddynamics:crafting/energy_battery' })
    event.shaped(
    Item.of('integrateddynamics:energy_battery'),
    [
        'ABA',
        'ACA',
        'ABA'
    ],
    {
        C: 'immersiveengineering:capacitor_mv',
        A: 'integrateddynamics:crystalized_menril_chunk',
        B: 'integrateddynamics:crystalized_menril_block'
    }
).id('kubejs:integrateddynamics/crafting/energy_battery')});

// MECHANICAL SQUEEZER
ServerEvents.recipes(event => {
  event.remove({ id: 'integrateddynamics:crafting/mechanical_squeezer' })
  event.shaped(
    Item.of('integrateddynamics:mechanical_squeezer'),
    [
        'ABA',
        'ACA',
        'ADA'
    ],
    {
        D: 'integrateddynamics:energy_battery',
        B: 'kubejs:machine_internals',
        C: 'integrateddynamics:squeezer',
        A: 'integrateddynamics:crystalized_menril_chunk'
    }
).id('kubejs:integrateddynamics/crafting/mechanical_squeezer')});


// MECHANICAL DRYING BASIN
ServerEvents.recipes(event => {
  event.remove({ id: 'integrateddynamics:crafting/mechanical_drying_basin' })
    event.shaped(
        Item.of('integrateddynamics:mechanical_drying_basin'),
        [
            'ABA',
            'ACA',
            'ADA'
        ],
        {
            D: 'integrateddynamics:energy_battery',
            B: 'kubejs:machine_internals',
            C: 'integrateddynamics:drying_basin',
            A: 'integrateddynamics:crystalized_menril_chunk'
        }
).id('kubejs:integrateddynamics/crafting/mechanical_drying_basin')});

//====================COMPATIBILITY RECIPES==================

//RECIPE 