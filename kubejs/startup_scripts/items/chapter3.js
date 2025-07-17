console.info('Registering Chapter 3 Items');
// CHAPTER 3

// ORES

// METALS 

// Blazebound Steel (custom:blazebound_steel)
StartupEvents.registry('item', event => {
  event.create('blazebound_steel')
    .displayName('Blazebound Steel')
    .texture('custom:item/blazebound_steel')
})

// Incomplete Blazebound Steel (custom:incomplete_blazebound_steel)
StartupEvents.registry('item', event => {
  event.create('incomplete_blazebound_steel')
    .displayName('Incomplete Blazebound Steel')
    .texture('custom:item/incomplete_blazebound_steel')
})
// ALLOYS

// Empowered Blazing Steel (custom:empowered_blazing_steel)
StartupEvents.registry('item', event => {
  event.create('empowered_blazing_steel')
    .displayName('Empowered Blazing Steel')
    .texture('custom:item/empowered_blazing_steel')
})


// DUSTS

// Empowered Blaze Powder (custom:empowered_blaze_powder)
StartupEvents.registry('item', event => {
  event.create('empowered_blaze_powder')
    .displayName('Empowered Blaze Powder')
    .texture('custom:item/empowered_blaze_powder')
})

// CRYSTALS

// CORES

// Entropic Drive (custom:entropic_drive)
// Void Fragment (custom:void_fragment)
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
// Incomplete Entropic Drive (custom:incomplete_entropic_drive)
StartupEvents.registry('item', event => {
  event.create('incomplete_entropic_drive')
    .displayName('§7Incomplete Entropic Drive')
    .tooltip([Text.of('§8Um núcleo em formação...').italic()])
    .texture('custom:item/incomplete_entropic_drive')
})

// Forged Assembly (custom:forged_assembly)
// Incomplete Forged Assembly (custom:incomplete_forged_assembly)
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

// CIRCUITS/ELECTRONICS

// ORGANICS

// INTERMEDIATE PRODUCTS