ServerEvents.recipes(event => {
    event.remove({ id: 'tetra:hammer/oak' });
    event.remove({ id: 'tetra:hammer/stone' });
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
            C: 'enderio:nutritious_stick',
            B: Item.of('tconstruct:hammer_head', '{Material:"tconstruct:wood"}').weakNBT()
        }
    );
});