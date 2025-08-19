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
      { item: 'pneumaticcraft:ingot_iron_compressed' },
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:ether_gas"}',
    output: {
      item: 'kubejs:meattherial',
      count: 1
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
      { item: 'mekanism:ingot_refined_obsidian' },
      { item: 'mekanism:ingot_refined_obsidian' },
      { item: 'enderio:end_steel_ingot' },
      { item: 'thermal:lumium_gear' },
      { item: 'enderio:end_steel_ingot' }
    ],
    inputFluid: '{Amount:1000,FluidName:"industrialforegoing:latex"}',
    output: {
      item: 'industrialforegoing:machine_frame_simple',
      count: 1
    },
    processingTime: 600
  }).id('industrialforegoing:dissolution/machine_frame_simple');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

