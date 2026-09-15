// Repair kits only service finished Tinkers tools and have no role in Tetra assembly.
ServerEvents.recipes(event => {
    const removedRecipeIds = [
        'tconstruct:smeltery/casting/metal/netherite/ancient_repair_kit_gold_cast',
        'tconstruct:smeltery/casting/metal/netherite/ancient_repair_kit_sand_cast',
        'tconstruct:smeltery/casts/gold/repair_kit',
        'tconstruct:smeltery/casts/red_sand/builder_block/repair_kit',
        'tconstruct:smeltery/casts/red_sand/builder_cast/repair_kit',
        'tconstruct:smeltery/casts/red_sand/molding/repair_kit',
        'tconstruct:smeltery/casts/sand/builder_block/repair_kit',
        'tconstruct:smeltery/casts/sand/builder_cast/repair_kit',
        'tconstruct:smeltery/casts/sand/molding/repair_kit',
        'tconstruct:tools/parts/builder/repair_kit',
        'tconstruct:tools/parts/casting/repair_kit_composite',
        'tconstruct:tools/parts/casting/repair_kit_gold_cast',
        'tconstruct:tools/parts/casting/repair_kit_sand_cast'
    ]

    removedRecipeIds.forEach(recipeId => event.remove({ id: recipeId }))
})
