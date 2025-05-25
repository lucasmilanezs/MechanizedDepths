
// OBSIDIAN SOLUTION
StartupEvents.registry('fluid', event => {
  event.create('obsidian_solution')
    .displayName('Obsidian Solution')
    .stillTexture('custom:item/obsidian_solution')
    .flowingTexture('custom:item/obsidian_solution')
    .color(0x2E2E2E)
    .bucketColor(0x2E2E2E)
})

// AQUEOUS ORGANIC SOLVENT
StartupEvents.registry('fluid', event => {
  event.create('aqueous_organic_solvent')
    .displayName('Aqueous Organic Solvent')
    .stillTexture('custom:item/aqueous_organic_solvent')
    .flowingTexture('custom:item/aqueous_organic_solvent')
    .color(0x46797A)
    .bucketColor(0x46797A)
})

// ACIDIC FLUX
StartupEvents.registry('fluid', event => {
  event.create('acidic_flux')
    .displayName('Acidic Flux')
    .stillTexture('custom:fluid/acidic_flux')
    .flowingTexture('custom:fluid/acidic_flux_flow');

});