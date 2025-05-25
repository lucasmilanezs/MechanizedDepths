// CHAPTER 2

// ORES

// METALS 

// ALLOYS

// Inductive Alloy (custom:inductive_alloy)
StartupEvents.registry('item', event => {
  event.create('inductive_alloy')
    .displayName('Inductive Alloy')
    .texture('custom:item/inductive_alloy');
});

// Blazing Steel (custom:blazing_steel)
StartupEvents.registry('item', event => {
  event.create('blazing_steel')
    .displayName('Blazing Steel')
    .texture('custom:item/blazing_steel')
    .fireResistant()
});

// DUSTS

// CRYSTALS

// CORES

// CIRCUITS/ELECTRONICS

// ORGANICS

// INTERMEDIATE PRODUCTS