// NATURES AURA - RITUAL OF THE FOREST 

// SYNTAX TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
      { "item": "PLACEHOLDER:ITEM_1" },
      { "item": "PLACEHOLDER:ITEM_2" },
      { "item": "PLACEHOLDER:ITEM_3" },
      { "item": "PLACEHOLDER:ITEM_4" },   
      { "item": "PLACEHOLDER:ITEM_5" },  
      { "item": "PLACEHOLDER:ITEM_6" }   
    ],
    "sapling": { "item": "PLACEHOLDER:SAPLING" },  // ex: "minecraft:oak_sapling"
    "output": { 
      "item": "PLACEHOLDER:OUTPUT",                // ex: "naturesaura:ancient_sapling"
      "count": PLACEHOLDER_COUNT                   // ex: 2
    },
    "time": PLACEHOLDER_TIME                       // ex: 200 (ticks)
  })
  // id opcional para facilitar remoções/overrides
  .id("kubejs:natures_aura/tree_ritual/PLACEHOLDER_ID");
});
*/

//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  event.remove({ id: 'minecraft:crafting_table' });
  event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
      { "tag": "minecraft:planks" },
      { "tag": "minecraft:planks" },
      { "tag": "minecraft:planks" },
      { "tag": "minecraft:planks" }
    ],
    "sapling": { "item": "minecraft:oak_sapling" },
    "output": { 
      "item": "minecraft:crafting_table",
      "count": 1                   
    },
    "time": 200                      
  }).id("kubejs:natures_aura/tree_ritual/crafting_table");
});

//====================CHANGED RECIPES==================

//TOKEN OF JOY
ServerEvents.recipes(event => {
  event.remove({ id: 'naturesaura:tree_ritual/token_joy' });
  event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
      { type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:overworld' } },
      { "item": "naturesaura:gold_leaf" },
      { "item": "vital_herbs:bleeding_heart" },
      { "item": "minecraft:torch" },
      { "item": "minecraft:apple" },
      { "item": "minecraft:iron_ingot" },
    ],
    "sapling": { "item": "minecraft:oak_sapling" },
    "output": { 
      "item": "naturesaura:token_joy",
      "count": 2
    },
    "time": 200
  }).id("kubejs:natures_aura/tree_ritual/token_of_joy");
});

// TOKEN OF SORROW
ServerEvents.recipes(event => {
  event.remove({ id: 'naturesaura:tree_ritual/token_sorrow' });
  event.custom({
    "type": "naturesaura:tree_ritual",
    "ingredients": [
      { type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:overworld' } },
      { "item": "naturesaura:gold_leaf" },
      { "item": "vital_herbs:needle_heart" },
      { "item": "minecraft:bone" },
      { "tag": "minecraft:flowers" },
      { "item": "naturesaura:infused_iron" },
    ],
    "sapling": { "item": "minecraft:oak_sapling" },
    "output": { 
      "item": "naturesaura:token_sorrow",
      "count": 2
    },
    "time": 200
  }).id("kubejs:natures_aura/tree_ritual/token_of_sorrow");
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

