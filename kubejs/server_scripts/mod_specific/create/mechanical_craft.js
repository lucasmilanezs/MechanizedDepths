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

// ME CONTROLLER
ServerEvents.recipes(event => {
  event.remove({ id: 'ae2:network/blocks/controller'});
  event.recipes.create.mechanical_crafting(
    'ae2:controller',
    [
      'SSUSS',
      'SFEFS',
      'UFCFU',
      'SFEFS',
      'SSUSS'
    ],
    {
      S: 'ae2:smooth_sky_stone_block',
      F: 'ae2:fluix_crystal',
      E: 'ae2:engineering_processor',
      U: 'mekanism:ultimate_control_circuit',
      C: 'mekanism:steel_casing',
    }
  );
});
