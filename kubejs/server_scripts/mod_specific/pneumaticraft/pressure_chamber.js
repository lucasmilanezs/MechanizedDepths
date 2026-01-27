// PNEUMATIC CRAFT - PRESSURE CHAMBER

// SYNTAX TEMPLATE:

/*
ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            {
                "type": "pneumaticcraft:stacked_item",
                "count": 2,
                "tag": "pneumaticcraft:wiring"
            },
            {
                "tag": "forge:slimeballs"
            },
            {
                "item": "pneumaticcraft:plastic"
            }
        ],
        "pressure": 1.0,
        "results": [
            {
                "item": "pneumaticcraft:capacitor"
            }
        ]
    })
});
*/

//====================CUSTOM RECIPES==================

// 
ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            { "item": "minecraft:beef" },
            { "item": "minecraft:porkchop" },
            { "item": "minecraft:mutton" },
            { "item": "industrialforegoing:meat_bucket" }
        ],
        "pressure": 2.0,
        "results": [
            {
                "item": "kubejs:meat_bar"
            },
            {
                "item": "minecraft:bucket"
            }
        ]
    })
});

ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            { "item": "minecraft:gold_ingot" },
        ],
        "pressure": 3.0,
        "results": [
            {
                "item": "kubejs:ingot_gold_compressed"
            },
        ]
    })
});

ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            { "item": "industrialforegoing:plastic" },
            { "item": "pneumaticcraft:plastic" }
        ],
        "pressure": 3.0,
        "results": [
            {
                "item": "kubejs:double_plastic"
            },
        ]
    })
});

//REDSTONE CIRCUIT SUBSTRATE
ServerEvents.recipes(event => {
    event.custom({
        "type": "pneumaticcraft:pressure_chamber",
        "inputs": [
            { "item": "kubejs:redstone_component" },
            { "type": "pneumaticcraft:stacked_item", "item": "pneumaticcraft:plastic", "count": 2 },
            { "type": "pneumaticcraft:stacked_item", "item": "minecraft:redstone", "count": 6 }
        ],
        "pressure": 4.0,
        "results": [
            {
                "item": "kubejs:redstone_circuit_substrate"
            },
        ]
    })
});


//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
