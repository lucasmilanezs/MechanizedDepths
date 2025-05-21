StartupEvents.registry('block', event => {
  event.create('vivid_infused_stone')
    .displayName('Vivid Infused Stone')
    .textureAll('custom:block/vivid_infused_stone') 
    .soundType('stone')
    .mapColor('stone')
    .hardness(1.5)
    .resistance(6.0);
});