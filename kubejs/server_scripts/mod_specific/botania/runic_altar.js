
// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:

/*
ServerEvents.recipes(event => {
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      { "tag": "botania:mana_dusts" },
      { "tag": "botania:manasteel_ingots" },
      { "tag": "minecraft:wool_carpets" },
      { "item": "minecraft:feather" },
      { "item": "minecraft:string" }
    ],
    "mana": 5200,
    "output": {
      "item": "botania:rune_air",
      "count": 2
    }
  }).id("kubejs:botania/rune_air")
})
*/

//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  event.custom({
    "type": "botania:runic_altar",
    "ingredients": [
      { "item": "botania:rune_autumn" },
      { "item": "botania:rune_winter" },
      { "item": "botania:rune_spring" },
      { "item": "botania:rune_summer" },
      { "item": "kubejs:botanic_processor" }
    ],
    "mana": 5200,
    "output": {
      "item": "kubejs:mystical_data",
      "count": 1
    }
  }).id("kubejs:botania/mystical_data")
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
