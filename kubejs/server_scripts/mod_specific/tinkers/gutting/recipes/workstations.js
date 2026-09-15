// Remove only stations and support recipes tied to finished Tinkers tools.
// Part Builder, patterns, part storage, and casting infrastructure are preserved.
ServerEvents.recipes(event => {
    const removedRecipeIds = [
        'tconstruct:tables/ammo_part_swapping',
        'tconstruct:tables/crafting_table_repair',
        'tconstruct:tables/modifier_worktable',
        'tconstruct:tables/scorched_anvil',
        'tconstruct:tables/scorched_anvil_material',
        'tconstruct:tables/scorched_forge',
        'tconstruct:tables/scorched_forge_material',
        'tconstruct:tables/seared_forge_material',
        'tconstruct:tables/throwing_axe_part_swapping',
        'tconstruct:tables/tinker_station',
        'tconstruct:tables/tinker_station_part_swapping',
        'tconstruct:tables/tinker_station_repair',
        'tconstruct:tables/tinkers_anvil',
        'tconstruct:tables/tinkers_anvil_material',
        'tconstruct:tables/tinkers_forge'
    ]

    removedRecipeIds.forEach(recipeId => event.remove({ id: recipeId }))

    event.remove({ id: /^tconstruct:tables\/recycling\// })
    event.remove({ id: /^tconstruct:tables\/tinker_station_damaging\// })
    event.remove({ id: /^tconstruct:tools\/recycling\// })
    event.remove({ id: /^tconstruct:tools\/severing\// })
})
