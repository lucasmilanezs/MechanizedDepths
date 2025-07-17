/*

ServerEvents.recipes(event => {
  event.recipes.create.mixing(
    "minecraft:quartz",  // output
    [
      "minecraft:redstone",
      "minecraft:glowstone_dust"
    ]
  )
  .heatLevel("REDSTONANTE")
  .id("kubejs:mixing/redstonante_quartz");
});


ServerEvents.recipes(event => {
  event.custom({
    type: "createmetallurgy:bulk_melting",
    ingredients: [
      { item: "minecraft:apple" }
    ],
    minHeatRequirement: 4,
    maxHeatRequirement: 4,
    processingTime: 120,
    results: [
      {
        fluid: "createmetallurgy:molten_iron",
        amount: 144  // 1 ingot
      }
    ]
  }).id("kubejs:bulk_melting/apple_to_iron_redstonante");
});

ServerEvents.recipes(event => {
  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "redstonante",  // calor custom
    ingredients: [
      { item: "minecraft:apple" }
    ],
    processingTime: 60,
    results: [
      {
        fluid: "createmetallurgy:molten_aluminum",
        amount: 144
      },
      {
        fluid: "createmetallurgy:molten_slag",
        amount: 30
      }
    ]
  }).id("kubejs:melting/foundry_redstonante_apple");
});

ServerEvents.recipes(event => {
  event.recipes.create.mixing('minecraft:blaze_rod', [
    'minecraft:coal',
    'minecraft:iron_nugget'
  ]).heatLevel("MELTEDBLAZE")
});

*/