console.info('Registering Chapter 4 Items');
// CHAPTER 4

// ORES

// METALS 

// ALLOYS

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

// DUSTS

// CRYSTALS

// CORES

// CIRCUITS/ELECTRONICS

// OSGLOTRONIC CONTROL CIRCUIT (custom:osglotronic_control_circuit)
StartupEvents.registry('item', event => {
  event.create('osglotronic_control_circuit')
    .displayName('Osglotronic Control Circuit')
    .texture('custom:item/osgloglium_control_circuit')
});

// PRINTED SIMULATION PROCESSOR (custom:printed_simulation_processor)
StartupEvents.registry('item', event => {
  event.create('printed_simulation_processor')
    .displayName('Printed Simulation Processor')
    .texture('custom:item/printed_simulation_processor')
});

// SIMULATION PROCESSOR (custom:simulation_processor)
StartupEvents.registry('item', event => {
  event.create('simulation_processor')
    .displayName('Simulation Processor')
    .texture('custom:item/simulation_processor')
});

// ORGANICS

// INTERMEDIATE PRODUCTS