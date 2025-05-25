// THERMAL SERIES - CATALYSTS

ServerEvents.recipes(event => {
  event.custom({
    type: 'thermal:pulverizer_catalyst',
    ingredient: { item: 'minecraft:flint' },
    primary_mod: 0.0,
    secondary_mod: 0.0,
    energy_mod: 10.0,
    min_chance: 0.0,
    use_chance: 1.0
  });
});

ServerEvents.recipes(event => {

  // Mekanism: Quartz Dust — básico, descartável, leve bônus
  event.custom({
    type: 'thermal:pulverizer_catalyst',
    ingredient: { item: 'mekanism:dust_quartz' },
    primary_mod: 1.1,             // leve boost
    secondary_mod: 1.0,           
    energy_mod: 0.85,             // levemente mais rápido
    min_chance: 0.05,             // chance mínima simbólica
    use_chance: 0.85              // consome com frequência
  });

  // IE: Dust Coke — foco em subproduto, bom boost de velocidade
  event.custom({
    type: 'thermal:pulverizer_catalyst',
    ingredient: { item: 'immersiveengineering:dust_coke' },
    primary_mod: 1.0,
    secondary_mod: 1.5,           // subproduto elevado
    energy_mod: 0.3,              // bastante rápido, compensa custo de processamento
    min_chance: 0.35,             // alta confiabilidade de drop
    use_chance: 0.6               // moderadamente consumido
  });

  // Cinnabar — equilibrado, boa durabilidade
  event.custom({
    type: 'thermal:pulverizer_catalyst',
    ingredient: { item: 'thermal:cinnabar' },
    primary_mod: 1.25,
    secondary_mod: 1.25,
    energy_mod: 0.8,              // levemente mais rápido
    min_chance: 0.25,
    use_chance: 0.3               // durável
  });

  // Gelatinous Organic Solvent — muito eficiente, raro
  event.custom({
    type: 'thermal:pulverizer_catalyst',
    ingredient: { item: 'kubejs:gelatinous_organic_solvent' },
    primary_mod: 1.6,             // altíssimo retorno
    secondary_mod: 2.25,          // subproduto extraordinário
    energy_mod: 0.15,             // turbo, justifica raridade
    min_chance: 0.5,              // drop muito confiável
    use_chance: 0.25              // extremamente durável
  });

  // Ice Charge — barato, rápido, descartável
  event.custom({
    type: 'thermal:pulverizer_catalyst',
    ingredient: { item: 'thermal:ice_charge' },
    primary_mod: 0.9,
    secondary_mod: 1.0,
    energy_mod: 0.3,              // bem rápido
    min_chance: 0.15,
    use_chance: 0.95              // quase sempre consumido
  });

  // Rich Slag — foco em subprodutos, velocidade normal
  event.custom({
    type: 'thermal:pulverizer_catalyst',
    ingredient: { item: 'thermal:rich_slag' },
    primary_mod: 1.05,
    secondary_mod: 1.75,
    energy_mod: 1.0,              // não afeta a velocidade
    min_chance: 0.60,             // excelente para loot raros
    use_chance: 0.20              // muito durável
  });

});



