// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

// VOID HEAVY OIL -> SPECTRAL OIL
ServerEvents.recipes(event => {
  event.custom({
    type: "pneumaticcraft:thermo_plant",
    exothermic: false,
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 1000,
      fluid: "kubejs:void_heavy_oil"
    },
    fluid_output: {
      amount: 750,
      fluid: "kubejs:spectral_oil"
    },
    temperature: {
      min_temp: 373
    }
  }).id("kubejs:thermo_plant/void_heavy_oil_cracking")
  
// SPECTRAL OIL -> AETHERIC VAPOR
  event.custom({
    type: "pneumaticcraft:thermo_plant",
    exothermic: false,
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 750,
      fluid: "kubejs:spectral_oil"
    },
    fluid_output: {
      amount: 500,
      fluid: "kubejs:aetheric_vapor"
    },
    temperature: {
      min_temp: 373
    }
  }).id("kubejs:thermo_plant/spectral_oil_cracking")
})


//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME