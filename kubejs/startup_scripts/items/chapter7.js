console.info('Registering Chapter 7 Items');
// CHAPTER 7

// ORES

// METALS 

// ALLOYS

// DUSTS

// CRYSTALS

// CORES

// CIRCUITS/ELECTRONICS

// EMOTIONALLY STABLE CIRCUIT (kubejs:emotionally_stable_circuit)
StartupEvents.registry('item', event => {
  event.create('emotionally_stable_circuit')
    .displayName('Emotionally Stable Circuit')
    .texture('custom:item/emotionally_stable_circuit')
});

// ORGANICS

StartupEvents.registry('item', event => {
  event.create('meat_bar')
    .displayName('Compressed Meat Bar')
    .tooltip('Somehow still edible.')
    .texture('custom:item/meat_bar') // Certifique-se de ter o arquivo em assets
    .food(food => {
      food.hunger(6)             // Preenche 6 pontos de fome
      food.saturation(0.4)       // Saturação do item
      food.meat()                // Marca como carne (importante para lobos, etc.)
      food.alwaysEdible()        // Pode comer mesmo com fome cheia
      food.fastToEat()           // Come mais rápido (como frutas secas ou sopa)
      food.effect('minecraft:regeneration', 100, 0, 1.0) // (efeito, duração ticks, nível, chance)
    })
})
StartupEvents.registry('item', event => {
  event.create('meattherial')
    .displayName('Meattherial™')
    .tooltip([
      'Soft, volatile, and faintly pulsing.', 
      'Almost edible.',
      '',
      '§7A new line of technical nutrition with 0% guilt,',
      '§7and 100% soul. Now with flavor!'
    ])
    .texture('custom:item/meattherial')
})




// INTERMEDIATE PRODUCTS

// DOUBLE PLASTIC (kubejs:double_plastic)
StartupEvents.registry('item', event => {
  event.create('double_plastic')
    .displayName('Double Plastic')
    .texture('custom:item/double_plastic')
});