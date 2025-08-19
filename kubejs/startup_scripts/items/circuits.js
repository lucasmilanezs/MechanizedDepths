// OSGLOTRONIC CONTROL CIRCUIT (custom:osglotronic_control_circuit)
StartupEvents.registry('item', event => {
  event.create('osglotronic_control_circuit')
    .displayName('Osglotronic Control Circuit')
    .texture('custom:item/osgloglium_control_circuit')
});

// REDSTONE FLUX SUPER COIL
StartupEvents.registry('item', event => {
  event.create('redstone_flux_super_coil')
    .displayName('Redstone Flux Super Coil')
    .texture('custom:item/redstone_flux_super_coil')
    .maxStackSize(64)
});

// REDSTONE FLUX RESONATOR 
StartupEvents.registry('item', event => {
  event.create('rf_resonator')
    .displayName('Redstone Flux Resonator')
    .texture('custom:item/rf_flux_resonator')
    .maxStackSize(64)
});

// EMOTIONALLY STABLE CIRCUIT (kubejs:emotionally_stable_circuit)
StartupEvents.registry('item', event => {
  event.create('emotionally_stable_circuit')
    .displayName('Emotionally Stable Circuit')
    .texture('custom:item/emotionally_stable_circuit')
});