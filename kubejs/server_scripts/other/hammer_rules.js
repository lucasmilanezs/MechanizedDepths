// Shared rule for #forge:tools/hammers used as a crafting tool.
// Tetra caps damage at maxDamage - 1 and calls that "broken", so a broken Tetra
// tool never runs out of durability; recipes must refuse it explicitly.
// Used by other/global_hand_plate.js, other/global_hand_rod.js and
// mod_specific/custommachinery/ore_bench.js.

;(global.MDRecipes = global.MDRecipes || {})

global.MDRecipes.Hammers = {
  tag: '#forge:tools/hammers',

  isBroken: function (stack) {
    if (!stack || stack.isEmpty()) return false
    if (!String(stack.id).startsWith('tetra:')) return false
    return stack.item.isBroken(stack)
  }
}
