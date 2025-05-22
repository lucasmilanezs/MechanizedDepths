// IMMERSIVE ENGINEERING - CRUSHER RECIPE CHANGES
/*
ServerEvents.recipes(event => {
  event.custom({
    type: 'immersiveengineering:crusher',
    input: { item: 'material' },
    result: { item: 'thermal:lapis_dust', count: 1 },
    energy: 2400,
    secondaries: []
  })
})
*/

//===============CUSTOM RECIPES==================

//==================CHANGED RECIPES==================
ServerEvents.recipes(event => {
  event.remove({ id: 'thermal:earth_charge/lapis_dust_from_lapis' })
  event.remove({
    type: 'immersiveengineering:crusher',
    input: { item: 'minecraft:lapis_lazuli' }
  })
  event.custom({
    type: 'immersiveengineering:crusher',
    input: { item: 'minecraft:lapis_lazuli' },
    result: { item: 'thermal:lapis_dust', count: 1 },
    energy: 2400,
    secondaries: []
  })
})

//==================COMPATIBILITY RECIPES==================