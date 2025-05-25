StartupEvents.registry('block', event => {
  event.create('vivid_infused_stone')
    .displayName('Vivid Infused Stone')
    .textureAll('custom:block/vivid_infused_stone') 
    .soundType('stone')
    .mapColor('stone')
    .hardness(1.5)
    .resistance(6.0);
});

StartupEvents.registry('block', event => {
  event.create('vitrified_obsidian')
    .displayName('Vitrified Obsidian')
    .textureAll('custom:block/vitrified_obsidian') 
    .soundType('glass')
    .mapColor('black')
    .hardness(1.7)
    .resistance(8.0)
    .defaultCutout()
});