// ACTUALLY ADDITIONS - TABLE CRAFTING RECIPES 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//RECIPE NAME

//====================CHANGED RECIPES==================

//IRON CASING
ServerEvents.recipes(event => {
  event.remove({ id: 'actuallyadditions:iron_casing' });
  event.shaped('actuallyadditions:iron_casing', [
    'IRI',
    'RCR',
    'IRI'
  ], {
    I: 'immersiveengineering:sheetmetal_iron',
    C: 'kubejs:precision_matrix_core',
    R: 'kubejs:intricate_redstone_component'

  });
});

//ATOMIC RECONSTRUCTOR
ServerEvents.recipes(event => {
  event.remove({ id: 'actuallyadditions:atomic_reconstructor' });
  event.shaped('actuallyadditions:atomic_reconstructor', [
    'SSS',
    'OCL',
    'SSS'
  ], {
    L: 'industrialforegoing:laser_lens0', 
    O: 'create_new_age:overcharged_golden_wire',
    S: 'immersiveengineering:sheetmetal_steel',
    C: 'actuallyadditions:iron_casing'
  });
});

//====================COMPATIBILITY RECIPES==================

//RECIPE 