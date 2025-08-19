// Precision Matrix Core (kubejs:precision_matrix_core)
StartupEvents.registry('item', event => {
  event.create('precision_matrix_core')
    .displayName('Precision Matrix Core')
    .texture('custom:item/precision_matrix')
    .glow(true)
    .unstackable();
});

// Entropic Drive (kubejs:entropic_drive)
// Void Fragment (kubejs:void_fragment)
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
});

// Incomplete Entropic Drive (kubejs:incomplete_entropic_drive)
StartupEvents.registry('item', event => {
  event.create('incomplete_entropic_drive')
    .displayName('§7Incomplete Entropic Drive')
    .tooltip([Text.of('§8Um núcleo em formação...').italic()])
    .texture('custom:item/incomplete_entropic_drive')
})

// Forged Assembly (kubejs:forged_assembly)
// Incomplete Forged Assembly (kubejs:incomplete_forged_assembly)
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