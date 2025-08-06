// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.custom({
    type: "immersiveengineering:blueprint",
    category: "components",
    inputs: [
      {
        base_ingredient: { tag: "forge:plates/steel" },
        count: 2
      },
      { tag: "forge:ingots/copper" }
    ],
    result: {
      item: "immersiveengineering:component_steel"
    }
  });
});
*/

//====================CUSTOM RECIPES===================

// RUDIMENTARY REDSTONE COMPONENT
ServerEvents.recipes(event => {
    event.custom({
        type: "immersiveengineering:blueprint",
        category: "components",
        inputs: [
        {
            base_ingredient: {tag: "forge:dusts/redstone"},
            count: 4
        },
        {item: "minecraft:stone_pressure_plate"},
        ],
        result: {
        item: "kubejs:rudimentary_redstone_component"
        }
    }).id("kubejs:immersiveengineering/rudimentary_redstone_component");
});

// REDSTONE COMPONENT
ServerEvents.recipes(event => {
    event.custom({
        type: "immersiveengineering:blueprint",
        category: "components",
        inputs: [
        {
            base_ingredient: {tag: "forge:plates/silver"},
            count: 2
        },
        {item: "kubejs:rudimentary_redstone_component"},
        {item: "minecraft:redstone"},
        ],
        result: {
        item: "kubejs:redstone_component"
        }
    }).id("kubejs:immersiveengineering/redstone_component");
});
//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME