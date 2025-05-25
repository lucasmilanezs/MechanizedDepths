// ========================= Ingots & Alloys =========================


























// ========================= Biomaterials & Cores =========================





// Incomplete Obsidian Core (custom:incomplete_obsidian_core)
StartupEvents.registry('item', event => {
  event.create('incomplete_obsidian_core')
    .displayName('Incomplete Obsidian Core')
    .tooltip([
      Text.of('§8Um núcleo em formação...').italic()
    ])
    .texture('custom:item/incomplete_obsidian_core')
})





// ========================= Tools =========================
// Stone Hammer (custom:stone_hammer)
// Metal Hammer (custom:metal_hammer)
// Diamond Hammer (custom:diamond_hammer)
StartupEvents.registry('item', event => {
  event.create('stone_hammer')
    .displayName('Stone Hammer')
    .maxDamage(64)
    .tag('forge:tools/hammers')
    .unstackable();

  event.create('metal_hammer')
    .displayName('Metal Hammer')
    .maxDamage(256)
    .tag('forge:tools/hammers')
    .unstackable();

  event.create('diamond_hammer')
    .displayName('Diamond Hammer')
    .maxDamage(1024)
    .tag('forge:tools/hammers')
    .unstackable();
});

// ========================= Special / Other =========================



// PLACEHOLDER SUB (custom:placeholder_sub)
StartupEvents.registry('item', event => {
  event.create('placeholder_sub')
    .displayName('Placeholder Sub')
    .texture('custom:item/placeholder_sub')
    .maxStackSize(64)
})
// ========================= Fluids =========================
// Melted Blaze Metal (custom:melted_blaze_metal)



// ========================= Progression Materials =========================











