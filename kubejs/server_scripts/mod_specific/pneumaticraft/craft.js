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

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME