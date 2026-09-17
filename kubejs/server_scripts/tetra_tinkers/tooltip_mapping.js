// =============================================================================
// Tetra Tooltip Mapping — Server Side                               tooltip_mapping.js
// =============================================================================
// PARASITA: consome _materials e _outcomes do schematic_gen.js
// Não toca em nada do schematic_gen. Pode ser removido sem efeito algum no core.
//
// Depende de: schematic_gen.js (deve carregar antes — ordem alfabética garante)
//
// Publica: global.TetraToolTips = { materials, modules, variants }
//   materials[name]        → dados brutos do material    (tooltip SHIFT)
//   modules[moduleVariant] → stats calculados por módulo (tooltip CTRL)
//   variants[item|nbt]     → lista de moduleVariants que aquela toolpart gera
// =============================================================================

// =============================================================================
// Fórmulas de módulo — extraídas do JAR do Tetra, embutidas estaticamente
// Para atualizar: rodar o script Python de extração e substituir este bloco
// =============================================================================

var _MODULE_FORMULAS = {
    "double/basic_pickaxe": {"variants":[{"key":"basic_pickaxe/","materials":["tetra:metal/","tetra:stone/","tetra:wood/","tetra:gem/"],"attributes":{"generic.attack_speed":{"base":-1.2},"generic.attack_damage":{"base":-2,"primary":1}},"tools":{"pickaxe_dig":{"level_base":-1,"level_mul":1,"efficiency_mul":0.91}},"effects":null,"durability":{"base":-10,"material_mul":0.5},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "double/basic_axe":     {"variants":[{"key":"basic_axe/","materials":["tetra:wood/","tetra:stone/","tetra:metal/","tetra:gem/"],"attributes":{"generic.attack_speed":{"base":-1.6},"generic.attack_damage":{"base":3.5,"primary":0.65,"secondary":0.25}},"tools":{"axe_wax_off":{"level_mul":1,"efficiency_mul":1},"axe_strip":{"level_mul":1,"efficiency_mul":1},"axe_scrape":{"level_mul":1,"efficiency_mul":1},"axe_dig":{"level_mul":1,"efficiency_mul":1}},"effects":{"shieldbreaker":{"level":{"base":1}}},"durability":{"base":-10,"material_mul":0.5},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "double/claw":          {"variants":[{"key":"claw/","materials":["tetra:metal/","tetra:stone/","tetra:wood/","tetra:gem/"],"attributes":{"generic.attack_speed":{"base":-1},"generic.attack_damage":{"base":-3,"primary":1}},"tools":{"pry":{"level_mul":1,"efficiency_mul":0.8333}},"effects":{"denailing":{"level":{"base":1}}},"durability":{"base":-10,"material_mul":0.5},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "double/butt":          {"variants":[{"key":"butt/","materials":["tetra:metal/","tetra:stone/","tetra:wood/","tetra:gem/"],"attributes":{"generic.attack_speed":{"base":-1}},"tools":null,"effects":null,"durability":{"base":-10,"material_mul":0.5},"integrity":{"integrityCost_mul":-0.5},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "double/adze":          {"variants":[{"key":"adze/","materials":["tetra:metal/","tetra:stone/","tetra:wood/","tetra:gem/"],"attributes":{"generic.attack_speed":{"base":-1.4},"generic.attack_damage":{"base":-2,"primary":1}},"tools":{"shovel_dig":{"level_mul":0.6,"efficiency_mul":0.6},"axe_dig":{"level_mul":0.6,"efficiency_mul":0.6}},"effects":null,"durability":{"base":-10,"material_mul":0.5},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "double/basic_hammer":  {"variants":[{"key":"basic_hammer/","materials":["tetra:wood/"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.08},"generic.attack_damage":{"primary":0.5,"secondary":1}},"tools":{"hammer_dig":{"efficiency_mul":0.8333}},"effects":null,"durability":{"material_mul":0.55},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]},{"key":"basic_hammer/","materials":["tetra:stone/stone"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.08},"generic.attack_damage":{"primary":0.5,"secondary":1}},"tools":{"hammer_dig":{"level_fixed_tier":1,"efficiency_mul":0.8333}},"effects":null,"durability":{"material_mul":0.55},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]},{"key":"basic_hammer/","materials":["tetra:stone/diorite","tetra:stone/andesite","tetra:stone/granite"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.08},"generic.attack_damage":{"primary":0.5,"secondary":1}},"tools":{"hammer_dig":{"level_fixed_tier":1,"efficiency_mul":0.8333}},"effects":null,"durability":{"material_mul":0.55},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]},{"key":"basic_hammer/","materials":["tetra:metal/copper"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.08},"generic.attack_damage":{"primary":0.5,"secondary":1}},"tools":{"hammer_dig":{"level_fixed_tier":1,"efficiency_mul":0.8333}},"effects":null,"durability":{"material_mul":0.55},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]},{"key":"basic_hammer/","materials":["tetra:metal/iron"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.08},"generic.attack_damage":{"primary":0.5,"secondary":1}},"tools":{"hammer_dig":{"level_fixed_tier":1,"efficiency_mul":0.8333}},"effects":null,"durability":{"material_mul":0.55},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]},{"key":"basic_hammer/","materials":["tetra:stone/blackstone"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.08},"generic.attack_damage":{"primary":0.5,"secondary":1}},"tools":{"hammer_dig":{"level_fixed_tier":2,"efficiency_mul":0.8333}},"effects":null,"durability":{"material_mul":0.55},"integrity":{"base":-1,"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]},{"key":"basic_hammer/","materials":["tetra:stone/obsidian"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.08},"generic.attack_damage":{"primary":0.5,"secondary":1}},"tools":{"hammer_dig":{"level_fixed_tier":3,"efficiency_mul":0.8333}},"effects":null,"durability":{"material_mul":0.55},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]},{"key":"basic_hammer/","materials":["tetra:metal/netherite"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.08},"generic.attack_damage":{"primary":0.5,"secondary":1}},"tools":{"hammer_dig":{"level_fixed_tier":4,"efficiency_mul":0.8333}},"effects":null,"durability":{"material_mul":0.55},"integrity":{"base":-1,"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "double/sickle":        {"variants":[{"key":"sickle/","materials":["tetra:metal/","tetra:stone/","tetra:wood/","tetra:gem/"],"attributes":{"generic.attack_speed":{"base":-1.5},"generic.attack_damage":{"base":-2,"primary":1}},"tools":{"hoe_dig":{"efficiency_base":1,"level_mul":0.74,"efficiency_mul":0.4}},"effects":{"strikingHoe":{"level":{"base":1}},"sweeping":{"level":{"base":1}},"planarSweep":{"level":{"base":1}},"sweepingStrike":{"level":{"base":1}}},"durability":{"base":-10,"material_mul":0.5},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "double/hoe":           {"variants":[{"key":"hoe/","materials":["tetra:metal/","tetra:stone/","tetra:wood/","tetra:gem/"],"attributes":{"generic.attack_speed":{"base":-1.6},"generic.attack_damage":{"base":-3,"primary":1}},"tools":{"till":{"level_mul":1},"hoe_dig":{"level_mul":1,"efficiency_mul":1}},"effects":null,"durability":{"base":-10,"material_mul":0.5},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "double/basic_handle":  {"variants":[{"key":"basic_handle/","materials":["tetra:wood/","tetra:metal/","tetra:bone/","tetra:rod/"],"attributes":{"generic.attack_speed":{"base":-0.35,"secondary":-0.1}},"tools":null,"effects":null,"durability":{"base":7,"material_mul":0.3},"integrity":{"base":1,"integrityGain_mul":1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "double/binding":       {"variants":[{"key":"double_binding/","materials":["tetra:fibre/","tetra:skin/"],"attributes":{"generic.attack_speed":{"secondary":-0.1}},"tools":null,"effects":null,"durability":{"material_mul":0.1},"integrity":{"integrityGain_mul":0.7},"magicCapacity":null,"module_traits":[],"variant_traits":[]}]},
    "sword/basic_blade":    {"variants":[{"key":"basic_blade/","materials":["tetra:wood/","tetra:stone/","tetra:metal/","tetra:gem/","tetra:bone/"],"attributes":{"generic.attack_speed":{"base":-1.9},"generic.attack_damage":{"primary":1}},"tools":{"cut":{"level_base":1,"efficiency_base":2}},"effects":{"sweeping":{"level":{"base":1}}},"durability":{"base":-20,"material_mul":0.9},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "sword/short_blade":    {"variants":[{"key":"short_blade/","materials":["tetra:wood/","tetra:stone/","tetra:metal/","tetra:gem/","tetra:bone/"],"attributes":{"generic.attack_speed":{"base":-1,"secondary":-0.1},"generic.attack_damage":{"base":-0.5,"primary":1}},"tools":{"cut":{"level_mul":0.7,"efficiency_mul":1}},"effects":{"jab":{"level":{"base":130,"secondary":-8}}},"durability":{"base":-20,"material_mul":0.8},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "sword/machete":        {"variants":[{"key":"machete/","materials":["tetra:wood/","tetra:stone/","tetra:metal/","tetra:gem/","tetra:bone/"],"attributes":{"generic.attack_speed":{"base":-1.8,"secondary":-0.1},"generic.attack_damage":{"primary":1}},"tools":{"cut":{"level_base":1,"efficiency_base":0.2,"efficiency_mul":0.4}},"effects":{"sweeping":{"level":{"base":1},"efficiency":{"base":0.5}},"strikingCut":{"level":{"base":1}},"sweepingStrike":{"level":{"base":1}}},"durability":{"base":-20,"material_mul":0.9},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "sword/throwing_knife": {"variants":[{"key":"throwing_knife/","materials":["tetra:metal/","tetra:gem/","tetra:bone/"],"attributes":{"generic.attack_speed":{"base":-1.3},"generic.attack_damage":{"base":-1,"primary":1}},"tools":{"cut":{"level_base":1,"efficiency_base":1,"level_mul":0.3,"efficiency_mul":1}},"effects":{"throwable":{"level":{"base":1},"efficiency":{"base":0.7,"secondary":0.15}}},"durability":{"base":-20,"material_mul":0.6},"integrity":{"base":-1,"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "sword/heavy_blade":    {"variants":[{"key":"heavy_blade/","materials":["tetra:metal/","tetra:stone/","tetra:wood/"],"attributes":{"generic.attack_speed":{"base":-1.7,"secondary":-0.15},"generic.attack_damage":{"primary":0.8,"secondary":0.4}},"tools":{"cut":{"level_base":1,"efficiency_base":3}},"effects":{"sweeping":{"level":{"base":2,"primary":0.3},"efficiency":{"base":0.5}},"truesweep":{"level":{"base":1}}},"durability":{"material_mul":1},"integrity":{"base":-1,"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "single/spearhead":     {"variants":[{"key":"spearhead/","materials":["tetra:wood/","tetra:stone/","tetra:metal/","tetra:gem/","tetra:bone/"],"attributes":{"generic.attack_speed":{"base":-0.9,"secondary":-0.1},"generic.attack_damage":{"primary":1.2,"secondary":0.1}},"tools":null,"effects":null,"durability":{"base":-20,"material_mul":0.8},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "single/basic_shovel":  {"variants":[{"key":"basic_shovel/","materials":["tetra:metal/","tetra:stone/","tetra:wood/","tetra:gem/"],"attributes":{"generic.attack_speed":{"base":-1.8},"generic.attack_damage":{"base":-1.5,"primary":1}},"tools":{"shovel_dig":{"level_mul":1,"efficiency_mul":1},"shovel_flatten":{"level_base":1},"dowse":{"level_base":1}},"effects":null,"durability":{"base":-20,"material_mul":1},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "single/basic_handle":  {"variants":[{"key":"basic_handle/","materials":["tetra:wood/","tetra:metal/","tetra:bone/","tetra:rod/"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.2}},"tools":null,"effects":null,"durability":{"base":7,"material_mul":0.3},"integrity":{"base":1,"integrityGain_mul":1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "single/long_handle":   {"variants":[{"key":"long_handle/","materials":["tetra:wood/","tetra:metal/","tetra:bone/","tetra:rod/"],"attributes":{"forge:attack_range":{"base":0.5,"primary":0.1,"tertiary":0.2},"generic.attack_speed":{"base":-1.1,"secondary":-0.25},"forge:reach_distance":{"base":0.5,"primary":0.1,"tertiary":0.2}},"tools":null,"effects":null,"durability":{"material_mul":0.25},"integrity":{"integrityGain_mul":1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "single/light_handle":  {"variants":[{"key":"light_handle/","materials":["tetra:wood/","tetra:metal/","tetra:bone/","tetra:rod/"],"attributes":{"generic.attack_speed":{"base":-1.1,"secondary":-0.1}},"tools":null,"effects":{"throwable":{"level":{"base":1},"efficiency":{"base":0.8,"secondary":0.1}}},"durability":{"material_mul":0.1},"integrity":{"integrityGain_mul":1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "single/binding":       {"variants":[{"key":"single_binding/","materials":["tetra:fibre/","tetra:skin/"],"attributes":{"generic.attack_speed":{"secondary":-0.1}},"tools":null,"effects":null,"durability":{"material_mul":0.1},"integrity":{"integrityGain_mul":0.7},"magicCapacity":null,"module_traits":[],"variant_traits":[]}]},
    "bow/straight_stave":   {"variants":[{"key":"straight_stave/","materials":["tetra:wood/","tetra:rod/stick","tetra:metal/"],"attributes":{"tetra:draw_speed":{"base":1.2,"primary":0.15,"tertiary":-0.07},"tetra:draw_strength":{"primary":1,"tertiary":0.6}},"tools":null,"effects":{"spread":{"efficiency":{"base":99}}},"durability":{"base":171,"material_mul":1},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "bow/long_stave":       {"variants":[{"key":"long_stave/","materials":["tetra:wood/","tetra:rod/stick","tetra:metal/"],"attributes":{"tetra:draw_speed":{"base":1.6,"primary":0.22,"tertiary":-0.04},"tetra:draw_strength":{"base":1.5,"primary":1.3,"tertiary":0.75}},"tools":null,"effects":{"spread":{"efficiency":{"base":98.5}},"overbowed":{"level":{"base":60,"primary":-6}}},"durability":{"base":171,"material_mul":1.05},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "bow/recurve_stave":    {"variants":[{"key":"recurve_stave/","materials":["tetra:wood/","tetra:rod/stick","tetra:metal/"],"attributes":{"tetra:draw_speed":{"base":0.95,"primary":0.14,"tertiary":-0.09},"tetra:draw_strength":{"primary":0.95,"tertiary":0.5}},"tools":null,"effects":{"spread":{"efficiency":{"base":95}}},"durability":{"base":200,"material_mul":0.6},"integrity":{"base":-1,"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "bow/laminated_stave":  {"variants":[{"key":"laminated_stave/","materials":["tetra:wood/","tetra:rod/stick","tetra:metal/"],"attributes":{"tetra:draw_speed":{"base":0.95,"primary":0.14,"tertiary":-0.09},"tetra:draw_strength":{"primary":0.95,"tertiary":0.5}},"tools":null,"effects":{"spread":{"efficiency":{"base":95}}},"durability":{"base":200,"material_mul":0.6},"integrity":{"base":-1,"integrityCost_mul":-0.7},"magicCapacity":{"material_mul":0.5},"module_traits":[],"variant_traits":[]}]},
    "bow/basic_string":     {"variants":[{"key":"basic_string/","materials":["tetra:fibre/","tetra:skin/"],"attributes":{"tetra:draw_speed":{"base":-0.05,"secondary":0.07}},"tools":null,"effects":null,"durability":{"base":70,"material_mul":0.5},"integrity":{"base":1,"integrityGain_mul":1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "bow/sights":           {"variants":[{"key":"sights/","materials":["tetra:wood/","tetra:metal/","tetra:bone/"],"attributes":null,"tools":null,"effects":{"focus":{"efficiency":{"base":0.5,"primary":-0.02,"tertiary":0.08}},"zoom":{"level":{"base":6,"primary":3.4,"tertiary":-0.7}}},"durability":{"base":10,"material_mul":0.2},"integrity":{"base":-1},"magicCapacity":null,"module_traits":[],"variant_traits":[]}]},
    "bow/stabilizer":       {"variants":[{"key":"stabilizer/","materials":["tetra:wood/","tetra:metal/","tetra:bone/"],"attributes":null,"tools":null,"effects":{"velocity":{"level":{"base":15,"tertiary":6}}},"durability":{"base":10,"material_mul":0.2},"integrity":{"base":-1},"magicCapacity":null,"module_traits":[],"variant_traits":[]}]},
    "bow/extended_rest":    {"variants":[{"key":"extended_rest/","materials":["tetra:wood/","tetra:metal/","tetra:bone/"],"attributes":null,"tools":null,"effects":{"multishot":{"level":{"primary":0.9},"efficiency":{"base":10,"tertiary":-1}}},"durability":{"base":10,"material_mul":0.2},"integrity":{"base":-1},"magicCapacity":null,"module_traits":[],"variant_traits":[]}]},
    "crossbow/basic_stave": {"variants":[{"key":"basic_stave/","materials":["tetra:wood/","tetra:rod/stick","tetra:metal/"],"attributes":{"tetra:draw_speed":{"base":1,"primary":0.2,"tertiary":-0.1},"tetra:draw_strength":{"base":0.5,"primary":1.2,"tertiary":0.9}},"tools":null,"effects":null,"durability":{"base":97,"material_mul":0.6},"integrity":{"integrityCost_mul":-1},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "crossbow/basic_stock": {"variants":[{"key":"basic_stock/","materials":["tetra:wood/","tetra:rod/stick","tetra:metal/"],"attributes":{"tetra:draw_speed":{"base":0.5,"secondary":0.2}},"tools":null,"effects":null,"durability":{"base":85,"material_mul":0.5},"integrity":{"integrityGain_mul":0.5},"magicCapacity":{"material_mul":1},"module_traits":[],"variant_traits":[]}]},
    "crossbow/basic_string":{"variants":[{"key":"basic_string/","materials":["tetra:fibre/","tetra:skin/"],"attributes":{"tetra:draw_speed":{"base":-0.05,"secondary":0.07}},"tools":null,"effects":null,"durability":{"base":15,"material_mul":0.3},"integrity":{"base":1,"integrityGain_mul":1},"magicCapacity":null,"module_traits":[],"variant_traits":[]}]},
    "crossbow/stirrup":     {"variants":[{"key":"stirrup/","materials":["tetra:metal/"],"attributes":{"tetra:draw_speed":{"base":-0.05,"primary":-0.02,"secondary":0.01}},"tools":null,"effects":null,"durability":{"base":12,"material_mul":0.05},"integrity":{"base":-1},"magicCapacity":null,"module_traits":[],"variant_traits":[]}]}
}

// =============================================================================
// Helpers de cálculo — aplicam fórmula sobre dados do material
// =============================================================================

function _applyFormula(formula, mat) {
    if (!formula) return 0
    var result = formula.base || 0
    if (formula.primary)   result += mat.primary   * formula.primary
    if (formula.secondary) result += mat.secondary * formula.secondary
    if (formula.tertiary)  result += mat.tertiary  * formula.tertiary
    return Math.round(result * 100) / 100
}

function _calcDurability(formula, mat) {
    if (!formula) return 0
    var result = formula.base || 0
    if (formula.material_mul)        result += mat.durability * formula.material_mul
    if (formula.material_multiplier) result *= formula.material_multiplier
    return Math.round(result)
}

function _calcIntegrity(formula, mat) {
    if (!formula) return 0
    var result = formula.base || 0
    if (formula.integrityCost_mul) result += mat.integrityCost * formula.integrityCost_mul
    if (formula.integrityGain_mul) result += mat.integrityGain * formula.integrityGain_mul
    return Math.round(result * 10) / 10
}

function _calcMagicCapacity(formula, mat) {
    if (!formula) return 0
    var result = formula.base || 0
    if (formula.material_mul) result += mat.magicCapacity * formula.material_mul
    return Math.round(result)
}

var _TOOL_TIER = {
    "minecraft:wood": 1, "minecraft:gold": 2,
    "minecraft:stone": 3, "minecraft:iron": 4,
    "minecraft:diamond": 5, "minecraft:netherite": 6
}

function _calcTools(toolsFormula, mat) {
    if (!toolsFormula) return null
    var result = {}
    var keys = Object.keys(toolsFormula)
    for (var i = 0; i < keys.length; i++) {
        var toolKey = keys[i]
        var f = toolsFormula[toolKey]
        var entry = {}

        if (f.level_fixed_tier !== undefined) {
            entry.level = f.level_fixed_tier
        } else {
            var matTier  = _TOOL_TIER[mat.toolLevel] || 0
            var levelBase = f.level_base || 0
            var levelMul  = f.level_mul  || 0
            entry.level = Math.round(levelBase + matTier * levelMul)
        }

        var effBase = f.efficiency_base || 0
        var effMul  = f.efficiency_mul  || 0
        entry.efficiency = Math.round((effBase + mat.toolEfficiency * effMul) * 100) / 100

        result[toolKey] = entry
    }
    return result
}

function _calcEffects(effectsFormula, mat) {
    if (!effectsFormula) return null
    var result = {}
    var keys = Object.keys(effectsFormula)
    for (var i = 0; i < keys.length; i++) {
        var effect = keys[i]
        var ef = effectsFormula[effect]
        var entry = {}
        if (ef.level)      entry.level      = _applyFormula(ef.level, mat)
        if (ef.efficiency) entry.efficiency = _applyFormula(ef.efficiency, mat)
        result[effect] = entry
    }
    return result
}

function _findVariant(moduleKey, matName, matType) {
    var mod = _MODULE_FORMULAS[moduleKey]
    if (!mod) return null
    var variants = mod.variants
    if (!variants || variants.length === 0) return null

    var specificId = "tetra:" + matType + "/" + matName
    var genericId  = "tetra:" + matType + "/"

    for (var i = 0; i < variants.length; i++) {
        var mats = variants[i].materials || []
        for (var j = 0; j < mats.length; j++) {
            if (mats[j] === specificId) return variants[i]
        }
    }
    for (var i = 0; i < variants.length; i++) {
        var mats = variants[i].materials || []
        for (var j = 0; j < mats.length; j++) {
            if (mats[j] === genericId) return variants[i]
        }
    }
    return variants[0]
}

// Contextual affinities are declared by schematic_gen.js and emitted as real
// Tetra module variants. The tooltip keeps an equivalent, pure-JS formula so
// Ctrl previews the same selected variant without reading generated JSON or
// touching Java resource wrappers at runtime.
function MD_TT_TOOLTIP_effectFormula(rawEffects) {
    if (!rawEffects) return null
    var result = {}
    var keys = Object.keys(rawEffects)
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        var raw = rawEffects[key]
        if (typeof raw === "number") {
            result[key] = { "level": { "base": raw } }
        } else if (Array.isArray(raw)) {
            result[key] = {
                "level": { "base": raw[0] },
                "efficiency": { "base": raw[1] }
            }
        } else {
            throw new Error("[Mechanized/Tooltip] Efeito contextual invalido: " + key)
        }
    }
    return result
}

function MD_TT_TOOLTIP_applyContextualAffinities(affinities, materials) {
    if (!affinities || affinities.length === 0) return

    var typesByName = {}
    for (var mi = 0; mi < materials.length; mi++) {
        typesByName[materials[mi].name] = materials[mi].materialType
    }

    for (var ai = 0; ai < affinities.length; ai++) {
        var affinity = affinities[ai]
        var module = _MODULE_FORMULAS[affinity.module]
        var materialType = typesByName[affinity.material]
        if (!module || !materialType) {
            throw new Error("[Mechanized/Tooltip] Afinidade contextual sem modulo/material: " + affinity.module + " / " + affinity.material)
        }

        var materialPath = "tetra:" + materialType + "/" + affinity.material
        var alreadyPresent = false
        for (var vi = 0; vi < module.variants.length; vi++) {
            var existingMaterials = module.variants[vi].materials || []
            for (var ei = 0; ei < existingMaterials.length; ei++) {
                if (existingMaterials[ei] === materialPath) alreadyPresent = true
            }
        }
        if (alreadyPresent) continue

        var template = null
        for (var ti = 0; ti < module.variants.length; ti++) {
            var candidates = module.variants[ti].materials || []
            for (var ci = 0; ci < candidates.length; ci++) {
                if (candidates[ci] === "tetra:" + materialType + "/") template = module.variants[ti]
            }
        }
        if (!template) {
            throw new Error("[Mechanized/Tooltip] Afinidade sem variante-base: " + affinity.material + " → " + affinity.module)
        }

        var effects = {}
        var templateEffects = template.effects || {}
        var effectKeys = Object.keys(templateEffects)
        for (var fi = 0; fi < effectKeys.length; fi++) effects[effectKeys[fi]] = templateEffects[effectKeys[fi]]
        var affinityEffects = MD_TT_TOOLTIP_effectFormula(affinity.effects)
        if (affinityEffects) {
            var affinityEffectKeys = Object.keys(affinityEffects)
            for (var afi = 0; afi < affinityEffectKeys.length; afi++) {
                effects[affinityEffectKeys[afi]] = affinityEffects[affinityEffectKeys[afi]]
            }
        }

        module.variants.unshift({
            "key": template.key,
            "materials": [materialPath],
            "attributes": template.attributes,
            "tools": template.tools,
            "effects": Object.keys(effects).length > 0 ? effects : null,
            "moduleEffects": template.effects || null,
            "contextualEffects": affinityEffects,
            "durability": template.durability,
            "integrity": template.integrity,
            "magicCapacity": template.magicCapacity,
            "module_traits": template.module_traits || [],
            "variant_traits": template.variant_traits || []
        })
    }
}

function _computeStats(moduleKey, mat) {
    var variant = _findVariant(moduleKey, mat.name, mat.materialType)
    if (!variant) return null

    var stats = {}

    if (variant.attributes) {
        var attrs = {}
        var attrKeys = Object.keys(variant.attributes)
        for (var i = 0; i < attrKeys.length; i++) {
            var k = attrKeys[i]
            attrs[k] = _applyFormula(variant.attributes[k], mat)
        }
        stats.attributes = attrs
    }

    var tools = _calcTools(variant.tools, mat)
    if (tools) stats.tools = tools

    // Uma variante contextual contém a contribuição original do módulo e a
    // afinidade material→módulo em campos distintos. O item final recebe a
    // soma em Tetra; o tooltip os mantém separados para explicar a origem.
    var moduleEffects = _calcEffects(variant.moduleEffects || variant.effects, mat)
    if (moduleEffects) stats.moduleEffects = moduleEffects

    var contextualEffects = _calcEffects(variant.contextualEffects, mat)
    if (contextualEffects) stats.contextualEffects = contextualEffects

    stats.durability    = _calcDurability(variant.durability, mat)
    stats.integrity     = _calcIntegrity(variant.integrity, mat)
    stats.magicCapacity = _calcMagicCapacity(variant.magicCapacity, mat)

    // Prontos mas vazios — preenchidos futuramente
    stats.moduleTraits  = variant.module_traits  || []
    stats.variantTraits = variant.variant_traits || []

    return stats
}

// =============================================================================
// Leitura de material com fallback entre namespaces
// =============================================================================

function _readMaterialJson(name, materialType) {
    var result = {}
    var primary  = JsonIO.read("kubejs/data/tetra/materials/" + materialType + "/" + name + ".json")
    var fallback = JsonIO.read("kubejs/data/materials_inherit/materials/" + materialType + "/" + name + ".json")
    if (fallback) {
        var keys = Object.keys(fallback)
        for (var i = 0; i < keys.length; i++) {
            result[keys[i]] = fallback[keys[i]]
        }
    }
    if (primary) {
        var keys = Object.keys(primary)
        for (var i = 0; i < keys.length; i++) {
            result[keys[i]] = primary[keys[i]]
        }
    }
    return Object.keys(result).length > 0 ? result : null
}

function MD_TT_TOOLTIP_readInnateImprovements(rawImprovements) {
    var result = {}
    if (!rawImprovements) return result
    var keys = Object.keys(rawImprovements)
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        if (typeof rawImprovements[key] === "number") result[key] = rawImprovements[key]
    }
    return result
}

function MD_TT_TOOLTIP_readMaterialEffects(rawEffects) {
    var result = {}
    if (!rawEffects) return result
    var keys = Object.keys(rawEffects)
    for (var i = 0; i < keys.length; i++) {
        var key = keys[i]
        var raw = rawEffects[key]
        if (typeof raw === "number") {
            result[key] = { "level": raw }
        } else if (Array.isArray(raw) && raw.length === 2) {
            result[key] = { "level": raw[0], "efficiency": raw[1] }
        }
    }
    return result
}

// =============================================================================
// Construção do mapping — consome a API explícita do schematic_gen
// =============================================================================

ServerEvents.loaded(function(event) {

    // Guarda de sanidade: verifica que o schematic_gen publicou a API antes.
    var tetraIntegration = global.MechanizedDepths && global.MechanizedDepths.TetraTinkers
    if (!tetraIntegration) {
        console.error("[Mechanized/Tooltip] MechanizedDepths.TetraTinkers nao encontrado")
        return
    }

    var _materials = tetraIntegration.materials
    var _outcomes  = tetraIntegration.outcomes
    MD_TT_TOOLTIP_applyContextualAffinities(tetraIntegration.contextualAffinities, _materials)

    var materialsMap = {}
    var modulesMap   = {}
    var variantsMap  = {}

    for (var mi = 0; mi < _materials.length; mi++) {
        var mat          = _materials[mi]
        var name         = mat.name
        var materialType = mat.materialType

        // Lê o JSON de material (fallback automático entre namespaces)
        var json = _readMaterialJson(name, materialType)
        if (!json) {
            console.warn("[Mechanized/Tooltip] JSON nao encontrado para: " + name + " (" + materialType + ")")
            continue
        }

        // Dados brutos do material — exibidos no SHIFT
        var matData = {
            name:           name,
            materialType:   materialType,
            primary:        json.primary        || 0,
            secondary:      json.secondary      || 0,
            tertiary:       json.tertiary       || 0,
            durability:     json.durability     || 0,
            integrityCost:  json.integrityCost  || 0,
            integrityGain:  json.integrityGain  || 0,
            magicCapacity:  json.magicCapacity  || 0,
            toolLevel:          json.toolLevel      || "",
            toolEfficiency:     json.toolEfficiency || 0,
            innateImprovements: MD_TT_TOOLTIP_readInnateImprovements(json.improvements),
            materialEffects:    MD_TT_TOOLTIP_readMaterialEffects(json.effects)
        }

        materialsMap[name] = matData

        // Percorre os outcomes já montados pelo schematic_gen
        // para construir o mapping moduleVariant → stats calculados
        var schematicKeys = Object.keys(_outcomes)
        for (var si = 0; si < schematicKeys.length; si++) {
            var schematic = schematicKeys[si]
            var outcomeList = _outcomes[schematic]

            for (var oi = 0; oi < outcomeList.length; oi++) {
                var outcome = outcomeList[oi]

                // Só processa outcomes deste material
                if (outcome.moduleVariant.indexOf("/" + name) === -1) continue

                var moduleKey     = outcome.moduleKey
                var moduleVariant = outcome.moduleVariant
                var partItem      = outcome.material.items[0]
                var partNbt       = outcome.material.nbt

                // Calcula stats transformados pelo módulo — exibidos no CTRL
                var stats = _computeStats(moduleKey, matData)
                if (!stats) continue

                modulesMap[moduleVariant] = {
                    "moduleKey":     moduleKey,
                    "moduleVariant": moduleVariant,
                    "stats":         stats
                }

                // Chave de lookup: "tconstruct:pick_head|{Material:\"tconstruct:cobalt\"}"
                var nbtKey = partItem + "|" + partNbt
                if (!variantsMap[nbtKey]) variantsMap[nbtKey] = []

                // Evita duplicatas (mesmo outcome pode aparecer em schematics diferentes)
                var alreadyAdded = false
                for (var vi = 0; vi < variantsMap[nbtKey].length; vi++) {
                    if (variantsMap[nbtKey][vi] === moduleVariant) {
                        alreadyAdded = true
                        break
                    }
                }
                if (!alreadyAdded) variantsMap[nbtKey].push(moduleVariant)
            }
        }

        console.log("[Mechanized/Tooltip] Mapeado: " + name)
    }

    global.TetraToolTips = {
        "materials": materialsMap,
        "modules":   modulesMap,
        "variants":  variantsMap
    }

    console.log("[Mechanized/Tooltip] Publicado: "
        + Object.keys(materialsMap).length + " materiais | "
        + Object.keys(modulesMap).length   + " modulos | "
        + Object.keys(variantsMap).length  + " variantes")
})

ServerEvents.commandRegistry(function(event) {
    var Commands = event.commands
    event.register(
        Commands.literal("dumpTooltipMapping")
            .executes(function(ctx) {
                var source = ctx.source
                var tt = global.TetraToolTips
                if (!tt) {
                    source.sendFailure(Text.of("TetraToolTips nao encontrado"))
                    return 0
                }
                source.sendSuccess(Text.of("materials: " + Object.keys(tt.materials).length), false)
                source.sendSuccess(Text.of("modules: "   + Object.keys(tt.modules).length),   false)
                source.sendSuccess(Text.of("variants: "  + Object.keys(tt.variants).length),  false)

                // Dump de um material especifico para conferir
                var keys = Object.keys(tt.materials)
                if (keys.length > 0) {
                    var first = tt.materials[keys[0]]
                    source.sendSuccess(Text.of("Exemplo: " + keys[0]
                        + " pri=" + first.primary
                        + " dur=" + first.durability
                        + " mag=" + first.magicCapacity), false)
                }
                return 1
            })
    )
})

ServerEvents.commandRegistry(function(event) {
    var Commands = event.commands
    event.register(
        Commands.literal("dumpTooltipMapping")
            .executes(function(ctx) {
                var source = ctx.source
                var tt = global.TetraToolTips
                if (!tt) {
                    source.sendFailure(Text.of("TetraToolTips nao encontrado"))
                    return 0
                }
                source.sendSuccess(Text.of("materials: " + Object.keys(tt.materials).length), false)
                source.sendSuccess(Text.of("modules: "   + Object.keys(tt.modules).length),   false)
                source.sendSuccess(Text.of("variants: "  + Object.keys(tt.variants).length),  false)

                // Dump de um material especifico para conferir
                var keys = Object.keys(tt.materials)
                if (keys.length > 0) {
                    var first = tt.materials[keys[0]]
                    source.sendSuccess(Text.of("Exemplo: " + keys[0]
                        + " pri=" + first.primary
                        + " dur=" + first.durability
                        + " mag=" + first.magicCapacity), false)
                }
                return 1
            })
    )
})
