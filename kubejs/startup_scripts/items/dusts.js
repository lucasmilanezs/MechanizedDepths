// Empowered Blaze Powder (custom:empowered_blaze_powder)
StartupEvents.registry('item', event => {
  event.create('empowered_blaze_powder')
    .displayName('Empowered Blaze Powder')
    .texture('custom:item/empowered_blaze_powder')
})

// SOUL GRIT + ASHEN REMNANT (kubejs:soul_grit), (kubejs:ashen_remnant)
StartupEvents.registry('item', event => {
  event.create('soul_grit')
    .displayName('Soul Grit')
    .texture('custom:item/soul_grit')

  event.create('ashen_remnant')
    .displayName('Ashen Remnant')
    .tooltip([
      Text.of('§7Some ashes still whisper. Not all that burned stayed silent.').italic()
    ])
    .texture('custom:item/ashen_remnant')
});

// CRUSHED ENDSTONE + RESONANT DUST (kubejs:crushed_endstone), (kubejs:resonant_dust)
StartupEvents.registry('item', event => {
  event.create('crushed_endstone')
    .displayName('Crushed Endstone')
    .texture('custom:item/crushed_endstone')

  event.create('resonant_dust')
    .displayName('Resonant Dust')
    .tooltip([
      Text.of('§7In certain grains of dust, echoes from other worlds can still be heard.').italic()
    ])
    .texture('custom:item/resonant_dust')
});

// CALCINED BLAZE COMPOSITE (kubejs:calcined_blaze_composite)
StartupEvents.registry('item', event => {
  event.create('calcined_blaze_composite')
    .displayName('Calcined Blaze Composite')
    .texture('custom:item/calcined_blaze_composite')
});

// NEODYMIUM (kubejs:neodymium)
StartupEvents.registry('item', event => {
  event.create('neodymium_dust')
    .displayName('Neodymium')
    .texture('custom:item/neodymium');
});

//pure_silicon (kubejs:pure_silicon)
StartupEvents.registry('item', event => {
  event.create('pure_silicon')
    .displayName('Pure Silicon')
    .texture('custom:item/pure_silicon');
});