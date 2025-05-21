ServerEvents.recipes(event => {
    event.remove({ output: 'minecraft:flint_and_steel' });

    event.shapeless('minecraft:flint_and_steel', [
    '#forge:ingots/steel',
    'minecraft:flint'
    ]);
});