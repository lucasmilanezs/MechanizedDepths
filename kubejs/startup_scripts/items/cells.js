// DORMANT MEMORY CELL (kubejs:dormant_memory_cell)
StartupEvents.registry('item', event => {
  event.create('dormant_memory_cell')
    .displayName('Dormant Memory Cell')
    .tooltip([
      Text.of('§7For sure it will never awaken... right?').italic()
    ])
    .texture('custom:item/dormant_memory_celll')
    .glow(true)
});

// OVERTHINKER CELL (kubejs:overthinker_cell)
StartupEvents.registry('item', event => {
  event.create('overthinker_cell')
    .displayName('Overthinker Cell')
    .tooltip([
      Text.of('§7A cell that thinks too much.').italic()
    ])
    .texture('custom:item/overthinker_cell')
    .maxDamage(400)
    .unstackable()
});

// BLANK SYNAPTIC INTERFACE (kubejs:blank_synaptic_interface)
StartupEvents.registry('item', event => {
  event.create('blank_synaptic_interface')
    .displayName('Blank Synaptic Interface')
    .texture('custom:item/blank_synaptic_interface')
});

// SYNAPTIC INTERFACE (kubejs:synaptic_interface)
StartupEvents.registry('item', event => {
  event.create('synaptic_interface')
    .displayName('Synaptic Interface')
    .texture('custom:item/synaptic_interface')
    .glow(true)
});

// COMPULSORT CELL (kubejs:compulsort_cell)
StartupEvents.registry('item', event => {
  event.create('compulsort_cell')
    .displayName('Compulsort Cell')
    .texture('custom:item/compulsort_cell')
});

//MINERVA (kubejs:minerva)
StartupEvents.registry('item', event => {
  event.create('minerva')
    .displayName('M.I.N.E.R.V.A')
    .tooltip([
      Text.of('§8 Modular Intelligent Neuro-Entangled Recursive Virtual Architecture').italic(),
    ])
    .texture('custom:item/minerva');
});