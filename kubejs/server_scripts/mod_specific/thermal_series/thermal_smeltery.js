// THERMAL SERIES - INDUCTION SMELTER


//=========================CUSTOM RECIPES=========================



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

// HARDENED
ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:obsidian_glass' });
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      { item: 'minecraft:quartz' },
      { item: 'kubejs:vitrified_obsidian' },
      { tag: 'forge:dusts/iron' }
    ],
    result: [{ item: 'thermal:obsidian_glass' }],
    energy: 10000
  });
});
//=========================CHANGED RECIPES=========================

//=========================COMPATIBILITY RECIPES=========================
