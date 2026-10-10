// BOTANIA - MANAPOOL   

// SYNTAX TEMPLATE:
/*
ServerEvents.custom(event => {
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      tag: 'forge:ingots/iron'
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
  }).id('kubejs:botania/mana_infusion/manadoped_monosilicon');
});

//====================CHANGED RECIPES==================

//MANASTEEL
ServerEvents.recipes(event => {
  event.remove({ id: 'botania:mana_infusion/manasteel' });
  event.remove({ id: 'botania:mana_infusion/manasteel_block' });
  event.custom({
    type: 'botania:mana_infusion',
    input: {
      item: 'kubejs:ingot_vesselframe'
    },
    mana: 3000, 
    output: {
      item: 'botania:manasteel_ingot'
    }
  }).id('kubejs:botania/mana_infusion/manasteel_ingot');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME