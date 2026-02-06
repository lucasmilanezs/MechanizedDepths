// PNEUMATIC CRAFT - CRAFT 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================



//====================CHANGED RECIPES==================

//AIR COMPRESSOR
ServerEvents.recipes(event => {
    event.remove({id: 'pneumaticcraft:air_compressor'});
    event.shaped('pneumaticcraft:air_compressor', [
        'RRR',
        'RGT',
        'RPR'
    ], {
        R: 'pneumaticcraft:reinforced_stone',
        G: 'mekanism:advanced_chemical_tank',
        T: 'pneumaticcraft:pressure_tube',
        P: 'industrialforegoing:machine_frame_pity'
    }).id('pneumaticcraft:air_compressor');
});

//COMPRESSED IRON GEAR
ServerEvents.recipes(event => {
    event.remove({id: 'pneumaticcraft:compressed_iron_gear'});
    event.shaped('pneumaticcraft:compressed_iron_gear', [
        ' R ',
        'RGR',
        ' R '
    ], {
        R: 'pneumaticcraft:ingot_iron_compressed',
        G: '#forge:gears/iron'
    }).id('pneumaticcraft:compressed_iron_gear');
});

// MANUAL COMPRESSOR
ServerEvents.recipes(event => {
    event.remove({id: 'pneumaticcraft:manual_compressor'});
    event.shaped('pneumaticcraft:manual_compressor', [
        'RCR',
        'TPT',
        'GSG'
    ], {
        R: 'minecraft:red_dye',
        C: 'pneumaticcraft:ingot_iron_compressed',
        G: '#forge:gears/compressed_iron',
        P: 'industrialforegoing:machine_frame_pity',
        S: 'pneumaticcraft:stone_base',
        T: 'pneumaticcraft:pressure_tube'
    }).id('pneumaticcraft:manual_compressor');
});

//GPS TOOL
ServerEvents.recipes(event => {
    event.remove({id: 'pneumaticcraft:gps_tool'});
    event.shaped('pneumaticcraft:gps_tool', [
        ' R ',
        'PGP',
        'PAP'
    ], {
        R: 'kubejs:redstone_component',
        P: 'pneumaticcraft:plastic',
        G: '#c:glass_panes',
        A: 'immersiveengineering:component_electronic_adv'
    }).id('pneumaticcraft:gps_tool');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME