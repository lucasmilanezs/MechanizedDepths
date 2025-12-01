ServerEvents.recipes(event => {
    const WOOD_MAP = {
    // Minecraft
    'minecraft:oak_planks': [
      'minecraft:oak_log',
      'minecraft:stripped_oak_log',
      'minecraft:oak_wood',
      'minecraft:stripped_oak_wood'
    ],
    'minecraft:spruce_planks': [
      'minecraft:spruce_log',
      'minecraft:stripped_spruce_log',
      'minecraft:spruce_wood',
      'minecraft:stripped_spruce_wood'
    ],
    'minecraft:birch_planks': [
      'minecraft:birch_log',
      'minecraft:stripped_birch_log',
      'minecraft:birch_wood',
      'minecraft:stripped_birch_wood'
    ],
    'minecraft:jungle_planks': [
      'minecraft:jungle_log',
      'minecraft:stripped_jungle_log',
      'minecraft:jungle_wood',
      'minecraft:stripped_jungle_wood'
    ],
    'minecraft:acacia_planks': [
      'minecraft:acacia_log',
      'minecraft:stripped_acacia_log',
      'minecraft:acacia_wood',
      'minecraft:stripped_acacia_wood'
    ],
    'minecraft:dark_oak_planks': [
      'minecraft:dark_oak_log',
      'minecraft:stripped_dark_oak_log',
      'minecraft:dark_oak_wood',
      'minecraft:stripped_dark_oak_wood'
    ],
    'minecraft:mangrove_planks': [
      'minecraft:mangrove_log',
      'minecraft:stripped_mangrove_log',
      'minecraft:mangrove_wood',
      'minecraft:stripped_mangrove_wood'
    ],
    'minecraft:cherry_planks': [
      'minecraft:cherry_log',
      'minecraft:stripped_cherry_log',
      'minecraft:cherry_wood',
      'minecraft:stripped_cherry_wood'
    ],
    'minecraft:crimson_planks': [
      'minecraft:crimson_stem',
      'minecraft:stripped_crimson_stem',
      'minecraft:crimson_hyphae',
      'minecraft:stripped_crimson_hyphae'
    ],
    'minecraft:warped_planks': [
      'minecraft:warped_stem',
      'minecraft:stripped_warped_stem',
      'minecraft:warped_hyphae',
      'minecraft:stripped_warped_hyphae'
    ],

    // Biomes O’ Plenty
    'biomesoplenty:fir_planks': [
      'biomesoplenty:fir_log',
      'biomesoplenty:stripped_fir_log',
      'biomesoplenty:fir_wood',
      'biomesoplenty:stripped_fir_wood'
    ],
    'biomesoplenty:redwood_planks': [
      'biomesoplenty:redwood_log',
      'biomesoplenty:stripped_redwood_log',
      'biomesoplenty:redwood_wood',
      'biomesoplenty:stripped_redwood_wood'
    ],
    'biomesoplenty:mahogany_planks': [
      'biomesoplenty:mahogany_log',
      'biomesoplenty:stripped_mahogany_log',
      'biomesoplenty:mahogany_wood',
      'biomesoplenty:stripped_mahogany_wood'
    ],
    'biomesoplenty:jacaranda_planks': [
      'biomesoplenty:jacaranda_log',
      'biomesoplenty:stripped_jacaranda_log',
      'biomesoplenty:jacaranda_wood',
      'biomesoplenty:stripped_jacaranda_wood'
    ],
    'biomesoplenty:palm_planks': [
      'biomesoplenty:palm_log',
      'biomesoplenty:stripped_palm_log',
      'biomesoplenty:palm_wood',
      'biomesoplenty:stripped_palm_wood'
    ],
    'biomesoplenty:willow_planks': [
      'biomesoplenty:willow_log',
      'biomesoplenty:stripped_willow_log',
      'biomesoplenty:willow_wood',
      'biomesoplenty:stripped_willow_wood'
    ],
    'biomesoplenty:dead_planks': [
      'biomesoplenty:dead_log',
      'biomesoplenty:stripped_dead_log',
      'biomesoplenty:dead_wood',
      'biomesoplenty:stripped_dead_wood'
    ],
    'biomesoplenty:magic_planks': [
      'biomesoplenty:magic_log',
      'biomesoplenty:stripped_magic_log',
      'biomesoplenty:magic_wood',
      'biomesoplenty:stripped_magic_wood'
    ],
    'biomesoplenty:umbran_planks': [
      'biomesoplenty:umbran_log',
      'biomesoplenty:stripped_umbran_log',
      'biomesoplenty:umbran_wood',
      'biomesoplenty:stripped_umbran_wood'
    ],
    'biomesoplenty:hellbark_planks': [
      'biomesoplenty:hellbark_log',
      'biomesoplenty:stripped_hellbark_log',
      'biomesoplenty:hellbark_wood',
      'biomesoplenty:stripped_hellbark_wood'
    ],

    // Nature’s Aura
    'naturesaura:ancient_planks': [
      'naturesaura:ancient_log',
      'naturesaura:ancient_bark'
    ],

    // Silent Gear
    'silentgear:netherwood_planks': [
      'silentgear:netherwood_log',
      'silentgear:stripped_netherwood_log',
      'silentgear:netherwood_wood',
      'silentgear:stripped_netherwood_wood'
    ],

    // Thermal
    'thermal:rubberwood_planks': [
      'thermal:rubberwood_log',
      'thermal:stripped_rubberwood_log',
      'thermal:rubberwood_wood',
      'thermal:stripped_rubberwood_wood'
    ],
  }

  const exists = (id) => Item.exists(id)

  Object.entries(WOOD_MAP).forEach(([plank, logs]) => {
    if (!exists(plank)) return
    const validLogs = logs.filter(exists)
    if (validLogs.length === 0) return

    event.remove({ output: plank, type: 'minecraft:crafting_shaped' })
    event.remove({ output: plank, type: 'minecraft:crafting_shapeless' })

    const anyLog = Ingredient.of(validLogs)
    event.shapeless(Item.of(plank, 2), [anyLog])
         .id(`kubejs:planks/${plank.replace(':', '_')}`)
  })
})
