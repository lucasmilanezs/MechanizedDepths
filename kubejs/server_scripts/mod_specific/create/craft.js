// CREATE - TABLE RECIPE CHANGES

//===================CUSTOM RECIPES==================

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
  })
})

//===================COMPATIBILITY RECIPES==================
