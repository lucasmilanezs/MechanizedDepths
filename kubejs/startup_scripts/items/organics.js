// FLESH COMPOUND (kubejs:flesh_compound)
StartupEvents.registry('item', event => {
  event.create('flesh_compound')
    .displayName('Flesh Compound')
    .texture('custom:item/flesh_compound')
});

// GELATINOUS ORGANIC SOLVENT (kubejs:gelatinous_organic_solvent)
StartupEvents.registry('item', event => {
  event.create('gelatinous_organic_solvent')
    .displayName('Gelatinous Organic Solvent')
    .texture('custom:item/gelatinous_organic_solvent')
    .maxStackSize(64)
});