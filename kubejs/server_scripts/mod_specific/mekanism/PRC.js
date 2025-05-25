// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================


// TITANIUM DIOXIDE DUST + FERROUS SOLUTION
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
      fluid: "kubejs:acidic_flux"
    },
    gasInput: {
      amount: 100,
      gas: "mekanism:hydrogen"
    },
    itemOutput: {
      item: "kubejs:dust_titanium_dioxide",
      count: 1
    },
    gasOutput: {
      gas: "kubejs:ferrous_solution",
      amount: 250
    }
  });
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
  });
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
  });
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
  });
});
