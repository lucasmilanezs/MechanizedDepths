// Hand rods: 2 ingots + any item in #forge:tools/hammers -> 1 rod (metal rods only).
// Same contract as global_hand_plate.js: the tag is the only gate, and a broken
// Tetra hammer still matches but modifyResult empties the output.
// Outputs must be the Almost Unified targets (rods: thermal_extra > immersiveengineering >
// immersiveposts > alltheores): AU does not rewrite recipes built in KubeJS.
ServerEvents.recipes(event => {
  const Hammers = global.MDRecipes.Hammers;
  const hammer = Hammers.tag;

  const rods = {
    aluminum: 'immersiveengineering:stick_aluminum',
    steel: 'immersiveengineering:stick_steel'
  };
  [
    'iron', 'copper', 'gold', 'tin', 'silver', 'lead', 'nickel', 'bronze', 'constantan',
    'electrum', 'invar', 'signalum', 'lumium', 'enderium',
    // Provisional; twinite stays out (its rod recipe is removed in thermal_series/craft.js).
    'abyssal', 'dragonsteel', 'netherite', 'shellite', 'soul_infused'
  ].forEach(metal => rods[metal] = `thermal_extra:${metal}_rod`);

  for (let metal in rods) {
    event.shaped(rods[metal], [
      '   ',
      '  I',
      'HI '
    ], {
      I: `#forge:ingots/${metal}`,
      H: hammer
    })
      .damageIngredient(hammer)
      .modifyResult((grid, result) => Hammers.isBroken(grid.find(hammer)) ? Item.empty : result)
      .id(`kubejs:hand_rod/${metal}`);

    // Hand duplicates of the same rod (all unify into the output above)
    event.remove({ id: `immersiveengineering:crafting/stick_${metal}` });
    event.remove({ id: `immersiveposts:has_${metal}_rod` });
    event.remove({ id: `thermal_extra:crafting/${metal}_rod` });
  }

  // All The Ores hand-hammer rods, every metal (diamond_rod is a gem rod, kept).
  event.remove({ type: 'minecraft:crafting_shaped', id: /^alltheores:(?!diamond_rod$)[a-z_]+_rod$/ });
  // Uranium rods are machine-only: no hammering uranium.
  event.remove({ id: 'immersiveposts:has_uranium_rod' });
});
