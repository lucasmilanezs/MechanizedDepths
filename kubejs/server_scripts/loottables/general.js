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

// Remove itens de loot estrutural em todas as tabelas de baus.
LootJS.modifiers(event => {
    event.addLootTypeModifier('chest')
        .removeLoot('minecraft:flint_and_steel')
        .replaceLoot('actuallyadditions:rice', 'thermal:rice', true)
        .replaceLoot('actuallyadditions:rice_seeds', 'thermal:rice_seeds', true)
        .replaceLoot('farmersdelight:rice', 'thermal:rice', true)
        .replaceLoot('farmersdelight:rice_panicle', 'thermal:rice', true)
        .replaceLoot('farmersdelight:onion', 'thermal:onion', true);
});

// Existing noncanonical crops in older worlds yield the canonical harvest.
LootJS.modifiers(event => {
    for (const block of ['actuallyadditions:rice', 'farmersdelight:rice', 'farmersdelight:rice_panicles']) {
        event.addBlockLootModifier(block)
            .replaceLoot('actuallyadditions:rice', 'thermal:rice', true)
            .replaceLoot('actuallyadditions:rice_seeds', 'thermal:rice_seeds', true)
            .replaceLoot('farmersdelight:rice', 'thermal:rice', true)
            .replaceLoot('farmersdelight:rice_panicle', 'thermal:rice', true);
    }
    for (const block of ['farmersdelight:onions']) {
        event.addBlockLootModifier(block).replaceLoot('farmersdelight:onion', 'thermal:onion', true);
    }
});
