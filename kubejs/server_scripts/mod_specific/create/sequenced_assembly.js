// CREATE - SEQUENCED ASSEMBLY
// TEMPLATE:
/*
// CREATE - FULL SEQUENCED ASSEMBLY TEMPLATE

ServerEvents.recipes(event => {
  const transitional = 'kubejs:incomplete_core'

  event.recipes.create.sequenced_assembly(
    [Item.of('kubejs:precision_matrix_core')],
    Item.of('minecraft:iron_ingot'),
    [
      event.recipes.create.deploying(Item.of(transitional), [Item.of(transitional), 'minecraft:redstone']),
      event.recipes.create.cutting(Item.of(transitional), Item.of(transitional)).processingTime(100),
      event.recipes.create.pressing(Item.of(transitional), Item.of(transitional)),
      event.recipes.create.filling(Item.of(transitional), [Item.of(transitional), Fluid.lava(250)]),
      event.recipes.create.deploying(Item.of(transitional), [Item.of(transitional), 'minecraft:redstone'])
    ]
  )
  .transitionalItem(transitional)
  .loops(1);
});

*/

//====================CUSTOM RECIPES==================

// PRECISION MECHANISM
ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('create:precision_mechanism').withChance(0.8),
    Item.of('create:golden_sheet').withChance(0.05)
  ], Item.of('minecraft:iron_nugget'), [
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:golden_sheet']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:cogwheel']),
    event.recipes.createDeploying('create:incomplete_precision_mechanism', ['create:incomplete_precision_mechanism', 'create:large_cogwheel']),
    event.recipes.createPressing('create:incomplete_precision_mechanism', 'create:incomplete_precision_mechanism')
  ])
  .transitionalItem('create:incomplete_precision_mechanism')
  .loops(1)
})

// ENTROPIC DRIVE
ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:entropic_drive')
  ], Item.of('create:brass_casing'), [
    event.recipes.createDeploying('kubejs:incomplete_entropic_drive', ['kubejs:incomplete_entropic_drive', 'create:precision_mechanism']),
    event.recipes.createDeploying('kubejs:incomplete_entropic_drive', ['kubejs:incomplete_entropic_drive', 'create:electron_tube']),
    event.recipes.createDeploying('kubejs:incomplete_entropic_drive', ['kubejs:incomplete_entropic_drive', 'minecraft:ender_eye']),
    event.recipes.createDeploying('kubejs:incomplete_entropic_drive', ['kubejs:incomplete_entropic_drive', 'kubejs:void_fragment']),
    event.recipes.createPressing('kubejs:incomplete_entropic_drive', 'kubejs:incomplete_entropic_drive')
  ])
  .transitionalItem('kubejs:incomplete_entropic_drive')
  .loops(1) 
})

// FORGED ASSEMBLY
ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:forged_assembly')
  ], Item.of('create:brass_casing'), [
    event.recipes.createDeploying('kubejs:incomplete_forged_assembly', ['kubejs:incomplete_forged_assembly', 'create:precision_mechanism']),
    event.recipes.createDeploying('kubejs:incomplete_forged_assembly', ['kubejs:incomplete_forged_assembly', 'minecraft:redstone']),
    event.recipes.createDeploying('kubejs:incomplete_forged_assembly', ['kubejs:incomplete_forged_assembly', 'kubejs:blazebound_steel']),
    event.recipes.createPressing('kubejs:incomplete_forged_assembly', 'kubejs:incomplete_forged_assembly')
  ])
  .transitionalItem('kubejs:incomplete_forged_assembly')
  .loops(1)
})
//====================CHANGED RECIPES==================

//====================COMPATIBILITY RECIPES==================

//====================FUNCTIONAL EXAMPLE==================
ServerEvents.recipes(event => {
  const transitional = 'kubejs:incomplete_blazebound_steel'

  event.recipes.create.sequenced_assembly(
    [
      'kubejs:blazebound_steel'
    ],
    'create:sturdy_sheet',
    [      
      event.recipes.create.filling(transitional, [
        transitional,
        Fluid.of('kubejs:melted_blaze_metal', 250)
      ]),
      event.recipes.create.pressing(transitional, transitional),
      event.recipes.create.filling(transitional, [
        transitional,
        Fluid.water(250)
      ])
    ]
  )
  .transitionalItem(transitional)
  .loops(1)
})

ServerEvents.recipes(event => {
  const transitional = 'kubejs:incomplete_obsidian_core'

  event.recipes.create.sequenced_assembly(
    [
      Item.of('kubejs:precision_matrix_core', 1)
    ],
    Item.of('minecraft:iron_ingot'),
    [
      event.recipes.create.deploying(Item.of(transitional), [Item.of(transitional), 'minecraft:redstone']),
      event.recipes.create.cutting(Item.of(transitional), Item.of(transitional)).processingTime(100),
      event.recipes.create.pressing(Item.of(transitional), Item.of(transitional)),
      event.recipes.create.filling(Item.of(transitional), [
        Item.of(transitional),
        Fluid.lava(250)
      ]),
    ]
  )
  .transitionalItem(transitional) 
  .loops(1)
});

