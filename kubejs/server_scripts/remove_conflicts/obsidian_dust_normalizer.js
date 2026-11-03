// OBSIDIAN DUST NORMALIZER
// forge:dusts/obsidian is in Almost Unified's ignoredTags, so it is unified here:
// every grinder turns 1 #forge:obsidian (obsidian, crying obsidian) into 4 Thermal Extra dust.

ServerEvents.recipes(event => {
  const DUST = 'thermal_extra:obsidian_dust';
  const OBSIDIAN = { tag: 'forge:obsidian' };

  const OVERRIDES = {
    'thermal_extra:machine/pulverizer/obsidian_dust': {
      type: 'thermal:pulverizer',
      ingredients: [OBSIDIAN],
      result: [{ item: DUST, count: 4 }],
      energy: 7000
    },
    'mekanism:enriching/conversion/obsidian_to_obsidian_dust': {
      type: 'mekanism:enriching',
      input: { ingredient: OBSIDIAN },
      output: { item: DUST, count: 4 }
    },
    'enderio:sag_milling/obsidian': {
      type: 'enderio:sag_milling',
      input: OBSIDIAN,
      outputs: [{ item: { item: DUST, count: 4 }, chance: 1.0, optional: false }],
      energy: 2400
    },
    'create:crushing/obsidian': {
      type: 'create:crushing',
      ingredients: [OBSIDIAN],
      results: [{ item: DUST, count: 4 }],
      processingTime: 500
    },
    'integrateddynamics:squeezer/ore/dust_obsidian': {
      type: 'integrateddynamics:squeezer',
      item: OBSIDIAN,
      result: { items: [{ item: DUST, count: 4 }] }
    },
    'integrateddynamics:mechanical_squeezer/ore/dust_obsidian': {
      type: 'integrateddynamics:mechanical_squeezer',
      item: OBSIDIAN,
      result: { items: [{ item: DUST, count: 4 }] },
      duration: 60
    },
    // Spirit tier multipliers would break the fixed 1:4 ratio.
    'occultism:crushing/obsidian_dust': {
      type: 'occultism:crushing',
      ingredient: OBSIDIAN,
      result: { item: DUST, count: 4 },
      crushing_time: 200,
      ignore_crushing_multiplier: true
    }
  };

  Object.keys(OVERRIDES).forEach(id => {
    event.remove({ id: id });
    event.custom(OVERRIDES[id]).id(id);
  });

  event.custom({
    type: 'immersiveengineering:crusher',
    input: OBSIDIAN,
    result: { base_ingredient: { item: DUST }, count: 4 },
    secondaries: [],
    energy: 6000
  }).id('kubejs:obsidian_dust_normalizer/crusher/obsidian_dust');

  // Took create:powdered_obsidian literally.
  event.remove({ id: 'thermal:compat/create/smelter_create_alloy_chromatic_compound' });
  event.custom({
    type: 'thermal:smelter',
    ingredients: [
      { tag: 'forge:dusts/obsidian', count: 3 },
      { tag: 'forge:dusts/glowstone', count: 3 },
      { item: 'create:polished_rose_quartz', count: 1 }
    ],
    result: [{ item: 'create:chromatic_compound', count: 1 }],
    energy: 3200
  }).id('thermal:compat/create/smelter_create_alloy_chromatic_compound');
});
