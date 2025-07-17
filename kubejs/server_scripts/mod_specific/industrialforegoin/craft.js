// INDUSTRIAL FOREGOIN - TABLE CRAFTING RECIPES 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

//RECIPE NAME

//====================CHANGED RECIPES==================

//PITY MACHINE FRAME
ServerEvents.recipes(event => {
  event.remove({ id: 'industrialforegoing:machine_frame_pity' });
  event.shaped('industrialforegoing:machine_frame_pity', [
    'PEP',
    'WSW',
    'PWP'
  ], {
    S: 'enderio:ensouled_chassis',
    P: 'kubejs:organic_polymer_mesh',
    E: 'kubejs:emotionally_stable_circuit',
    W: '#minecraft:planks'
  });
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME