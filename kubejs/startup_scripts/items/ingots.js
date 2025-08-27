// Inductive Alloy (custom:inductive_alloy)
StartupEvents.registry('item', event => {
  event.create('inductive_alloy')
    .displayName('Inductive Alloy')
    .texture('custom:item/inductive_alloy');
});

// Blazing Steel (custom:blazing_steel)
StartupEvents.registry('item', event => {
  event.create('blazing_steel')
    .displayName('Blazing Steel')
    .texture('custom:item/blazing_steel')
    .fireResistant()
});

// Blazebound Steel (custom:blazebound_steel)
StartupEvents.registry('item', event => {
  event.create('blazebound_steel')
    .displayName('Blazebound Steel')
    .texture('custom:item/blazebound_steel')
})

// Incomplete Blazebound Steel (custom:incomplete_blazebound_steel)
StartupEvents.registry('item', event => {
  event.create('incomplete_blazebound_steel')
    .displayName('Incomplete Blazebound Steel')
    .texture('custom:item/incomplete_blazebound_steel')
})

// Empowered Blazing Steel (custom:empowered_blazing_steel)
StartupEvents.registry('item', event => {
  event.create('empowered_blazing_steel')
    .displayName('Empowered Blazing Steel')
    .texture('custom:item/empowered_blazing_steel')
})

// OSGLOGLIUM (custom:osgloglium)
StartupEvents.registry('item', event => {
  event.create('osgloglium')
    .displayName('Osgloglium')
    .texture('custom:item/osgloglium')
});

// REFINED QUARTZ (custom:refined_quartz)
StartupEvents.registry('item', event => {
  event.create('refined_quartz')
    .displayName('Refined Quartz')
    .texture('custom:item/refined_quartz')
});

// MOBGRINDIUM INGOT (kubejs:mobgrindium_ingot)
StartupEvents.registry('item', event => {
  event.create('mobgrindium_ingot')
    .displayName('Mobgrindium Ingot')
    .texture('custom:item/mob_grindium')
});

// TITANIUM CHAIN
StartupEvents.registry('item', event => {
  event.create('basalt_cluster')
    .displayName('Basalt Cluster')
    .texture('custom:item/basalt_cluster');

  event.create('obsidian_cluster')
    .displayName('Obsidian Cluster')
    .texture('custom:item/obsidian_cluster');

  event.create('dust_rutile')
    .displayName('Rutile Dust')
    .texture('custom:item/dust_rutile');

  event.create('dust_ilmenite')
    .displayName('Ilmenite Dust')
    .texture('custom:item/dust_ilmenite');

  event.create('dust_titanium_dioxide')
    .displayName('Titanium Dioxide Dust')
    .texture('custom:item/dust_titanium_dioxide');

  event.create('titanium_sponge_raw')
    .displayName('Raw Titanium Sponge')
    .texture('custom:item/titanium_sponge_raw');

  event.create('titanium_sponge_pure')
    .displayName('Purified Titanium Sponge')
    .texture('custom:item/titanium_sponge_pure');

  event.create('ingot_titanium')
    .displayName('Titanium Ingot')
    .texture('custom:item/ingot_titanium');

  event.create('ingot_titanium_alloy')
    .displayName('Titanium Alloy Ingot')
    .texture('custom:item/ingot_titanium_alloy');

  event.create('dust_magnesium')
    .displayName('Magnesium Dust')
    .texture('custom:item/dust_magnesium');
});

// COMPRESSED MEAT BAR (kubejs:meat_bar)
StartupEvents.registry('item', event => {
  event.create('meat_bar')
    .displayName('Compressed Meat Bar')
    .tooltip('Somehow still edible.')
    .texture('custom:item/meat_bar') 
    .food(food => {
      food.hunger(6)             
      food.saturation(0.4)       
      food.meat()                
      food.alwaysEdible()        
      food.fastToEat()           
      food.effect('minecraft:regeneration', 100, 0, 1.0) 
    })
});

// MEATTHERIAL (kubejs:meattherial)
StartupEvents.registry('item', event => {
  event.create('meattherial')
    .displayName('Meattherial™')
    .tooltip([
      'Soft, volatile, and faintly pulsing.', 
      'Almost edible.',
      '',
      '§7A new line of technical nutrition with 0% guilt,',
      '§7and 100% soul. Now with flavor!'
    ])
    .texture('custom:item/meattherial')
});

// BONE-GRADE TITANIUM (kubejs:ingot_titanium_bonegrade)
StartupEvents.registry('item', event => {
  event.create('ingot_titanium_bonegrade')
    .displayName('Bone-Grade Titanium')
    .texture('custom:item/ingot_titanium_bonegrade'); 
});

// VESSEL FRAME INGOT (kubejs:ingot_vesselframe)
StartupEvents.registry('item', event => {
  event.create('ingot_vesselframe')
    .displayName('Vessel Frame Ingot')
    .texture('custom:item/ingot_vesselframe');
});

// COMPRESSED GOLD (kubejs:ingot_compressed_gold)
StartupEvents.registry('item', event => {
  event.create('ingot_gold_compressed')
    .displayName('Compressed Gold Ingot')
    .texture('custom:item/ingot_compressed_gold');
});

// CUBIC

//polysilicon (kubejs:polysilicon_ingot)
StartupEvents.registry('item', event => {
  event.create('polysilicon')
    .displayName('Polysilicon ingot')
    .texture('custom:item/polysilicon_ingot');
});

// CHROME INGOT (kubejs:ingot_chrome)
StartupEvents.registry('item', event => {
  event.create('ingot_chrome')
    .displayName('Chrome Ingot')
    .texture('custom:item/ingot_chrome');
});