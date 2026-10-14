//==================COMPATIBILITY RECIPES==================

// MENRIL RESIN
// The KubeJS IE schema requires an item result even for fluid-only recipes.
ServerEvents.highPriorityData(event => {
  event.addJson('kubejs:recipes/immersiveengineering/squeezer/menril_resin_from_log', {
    type: 'immersiveengineering:squeezer',
    input: { item: 'integrateddynamics:menril_log' },
    fluid: { fluid: 'integrateddynamics:menril_resin', amount: 1000 },
    energy: 6400
  });

  event.addJson('kubejs:recipes/immersiveengineering/squeezer/menril_resin_from_planks', {
    type: 'immersiveengineering:squeezer',
    input: { item: 'integrateddynamics:menril_planks' },
    fluid: { fluid: 'integrateddynamics:menril_resin', amount: 250 },
    energy: 6400
  });
});
