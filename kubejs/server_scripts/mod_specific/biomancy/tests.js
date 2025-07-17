ServerEvents.recipes(event => {
  event.custom({
    type: "biomancy:bio_forging",
    bio_forge_tab: "biomancy:tools", // mantém a aba padrão para testes
    ingredients: [
      { item: "minecraft:rotten_flesh" },
      { count: 5, item: "minecraft:bone" },
      { count: 16, item: "minecraft:string" },
      { count: 12, item: "minecraft:flint" },
      { count: 4, item: "minecraft:bone_meal" }
    ],
    nutrientsCost: 250,
    result: {
      item: "minecraft:diamond_boots",
      nbt: '{"biomancy:nutrients":200}'
    }
  }).id("kubejs:bio_forge/vanilla_boots_test")
})
