// CHAPTER 6

// ORES

// OBSIDIANITE
StartupEvents.registry('item', event => {
  event.create('obsidianite')
    .displayName('Obsidianite')
    .texture('custom:item/obsidianite')

})

// METALS 

StartupEvents.registry('item', event => {

  // TIER 2 → TIER 3
  event.create('laminated_alloy_plate')
    .displayName('Laminated Alloy Plate')
    .texture('custom:item/laminated_alloy_plate')

  // TIER 3 → TIER 4
  event.create('blaze_glass_compound')
    .displayName('Blaze Glass Compound')
    .texture('custom:item/blaze_glass_compound')

  // TIER 4 → desbloqueio de mods externos
  event.create('organic_polymer_mesh')
    .displayName('Organic Polymer Mesh')
    .texture('custom:item/organic_polymer_mesh')
})

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

// ALLOYS

// DUSTS

// CRYSTALS

// CORES

// CIRCUITS/ELECTRONICS

// REDSTONE FLUX SUPER COIL
StartupEvents.registry('item', event => {
  event.create('redstone_flux_super_coil')
    .displayName('Redstone Flux Super Coil')
    .texture('custom:item/redstone_flux_super_coil')
    .maxStackSize(64)
})

// REDSTONE FLUX RESONATOR 
StartupEvents.registry('item', event => {
  event.create('rf_resonator')
    .displayName('Redstone Flux Resonator')
    .texture('custom:item/rf_flux_resonator')
    .maxStackSize(64)
})

// ORGANICS

// GELATINOUS ORGANIC SOLVENT (kubejs:gelatinous_organic_solvent)
StartupEvents.registry('item', event => {
  event.create('gelatinous_organic_solvent')
    .displayName('Gelatinous Organic Solvent')
    .texture('custom:item/gelatinous_organic_solvent')
    .maxStackSize(64)
})

// INTERMEDIATE PRODUCTS

// EMPOWERED BLAZE ROD
StartupEvents.registry('item', event => {
  event.create('empowered_blaze_rod')
    .displayName('Empowered Blaze Rod')
    .texture('custom:item/empowered_blaze_rod')
    .maxStackSize(64)
})