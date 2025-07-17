console.info('Registering Chapter 8 Items');
// CHAPTER 7

// ORES

// METALS 

// ALLOYS

// DUSTS

// CRYSTALS

// CORES

// CIRCUITS/ELECTRONICS

// INCOMPLETE BLANK TECH CARD (kubejs:incomplete_blank_tech_card)
StartupEvents.registry('item', event => {
  event.create('incomplete_blank_tech_card')
    .displayName('Incomplete Blank Tech Card')
    .texture('custom:item/blank_tech_card');
});

// BLANK TECH CARD (kubejs:blank_tech_card)
StartupEvents.registry('item', event => {
  event.create('blank_tech_card')
    .displayName('Blank Tech Card')
    .texture('custom:item/blank_tech_card');
});

// CRAFTING DATA (kubejs:crafting_data)
StartupEvents.registry('item', event => {
  event.create('crafting_data')
    .displayName('Crafting Data')
    .texture('custom:item/crafting_data');
});

// CRAFTING TECH CARD (kubejs:crafting_tech_card)
StartupEvents.registry('item', event => {
  event.create('crafting_tech_card')
    .displayName('Crafting Tech Card')
    .texture('custom:item/crafting_tech_card');
});

// CHEMISTRY DATA (kubejs:chemistry_data)
StartupEvents.registry('item', event => {
  event.create('chemistry_data')
    .displayName('Chemistry Data')
    .texture('custom:item/chemistry_data');
});

// CHEMISTRY TECH CARD (kubejs:chemistry_tech_card)
StartupEvents.registry('item', event => {
  event.create('chemistry_tech_card')
    .displayName('Chemistry Tech Card')
    .texture('custom:item/chemistry_tech_card');
});



// ORGANICS

// INTERMEDIATE PRODUCTS

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

// PRINTED CRAFTING CIRCUIT (kubejs:printed_crafting_circuit)
StartupEvents.registry('item', event => {
  event.create('printed_crafting_circuit')
    .displayName('Printed Crafting Circuit')
    .texture('custom:item/printed_crafting_circuit')
});

// CRAFTING PROCESSOR (kubejs:crafting_processor)
StartupEvents.registry('item', event => { 
  event.create('crafting_processor')
    .displayName('Crafting Processor')
    .texture('custom:item/crafting_processor')
});

// REFINED CRAFTING TABLE (kubejs:refined_crafting_table)
StartupEvents.registry('item', event => {
  event.create('refined_crafting_table')
    .displayName('Refined Crafting Table')
    .texture('custom:item/refined_crafting_table')
});

// PRISMALITH (kubejs:prismalith)
StartupEvents.registry('item', event => {
  event.create('prismalith')
    .displayName('Prismalith')
    .texture('custom:item/prismalith')
});

// COMPULSORT CELL (kubejs:compulsort_cell)
StartupEvents.registry('item', event => {
  event.create('compulsort_cell')
    .displayName('Compulsort Cell')
    .texture('custom:item/compulsort_cell')
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
