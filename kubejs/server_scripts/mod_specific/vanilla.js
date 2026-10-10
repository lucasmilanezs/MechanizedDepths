ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:flint_and_steel' });

    event.shapeless('minecraft:flint_and_steel', [
    '#forge:ingots/steel',
    'minecraft:flint'
    ]).id('kubejs:vanilla/crafting/flint_and_steel');
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
    }).id('kubejs:vanilla/crafting/blast_furnace');
});

// PACKED GRAVEL
ServerEvents.recipes(event => {
    event.shaped('kubejs:packed_gravel', [
        'GG ',
        'GG ',
        '   '
    ], {
        G: 'minecraft:gravel'
    }).id('kubejs:vanilla/crafting/packed_gravel');
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
});

// CRAFTING TABLE
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:crafting_table'),
        [
            'ABA',
            'B B',
            'ABA'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:stick'
        }).id('kubejs:vanilla/crafting/crafting_table');
});

// PISTON
ServerEvents.recipes(event => {
    event.remove({ id: 'minecraft:piston' });
    event.shaped(
        Item.of('minecraft:piston'),
        [
            'AAA',
            'BCB',
            'BDB'
        ],
        {
            C: '#forge:rods/iron',
            D: 'kubejs:rudimentary_redstone_component',
            B: 'minecraft:cobblestone',
            A: 'minecraft:oak_planks'
        }).id('kubejs:vanilla/crafting/piston')
});

//PICKAXE
ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:wooden_pickaxe'),
        [
            ' AB',
            ' CA',
            'C  '
        ],
        {
            A: 'naturesaura:gold_fiber',
            B: Item.of('tconstruct:pick_head', '{Material:"tconstruct:wood"}').weakNBT(),
            C: 'minecraft:stick'
        }
    ).id('kubejs:vanilla/crafting/wooden_pickaxe')
});

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:wooden_shovel'),
        [
            ' AB',
            ' CA',
            'C  '
        ],
        {
            A: 'naturesaura:gold_fiber',
            B: Item.of('tconstruct:adze_head', '{Material:"tconstruct:wood"}').weakNBT(),
            C: 'minecraft:stick'
        }
    ).id('kubejs:vanilla/crafting/wooden_shovel')
});

ServerEvents.recipes(event => {
    event.shaped(
        Item.of('minecraft:wooden_sword'),
        [
            '   ',
            'ABA',
            ' C '
        ],
        {
            A: 'naturesaura:gold_fiber',
            B: Item.of('tconstruct:small_blade', '{Material:"tconstruct:wood"}').weakNBT(),
            C: 'minecraft:stick'
        }
    ).id('kubejs:vanilla/crafting/wooden_sword')
});