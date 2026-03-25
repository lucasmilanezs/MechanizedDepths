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
    'FCF',
    'RPR'
  ], {
    R: 'kubejs:refined_quartz',
    P: 'ae2:engineering_processor',
    F: 'ae2:fluix_glass_cable',
    C: 'mekanism:elite_control_circuit'
  }).id('kubejs:ae2/drive');
});

// ENERGY ACCEPTOR
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:network/blocks/energy_energy_acceptor' });
  event.shaped('ae2:energy_acceptor', [
    'RQR',
    'QIQ',
    'RQR'
  ], {
    R: 'kubejs:refined_quartz',
    Q: 'ae2:quartz_glass',
    I: 'kubejs:osgloglium'
  }).id('kubejs:ae2/energy_acceptor');
});

// CHARGER
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:network/blocks/crystal_processing_charger' });
  event.shaped('ae2:charger', [
    'ROR',
    'R  ',
    'ROR'
  ], {
    R: 'kubejs:refined_quartz',
    O: 'kubejs:osgloglium'
  }).id('kubejs:ae2/charger');
});

// MOLECULAR ASSEMBLER
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:network/crafting/molecular_assembler' });
  event.shaped(
    Item.of('ae2:molecular_assembler'),
    [
        'ABA',
        'NCF',
        'ABA'
    ],
    {
        C: 'kubejs:crafting_processor',
        A: 'kubejs:refined_quartz',
        B: 'ae2:quartz_glass',
        N: 'ae2:annihilation_core',
        F: 'ae2:formation_core'
    });
});

// CRAFTING UNIT
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:network/crafting/cpu_crafting_unit' });
  event.shaped(
    Item.of('ae2:crafting_unit'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        B: 'ae2:logic_processor',
        C: 'ae2:calculation_processor',
        D: 'kubejs:crafting_processor',
        A: 'kubejs:refined_quartz'
    });
});

//PATTERN PROVIDER
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:network/blocks/pattern_providers_interface' });
  event.shaped(
    Item.of('ae2:pattern_provider'),
    [
        'ABA',
        'C D',
        'ABA'
    ],
    {
        B: 'kubejs:crafting_processor',
        C: 'ae2:annihilation_core',
        D: 'ae2:formation_core',
        A: 'kubejs:refined_quartz'
    });
});

// CRAFTING CARD
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:materials/cardcrafting' });
  event.shapeless('ae2:crafting_card', [
    'ae2:basic_card',
    'kubejs:crafting_processor',
  ]).id('kubejs:ae2/crafting_card');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME