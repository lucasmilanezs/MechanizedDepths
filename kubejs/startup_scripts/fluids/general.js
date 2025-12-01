

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

// AETHERIC VAPOR (kubejs:aetheric_vapor)
StartupEvents.registry('fluid', event => {
  event.create('aetheric_vapor')
    .displayName('Aetheric Vapor')
    .stillTexture('custom:fluid/molten_base')
    .flowingTexture('custom:fluid/molten_base')
    .color(0x4FC3F7)        
    .bucketColor(0x4FC3F7);
});


// SPECTRAL OIL (kubejs:spectral_oil)
StartupEvents.registry('fluid', event => {
  event.create('spectral_oil')
    .displayName('Spectral Oil')
    .stillTexture('custom:fluid/molten_base')
    .flowingTexture('custom:fluid/molten_base')
    .color(0xAB47BC)        
    .bucketColor(0xAB47BC);
});


// VOID HEAVY OIL (kubejs:void_heavy_oil)
StartupEvents.registry('fluid', event => {
  event.create('void_heavy_oil')
    .displayName('Void Heavy Oil')
    .stillTexture('custom:fluid/molten_base')
    .flowingTexture('custom:fluid/molten_base')
    .color(0x212121)        
    .bucketColor(0x212121);
});

// V-RO Lubricant (kubejs:void_lubricant)
StartupEvents.registry('fluid', event => {
  event.create('void_lubricant')
    .displayName('V-RO Lubricant')
    .stillTexture('custom:fluid/molten_base')
    .flowingTexture('custom:fluid/molten_base')
    .color(0x757575)        
    .bucketColor(0x757575);
});