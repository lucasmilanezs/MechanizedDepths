// AE2 - INSCRIBER

// SYNTAX TEMPLATE:
/*
ServerEvents.recipes(event => {
  event.custom({
    type: 'ae2:inscriber',
    mode: 'press',
    ingredients: {
      top: { item: 'ae2:printed_calculation_processor' },
      middle: { item: 'minecraft:redstone' },
      bottom: { item: 'ae2:printed_silicon' }
    },
    result: {
      item: 'ae2:calculation_processor'
    }
  });
});
*/

//====================CUSTOM RECIPES==================

//PRINTED SIMULATION PROCESSOR
ServerEvents.recipes(event => {
    event.custom({
        type: 'ae2:inscriber',
        mode: 'press',
        ingredients: {
        middle: { item: 'mekanism:ingot_refined_obsidian' }
        },
        result: {
        item: 'kubejs:printed_simulation_processor'
        }
    });
}); 

//SIMULATION PROCESSOR
ServerEvents.recipes(event => {
  event.custom({
    type: 'ae2:inscriber',
    mode: 'press',
    ingredients: {
      top: { item: 'kubejs:printed_simulation_processor' },
      middle: { item: 'kubejs:redstone_component' },
      bottom: { item: 'ae2:printed_silicon' }
    },
    result: {
      item: 'kubejs:simulation_processor'
    }
  });
});

//====================CHANGED RECIPES==================

//ENGINEERING PROCESSOR
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:inscriber/engineering_processor' });
  event.custom({
    type: 'ae2:inscriber',
    mode: 'press',
    ingredients: {
      top: { item: 'ae2:printed_engineering_processor' },
      middle: { item: 'kubejs:rudimentary_redstone_component' },
      bottom: { item: 'ae2:printed_silicon' }
    },
    result: {
      item: 'ae2:engineering_processor'
    }
  });
});

//LOGIC PROCESSOR
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:inscriber/logic_processor' });
  event.custom({
    type: 'ae2:inscriber',
    mode: 'press',
    ingredients: {
      top: { item: 'ae2:printed_logic_processor' },
      middle: { item: 'kubejs:rudimentary_redstone_component' },
      bottom: { item: 'ae2:printed_silicon' }
    },
    result: {
      item: 'ae2:logic_processor'
    }
  });
});

// CALCULATION PROCESSOR
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:inscriber/calculation_processor' });
  event.custom({
    type: 'ae2:inscriber',
    mode: 'press',
    ingredients: {
      top: { item: 'ae2:printed_calculation_processor' },
      middle: { item: 'kubejs:rudimentary_redstone_component' },
      bottom: { item: 'ae2:printed_silicon' }
    },
    result: {
      item: 'ae2:calculation_processor'
    }
  });
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME