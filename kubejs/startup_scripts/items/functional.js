// ROSE NEEDLE
StartupEvents.registry('item', event => {
  event.create('rose_needle')
    .displayName('Rose Needle')
    .texture('custom:item/rose_needle');
});

// ROUTINE TABLET (kubejs:routine_tablet)
StartupEvents.registry('item', event => {
  event.create('rt:routine_tablet')
    .displayName('Routine Tablet')
    .maxStackSize(1)
});

// STEEL SAWBLADE (kubejs:sawblade_steel)
StartupEvents.registry('item', event => {
  event.create('sawblade_steel')
    .displayName('Steel Sawblade')
    .texture('custom:item/sawblade_steel')
    .unstackable()
    .maxDamage(32);
});

// DARK STEEL SAWBLADE (kubejs:sawblade_dark_steel)
StartupEvents.registry('item', event => {
  event.create('sawblade_dark_steel')
    .displayName('Dark Steel Sawblade')
    .texture('custom:item/sawblade_dark_steel')
    .unstackable()
    .maxDamage(64);
});

//DIAMOND TIPPED SAWBLADE (kubejs:sawblade_diamond)
StartupEvents.registry('item', event => {
  event.create('sawblade_diamond')
    .displayName('Diamond-Tipped Sawblade')
    .texture('custom:item/sawblade_diamond')
    .unstackable()
    .maxDamage(96);
});

//CARBIDE TIPPED SAWBLADE (kubejs:sawblade_carbide)
StartupEvents.registry('item', event => {
  event.create('sawblade_carbide')
    .displayName('Carbide-Tipped Sawblade')
    .texture('custom:item/sawblade_carbide')
    .unstackable()
    .maxDamage(128);
});

//ELEMENTIUM SAWBLADE (kubejs:sawblade_elementium)
StartupEvents.registry('item', event => {
  event.create('sawblade_elementium')
    .displayName('Elementium Sawblade')
    .texture('custom:item/sawblade_elementium')
    .unstackable()
    .maxDamage(128);
});

//MYTHRIL SAWBLADE (kubejs:sawblade_mythril)
StartupEvents.registry('item', event => {
  event.create('sawblade_mythril')
    .displayName('Mythril Sawblade')
    .texture('custom:item/sawblade_mythril')
    .unstackable()
    .maxDamage(256);
});