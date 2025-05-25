// CREATE - MIXING RECIPES

// TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.recipes.create.mixing(Item.of('result', 4), [
    'material_1',
    'material_2'
  ])
})
*/

//===================CUSTOM RECIPES===================

// EMPOWERED BLAZE POWDER
ServerEvents.recipes(event => {
  event.recipes.create.mixing(Item.of('kubejs:empowered_blaze_powder', 4), [
    'minecraft:lapis_lazuli',
    'thermal:diamond_dust'
  ])
})

// EMPOWERED BLAZING STEEL
ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    ['kubejs:empowered_blazing_steel'],
    [
      'kubejs:blazing_steel',
      'kubejs:empowered_blaze_powder'
    ]
  ).superheated()
})

// MELTED BLAZE METAL
ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    Fluid.of('kubejs:melted_blaze_metal', 500),
    ['kubejs:empowered_blazing_steel']
  ).superheated()
})

// VOID FRAGMENT
ServerEvents.recipes(event => {
  event.recipes.create.mixing(Item.of('kubejs:void_fragment', 1), [
    'minecraft:ender_pearl',
    '4x enderio:grains_of_infinity'
  ])
})

//====================CHANGED RECIPES==================

//===================COMPATIBILITY RECIPES==================