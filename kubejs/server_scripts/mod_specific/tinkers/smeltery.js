// TINKERS' CONSTRUCT - SMELTERY

// Recipe IDs: .id('kubejs:<mod>/<machine or craft>/<output>'); add _from_<input>
// when the same output has another route. Generators (alloy_register, hand
// plates/rods, plank_normalizer) build theirs as kubejs:<system>/<output>.

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

// MOLTEN VESSEL FRAME
ServerEvents.recipes(event => {
  event.custom({
    type: 'tconstruct:melting',
    ingredient: { item: 'kubejs:ingot_vesselframe' },
    result: { fluid: 'kubejs:molten_vessel_frame', amount: 90 },
    temperature: 1000,
    time: 60
  }).id('kubejs:tconstruct/melting/molten_vessel_frame');
});

//====================CHANGED RECIPES==================

// MOLTEN ENDERIUM (vessel frame replaces lead)
ServerEvents.recipes(event => {
  event.remove({ id: 'tconstruct:smeltery/alloys/molten_enderium' });
  event.custom({
    type: 'tconstruct:alloy',
    inputs: [
      { fluid: 'kubejs:molten_vessel_frame', amount: 90 },
      { tag: 'tconstruct:molten_diamond', amount: 100 },
      { tag: 'forge:ender', amount: 500 }
    ],
    result: { tag: 'forge:molten_enderium', amount: 180 },
    temperature: 1350
  }).id('tconstruct:smeltery/alloys/molten_enderium');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
