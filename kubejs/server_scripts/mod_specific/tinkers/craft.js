
ServerEvents.recipes(event => {
    event.remove({ id: 'tconstruct:tables/pattern' });
    event.shaped(
        Item.of('tconstruct:pattern', 12),
        [
            'ABA',
            'BCB',
            'ABA'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:stick',
            C: 'minecraft:oak_planks'
        }
    )
    });