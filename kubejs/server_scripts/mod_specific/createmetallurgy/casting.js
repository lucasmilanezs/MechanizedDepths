// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:


//====================CUSTOM RECIPES==================

// OBDURIUM INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:casting_in_table',
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:ingots/obdurium'
        }
      }
    ],
    ingredients: [
      { item: 'thermal:chiller_ingot_cast' },
      { amount: 90, fluid: 'createmetallurgy:molten_obdurium', nbt: {} }
    ],
    processingTime: 60,
    result: {
      item: 'createmetallurgy:obdurium_ingot'
    }
  }).id('kubejs:createmetallurgy/casting/obdurium_ingot');
});

// VESSEL FRAME INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
      { item: 'createmetallurgy:graphite_ingot_mold' },
      { amount: 90, fluid: 'kubejs:molten_vessel_frame', nbt: {} }
    ],
    processingTime: 60,
    result: {
      item: 'kubejs:ingot_vesselframe'
    }
  }).id('kubejs:createmetallurgy/casting/ingot_vesselframe');
});


//====================CHANGED RECIPES==================

// OBDURIUM INGOT (cast over an abyssal ingot, which is consumed)
ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
      { tag: 'forge:ingots/abyssal' },
      { amount: 90, fluid: 'kubejs:molten_obdurate_slag', nbt: {} }
    ],
    mold_consumed: true,
    processingTime: 120,
    result: {
      item: 'createmetallurgy:obdurium_ingot'
    }
  }).id('kubejs:createmetallurgy/casting/obdurium_ingot_from_abyssal');
});

// SOUL INFUSED INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:casting_in_table',
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:ingots/soul_infused'
        }
      }
    ],
    ingredients: [
      { item: 'createmetallurgy:graphite_ingot_mold' },
      { amount: 90, fluid: 'thermal_extra:soul_infused', nbt: {} }
    ],
    processingTime: 60,
    result: {
      item: 'thermal_extra:soul_infused_ingot'
    }
  }).id('kubejs:createmetallurgy/casting/soul_infused_ingot');
});

// TWINITE INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:casting_in_table',
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:ingots/twinite'
        }
      }
    ],
    ingredients: [
      { item: 'createmetallurgy:graphite_ingot_mold' },
      { amount: 90, fluid: 'thermal_extra:twinite', nbt: {} }
    ],
    processingTime: 60,
    result: {
      item: 'thermal_extra:twinite_ingot'
    }
  }).id('kubejs:createmetallurgy/casting/twinite_ingot');
});

// SHELLITE INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:casting_in_table',
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:ingots/shellite'
        }
      }
    ],
    ingredients: [
      { item: 'createmetallurgy:graphite_ingot_mold' },
      { amount: 90, fluid: 'thermal_extra:shellite', nbt: {} }
    ],
    processingTime: 60,
    result: {
      item: 'thermal_extra:shellite_ingot'
    }
  }).id('kubejs:createmetallurgy/casting/shellite_ingot');
});

// DRAGON STEEL INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:casting_in_table',
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:ingots/dragonsteel'
        }
      }
    ],
    ingredients: [
      { item: 'createmetallurgy:graphite_ingot_mold' },
      { amount: 90, fluid: 'thermal_extra:dragonsteel', nbt: {} }
    ],
    processingTime: 60,
    result: {
      item: 'thermal_extra:dragonsteel_ingot'
    }
  }).id('kubejs:createmetallurgy/casting/dragon_steel_ingot');
});

// ABYSSAL INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:casting_in_table',
    conditions: [
      {
        type: 'forge:not',
        value: {
          type: 'forge:tag_empty',
          tag: 'forge:ingots/abyssal'
        }
      }
    ],
    ingredients: [
      { item: 'createmetallurgy:graphite_ingot_mold' },
      { amount: 90, fluid: 'thermal_extra:abyssal', nbt: {} }
    ],
    processingTime: 60,
    result: {
      item: 'thermal_extra:abyssal_ingot'
    }
  }).id('kubejs:createmetallurgy/casting/abyssal_ingot');
});

// TITANIUM INGOT
ServerEvents.recipes(event => {
  event.custom({
    type: 'createmetallurgy:casting_in_table',
    ingredients: [
      { item: 'createmetallurgy:graphite_ingot_mold' },
      { amount: 90, fluid: 'kubejs:molten_titanium', nbt: {} }
    ],
    processingTime: 60,
    result: {
      item: 'kubejs:ingot_titanium'
    }
  }).id('kubejs:createmetallurgy/casting/titanium_ingot');
});
//====================COMPATIBILITY RECIPES===================

//RECIPE NAME