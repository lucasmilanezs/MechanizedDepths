// kubejs/startup_scripts/items/living_timber.js

StartupEvents.registry('item', event => {
    event.create('living_timber')
        .displayName('Living Timber')
        .tooltip('Timber infused with persistent memory')
        .texture('custom:item/living_timber') 
        .maxStackSize(64);
});

StartupEvents.registry('item', event => {
  event.create('runic_stone')
    .displayName('Runic Stone')
    .tooltip("A stone inscribed with glowing memories")
    .texture('custom:item/runic_stone') 
    .maxStackSize(64);
});

StartupEvents.registry('item', event => {
  event.create('stone_hammer')
    .displayName('Stone Hammer')
    .maxDamage(64)
    .tag('forge:tools/hammers')
    .unstackable();

  event.create('metal_hammer')
    .displayName('Metal Hammer')
    .maxDamage(256)
    .tag('forge:tools/hammers')
    .unstackable();

  event.create('diamond_hammer')
    .displayName('Diamond Hammer')
    .maxDamage(1024)
    .tag('forge:tools/hammers')
    .unstackable();
});

StartupEvents.registry('item', event => {
  event.create('blazing_steel')
    .displayName('Blazing Steel')
    .texture('custom:item/blazing_steel')
    .fireResistant()
});

// Arquivo: startup_scripts/items/custom_items.js

StartupEvents.registry('item', event => {
  event.create('inductive_alloy')
    .displayName('Inductive Alloy')
    .texture('custom:item/inductive_alloy');

  event.create('precision_matrix_core')
    .displayName('Precision Matrix Core')
    .texture('custom:item/precision_matrix')
    .glow(true)
    .unstackable();
});

StartupEvents.registry('item', event => {
  event.create('entropic_drive')
    .displayName('§5Entropic Drive')
    .tooltip([
      Text.of('§7E todas as engrenagens pararam—').italic(),
      Text.of('§7não por falha, mas por conclusão.').italic()
    ])
    .glow(true)
    .texture('custom:item/entropic_drive2')

  event.create('void_fragment')
    .displayName('§8Void Fragment')
    .tooltip([
      Text.of('§7Um pedaço de silêncio que sangra.').italic()
    ])
    .glow(true)
    .texture('custom:item/void_fragment')
})
StartupEvents.registry('item', event => {
  event.create('incomplete_entropic_drive')
    .displayName('§7Incomplete Entropic Drive')
    .tooltip([Text.of('§8Um núcleo em formação...').italic()])
    .texture('custom:item/incomplete_entropic_drive')
})

StartupEvents.registry('item', event => {
  event.create('forged_assembly')
    .displayName('§7Forged Assembly')
    .tooltip([
      Text.of('§8A unidade fundamental da precisão térmica.').italic()
    ])
    .texture('custom:item/forged_assembly')

  event.create('incomplete_forged_assembly')
    .displayName('§7Incomplete Forged Assembly')
    .tooltip([
      Text.of('§8A estrutura ainda bruta, esperando ser fundida.').italic()
    ])
    .texture('custom:item/incomplete_forged_assembly')
})

StartupEvents.registry('item', event => {
  event.create('empowered_blaze_powder')
    .displayName('Empowered Blaze Powder')
    .texture('custom:item/empowered_blaze_powder')

  event.create('empowered_blazing_steel')
    .displayName('Empowered Blazing Steel')
    .texture('custom:item/empowered_blazing_steel')

  event.create('blazebound_steel')
    .displayName('Blazebound Steel')
    .texture('custom:item/blazebound_steel')

  event.create('incomplete_blazebound_steel')
    .displayName('Incomplete Blazebound Steel')
    .texture('custom:item/incomplete_blazebound_steel')
})

StartupEvents.registry('fluid', event => {
  event.create('melted_blaze_metal')
    .displayName('Melted Blaze Metal')
    .stillTexture('custom:item/melted_blaze_metal_still')
    .flowingTexture('custom:item/melted_blaze_metal_still')
    .color(0xFF6600)
    .bucketColor(0xFF6600)
})

StartupEvents.registry('item', event => {
  event.create('osgloglium')
    .displayName('Osgloglium')
    .texture('custom:item/osgloglium')
});

StartupEvents.registry('item', event => {
  event.create('refined_quartz')
    .displayName('Refined Quartz')
    .texture('custom:item/refined_quartz')
});

StartupEvents.registry('item', event => {
  event.create('incomplete_obsidian_core')
    .displayName('Incomplete Obsidian Core')
    .tooltip([
      Text.of('§8Um núcleo em formação...').italic()
    ])
    .texture('custom:item/incomplete_obsidian_core')
})