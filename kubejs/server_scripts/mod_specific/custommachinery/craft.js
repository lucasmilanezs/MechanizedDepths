// CUSTOM MACHINERY - RECIPES

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

// NEURAL AGONIZER
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('custommachinery:custom_machine_item', {
      machine: 'custommachinery:neural_agonizer'
    }),
    [
      'SPS',
      'SES',
      'FVF'
    ],
    {
      E: 'enderio:ensouled_chassis',
      S: 'enderio:soularium_ingot',
      V: 'enderio:vibrant_gear',
      F: 'kubejs:flesh_compound',
      P: 'kubejs:simulation_processor'
    }
  );
});

// NEUROTROPIC GARDEN
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('custommachinery:custom_machine_item', {
      machine: 'custommachinery:neurotropic_garden'
    }),
    [
      'SPS',
      'SES',
      'CVC'
    ],
    {
      E: 'enderio:ensouled_chassis',
      S: 'enderio:soularium_ingot',
      V: 'enderio:vibrant_gear',
      C: 'enderio:vibrant_crystal',
      P: 'kubejs:simulation_processor'
    }
  );
});


