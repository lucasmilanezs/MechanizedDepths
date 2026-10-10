StartupEvents.registry('item', event => {
  // ALUMINUM-STEEL LAMINATED PLATE
  event.create('laminated_alloy_plate')
    .displayName('Aluminum-Steel Laminated Plate')
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

//TITANIUM PLATE
StartupEvents.registry('item', event => {
  event.create('plate_titanium')
    .displayName('Titanium Plate')
    .texture('custom:item/plate_titanium');
});

//REFINED QUARTZ PLATE
// A CoFH CountedItem, like Thermal's plates: its constructor registers the "count" model
// predicate (stack size / max stack) that swaps the _0.._3 models. Name comes from
// assets/kubejs/lang/en_us.json because createCustom has no builder.
StartupEvents.registry('item', event => {
  const $CountedItem = Java.loadClass('cofh.core.common.item.CountedItem')
  const $ItemProperties = Java.loadClass('net.minecraft.world.item.Item$Properties')
  event.createCustom('plate_refined_quartz', () => new $CountedItem(new $ItemProperties()))
});

// TITANIUM-OSMIUM LAMINATED PLATE
StartupEvents.registry('item', event => {
  event.create('laminated_titanium_osmium_plate')
    .displayName('Titanium-Osmium Laminated Plate')
    .texture('custom:item/laminated_titanium_osmium_plate');
});