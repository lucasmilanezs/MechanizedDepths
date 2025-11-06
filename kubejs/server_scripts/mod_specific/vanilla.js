ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:flint_and_steel' });

    event.shapeless('minecraft:flint_and_steel', [
    '#forge:ingots/steel',
    'minecraft:flint'
    ]);
});

ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:blast_furnace' });

    event.shaped('minecraft:blast_furnace', [
    'PPP',
    'PFP',
    'SSS'
    ], {
    P: '#forge:plates/iron',
    S: 'minecraft:smooth_stone',
    F: 'minecraft:furnace'
    });
});

// PACKED GRAVEL
ServerEvents.recipes(event => {
    event.shaped('kubejs:packed_gravel', [
        'GG ',
        'GG ',
        '   '
    ], {
        G: 'minecraft:gravel'
    });
});

// FURNANCE
ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:furnace' });
    event.shaped('minecraft:furnace', [
        'GCG',
        'C C',
        'GCG'
    ], {
        G: '#forge:gears/stone',
        C: 'minecraft:cobblestone',
    }).id('kubejs:furnace');
});

// REMOVE ALL VANILLA TOOLS
ServerEvents.recipes(event => {
  const mats  = ['wooden', 'stone', 'iron', 'golden', 'diamond']
  const types = ['sword', 'pickaxe', 'axe', 'shovel', 'hoe']

  for (const m of mats) {
    for (const t of types) {
      event.remove({ output: `minecraft:${m}_${t}`, type: 'minecraft:crafting_shaped' })
    }
  }
})
