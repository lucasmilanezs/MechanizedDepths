// BOTANIA - MANAPOOL   

// SYNTAX TEMPLATE:
/*
ServerEvents.custom(event => {
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      item: 'minecraft:iron_ingot'
    },
    mana: 3000, 
    output: {
      item: 'botania:manasteel_ingot'
    }
  });
});
*/

//====================CUSTOM RECIPES==================

//MANA-DOPED MONOSILICON
ServerEvents.recipes(event => {
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      item: 'kubejs:monosilicon'
    },
    mana: 2000, 
    output: {
      item: 'kubejs:manadoped_monosilicon'
    }
  });
});

//====================CHANGED RECIPES==================

//MANASTEEL
ServerEvents.recipes(event => {
  event.remove({ id: 'botania:mana_infusion/manasteel' });
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      item: 'kubejs:ingot_vesselframe'
    },
    mana: 3000, 
    output: {
      item: 'botania:manasteel_ingot'
    }
  });
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME