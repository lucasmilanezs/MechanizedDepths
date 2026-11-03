// CREATE HEAT JS - CUSTOM HEAT SOURCES
// Recipes ask for these with the lowercase name (heatRequirement: 'blazing_composite').

CreateHeatJS.registerHeatEvent(event => {
  event.registerHeat('BLAZING_COMPOSITE', builder => builder
    .color(0x33DDEE)
    .addHeatSource('kubejs:blazing_composite')
  );

  event.registerHeat('ENTROPIC_MYCELITE', builder => builder
    .color(0xAA22FF)
    .addHeatSource('kubejs:entropic_mycelite')
  );

  event.registerHeat('AETHERFORGED_CINDERBLOCK', builder => builder
    .color(0x33DDEE)
    .addHeatSource('kubejs:aetherforged_cinderblock')
  );

  event.registerHeat('ECHO_FUSED_OBSIDIANITE', builder => builder
    .color(0x222244)
    .addHeatSource('kubejs:echo_fused_obsidianite')
  );
});
