// LIQUID AGONY 
StartupEvents.registry('fluid', event => {
  event.create('liquid_agony')
    .displayName('Liquid Agony')
    .stillTexture('custom:item/obsidian_solution')
    .flowingTexture('custom:item/obsidian_solution')
    .color(0x8A0303)
    .bucketColor(0x8A0303)
})

// LIQUID JOY
StartupEvents.registry('fluid', event => {
  event.create('liquid_joy')
    .displayName('Liquid Joy')
    .stillTexture('custom:item/aqueous_organic_solvent')
    .flowingTexture('custom:item/aqueous_organic_solvent')
    .color(0xF8E14C)
    .bucketColor(0xF8E14C)
})