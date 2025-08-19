// AGONY MODULE (kubejs:agony_module)
StartupEvents.registry('item', event => {
  event.create('agony_module')
    .displayName('Agony Module')
    .texture('custom:item/agony_module')
    .maxDamage(200)
    .unstackable()
});

// JOY MODULE (kubejs:joy_module)
StartupEvents.registry('item', event => {
  event.create('joy_module')
    .displayName('Joy Module')
    .texture('custom:item/joy_module')
    .maxDamage(200)
    .unstackable()

});

// LOVE MODULE (kubejs:love_module)
StartupEvents.registry('item', event => {
  event.create('love_module')
    .displayName('Love Module')
    .texture('custom:item/love_module')
    .maxDamage(200)
    .unstackable()
});

// FEAR MODULE (kubejs:fear_module)
StartupEvents.registry('item', event => {
  event.create('fear_module')
    .displayName('Fear Module')
    .texture('custom:item/fear_module')
    .maxDamage(200)
    .unstackable()
});