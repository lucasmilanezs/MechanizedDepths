// Unified helper to register 2-input or 3-input alloy recipes with stable IDs.
// Supports: IE Alloy Smelter, IE Arc Furnace, Thermal Smelter, EnderIO Alloy Smelting (JSON-style).

;(global.MDRecipes = global.MDRecipes || {})
global.MDRecipes.Alloys = global.MDRecipes.Alloys || {}

// -------------------- helpers --------------------

function MD_isFalse(v) {
  return v === false
}

function MD_ingKey(x) {
  if (typeof x === 'string') return x
  if (x && typeof x === 'object') {
    if (typeof x.tag === 'string') return '#' + x.tag
    if (typeof x.item === 'string') return x.item
  }
  return String(x)
}

function MD_sortPair(a, b) {
  return a <= b ? [a, b] : [b, a]
}

function MD_slug(s) {
  return String(s)
    .toLowerCase()
    .replace(/[:/ ]/g, '_')
    .replace(/__+/g, '_')
}

function MD_joinTags(tags) {
  if (!tags) return ''
  const arr = Array.isArray(tags) ? tags : [tags]
  const clean = arr.filter(Boolean).map(MD_slug)
  return clean.length ? clean.join('.') : ''
}

function MD_recipeId(specBaseId, machineKey, outId, tags) {
  if (specBaseId && String(specBaseId).includes(':')) {
    return `${specBaseId}/${machineKey}`
  }

  const ns = 'kubejs'
  const tagPart = MD_joinTags(tags)
  const outSlug = MD_slug(outId)

  return tagPart
    ? `${ns}:alloy/${tagPart}/${outSlug}/${machineKey}`
    : `${ns}:alloy/${outSlug}/${machineKey}`
}

function MD_normOutId(x) {
  if (typeof x === 'string') return x
  if (x && typeof x === 'object') {
    if (typeof x.item === 'string') return x.item
    if (typeof x.id === 'string') return x.id
  }
  return String(x)
}

// Ingredient JSON:
// - "mod:item"       -> { item: "mod:item" }
// - "#forge:xxx/yyy" -> { tag: "forge:xxx/yyy" }
// - {item|tag:"..."} -> { item|tag: "..." }
function MD_toIngredient(x) {
  if (typeof x === 'string') {
    if (x.charAt(0) === '#') return { tag: x.substring(1) }
    return { item: x }
  }
  if (x && typeof x === 'object') {
    if (typeof x.tag === 'string') return { tag: x.tag }
    if (typeof x.item === 'string') return { item: x.item }
  }
  return { item: String(x) }
}

// IE IngredientWithSize
function MD_ieSized(ingredient, count) {
  return { base_ingredient: ingredient, count: count }
}

// EnderIO input entry (matches JSON schema)
function MD_enderioInput(ing, count) {
  // Optional: OR-ingredient via array, e.g. ['a','b'] or [{item...},{tag...}]
  if (Array.isArray(ing)) {
    return { count: count, ingredient: ing.map(MD_toIngredient) }
  }
  return { count: count, ingredient: MD_toIngredient(ing) }
}

// -------------------- main --------------------

global.MDRecipes.Alloys.registerAlloy2x = function (event, spec) {
  if (!spec) throw new Error('[MDRecipes] Missing spec')

  let a = spec.inA
  let b = spec.inB
  let c = spec.inC ?? null

  const hasThird = !!c

  let aCount = spec.inACount ?? 1
  let bCount = spec.inBCount ?? 1
  let cCount = spec.inCCount ?? 1

  // Normalize only in 2-input mode.
  if (!hasThird && spec.normalizeInputs !== false) {
    const aKey0 = MD_ingKey(a)
    const bKey0 = MD_ingKey(b)
    const [sa, sb] = MD_sortPair(aKey0, bKey0)
    if (sa !== aKey0) {
      ;[a, b] = [b, a]
      ;[aCount, bCount] = [bCount, aCount]
    }
  }

  const aIng = MD_toIngredient(a)
  const bIng = MD_toIngredient(b)
  const cIng = hasThird ? MD_toIngredient(c) : null

  const outId    = MD_normOutId(spec.out)
  const outCount = spec.outCount ?? 1
  const energy   = spec.energy ?? 0
  const time     = spec.time ?? 200
  const xp       = spec.xp ?? 0

  const baseId = (spec.id && String(spec.id).includes(':')) ? spec.id : null
  const tagsBase = spec.tags || null
  const machines = spec.machines || {}

  // ================== 2 INPUT MACHINES ==================
  if (!hasThird) {
    // ---- IE Alloy Smelter (JSON-aligned) ----
    if (!MD_isFalse(machines.ie_alloy)) {
      const cfg = machines.ie_alloy || {}
      const id = cfg.id ?? MD_recipeId(baseId, 'ie_alloy', outId, cfg.tags ?? tagsBase)

      event.custom({
        type: 'immersiveengineering:alloy',
        input0: cfg.input0 ?? MD_ieSized(aIng, aCount),
        input1: cfg.input1 ?? MD_ieSized(bIng, bCount),
        result: cfg.result ?? MD_ieSized({ item: outId }, cfg.outCount ?? outCount),
        time: cfg.time ?? time
      }).id(id)
    }

    // ---- Thermal Smelter (JSON-aligned) ----
    if (!MD_isFalse(machines.thermal)) {
      const cfg = machines.thermal || {}
      const id = cfg.id ?? MD_recipeId(baseId, 'thermal', outId, cfg.tags ?? tagsBase)

      event.custom({
        type: 'thermal:smelter',
        ingredients: cfg.ingredients ?? [
          Object.assign({}, aIng, { count: aCount }),
          Object.assign({}, bIng, { count: bCount })
        ],
        result: cfg.result ?? [
          { item: outId, count: cfg.outCount ?? outCount }
        ],
        energy: cfg.energy ?? energy
      }).id(id)
    }

    // ---- EnderIO Alloy Smelting (JSON-aligned) ----
    if (!MD_isFalse(machines.enderio)) {
      const cfg = machines.enderio || {}
      const id = cfg.id ?? MD_recipeId(baseId, 'enderio', outId, cfg.tags ?? tagsBase)

      event.custom({
        type: 'enderio:alloy_smelting',
        energy: cfg.energy ?? energy,
        experience: cfg.experience ?? (cfg.xp ?? xp),
        inputs: cfg.inputs ?? [
          MD_enderioInput(a, aCount),
          MD_enderioInput(b, bCount)
        ],
        result: cfg.result ?? { item: outId, count: cfg.outCount ?? outCount }
      }).id(id)
    }
  }

  // ================== 3 INPUT MACHINES ==================

  // ---- IE Arc Furnace (JSON-aligned, supports additive counts via IngredientWithSize) ----
  if (!MD_isFalse(machines.ie_arc)) {
    const cfg = machines.ie_arc || {}
    const id = cfg.id ?? MD_recipeId(baseId, 'ie_arc', outId, cfg.tags ?? tagsBase)

    const additives = [MD_ieSized(bIng, bCount)]
    if (hasThird) additives.push(MD_ieSized(cIng, cCount))

    event.custom({
      type: 'immersiveengineering:arc_furnace',
      input: cfg.input ?? MD_ieSized(aIng, aCount),
      additives: cfg.additives ?? additives,
      results: cfg.results ?? [
        MD_ieSized({ item: outId }, cfg.outCount ?? outCount)
      ],
      time: cfg.time ?? time,
      energy: cfg.energy ?? energy
    }).id(id)
  }

  // ---- Thermal Smelter (3 inputs) ----
  if (hasThird && !MD_isFalse(machines.thermal)) {
    const cfg = machines.thermal || {}
    const id = cfg.id ?? MD_recipeId(baseId, 'thermal_induction', outId, cfg.tags ?? tagsBase)

    event.custom({
      type: 'thermal:smelter',
      ingredients: cfg.ingredients ?? [
        Object.assign({}, aIng, { count: aCount }),
        Object.assign({}, bIng, { count: bCount }),
        Object.assign({}, cIng, { count: cCount })
      ],
      result: cfg.result ?? [
        { item: outId, count: cfg.outCount ?? outCount }
      ],
      energy: cfg.energy ?? energy
    }).id(id)
  }

  // ---- EnderIO Alloy Smelting (3 inputs, JSON-aligned) ----
  if (hasThird && !MD_isFalse(machines.enderio)) {
    const cfg = machines.enderio || {}
    const id = cfg.id ?? MD_recipeId(baseId, 'enderio', outId, cfg.tags ?? tagsBase)

    event.custom({
      type: 'enderio:alloy_smelting',
      energy: cfg.energy ?? energy,
      experience: cfg.experience ?? (cfg.xp ?? xp),
      inputs: cfg.inputs ?? [
        MD_enderioInput(a, aCount),
        MD_enderioInput(b, bCount),
        MD_enderioInput(c, cCount)
      ],
      result: cfg.result ?? { item: outId, count: cfg.outCount ?? outCount }
    }).id(id)
  }
}



/*
// Example (item + tag)
ServerEvents.recipes(event => {
  global.MDRecipes.Alloys.registerAlloy2x(event, {
    inA: '#forge:ingots/steel',
    inB: 'minecraft:blaze_powder',
    out: 'kubejs:blazing_steel',
    inACount: 1,
    inBCount: 2,
    outCount: 1,
    energy: 60000,
    time: 200
  })
})
*/

// OSGLOGLIUM (kubejs:osgloglium)
ServerEvents.recipes(event => {
  global.MDRecipes.Alloys.registerAlloy2x(event, {
    inA: 'kubejs:inductive_alloy',
    inB: 'mekanism:ingot_refined_glowstone',
    out: 'kubejs:osgloglium',
    inACount: 1,
    inBCount: 1,
    outCount: 2,
    energy: 60000,
    time: 200
  })
})

// BLAZING STEEL (kubejs:blazing_steel)
ServerEvents.recipes(event => {
  global.MDRecipes.Alloys.registerAlloy2x(event, {
    inA: '#forge:ingots/steel',
    inB: '#forge:dusts/blaze',
    out: 'kubejs:blazing_steel',
    inACount: 1,
    inBCount: 2,
    outCount: 1,
    energy: 60000,
    time: 200
  })
})

// REFINED QUARTZ (kubejs:refined_quartz)
ServerEvents.recipes(event => {
  global.MDRecipes.Alloys.registerAlloy2x(event, {
    inA: 'kubejs:inductive_alloy',
    inB: 'mekanism:ingot_refined_obsidian',
    inC: 'minecraft:quartz',
    inACount: 1,
    inBCount: 1,
    inCCount: 2,
    out: 'kubejs:refined_quartz',
    outCount: 2,
    energy: 70000,
    time: 200
  })
})

