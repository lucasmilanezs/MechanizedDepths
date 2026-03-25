ServerEvents.recipes(event => {

    event.shaped(
            Item.of('patchouli:guide_book'),
            [
                    '   ',
                    'A A',
                    ' A '
            ],
            {
                    A: 'minecraft:gold_ingot'
            }
    )
    event.shaped(
            Item.of('enderio:void_chassis'),
            [
                    'ABA',
                    'BCB',
                    'ABA'
            ],
            {
                    C: 'kubejs:entropic_drive',
                    A: 'minecraft:iron_bars',
                    B: 'thermal:steel_plate'
            }
    )
    event.shaped(
            Item.of('enderio:crafter'),
            [
                    'AAA',
                    'BCB',
                    'DED'
            ],
            {
                    E: 'minecraft:crafting_table',
                    C: 'enderio:void_chassis',
                    B: 'kubejs:laminated_alloy_plate',
                    A: 'ae2:silicon',
                    D: 'enderio:iron_gear'
            }
    )
    event.shaped(
            Item.of('immersiveengineering:dynamo'),
            [
                    'ABA',
                    'CDC',
                    'ACA'
            ],
            {
                    C: 'kubejs:rudimentary_redstone_component',
                    B: 'immersiveengineering:component_iron',
                    D: 'immersiveengineering:coil_lv',
                    A: 'thermal:steel_plate'
            }
    )
    event.shaped(
            Item.of('custommachinery:custom_machine_item'),
            [
                    'ABA',
                    'CDC',
                    'EEE'
            ],
            {
                    A: 'kubejs:simulation_processor',
                    C: 'kubejs:frame_titanium',
                    B: 'thermal:machine_crucible',
                    D: 'enderio:ensouled_chassis',
                    E: 'enderio:dark_steel_ingot'
            }
    )
});
