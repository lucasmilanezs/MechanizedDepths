// Hide disabled finished tools, equipment, and assembly stations from JEI.
// Tool parts and all Smeltery/casting content intentionally remain visible.
JEIEvents.hideItems(event => {
    const finishedTools = [
        'tconstruct:arrow',
        'tconstruct:broad_axe',
        'tconstruct:cleaver',
        'tconstruct:crossbow',
        'tconstruct:dagger',
        'tconstruct:earth_staff',
        'tconstruct:ender_staff',
        'tconstruct:excavator',
        'tconstruct:fishing_rod',
        'tconstruct:flint_and_brick',
        'tconstruct:hand_axe',
        'tconstruct:ichor_staff',
        'tconstruct:javelin',
        'tconstruct:kama',
        'tconstruct:longbow',
        'tconstruct:mattock',
        'tconstruct:pickadze',
        'tconstruct:pickaxe',
        'tconstruct:scythe',
        'tconstruct:shuriken',
        'tconstruct:sky_staff',
        'tconstruct:sledge_hammer',
        'tconstruct:sword',
        'tconstruct:throwing_axe',
        'tconstruct:vein_hammer'
    ]

    const ancientTools = [
        'tconstruct:battlesign',
        'tconstruct:melting_pan',
        'tconstruct:minotaur_axe',
        'tconstruct:swasher',
        'tconstruct:war_pick'
    ]

    const equipment = [
        'tconstruct:plate_boots',
        'tconstruct:plate_chestplate',
        'tconstruct:plate_helmet',
        'tconstruct:plate_leggings',
        'tconstruct:plate_shield',
        'tconstruct:slime_boots',
        'tconstruct:slime_chestplate',
        'tconstruct:slime_helmet',
        'tconstruct:slime_leggings',
        'tconstruct:travelers_boots',
        'tconstruct:travelers_chestplate',
        'tconstruct:travelers_helmet',
        'tconstruct:travelers_leggings',
        'tconstruct:travelers_shield'
    ]

    const disabledStations = [
        'tconstruct:modifier_worktable',
        'tconstruct:scorched_anvil',
        'tconstruct:tinker_station',
        'tconstruct:tinkers_anvil'
    ]

    const repairKitItems = [
        'tconstruct:repair_kit',
        'tconstruct:repair_kit_cast',
        'tconstruct:repair_kit_red_sand_cast',
        'tconstruct:repair_kit_sand_cast'
    ]

    event.hide(finishedTools.concat(ancientTools, equipment, disabledStations, repairKitItems))
})
