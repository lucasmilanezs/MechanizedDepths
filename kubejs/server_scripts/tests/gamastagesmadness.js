// 1) Receita vanilla qualquer (2x cobble -> 1 diamond)
ServerEvents.recipes(event => {
  event.shaped('minecraft:diamond', [
    'CC',
    'CC'
  ], {
    C: 'minecraft:cobblestone'
  }).id('mechanized_depths:test_diamond');
});

// 2) Restrição de receita ligada ao stage "md_tech_1"
// ATENÇÃO: isso fica no topo do arquivo, fora de eventos!

AStages.addRestrictionForRecipe(
  "md/recipe_test_diamond",     // id interno da restrição (qualquer string única)
  "md_tech_1",                  // nome do stage que libera
  "minecraft:crafting",         // tipo de receita (crafting table vanilla)
  "mechanized_depths:test_diamond" // ID da receita que você quer travar
);

AStages.addRestrictionForRecipe(
  "md/recipe_test_refinary",     // id interno da restrição (qualquer string única)
  "md_tech_1",                  // nome do stage que libera
  "thermal_extra:advanced_refinery",         // tipo de receita (crafting table vanilla)
  "thermal_extra:machine/advanced_refinery/light_oil" // ID da receita que você quer travar
);

RecipeMachineStage.addRecipe('thermal_extra:advanced_refinery', 'thermal_extra:machine/advanced_refinery/light_oil', 'md_tech_1')
RecipeMachineStage.addRecipe('pneumaticcraft:refinery', 'pneumaticcraft:refinery/oil_4', 'md_tech_1')


