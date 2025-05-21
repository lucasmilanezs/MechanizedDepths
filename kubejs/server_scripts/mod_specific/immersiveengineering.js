ServerEvents.recipes(event => {
  event.remove({ output: 'immersiveengineering:treated_wood_horizontal' });
  event.shaped('4x immersiveengineering:treated_wood_horizontal', [
    'LLL',
    'LBL',
    'LLL'
  ], {
    L: 'kubejs:living_timber',
    B: 'immersiveengineering:creosote_bucket'
  });

  event.remove({ output: 'immersiveengineering:cokebrick' });
  event.shaped('3x immersiveengineering:cokebrick', [
    'IBI',
    'BVB',
    'IBI'
  ], {
    I: '#forge:plates/iron',
    B: 'minecraft:bricks',
    V: 'kubejs:vivid_infused_stone'
  });

  event.remove({ output: 'immersiveengineering:blastbrick' });
  event.shaped('immersiveengineering:blastbrick', [
    'IBI',
    'BVB',
    'IBI'
  ], {
    I: '#forge:plates/invar',
    B: 'minecraft:bricks',
    V: 'kubejs:vivid_infused_stone'
  });
  event.remove({ output: 'immersiveengineering:waterlmill' });
  event.shaped('immersiveengineering:watermill', [
  ' S ',
  'SCS',
  ' S '
], {
  S: 'immersiveengineering:waterwheel_segment',
  C: 'immersiveengineering:component_iron'
});
  event.remove({ output: 'immersiveengineering:dynamo' });
  event.shaped('immersiveengineering:dynamo', [
    ' I ',
    'RMR',
    'SCS'
  ], {
    I: 'minecraft:copper_ingot',
    M: 'immersiveengineering:component_iron',
    R: 'minecraft:redstone',
    C: 'immersiveengineering:coil_lv',
    S: 'immersiveengineering:ingot_steel'
  });

});

ServerEvents.recipes(event => {
  event.remove({
    type: 'immersiveengineering:metal_press',
    output: 'immersiveengineering:graphite_electrode'
  });
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:alloy',
    input0: { item: 'thermal:steel_ingot' },
    input1: { item: 'minecraft:blaze_powder' },
    result: {
      item: 'kubejs:blazing_steel',
      count: 1
    },
    time: 300
  });
});

ServerEvents.recipes(event => {

  event.remove({ output: 'immersiveengineering:blastbrick_reinforced' });
  event.shaped('immersiveengineering:blastbrick_reinforced', [
    'SPS',
    'PBP',
    'SPS'
  ], {
    S: 'kubejs:blazing_steel',
    P: '#forge:plates/steel',
    B: 'immersiveengineering:blastbrick'
  });
});

ServerEvents.recipes(event => {
  event.shaped(
    Item.of('immersiveengineering:blueprint', '{blueprint:"electrode"}'), // item + NBT
    [
      'BPB',
      'WGW',
      ' D '
    ],
    {
      B: 'kubejs:blazing_steel',
      P: 'minecraft:paper',
      W: 'immersiveengineering:treated_wood_horizontal',
      G: 'immersiveengineering:ingot_hop_graphite',
      D: 'immersiveengineering:blue_dye'
    }
  );
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    input: { item: 'enderio:energetic_alloy_ingot' },
    additives: [
      { item: 'thermal:constantan_ingot' },
      { item: 'thermal:lapis_dust' },
      { item: 'thermal:quartz_dust' }
    ],
    results: [
      { item: 'kubejs:inductive_alloy' }
    ],
    time: 400,
    energy: 51200
  });
;


  // Receita da Precision Matrix Core
  event.shaped('kubejs:precision_matrix_core', [
    'CIC',
    'RQR',
    'CIC'
  ], {
    I: 'kubejs:inductive_alloy',
    C: 'immersiveengineering:circuit_board',
    Q: 'thermal:quartz_dust',
    R: 'immersiveengineering:component_electronic_adv'
  });
});

ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:arc_furnace',
    input: { item: 'minecraft:gold_ingot' },
    additives: [
      { item: 'minecraft:redstone' },
      { item: 'minecraft:glowstone_dust' }
    ],
    results: [
      { item: 'enderio:energetic_alloy_ingot' }
    ],
    time: 400,
    energy: 60000
  });
});

ServerEvents.recipes(event => {

  // ❌ Remove APENAS a receita com Earth Charge (sem afetar outras)
  event.remove({ id: 'thermal:earth_charge/lapis_dust_from_lapis' })

  // ❌ Remove a receita antiga do Crusher (lapis lazuli → blue dye)
  event.remove({
    type: 'immersiveengineering:crusher',
    input: { item: 'minecraft:lapis_lazuli' }
  })

  // ✅ Adiciona nova receita do Crusher (lapis → lapis dust)
  event.custom({
    type: 'immersiveengineering:crusher',
    input: { item: 'minecraft:lapis_lazuli' },
    result: { item: 'thermal:lapis_dust', count: 1 },
    energy: 2400,
    secondaries: []
  })
})





