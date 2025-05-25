// THERMAL SERIES - PYROLYZER

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:pyrolyzer',
    ingredient: { item: 'thermal:slag' },
    result: [
      { item: 'thermal:rich_slag', chance: 0.25 },
      { item: 'thermal:tar', chance: 0.5 }
    ],
    energy: 6000
  });
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
