// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================


// TITANIUM DIOXIDE DUST + FERROUS SOLUTION
// HCl leaching of ilmenite. Locked behind md_chemistry_2 (gamestage/chemistry_tech_card.js).
ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:reaction",
    duration: 300,
    energyRequired: 800,
    itemInput: {
      ingredient: {
        item: "kubejs:dust_ilmenite"
      }
    },
    fluidInput: {
      amount: 250,
      fluid: "minecraft:water"
    },
    gasInput: {
      amount: 200,
      gas: "mekanism:hydrogen_chloride"
    },
    itemOutput: {
      item: "kubejs:dust_titanium_dioxide",
      count: 1
    },
    gasOutput: {
      gas: "kubejs:ferrous_solution",
      amount: 250
    }
  }).id('kubejs:mekanism/reaction/dust_titanium_dioxide');
});

// TITANIUM TERACHLORIDE 
ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:reaction",
    duration: 300,
    energyRequired: 1000,
    itemInput: {
      ingredient: {
        item: "kubejs:dust_titanium_dioxide"
      }
    },
    fluidInput: {
      amount: 250,
      fluid: "minecraft:water"
    },
    gasInput: {
      amount: 100,
      gas: "mekanism:chlorine"
    },
    gasOutput: {
      gas: "kubejs:titanium_tetrachloride",
      amount: 250
    }
  }).id('kubejs:mekanism/reaction/titanium_tetrachloride_from_titanium_dioxide');
});

// TITANIUM TERACHLORIDE 2
ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:reaction",
    duration: 300,
    energyRequired: 1000,
    itemInput: {
      ingredient: {
        item: "kubejs:dust_rutile"
      }
    },
    fluidInput: {
      amount: 250,
      fluid: "minecraft:water"
    },
    gasInput: {
      amount: 100,
      gas: "mekanism:chlorine"
    },
    gasOutput: {
      gas: "kubejs:titanium_tetrachloride",
      amount: 250
    }
  }).id('kubejs:mekanism/reaction/titanium_tetrachloride_from_rutile');
});

// RAW TITANIUM SPONGE + MAGNSIUM CHLORIDE
ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:reaction",
    duration: 300,
    energyRequired: 1200,
    itemInput: {
      ingredient: {
        item: "kubejs:dust_magnesium"
      }
    },
    gasInput: {
      amount: 250,
      gas: "kubejs:titanium_tetrachloride"
    },
    fluidInput: {
      amount: 100,
      fluid: "minecraft:water"
    },
    itemOutput: {
      item: "kubejs:titanium_sponge_raw",
      count: 1
    },
    gasOutput: {
      gas: "kubejs:magnesium_chloride",
      amount: 250
    }
  }).id('kubejs:mekanism/reaction/titanium_sponge_raw');
});

// MAGNESIUM CHLORIDE GAS <-> FLUID
// Lets the Thermopneumatic Processing Plant recycle it (pneumaticraft/thermo_plant.js).
ServerEvents.recipes(event => {
  event.custom({
    type: "mekanism:rotary",
    gasInput: {
      amount: 1,
      gas: "kubejs:magnesium_chloride"
    },
    fluidOutput: {
      amount: 1,
      fluid: "kubejs:magnesium_chloride"
    },
    fluidInput: {
      amount: 1,
      fluid: "kubejs:magnesium_chloride"
    },
    gasOutput: {
      amount: 1,
      gas: "kubejs:magnesium_chloride"
    }
  }).id('kubejs:mekanism/rotary/magnesium_chloride');
});
