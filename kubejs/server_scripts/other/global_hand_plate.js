ServerEvents.recipes(event => {
  const plates = [
    { input: '#forge:ingots/iron', output: 'thermal:iron_plate' },
    { input: '#forge:ingots/copper', output: 'thermal:copper_plate' },
    { input: '#forge:ingots/gold', output: 'thermal:gold_plate' },
    { input: '#forge:ingots/tin', output: 'thermal:tin_plate' },
    { input: '#forge:ingots/silver', output: 'thermal:silver_plate' },
    { input: '#forge:ingots/lead', output: 'thermal:lead_plate' },
    { input: '#forge:ingots/nickel', output: 'thermal:nickel_plate' },
    { input: '#forge:ingots/bronze', output: 'thermal:bronze_plate' },
    { input: '#forge:ingots/constantan', output: 'thermal:constantan_plate' },
    { input: '#forge:ingots/electrum', output: 'thermal:electrum_plate' },
    { input: '#forge:ingots/invar', output: 'thermal:invar_plate' },
    { input: '#forge:ingots/signalum', output: 'thermal:signalum_plate' },
    { input: '#forge:ingots/lumium', output: 'thermal:lumium_plate' },
    { input: '#forge:ingots/enderium', output: 'thermal:enderium_plate' }
  ];

  const hammers = [
    'kubejs:stone_hammer',
    'kubejs:metal_hammer',
    'kubejs:diamond_hammer'
  ];

  for (const plate of plates) {
    for (const hammer of hammers) {
      event.shapeless(plate.output, [plate.input, plate.input, hammer])
        .damageIngredient(hammer);
    }
  }
});
