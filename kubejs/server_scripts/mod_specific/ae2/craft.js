// APPLIED ENERGISTIC 2 - TABLE RECIPE CHANGES

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================



//====================CHANGED RECIPES==================

// AE2 - STORAGE CELL RECIPE CHANGES
ServerEvents.recipes(event => {
  const memoryCore = 'kubejs:dormant_memory_cell'

  // ALL STORAGE CELLS
  const storageCells = [
    'ae2:item_storage_cell_1k',
    'ae2:item_storage_cell_4k',
    'ae2:item_storage_cell_16k',
    'ae2:item_storage_cell_64k',
    'ae2:item_storage_cell_256k'
  ]

  // REMOVE
  storageCells.forEach(id => event.remove({ output: id }))

  // CHANGING
 
  // Crafting storages com o componente
    event.shapeless('ae2:item_storage_cell_1k', [
    'ae2:item_cell_housing',
    'ae2:cell_component_1k',
    'kubejs:dormant_memory_cell',
    ]);
    event.shapeless('ae2:item_storage_cell_4k', [
    'ae2:item_cell_housing',
    'ae2:cell_component_4k',
    'kubejs:dormant_memory_cell',
    ]);
    event.shapeless('ae2:item_storage_cell_16k', [  
    'ae2:item_cell_housing',
    'ae2:cell_component_16k',
    'kubejs:dormant_memory_cell',
    ]);
    event.shapeless('ae2:item_storage_cell_64k', [
    'ae2:item_cell_housing',
    'ae2:cell_component_64k',
    'kubejs:dormant_memory_cell',
    ]);
    event.shapeless('ae2:item_storage_cell_256k', [
    'ae2:item_cell_housing',
    'ae2:cell_component_256k',
    'kubejs:dormant_memory_cell',
    ]);
})

//METEORITE COMPASS
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:charger/meteorite_compass' });
  event.shaped('ae2:meteorite_compass', [
    ' Q ',
    'UCU',
    ' Q '
  ], {
    Q: 'minecraft:quartz',
    U: 'mekanism:ultimate_control_circuit',
    C: 'minecraft:compass'
  }).id('kubejs:ae2/meteorite_compass');
});

//INSCRIBER
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:network/blocks/inscribers' });
  event.shaped('ae2:inscriber', [
    'RPR',
    'I R',
    'RPR'
  ], {
    R: 'kubejs:refined_quartz',
    P: 'create:mechanical_press',
    I: '#forge:plates/invar'
  }).id('kubejs:ae2/inscriber');
});

// ME DRIVE
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:network/blocks/storage_drive' });
  event.shaped('ae2:drive', [
    'RPR',
    'F F',
    'RPR'
  ], {
    R: 'kubejs:refined_quartz',
    P: 'ae2:engineering_processor',
    F: 'ae2:fluix_glass_cable'
  }).id('kubejs:ae2/drive');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME