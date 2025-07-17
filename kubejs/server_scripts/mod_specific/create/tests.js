// scripts/vanilla_test.js  – KubeJS
ServerEvents.recipes(event => {
  const transitional = 'minecraft:iron_nugget'

  event.recipes.create.sequenced_assembly(
    [Item.of('minecraft:diamond')],
    'minecraft:iron_ingot',
    [
      event.recipes.create.deploying(transitional, [transitional, 'minecraft:redstone']),
      event.custom({
        type: 'create_new_age:energising',
        energy_needed: 10000,
        ingredients: [{ item: transitional }],
        results: [{ item: transitional }]
      }),
      event.recipes.create.filling(transitional, [transitional, Fluid.lava(250)]),
      event.recipes.create.pressing(transitional, transitional)
    ]
  )
  .transitionalItem(transitional)
  .loops(1);
});



