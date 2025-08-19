ServerEvents.tags('item', e => {
  e.add('thermal:crafting/casts', 'kubejs:chiller_plate_cast');
});

// SIMPLE TEST RECIPE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:chiller',
    ingredients: [
      { fluid: 'minecraft:water', amount: 500 },
      { item: 'kubejs:chiller_plate_cast' } // deve ser devolvido
    ],
    result: { item: 'minecraft:packed_ice' },
    energy: 2000
  });
});
