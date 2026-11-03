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

// MAGNESIUM CHLORIDE -> MAGNESIUM + CHLORINE
// Recycles the titanium sponge by-product at ~75% (1000 mB comes from 4 dusts and 400 mB chlorine).
  event.custom({
    type: "pneumaticcraft:thermo_plant",
    exothermic: false,
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 1000,
      fluid: "kubejs:magnesium_chloride"
    },
    item_output: {
      count: 3,
      item: "kubejs:dust_magnesium"
    },
    fluid_output: {
      amount: 300,
      fluid: "mekanism:chlorine"
    },
    pressure: 2.0,
    temperature: {
      min_temp: 773
    }
  }).id("kubejs:thermo_plant/magnesium_chloride_recycling")

// DOUBLE PLASTIC + AETHERIC VAPOR -> REFINED PLASTIC
  event.custom({
    type: "pneumaticcraft:thermo_plant",
    exothermic: false,
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 250,
      fluid: "kubejs:aetheric_vapor"
    },
    item_input: {
      item: "kubejs:double_plastic"
    },
    item_output: {
      item: "kubejs:refined_plastic"
    },
    pressure: 2.0,
    temperature: {
      min_temp: 473
    }
  }).id("kubejs:thermo_plant/refined_plastic")

// MAGMA BLOCK + AETHERIC VAPOR -> AETHERFORGED CINDERBLOCK
  event.custom({
    type: "pneumaticcraft:thermo_plant",
    exothermic: false,
    fluid_input: {
      type: "pneumaticcraft:fluid",
      amount: 1000,
      fluid: "kubejs:aetheric_vapor"
    },
    item_input: {
      item: "minecraft:magma_block"
    },
    item_output: {
      item: "kubejs:aetherforged_cinderblock"
    },
    pressure: 3.0,
    temperature: {
      min_temp: 773
    }
  }).id("kubejs:thermo_plant/aetherforged_cinderblock")
})


//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME