// ENDERIO - TABLE RECIPE CHANGES

//====================CUSTOM RECIPES==================

//AGONY MODULE
ServerEvents.recipes(event => {
  event.shaped(
    Item.of('kubejs:agony_module'),
    [
        '   ',
        'ABA',
        'CDC'
    ],
    {
        D: 'naturesaura:token_anger',
        B: 'minecraft:red_stained_glass_pane',
        A: '#forge:plates/lead',
        C: 'enderio:double_layer_capacitor'
    })
});

//JOY MODULE
ServerEvents.recipes(event => {
  event.shaped(
      Item.of('kubejs:joy_module'),
      [
          '   ',
          'ABA',
          'CDC'
      ],
      {
          A: '#forge:plates/silver',
          D: 'naturesaura:token_joy',
          B: 'minecraft:yellow_stained_glass_pane',
          C: 'enderio:double_layer_capacitor'
      })
});

// LOVE MODULE
ServerEvents.recipes(event => {
  event.shaped(
      Item.of('kubejs:love_module'),
      [
          '   ',
          'ABA',
          'CDC'
      ],
      {
          A: '#forge:plates/silver',
          B: 'minecraft:pink_stained_glass_pane',
          D: 'actuallyadditions:empowered_restonia_crystal',
          C: 'enderio:octadic_capacitor'
      })
});

// FEAR MODULE
ServerEvents.recipes(event => {
event.shaped(
    Item.of('kubejs:fear_module'),
    [
        '   ',
        'ABA',
        'CDC'
    ],
    {
        A: '#forge:plates/lead',
        C: 'enderio:octadic_capacitor',
        B: 'minecraft:blue_stained_glass_pane',
        D: 'actuallyadditions:empowered_palis_crystal'
    })
});

//====================CHANGED RECIPES==================

// VOID CHASSIS
ServerEvents.recipes(event => {
  event.remove({ output: 'enderio:void_chassis' });
  event.shaped(
    Item.of('enderio:void_chassis'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        C: 'kubejs:entropic_drive',
        A: 'minecraft:iron_bars',
        B: 'thermal:steel_plate'
    })
});
// ENSOULED CHASSIS
ServerEvents.recipes(event => {
  event.remove({ output: 'enderio:ensouled_chassis' });
  event.shaped('enderio:ensouled_chassis', [
    'SES',
    'EVE',
    'SES'
  ], {
    S: 'enderio:soul_chain',
    E: 'enderio:end_steel_ingot',
    V: 'enderio:void_chassis', 
    }) 
});

// POWERED SPAWNER
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:powered_spawner' });
  event.shaped(
    Item.of('enderio:powered_spawner'),
    [
        'ABA',
        'ACA',
        'DED'
    ],
    {
        B: 'enderio:broken_spawner',
        A: 'enderio:soularium_ingot',
        C: 'enderio:ensouled_chassis',
        D: 'enderio:vibrant_crystal',
        E: 'enderio:z_logic_controller'
    });
});

// PRIMITIVE ALLOY SMELTER
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:primitive_alloy_smelter' });
  event.shaped('enderio:primitive_alloy_smelter', [
    'FFF',
    'SCS',
    'SSS'
  ], {
    F: 'minecraft:furnace',
    C: 'enderio:void_chassis',
    S: 'minecraft:deepslate',
  });
});

// ALLOY SMELTER
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:alloy_smelter' });
  event.shaped('enderio:alloy_smelter', [
    'DAD',
    'FIF',
    'GCG'
  ], {
    F: 'minecraft:furnace',
    I: 'enderio:grains_of_infinity',
    C: 'minecraft:cauldron',
    G: 'enderio:iron_gear',
    A: 'enderio:primitive_alloy_smelter',
    D: 'enderio:dark_steel_ingot'
  });
});

//CRAFTER
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:crafter' });
  event.shaped(
    Item.of('enderio:crafter'),
    [
        'AAA',
        'BCB',
        'DED'
    ],
    {
        E: 'minecraft:crafting_table',
        C: 'enderio:void_chassis',
        B: 'kubejs:laminated_alloy_plate',
        A: 'ae2:silicon',
        D: 'enderio:iron_gear'
    });
});

//TRAVEL ANCHOR
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:travel_anchor' });
  event.shaped(
    Item.of('enderio:travel_anchor'),
    [
        'ABA',
        'BCB',
        'ABA'
    ],
    {
        C: 'enderio:pulsating_crystal',
        B: 'enderio:conduit_binder',
        A: 'enderio:dark_steel_ingot'
    });
});

ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:stick' });
});
//====================COMPATIBILITY RECIPES==================