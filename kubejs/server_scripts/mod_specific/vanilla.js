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