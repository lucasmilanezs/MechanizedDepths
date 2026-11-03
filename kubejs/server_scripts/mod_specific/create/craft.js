// CREATE - TABLE RECIPE CHANGES

//===================CUSTOM RECIPES==================

// TWINITE WIRE
ServerEvents.recipes(event => {
  event.recipes.create.cutting(Item.of('kubejs:twinite_wire', 2), '#forge:plates/twinite')
    .processingTime(50)
    .id('kubejs:create/cutting/twinite_wire');
});

//====================CHANGED RECIPES==================

// ANDESITE ALLOY
ServerEvents.recipes(event => {
  event.remove({ output: 'create:andesite_alloy' })
  event.shaped('4x create:andesite_alloy', [
    'AR',
    'RA'
  ], {
    A: 'minecraft:andesite',
    R: 'kubejs:runic_stone'  
  }).id('kubejs:create/crafting/andesite_alloy')
})

//===================COMPATIBILITY RECIPES==================
