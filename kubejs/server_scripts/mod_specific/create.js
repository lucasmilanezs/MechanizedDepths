ServerEvents.recipes(event => {
  // Remove todas as receitas padrão do andesite_alloy
  event.remove({ output: 'create:andesite_alloy' })

  // Adiciona nova receita shaped com runic_stone
  event.shaped('4x create:andesite_alloy', [
    'AR',
    'RA'
  ], {
    A: 'minecraft:andesite',
    R: 'kubejs:runic_stone'  // Altere se o ID for diferente no seu projeto
  })
})
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

ServerEvents.recipes(event => {
  event.recipes.create.sequenced_assembly([
    Item.of('kubejs:forged_assembly')
  ], Item.of('create:brass_casing'), [
    event.recipes.createDeploying('kubejs:incomplete_forged_assembly', ['kubejs:incomplete_forged_assembly', 'create:andesite_alloy']),
    event.recipes.createDeploying('kubejs:incomplete_forged_assembly', ['kubejs:incomplete_forged_assembly', 'create:precision_mechanism']),
    event.recipes.createDeploying('kubejs:incomplete_forged_assembly', ['kubejs:incomplete_forged_assembly', 'minecraft:redstone']),
    event.recipes.createPressing('kubejs:incomplete_forged_assembly', 'kubejs:incomplete_forged_assembly')
  ])
  .transitionalItem('kubejs:incomplete_forged_assembly')
  .loops(1)
})

ServerEvents.recipes(event => {
  // Empowered Blaze Powder (Shapeless Mixing)
  event.recipes.create.mixing(Item.of('kubejs:empowered_blaze_powder', 4), [
    'minecraft:lapis_lazuli',
    'thermal:diamond_dust'
  ])
})

  // Empowered Blazing Steel (Heated Mixing)
ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    ['kubejs:empowered_blazing_steel'],
    [
      'kubejs:blazing_steel',
      'kubejs:empowered_blaze_powder'
    ]
  ).superheated()
})

  // Derreter Empowered Blazing Steel em Melted Blaze Metal
ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    Fluid.of('kubejs:melted_blaze_metal', 500),
    ['kubejs:empowered_blazing_steel']
  ).superheated()
})

ServerEvents.recipes(event => {
  const transitional = 'kubejs:incomplete_blazebound_steel'

  event.recipes.create.sequenced_assembly(
    [
      'kubejs:blazebound_steel'
    ],
    'create:sturdy_sheet',
    [
      // Etapa 1: Injeção do metal derretido
      event.recipes.create.filling(transitional, [
        transitional,
        Fluid.of('kubejs:melted_blaze_metal', 250)
      ]),
      // Etapa 2: Compressão
      event.recipes.create.pressing(transitional, transitional),
      // Etapa 3: Resfriamento com água
      event.recipes.create.filling(transitional, [
        transitional,
        Fluid.water(250)
      ])
    ]
  )
  .transitionalItem(transitional)
  .loops(1)
})




