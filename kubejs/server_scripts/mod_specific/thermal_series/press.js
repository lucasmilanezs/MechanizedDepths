// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================
// LAMINATED ALLOY PLATE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:press',
    ingredients: [
      { tag: 'forge:plates/steel' },
      { tag: 'forge:plates/aluminum' }
    ],
    result: { item: 'kubejs:laminated_alloy_plate' },
    energy: 2400
  });
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:press',
    ingredients: [
      { item: 'minecraft:basalt', count: 24 }
    ],
    result: { item: 'kubejs:basalt_cluster' },
    energy: 2400
  });
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:press',
    ingredients: [
      { item: 'minecraft:obsidian', count: 8 }
    ],
    result: { item: 'kubejs:obsidian_cluster' },
    energy: 2400
  });
});

//TITANIUM-OSMIUM LAMINATED PLATE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:press',
    ingredients: [
      { item: 'kubejs:plate_titanium' },
      { tag: 'forge:plates/osmium' }
    ],
    result: { item: 'kubejs:laminated_titanium_osmium_plate' },
    energy: 5000
  });
});

//TITANIUM PLATE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:press',
    ingredients: [
      { item: 'kubejs:ingot_titanium' }
    ],
    result: { item: 'kubejs:plate_titanium' },
    energy: 2400
  });
});

//TITANIUM ROD
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:press',
    ingredients: [
      { item: 'kubejs:ingot_titanium' },
      { item: 'thermal_extra:press_rod_die' }
    ],
    result: { item: 'kubejs:rod_titanium', count: 2 },
    energy: 2400
  });
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME