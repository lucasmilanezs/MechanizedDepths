// MYSTICAL AGRICULTURE - CRAFTING

// Recipe IDs: .id('kubejs:<mod>/<machine or craft>/<output>'); add _from_<input>
// when the same output has another route. Generators (alloy_register, hand
// plates/rods, plank_normalizer) build theirs as kubejs:<system>/<output>.

//====================CUSTOM RECIPES==================



//====================CHANGED RECIPES==================

// TUNGSTEN ESSENCE
// Gives the primitive, so tungsten still goes through the Industrial Crucible.
ServerEvents.recipes(event => {
  event.remove({ id: 'mysticalagriculture:essence/common/tungsten_ingot' });
  event.shaped(Item.of('createmetallurgy:raw_tungsten', 2), [
    'EEE',
    'E E',
    'EEE'
  ], {
    E: 'mysticalagriculture:tungsten_essence'
  }).id('mysticalagriculture:essence/common/tungsten_ingot');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
