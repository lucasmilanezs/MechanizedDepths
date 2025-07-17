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
  ]).superheated()
})

// SLAG SLURRY
ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    Fluid.of('kubejs:slag_slurry', 250), // Resultado
    [
      Fluid.of('minecraft:water', 250),  // Água
      Ingredient.of('#forge:slag').withCount(4) // 4x qualquer item com a tag
    ]
  ).id('kubejs:mixing/slag_slurry');
});

//MONOSILICON
ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    Item.of('kubejs:monosilicon', 1),
    [
      'kubejs:silicon_crystal_seed',
      Fluid.of('kubejs:molten_silicon', 720) 
    ]
  ).id('kubejs:mixing/monosilicon');
});


//====================CHANGED RECIPES==================

//===================COMPATIBILITY RECIPES==================