ServerEvents.recipes(event => {
    // Tetra 6.13 ships ten crafting-table hammers under tetra:hammer/ (oak,
    // spruce, birch, jungle, acacia and dark oak planks, plus cobblestone,
    // granite, diorite and andesite). The only starter hammer in this pack is
    // the Tinkers wood hammer head recipe below, so remove the whole folder.
    event.remove({ id: /^tetra:hammer\// });
    event.shaped(
        Item.of('tetra:modular_double',
            '{' +
            '"double/basic_hammer_left_material":"basic_hammer/oak",' +
            '"double/basic_hammer_right_material":"basic_hammer/oak",' +
            '"double/basic_handle_material":"basic_handle/stick",' +
            '"double/handle":"double/basic_handle",' +
            '"double/head_left":"double/basic_hammer_left",' +
            '"double/head_right":"double/basic_hammer_right"' +
            '}'
        ),
        [
            ' AB',
            ' CA',
            'C  '
        ],
        {
            A: 'naturesaura:gold_fiber',
            C: 'minecraft:stick',
            B: Item.of('tconstruct:hammer_head', '{Material:"tconstruct:wood"}').weakNBT()
        }
    ).id('kubejs:tetra/crafting/modular_double');
});