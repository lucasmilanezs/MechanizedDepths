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

// AFRIT ESSENCE
ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:pyrolyzer',
    ingredient: { item: 'occultism:afrit_essence' },
    result: [
      { item: 'occultism:afrit_essence', count: 2 }
    ],
    energy: 50000
  });
});

//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
