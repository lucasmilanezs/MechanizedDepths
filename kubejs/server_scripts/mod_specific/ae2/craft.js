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


//====================COMPATIBILITY RECIPES==================

//RECIPE NAME