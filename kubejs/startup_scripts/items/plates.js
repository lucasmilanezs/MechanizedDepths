StartupEvents.registry('item', event => {
  // LAMINATED ALLOY PLATE
  event.create('laminated_alloy_plate')
    .displayName('Laminated Alloy Plate')
    .texture('custom:item/laminated_alloy_plate')

  // BLAZE GLASS COMPOUND
  event.create('blaze_glass_compound')
    .displayName('Blaze Glass Compound')
    .texture('custom:item/blaze_glass_compound')
  // ORGANIC POLYMER MESH
  event.create('organic_polymer_mesh')
    .displayName('Organic Polymer Mesh')
    .texture('custom:item/organic_polymer_mesh')
});

// LUCENT PLATE (kubejs:lucent_plate)
StartupEvents.registry('item', event => {
  event.create('lucent_plate')
    .displayName('Lucent Plate')
    .texture('custom:item/lucent_plate');
});