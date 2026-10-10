// THERMAL SERIES - INDUCTION SMELTER


//=========================CUSTOM RECIPES=========================

// TITANIUM ALLOY
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      { item: 'kubejs:titanium_sponge_pure' },
      { item: 'thermal:apatite_dust' },
      { tag: 'forge:dusts/constantan' }
    ],
    result: [{ item: 'kubejs:ingot_titanium_alloy' }],
    energy: 10000
  }).id('kubejs:thermal/smelter/ingot_titanium_alloy');
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
  }).id('kubejs:thermal/smelter/obsidian_glass');
});
//=========================CHANGED RECIPES=========================

//=========================COMPATIBILITY RECIPES=========================
