ServerEvents.recipes(event => {
  // Receita de pulverização que só funciona bem com catalisador
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: {
      item: 'kubejs:empowered_blaze_powder'
    },
    result: [
      // Nenhum resultado primário — só drop opcional
      {
        item: 'kubejs:placeholder_sub',
        chance: 0.0
      }
    ],
    energy: 2000
  });
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: { tag: 'forge:dusts/obsidian' },
    result: [
      {
        item: 'kubejs:obsidianite',
        chance: 0.0
      }
    ],
    energy: 4000,
    experience: 0.2
  });
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:pulverizer',
    ingredient: { item: 'kubejs:obsidian_cluster' },
    result: [
      { item: 'kubejs:dust_rutile', chance: 0.0 },
      { item: 'kubejs:dust_magnesium', chance: 0.2 },
      { item: 'kubejs:dust_ilmenite', chance: 0.0 }
    ],
    energy: 6000
  });

  event.custom({
    type: 'thermal:pulverizer',
    ingredient: { item: 'kubejs:basalt_cluster' },
    result: [
      { item: 'kubejs:dust_ilmenite', chance: 0.0 },
      { item: 'kubejs:dust_magnesium', chance: 0.4 },
      { item: 'kubejs:dust_rutile', chance: 0.0 }
    ],
    energy: 4000
  });
});
