// BUILDING GADGETS 2 - TABLE RECIPE CHANGES

//====================CUSTOM RECIPES==================

//====================CHANGED RECIPES==================

// BUILDING GADGET
ServerEvents.recipes(event => {
  event.remove({ id: 'buildinggadgets2:gadget_building' });
  event.shaped('buildinggadgets2:gadget_building', [
    'iri',
    'xTx',
    'ili'
  ], {
    i: '#forge:plates/steel',
    r: '#forge:dusts/redstone',
    x: '#forge:gems/diamond',
    T: 'mekanism:teleportation_core',
    l: '#forge:gems/lapis'
  }).id('kubejs:buildinggadgets2/crafting/gadget_building');
});

// COPY-PASTE GADGET
ServerEvents.recipes(event => {
  event.remove({ id: 'buildinggadgets2:gadget_copy_paste' });
  event.shaped('buildinggadgets2:gadget_copy_paste', [
    'iri',
    'xTx',
    'ili'
  ], {
    i: '#forge:plates/steel',
    r: '#forge:dusts/redstone',
    x: '#forge:gems/emerald',
    T: 'mekanism:teleportation_core',
    l: '#forge:gems/lapis'
  }).id('kubejs:buildinggadgets2/crafting/gadget_copy_paste');
});

// DESTRUCTION GADGET
ServerEvents.recipes(event => {
  event.remove({ id: 'buildinggadgets2:gadget_destruction' });
  event.shaped('buildinggadgets2:gadget_destruction', [
    'iri',
    'xTx',
    'ili'
  ], {
    i: '#forge:plates/steel',
    r: '#forge:dusts/redstone',
    x: '#forge:ender_pearls',
    T: 'mekanism:teleportation_core',
    l: '#forge:gems/lapis'
  }).id('kubejs:buildinggadgets2/crafting/gadget_destruction');
});

// CUT-PASTE GADGET
ServerEvents.recipes(event => {
  event.remove({ id: 'buildinggadgets2:gadget_cut_paste' });
  event.shaped('buildinggadgets2:gadget_cut_paste', [
    'iri',
    'xTx',
    'ili'
  ], {
    i: '#forge:plates/steel',
    r: '#forge:dusts/redstone',
    x: 'minecraft:shears',
    T: 'mekanism:teleportation_core',
    l: '#forge:gems/lapis'
  }).id('kubejs:buildinggadgets2/crafting/gadget_cut_paste');
});

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME
