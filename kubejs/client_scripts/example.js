// priority: 0
/*
console.info('Hello, World! (Loaded client scripts)')

ClientEvents.blockRenderLayer(event => {
  event.put('kubejs:vitrified_obsidian', 'translucent')
})

JEIEvents.hideItems(event => {
  const blacklist = [

    // INGOTS
    'immersiveengineering:ingot_tin',
    'immersiveengineering:ingot_silver',
    'immersiveengineering:ingot_lead',
    'immersiveengineering:ingot_nickel',
    'immersiveengineering:ingot_aluminum',
    'immersiveengineering:ingot_steel',
    'immersiveengineering:ingot_electrum',
    'immersiveengineering:ingot_constantan',
    'mekanism:ingot_tin',
    'mekanism:ingot_lead',
    'mekanism:ingot_silver',
    'thermal:aluminum_ingot',
    'thermal:platinum_ingot',
    'thermal:bronze_ingot',
    'alltheores:tin_ingot',
    'alltheores:silver_ingot',
    'alltheores:lead_ingot',
    'alltheores:nickel_ingot',
    'alltheores:steel_ingot',
    'alltheores:electrum_ingot',
    'alltheores:invar_ingot',
    'alltheores:signalum_ingot',
    'alltheores:lumium_ingot',
    'alltheores:enderium_ingot',
    'alltheores:constantan_ingot',
    'alltheores:brass_ingot',

    // GEARS - AllTheOres
    'alltheores:iron_gear',
    'alltheores:gold_gear',
    'alltheores:copper_gear',
    'alltheores:tin_gear',
    'alltheores:silver_gear',
    'alltheores:lead_gear',
    'alltheores:nickel_gear',
    'alltheores:aluminum_gear',
    'alltheores:steel_gear',
    'alltheores:bronze_gear',
    'alltheores:electrum_gear',
    'alltheores:invar_gear',
    'alltheores:signalum_gear',
    'alltheores:lumium_gear',
    'alltheores:enderium_gear',
    'alltheores:constantan_gear',
    'alltheores:brass_gear',
    'alltheores:zinc_gear',

    // GEARS - Mekanism
    'mekanism:iron_gear',
    'mekanism:gold_gear',
    'mekanism:copper_gear',
    'mekanism:tin_gear',
    'mekanism:silver_gear',
    'mekanism:lead_gear',
    'mekanism:nickel_gear',
    'mekanism:aluminum_gear',
    'mekanism:steel_gear',
    'mekanism:bronze_gear',

    // GEARS - Immersive Engineering
    'immersiveengineering:iron_gear',
    'immersiveengineering:gold_gear',
    'immersiveengineering:copper_gear',
    'immersiveengineering:tin_gear',
    'immersiveengineering:silver_gear',
    'immersiveengineering:lead_gear',
    'immersiveengineering:nickel_gear',
    'immersiveengineering:aluminum_gear',
    'immersiveengineering:steel_gear',
    'immersiveengineering:electrum_gear',
    'immersiveengineering:constantan_gear',

    // GEARS - JAOPCA
    'jaopca:iron_gear',
    'jaopca:gold_gear',
    'jaopca:copper_gear',
    'jaopca:tin_gear',
    'jaopca:silver_gear',
    'jaopca:lead_gear',
    'jaopca:nickel_gear',
    'jaopca:aluminum_gear',
    'jaopca:steel_gear',
    'jaopca:bronze_gear',
    'jaopca:electrum_gear',
    'jaopca:invar_gear',
    'jaopca:signalum_gear',
    'jaopca:lumium_gear',
    'jaopca:enderium_gear',
    'jaopca:constantan_gear',
    'jaopca:brass_gear',
    'jaopca:zinc_gear',

    // PLATES - AllTheOres
    'alltheores:iron_plate',
    'alltheores:gold_plate',
    'alltheores:copper_plate',
    'alltheores:tin_plate',
    'alltheores:silver_plate',
    'alltheores:lead_plate',
    'alltheores:nickel_plate',
    'alltheores:aluminum_plate',
    'alltheores:steel_plate',
    'alltheores:bronze_plate',
    'alltheores:electrum_plate',
    'alltheores:invar_plate',
    'alltheores:signalum_plate',
    'alltheores:lumium_plate',
    'alltheores:enderium_plate',
    'alltheores:constantan_plate',
    'alltheores:brass_plate',
    'alltheores:zinc_plate',

    // PLATES - Mekanism
    'mekanism:iron_plate',
    'mekanism:gold_plate',
    'mekanism:copper_plate',
    'mekanism:tin_plate',
    'mekanism:silver_plate',
    'mekanism:lead_plate',
    'mekanism:nickel_plate',
    'mekanism:aluminum_plate',
    'mekanism:steel_plate',
    'mekanism:bronze_plate',

    // PLATES - Immersive Engineering
    'immersiveengineering:plate_iron',
    'immersiveengineering:plate_gold',
    'immersiveengineering:plate_copper',
    'immersiveengineering:plate_tin',
    'immersiveengineering:plate_silver',
    'immersiveengineering:plate_lead',
    'immersiveengineering:plate_nickel',
    'immersiveengineering:plate_aluminum',
    'immersiveengineering:plate_steel',
    'immersiveengineering:plate_electrum',
    'immersiveengineering:plate_constantan',

    // PLATES - JAOPCA
    'jaopca:iron_plate',
    'jaopca:gold_plate',
    'jaopca:copper_plate',
    'jaopca:tin_plate',
    'jaopca:silver_plate',
    'jaopca:lead_plate',
    'jaopca:nickel_plate',
    'jaopca:aluminum_plate',
    'jaopca:steel_plate',
    'jaopca:bronze_plate',
    'jaopca:electrum_plate',
    'jaopca:invar_plate',
    'jaopca:signalum_plate',
    'jaopca:lumium_plate',
    'jaopca:enderium_plate',
    'jaopca:constantan_plate',
    'jaopca:brass_plate',
    'jaopca:zinc_plate'
  ]

  event.hide(blacklist)
})
*/
ClientEvents.lang("en_us", (event) => {
  event.add("create.recipe.heat_requirement.redstonante", "Redstonante");
});


ClientEvents.lang("en_us", event => {
  event.add("create.recipe.heat_requirement.melted_blaze", "Melted Blaze Metal");
  event.add("gui.create.jei.category.basin.heat.melted_blaze.title", "Requires Melted Blaze Metal Block");
});

ClientEvents.lang("en_us", event => {
  // JEI Heat Requirement Names
  event.add("create.recipe.heat_requirement.blazing_composite", "FLAME-ANOINTED");
  event.add("create.recipe.heat_requirement.entropic_mycelite", "ROOT-SCORCHED");
  event.add("create.recipe.heat_requirement.aetherforged_cinderblock", "SKY-FIRED");
  event.add("create.recipe.heat_requirement.echo_fused_obsidianite", "VOID-TOUCHED");

  // JEI Basin Titles
  event.add("gui.create.jei.category.basin.heat.blazing_composite.title", "Requires Flame-Anointed");
  event.add("gui.create.jei.category.basin.heat.entropic_mycelite.title", "Requires Root-Scorched");
  event.add("gui.create.jei.category.basin.heat.aetherforged_cinderblock.title", "Requires Sky-Fired");
  event.add("gui.create.jei.category.basin.heat.echo_fused_obsidianite.title", "Requires Void-Touched");
});

// Sync CustomModelData with stack size (4-step variant: 0..3)

const MD_STACK_SKIN_ITEMS = new Set([
  'kubejs:plate_refined_quartz'
])

// Choose thresholds (tune freely).
// This version scales with maxStackSize and works for 16/64 stacks.
function md_bucketForCount(count, max) {
  if (count <= 1) return 0
  if (count < max * 0.34) return 1
  if (count < max * 0.67) return 2
  return 3
}

function md_getCMD(stack) {
  const nbt = stack.nbt
  if (!nbt) return 0
  const v = nbt.CustomModelData
  return v ? Number(v) : 0
}

function md_setCMD(stack, cmd) {
  const nbt = stack.nbt || {}
  nbt.CustomModelData = cmd
  stack.nbt = nbt
}

PlayerEvents.tick(e => {
  const p = e.player
  if (!p || p.level.isClientSide()) return

  // Throttle: run every 10 ticks
  if ((p.age % 10) !== 0) return

  const inv = p.inventory
  const size = inv.getContainerSize()

  for (let i = 0; i < size; i++) {
    const s = inv.getItem(i)
    if (s.isEmpty()) continue

    const id = String(s.id)
    if (!MD_STACK_SKIN_ITEMS.has(id)) continue

    const want = md_bucketForCount(s.count, s.maxStackSize)
    const have = md_getCMD(s)

    if (have !== want) md_setCMD(s, want)
  }
})

