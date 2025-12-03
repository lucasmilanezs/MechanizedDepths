// CERTITE CRYSTAL (kubejs:certite_crystal)
StartupEvents.registry('item', event => {
  event.create('certite_crystal')
    .displayName('Certite Crystal')
    .texture('custom:item/certite_crystal')
});

// EMPOWERED CERTITE CRYSTAL (kubejs:empowered_certite_crystal)
StartupEvents.registry('item', event => {
  event.create('empowered_certite_crystal')
    .displayName('Empowered Certite Crystal')
    .texture('custom:item/certite_crystal')
    .glow(true)
});

// PRISMALITH (kubejs:prismalith)
StartupEvents.registry('item', event => {
  event.create('prismalith')
    .displayName('Prismalith')
    .texture('custom:item/prismalith')
});

//CRYSTAL OF DEMONIC LOVE
StartupEvents.registry('item', event => {
  event.create('demonic_love')
    .displayName('Crystal of Demonic Love')
    .texture('custom:item/demonic_love');
});