/*
ServerEvents.recipes(event => {
  // BLAZING_COMPOSITE

  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "blazing_composite",
    ingredients: [{ item: "minecraft:blaze_powder" }],
    processingTime: 60,
    results: [
      { fluid: "createmetallurgy:molten_aluminum", amount: 144 }
    ]
  }).id("kubejs:melting/test/blaze_powder");

  // ENTROPIC_MYCELITE
  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "entropic_mycelite",
    ingredients: [{ item: "minecraft:mycelium" }],
    processingTime: 60,
    results: [
      { fluid: "createmetallurgy:molten_silver", amount: 144 }
    ]
  }).id("kubejs:melting/test/mycelium");

  // AETHERFORGED_CINDERBLOCK
  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "aetherforged_cinderblock",
    ingredients: [{ item: "minecraft:dragon_breath" }],
    processingTime: 60,
    results: [
      { fluid: "createmetallurgy:molten_steel", amount: 144 }
    ]
  }).id("kubejs:melting/test/dragon_breath");

  // ECHO_FUSED_OBSIDIANITE
  event.custom({
    type: "createmetallurgy:melting",
    heatRequirement: "echo_fused_obsidianite",
    ingredients: [{ item: "minecraft:echo_shard" }],
    processingTime: 60,
    results: [
      { fluid: "createmetallurgy:molten_steel", amount: 144 }
    ]
  }).id("kubejs:melting/test/echo_shard");
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:alloying',
    heatRequirement: 'heated',
    ingredients: [
      { item: 'minecraft:iron_ingot' },
      { item: 'minecraft:coal' },
      { item: 'minecraft:iron_nugget' },
      { amount: 100, fluid: 'minecraft:water' },
      { amount: 100, fluid: 'minecraft:lava' },
      { item: 'minecraft:gold_ingot' },
      { item: 'minecraft:diamond' },
      { item: 'minecraft:emerald' },
      { item: 'minecraft:lapis_lazuli' },
        { item: 'minecraft:quartz' },
        { item: 'minecraft:netherite_ingot' },
        { item: 'minecraft:obsidian' }
    ],
    processingTime: 100,
    results: [
      { amount: 100, fluid: 'minecraft:water' } // uso temporário
    ]
  }).id('kubejs:createmetallurgy/alloying/test_multi_input');
});

*/