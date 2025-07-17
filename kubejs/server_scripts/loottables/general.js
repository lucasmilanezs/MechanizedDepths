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
