// NATURES AURA - OFFERING RITUAL 

// SYNTAX TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.custom({
    "type": "naturesaura:offering",
    "input": { "item": "PLACEHOLDER:INPUT_ITEM" },       
    "start_item": { "item": "PLACEHOLDER:START_ITEM" },  
    "output": { "item": "PLACEHOLDER:OUTPUT_ITEM" }      
  }).id("kubejs:natures_aura/offering/PLACEHOLDER_ID");    
});
*/

//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  event.custom({
    "type": "naturesaura:offering",
    "input": { "item": "naturesaura:break_prevention" },       
    "start_item": { "item": "thermal:wrench" },  
    "output": { "item": "kubejs:token_utility" }      
  }).id("kubejs:natures_aura/offering/token_utility");    
});

//LIVING TIMBER
ServerEvents.recipes(event => {
  event.custom({
    "type": "naturesaura:offering",
    "input": { "tag": "minecraft:logs" },
    "start_item": { "item": "naturesaura:calling_spirit" },
    "output": { "item": "kubejs:living_timber", count: 16 }
  }).id("kubejs:natures_aura/offering/token_living_timber");
});

//RUNIC STONE
ServerEvents.recipes(event => {
  event.custom({
    "type": "naturesaura:offering",
    "input": { "item": "minecraft:stone" },
    "start_item": { "item": "naturesaura:calling_spirit" },
    "output": { "item": "kubejs:runic_stone", count: 16 }
  }).id("kubejs:natures_aura/offering/token_runic_stone");
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME