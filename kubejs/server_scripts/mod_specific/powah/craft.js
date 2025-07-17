// POWAH - RECIPES CHANGE
// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================



//====================CHANGED RECIPES==================

// DIELETRIC PASTE
ServerEvents.recipes(event => {
  event.remove({ id: 'powah:crafting/dielectric_paste' });
  event.remove({ id: 'powah:crafting/dielectric_paste_2' });
  event.shapeless('powah:dielectric_paste', [
  'mekanism:enriched_carbon',
  'mekanism:enriched_carbon',
  'minecraft:blaze_powder',
  'kubejs:neodymium_dust',
    ]).id('kubejs:powah/dielectric_paste');
});


//====================COMPATIBILITY RECIPES==================

//RECIPE NAME