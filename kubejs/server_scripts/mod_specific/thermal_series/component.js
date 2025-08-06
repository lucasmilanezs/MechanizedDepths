// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

// COMPULSORT CELL
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal_extra:component_assembly',
    ingredients: [
      { item: 'kubejs:dormant_memory_cell' },
      { fluid: 'kubejs:liquid_obsession', amount: 2000 },
      { item: 'mekanism:hdpe_sheet', count: 2 }
    ],
    result: { item: 'kubejs:compulsort_cell' },
    energy: 4000
  });
});

// CRAFTING DATA
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal_extra:component_assembly',
    ingredients: [
      { item: 'pneumaticcraft:printed_circuit_board' },
      { item: 'kubejs:refined_crafting_table' },
      { tag: 'forge:plates/iron', count: 2 }
    ],
    result: { item: 'kubejs:crafting_data' },
    energy: 4000
  });
});

// BOTANIC CAPACITOR 
ServerEvents.recipes((event) => {
  event.custom({
    type: 'thermal_extra:component_assembly',
    ingredients: [
      { item: 'botania:red_petal', count: 4 },
      { item: 'botania:livingwood_twig', count: 2 },
      { item: 'minecraft:flower_pot' },
      { item: 'minecraft:glass_bottle' }
    ],
    result: { item: 'kubejs:botanic_capacitor' },
    energy: 4000
  });
}); 

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

