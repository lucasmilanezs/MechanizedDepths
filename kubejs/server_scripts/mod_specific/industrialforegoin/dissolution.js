// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================


//MEATTHERIAL
ServerEvents.recipes(event => {
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'kubejs:meat_bar' },
      { item: 'industrialforegoing:pink_slime_ingot' },
      { tag: 'forge:ingots/compressed_iron' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
    output: {
      item: 'kubejs:meattherial',
      count: 3
    },
    processingTime: 600
  }).id('industrialforegoing:dissolution/meattherial');
});

//====================CHANGED RECIPES==================

//SIMPLE MACHINE FRAME
ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:dissolution_chamber/simple_machine_frame' });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'industrialforegoing:plastic' },
      { item: 'industrialforegoing:machine_frame_pity' },
      { item: 'industrialforegoing:plastic' },
      { tag: 'forge:ingots/refined_obsidian' },
      { tag: 'forge:ingots/refined_obsidian' },
      { tag: 'forge:ingots/end_steel' },
      { item: 'thermal:lumium_gear' },
      { tag: 'forge:ingots/end_steel' }
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
    output: {
      item: 'industrialforegoing:machine_frame_simple',
      count: 1
    },
    processingTime: 600
  }).id('industrialforegoing:dissolution/machine_frame_simple');
});

//ADVANCED MACHINE FRAME
ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:dissolution_chamber/advanced_machine_frame' });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { item: 'kubejs:double_plastic' },
      { item: 'industrialforegoing:machine_frame_simple' },
      { item: 'kubejs:double_plastic' },
      { item: 'naturesaura:depth_ingot' },
      { item: 'naturesaura:depth_ingot' },
      { item: 'industrialforegoing:pink_slime_ingot' },
      { item: 'thermal:enderium_gear' },
      { item: 'industrialforegoing:pink_slime_ingot' }
    ],
    inputFluid: '{Amount:500,FluidName:"industrialforegoing:pink_slime"}',
    output: {
      item: 'industrialforegoing:machine_frame_advanced',
      count: 1
    },
    processingTime: 600
  }).id('industrialforegoing:dissolution/machine_frame_advanced');
});

//PINK SLIME
ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:dissolution_chamber/pink_slime_ingot' });
  event.custom({
    type: 'industrialforegoing:dissolution_chamber',
    input: [
      { tag: 'forge:ingots/compressed_iron' },
      { tag: 'forge:ingots/compressed_iron' },
      { item: 'kubejs:ingot_gold_compressed' },
      { item: 'kubejs:ingot_gold_compressed' }
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:pink_slime"}',
    output: {
      item: 'industrialforegoing:pink_slime_ingot',
      count: 1
    },
    processingTime: 600
  }).id('industrialforegoing:dissolution/pink_slime_ingot');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

