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
        'ADA',
        'BCB',
        'ABA'
    ],
    {
        D: 'enderio:double_layer_capacitor',
        C: 'enderio:pulsating_crystal',
        B: 'enderio:conduit_binder',
        A: '#forge:ingots/dark_steel'
    }).id('kubejs:enderio/crafting/travel_anchor');
});

ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:stick' });
});
// VACUUM CHEST
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:vacuum_chest' });
  event.shaped('enderio:vacuum_chest', [
    'IDI',
    'ICI',
    'IPI'
  ], {
    I: '#forge:ingots/dark_steel',
    D: 'enderio:double_layer_capacitor',
    C: '#forge:chests',
    P: '#forge:gems/pulsating_crystal'
  }).id('kubejs:enderio/crafting/vacuum_chest');
});

// XP VACUUM
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:xp_vacuum' });
  event.shaped('enderio:xp_vacuum', [
    'IDI',
    'IRI',
    'IPI'
  ], {
    I: '#forge:ingots/dark_steel',
    D: 'enderio:double_layer_capacitor',
    R: 'enderio:experience_rod',
    P: '#forge:gems/pulsating_crystal'
  }).id('kubejs:enderio/crafting/xp_vacuum');
});

// STAFF OF LEVITY
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:staff_of_levity' });
  event.shaped('enderio:staff_of_levity', [
    ' EC',
    ' RE',
    'R  '
  ], {
    E: '#forge:ingots/end_steel',
    C: '#forge:gems/prescient_crystal',
    R: 'enderio:infinity_rod'
  }).id('kubejs:enderio/crafting/staff_of_levity');
});

// ENDER FLUID CONDUIT
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:ender_fluid_conduit' });
  event.shaped(Item.of('enderio:ender_fluid_conduit', 8), [
    'BBB',
    'IEI',
    'BBB'
  ], {
    B: 'enderio:conduit_binder',
    I: '#forge:ingots/vibrant_alloy',
    E: '#forge:ingots/end_steel'
  }).id('kubejs:enderio/crafting/ender_fluid_conduit');
});

// ENCHANTER
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:enchanter' });
  event.shaped('enderio:enchanter', [
    'DBD',
    'SZS',
    ' I '
  ], {
    D: '#forge:gems/diamond',
    B: 'minecraft:book',
    S: '#forge:ingots/soularium',
    Z: 'enderio:frank_n_zombie',
    I: '#forge:ingots/dark_steel'
  }).id('kubejs:enderio/crafting/enchanter');
});

// DARK STEEL SWORD
ServerEvents.recipes(event => {
  event.remove({ id: 'enderio:dark_steel_sword' });
  event.shaped('enderio:dark_steel_sword', [
    ' D ',
    'SDS',
    ' R '
  ], {
    D: '#forge:ingots/dark_steel',
    S: '#forge:ingots/soularium',
    R: '#forge:rods/wooden'
  }).id('kubejs:enderio/crafting/dark_steel_sword');
});
//====================COMPATIBILITY RECIPES==================