// THERMAL SERIES - INDUCTION SMELTER


//=========================CUSTOM RECIPES=========================

// OSGLOGLIUM
ServerEvents.recipes(event => {
    event.custom({
    "type": "thermal:smelter",
    "ingredients": [
        { "item": "kubejs:inductive_alloy" },
        { "item": "mekanism:ingot_refined_glowstone" }
    ],
    "result": [
        { "item": "kubejs:osgloglium", "count": 1 }
    ],
    "energy": 2400
    })
});

// PURE TITANIUM
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:smelter',
    ingredients: [{ item: 'kubejs:titanium_sponge_pure' }],
    result: [{ item: 'kubejs:ingot_titanium' }],
    energy: 6000
  });
});

// TITANIUM ALLOY]
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      { item: 'kubejs:titanium_sponge_pure' },
      { item: 'thermal:apatite_dust' },
      { item: 'thermal:constantan_dust' }
    ],
    result: [{ item: 'kubejs:ingot_titanium_alloy' }],
    energy: 10000
  });
});
//=========================CHANGED RECIPES=========================

//=========================COMPATIBILITY RECIPES=========================
