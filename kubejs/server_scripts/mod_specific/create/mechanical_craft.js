ServerEvents.recipes(event => {
  event.recipes.create.mechanical_crafting(
    'kubejs:chrome_mask',
    [
      'CCCCC',
      'C C C',
      'CCC C',
      'C CCC',
      'CCCCC'
    ],
    {
      C: 'kubejs:nugget_chrome'
    }
  );
});
