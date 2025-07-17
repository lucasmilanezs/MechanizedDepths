// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

// 
ServerEvents.recipes(event => {
  event.custom({
    type: "actuallyadditions:laser",
    energy: 100,
    ingredient: { item: "ae2:certus_quartz_crystal" },
    result: { item: "kubejs:certite_crystal" }
  }).id("kubejs:laser/certite_crystal");
});

// 
ServerEvents.recipes(event => {
  event.custom({
    type: "actuallyadditions:laser",
    energy: 100,
    ingredient: { item: "kubejs:pure_silicon" },
    result: { item: "kubejs:silicon_crystal_seed" }
  }).id("kubejs:laser/silicon_crystal_seed");
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME

