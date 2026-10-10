// GAMESTAGE - CHEMISTRY TECH CARD

// Research tiers bought with Chemistry Tech Cards. Stages live in AStages and are
// granted by FTB Quests command rewards (/astages add {p} <stage>) in chapter 8
// (9_realmente_automatizado.snbt). Both APIs are called at top level, outside events.
//
// A crafting recipe needs both gates:
// - AStages blocks it in player menus (crafting table, inventory grid).
// - Recipe Machine Stage blocks it in machines that craft without a player
//   (Create Mechanical Crafter, assemblers...). RMS checks the stages of the
//   machine's placer (rms_owner); machines without a recorded owner are not gated.
// Recipes processed inside machines only need Recipe Machine Stage.

function md_gateCrafting(stage, recipeIds) {
  recipeIds.forEach(id => RecipeMachineStage.addRecipe('minecraft:crafting', id, stage))
}

//====================MD_CHEMISTRY_1==================
// Quest 0E210EFBF4AC2F20: 32 Chemistry Tech Cards.

AStages.addRestrictionForRecipe(
  'md/chemistry_1/machines',
  'md_chemistry_1',
  'minecraft:crafting',
  'kubejs:mekanism/crafting/chemical_infuser',
  'kubejs:mekanism/crafting/chemical_crystallizer',
  'kubejs:mekanism/crafting/chemical_dissolution_chamber'
)
md_gateCrafting('md_chemistry_1', [
  'kubejs:mekanism/crafting/chemical_infuser',
  'kubejs:mekanism/crafting/chemical_crystallizer',
  'kubejs:mekanism/crafting/chemical_dissolution_chamber'
])

//====================MD_CHEMISTRY_2==================
// Quest 64BEB9EFB2A55EB6: 12 Chemistry Tech Cards, after the hydrogen chloride quest.

RecipeMachineStage.addRecipe('mekanism:reaction', 'kubejs:mekanism/reaction/dust_titanium_dioxide', 'md_chemistry_2')
