// ENDERIO - SAGMILL

// SYNTAX TEMPLATE:
/*

*/

//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  // Soul Sand → Soul Grit + chance de Ashen Remnant
  event.recipes.enderio.sag_milling(
    [
      Item.of("kubejs:soul_grit", 2),
      Item.of("kubejs:ashen_remnant").withChance(0.05)
    ],
    "minecraft:soul_sand"
  )
  .energy(1600)
  .bonus(EnderIOBonusType.CHANCE_ONLY)

  // End Stone → Crushed Endstone + chance de Resonant Dust
  event.recipes.enderio.sag_milling(
    [
      Item.of("kubejs:crushed_endstone", 2),
      Item.of("kubejs:resonant_dust").withChance(0.02)
    ],
    "minecraft:end_stone"
  )
  .energy(2000)
  .bonus(EnderIOBonusType.CHANCE_ONLY)
})



//====================CHANGED RECIPES==================

//RECIPE NAME

//====================COMPATIBILITY RECIPES==================

//RECIPE NAME