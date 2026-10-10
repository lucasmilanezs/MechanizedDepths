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
    }).id('kubejs:enderio/crafting/agony_module')
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
      }).id('kubejs:enderio/crafting/joy_module')
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
      }).id('kubejs:enderio/crafting/love_module')
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
    }).id('kubejs:enderio/crafting/fear_module')
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
        B: '#forge:plates/steel'
    }).id('kubejs:enderio/crafting/void_chassis')
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
    E: '#forge:ingots/end_steel',
    V: 'enderio:void_chassis', 
    }).id('kubejs:enderio/crafting/ensouled_chassis') 
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
        A: '#forge:ingots/soularium',
        C: 'enderio:ensouled_chassis',
        D: 'enderio:vibrant_crystal',
        E: 'enderio:z_logic_controller'
    }).id('kubejs:enderio/crafting/powered_spawner');
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
  }).id('kubejs:enderio/crafting/primitive_alloy_smelter');
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
    G: '#forge:gears/iron',
    A: 'enderio:primitive_alloy_smelter',
    D: '#forge:ingots/dark_steel'
  }).id('kubejs:enderio/crafting/alloy_smelter');
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
        D: '#forge:gears/iron'
    }).id('kubejs:enderio/crafting/crafter');
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
        A: '#forge:ingots/dark_steel'
    }).id('kubejs:enderio/crafting/travel_anchor');
});

ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:stick' });
});
//====================COMPATIBILITY RECIPES==================