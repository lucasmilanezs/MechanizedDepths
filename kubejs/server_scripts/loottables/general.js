LootJS.modifiers((event) => {
    event.enableLogging();
});

LootJS.modifiers((event) => {
    const modifiers = event.getGlobalModifiers();
    modifiers.forEach((modifier) => {
        console.log(modifier)
    });
});

LootJS.modifiers(event => {
  event.removeGlobalModifier('occultism:datura_seed_from_grass')
  event.removeGlobalModifier('occultism:datura_seed_from_tall_grass')
})

LootJS.modifiers((event) => {
    event
        .addBlockLootModifier("kubejs:packed_gravel")
        .randomChance(1)
        .addLoot("minecraft:gold_nugget");
});

LootJS.modifiers((event) => {
    event.addBlockLootModifier("kubejs:packed_gravel").removeLoot("kubejs:packed_gravel");
});