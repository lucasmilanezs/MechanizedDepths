ServerEvents.recipes(event => {
  event.shaped('kubejs:vivid_infused_stone', [
    'SSS',
    'SLS',
    'SSS'
  ], {
    S: 'naturesaura:infused_stone',
    L: 'kubejs:living_timber'
  }).id('kubejs:custom_items/crafting/vivid_infused_stone');
});
