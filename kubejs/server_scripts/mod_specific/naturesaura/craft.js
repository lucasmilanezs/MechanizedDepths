// MOD_NAME - OBJECT_NAME 

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

// ROSE NEEDLE
ServerEvents.recipes(event => {
  event.shaped('kubejs:rose_needle', [
    '  S',
    ' I ',
    'G  '
  ], {
    G: 'minecraft:poppy',
    S: 'minecraft:stick',
    I: 'minecraft:iron_ingot'
  }).id('kubejs:natures_aura/rose_needle');
});

//====================CHANGED RECIPES==================

//BRILLIANT FIBER
ServerEvents.recipes(event => {
  event.remove({ id: 'naturesaura:gold_fiber' });
  event.shaped('2x naturesaura:gold_fiber', [
    'MG ',
    'GM ',
    '   '
  ], {
    G: 'minecraft:gold_nugget',
    M:'#minecraft:flowers'
  }).id('kubejs:natures_aura/brilliant_fiber');
});

// SPIRIT OF CALLING
ServerEvents.recipes(event => {
  event.remove({ id: 'naturesaura:calling_spirit' })

  event.custom({
    type: 'minecraft:crafting_shapeless',
    ingredients: [
      { type: 'forge:nbt', item: 'naturesaura:aura_bottle', nbt: { stored_type: 'naturesaura:overworld' } },
      { item: 'naturesaura:tainted_gold' },
      { item: 'naturesaura:gold_leaf' },
      { item: 'naturesaura:infused_iron' }
    ],
    result: { item: 'naturesaura:calling_spirit' }
  }).id('kubejs:natures_aura/spirit_of_calling')
})

// OFFERING TABLE
ServerEvents.recipes(event => {
  event.remove({ id: 'naturesaura:offering_table' });
  event.shaped('naturesaura:offering_table', [
    'GIG',
    'JGT',
    'WWW'
  ], {
    G: '#forge:plates/gold',
    I: 'naturesaura:infused_iron',
    J: 'naturesaura:token_joy',
    T: 'naturesaura:token_sorrow',
    W: '#minecraft:logs'
  }).id('kubejs:natures_aura/offering_table');
});

// WOODEN STAND
ServerEvents.recipes(event => {
  event.remove({ id: 'naturesaura:wood_stand' });
event.shaped(
    Item.of('naturesaura:wood_stand', 2),
    [
        '   ',
        ' A ',
        ' A '
    ],
    {
        A: '#minecraft:logs'
    })
});

//IMPERCEPTIBLE BUILDER
ServerEvents.recipes(event => {
  event.remove({ id: 'naturesaura:placer' });
  event.shaped(
      Item.of('naturesaura:placer'),
      [
          'ABA',
          'ACA',
          'ADA'
      ],
      {
          B: 'minecraft:hopper',
          C: 'minecraft:dispenser',
          D: 'kubejs:token_utility',
          A: 'minecraft:cobblestone'
      })
});

//ENERGETIC AURA FORGE
ServerEvents.recipes(event => {
  event.remove({ id: 'naturesaura:rf_converter' });
  event.shaped(
    Item.of('naturesaura:rf_converter'),
    [
        'ABA',
        'CDC',
        'ABA'
    ],
    {
        A: 'minecraft:redstone_block',
        B: 'naturesaura:token_rage',
        D: 'naturesaura:conversion_catalyst',
        C: 'kubejs:token_utility'
    })
});

//
//====================COMPATIBILITY RECIPES==================

//RECIPE NAME


