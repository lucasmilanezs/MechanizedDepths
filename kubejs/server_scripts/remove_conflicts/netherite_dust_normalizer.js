// NETHERITE DUST NORMALIZER
// The Nitratic Igniter is the only source of netherite dust (input of Abyssal alloying).

ServerEvents.recipes(event => {
  [
    'mekanism:processing/netherite/scrap_to_dust',
    'mekanism:processing/netherite/ingot_to_dust',
    'thermal:machines/pulverizer/pulverizer_netherite_ingot_to_dust',
    'thermal:machines/pulverizer/pulverizer_netherite_plate_to_dust',
    'occultism:crushing/netherite_dust',
    'occultism:crushing/netherite_dust_from_raw',
    'occultism:crushing/netherite_dust_from_raw_block',
    'occultism:crushing/netherite_dust_from_ingot',
    'alltheores:netherite_dust_from_hammer_crushing'
  ].forEach(id => event.remove({ id: id }));

  event.custom({
    type: 'thermal_extra:nitratic_igniter',
    ingredients: [{ tag: 'forge:ingots/netherite' }],
    result: [{ item: 'thermal:netherite_dust' }],
    energy: 12000
  }).id('kubejs:netherite_dust_normalizer/nitratic_igniter/netherite_dust');
});
