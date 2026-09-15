
ServerEvents.recipes(event => {
    event.remove({ id: 'tconstruct:tables/pattern' });
    event.shaped(
        Item.of('tconstruct:pattern', 12),
        [
            'ABA',
            'BAB',
            'ABA'
        ],
        {
            A: '#minecraft:planks',
            B: 'minecraft:stick'
        }
    )
    });

ServerEvents.recipes(event => {
    event.remove({ id: 'tconstruct:smeltery/casting/seared/smeltery_controller' })
    event.shaped(
    Item.of('tconstruct:smeltery_controller'),
    [
        'AAA',
        'BCB',
        'ADA'
    ],
    {
        A: 'tconstruct:seared_brick',
        C: 'minecraft:glass',
        B: '#forge:plates/copper',
        D: '#forge:rods/copper'
    }
)});