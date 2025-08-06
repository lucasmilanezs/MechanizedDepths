

// SLAG SLURRY (kubejs:slag_slurry)
StartupEvents.registry('fluid', event => {
  event.create('slag_slurry')
    .displayName('Slag Slurry')
    .stillTexture('custom:item/aqueous_organic_solvent')
    .flowingTexture('custom:item/aqueous_organic_solvent')
    .color(0x5A4032)
    .bucketColor(0x5A4032)
});

// MINERAL SLUDGE (kubejs:mineral_sludge)
StartupEvents.registry('fluid', event => {
  event.create('mineral_sludge')
    .displayName('Mineral Sludge')
    .stillTexture('custom:item/aqueous_organic_solvent')
    .flowingTexture('custom:item/aqueous_organic_solvent')
    .color(0x7C5F3C)
    .bucketColor(0xC0A678)
});

// INDUSTRIAL SOLVENT (kubejs:industrial_solvent)
StartupEvents.registry('fluid', event => {
  event.create('industrial_solvent')
    .displayName('Industrial Solvent')
    .stillTexture('custom:item/aqueous_organic_solvent')
    .flowingTexture('custom:item/aqueous_organic_solvent')
    .color(0xB0B0B0)
    .bucketColor(0xB0B0B0);
});

// PHOTORESIST FLUID (kubejs:photoresist_fluid)
StartupEvents.registry('fluid', event => {
  event.create('photoresist_fluid')
    .displayName('Photoresist Fluid')
    .stillTexture('custom:item/aqueous_organic_solvent')
    .flowingTexture('custom:item/aqueous_organic_solvent')
    .color(0xFFB6C1)
    .bucketColor(0xFFB6C1);
});

// MOLTEN SILICON (kubejs:molten_silicon)
StartupEvents.registry('fluid', event => {
  event.create('molten_silicon')
    .displayName('Molten Silicon')
    .stillTexture('custom:item/molten_silicon_still')
    .flowingTexture('custom:item/obsidian_solution')
    .color(0xFF393939)
    .bucketColor(0xFF393939);
});

// FERTILITY ESSENCE (kubejs:fertility_essence)
StartupEvents.registry('fluid', event => {
  event.create('fertility_essence')
    .displayName('Fertility Essence')
    .stillTexture('custom:item/aqueous_organic_solvent')
    .flowingTexture('custom:item/aqueous_organic_solvent')
    .color(0xFF8BC34A)
    .bucketColor(0xFF8BC34A);
});

