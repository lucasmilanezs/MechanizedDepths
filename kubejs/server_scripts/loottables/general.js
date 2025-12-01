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

// ============================================
//  LOOT TABLES PARA OS MINÉRIOS CUSTOM (LootJS)
//  Silk Touch → bloco
//  Sem Silk → raw mineral
// ============================================

LootJS.modifiers(event => {

    const ores = {
        "kubejs:chalcopyrite_ore":           "kubejs:chalcopyrite_raw",
        "kubejs:chalcopyrite_ore_deepslate": "kubejs:chalcopyrite_raw",

        "kubejs:cassiterite_ore":           "kubejs:cassiterite_raw",
        "kubejs:cassiterite_ore_deepslate": "kubejs:cassiterite_raw",

        "kubejs:bauxite_ore":           "kubejs:bauxite_raw",
        "kubejs:bauxite_ore_deepslate": "kubejs:bauxite_raw",

        "kubejs:galena_ore":           "kubejs:galena_raw",
        "kubejs:galena_ore_deepslate": "kubejs:galena_raw",

        "kubejs:pentlandite_ore":           "kubejs:pentlandite_raw",
        "kubejs:pentlandite_ore_deepslate": "kubejs:pentlandite_raw",

        "kubejs:argentite_ore":           "kubejs:argentite_raw",
        "kubejs:argentite_ore_deepslate": "kubejs:argentite_raw",

        "kubejs:gold_quartz_ore":           "minecraft:raw_gold",
        "kubejs:gold_quartz_ore_deepslate": "minecraft:raw_gold",

        "kubejs:hematite_ore":           "kubejs:hematite_raw",
        "kubejs:hematite_ore_deepslate": "kubejs:hematite_raw"
    };

    for (let ore in ores) {

        event.addBlockLootModifier(ore)

            // Remover tudo o que o bloco dropa por padrão
            .removeLoot(Ingredient.all)

            // SILK TOUCH → dropa o bloco
            .addAlternativesLoot(
                LootEntry.of(ore)
                    .when(c =>
                        c.matchMainHand(
                            ItemFilter.hasEnchantment("minecraft:silk_touch")
                        )
                    ),

                // SEM silk → dropa o raw
                LootEntry.of(ores[ore])
            );
    }
});




