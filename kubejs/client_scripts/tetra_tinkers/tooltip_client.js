// =============================================================================
// Tetra Tooltip — Client Side                                    tooltip_client.js
// =============================================================================
// Consome global.TetraToolTips gerado pelo tooltip_mapping.js
//
// SHIFT  → stats brutos do material (primary, secondary, durability, etc.)
// CTRL   → stats transformados por módulo (equivalente à holosphere)
// Neutro → hint de teclas
// =============================================================================
//FUNCIONA
var _ATTR_NAMES = {
    "generic.attack_damage":  "Attack Damage",
    "generic.attack_speed":   "Attack Speed",
    "forge:reach_distance":   "Reach",
    "forge:attack_range":     "Attack Range",
    "tetra:draw_speed":       "Draw Speed",
    "tetra:draw_strength":    "Draw Strength"
}

var _EFFECT_NAMES = {
    "workable":       "Workable",
    "magnetic":       "Magnetic",
    "holy":           "Holy",
    "reinforced":     "Reinforced",
    "venom":          "Venom",
    "unholy":         "Unholy",
    "mechanized/reinforced": "Reinforced",
    "mechanized/venom":      "Venom",
    "mechanized/unholy":     "Unholy",
    "bleeding":       "Bleeding",
    "arrested":       "Arrested",
    "stabilizing":    "Stabilizing",
    "unstable":       "Unstable",
    "shieldbreaker":  "Shieldbreaker",
    "denailing":      "Denailing",
    "sweeping":       "Sweeping",
    "truesweep":      "True Sweep",
    "jab":            "Jab",
    "throwable":      "Throwable",
    "strikingHoe":    "Striking Hoe",
    "sweepingStrike": "Sweeping Strike",
    "planarSweep":    "Planar Sweep",
    "strikingCut":    "Striking Cut",
    "overbowed":      "Overbowed",
    "spread":         "Spread",
    "multishot":      "Multishot",
    "velocity":       "Velocity",
    "zoom":           "Zoom",
    "focus":          "Focus"
}

var _TOOL_LEVEL_DATA = {
    "minecraft:wood":           { name: "Wood",       color: "#FFAA00" },
    "minecraft:gold":           { name: "Gold",       color: "#FFAA00" },
    "minecraft:stone":          { name: "Stone",      color: "#AAAAAA" },
    "minecraft:iron":           { name: "Iron",       color: "#AAAAAA" },
    "minecraft:diamond":        { name: "Diamond",    color: "#55FFFF" },
    "minecraft:netherite":      { name: "Netherite",  color: "#555555" },
    "tetra:maxed_forge_hammer": { name: "Maxed",      color: "#FF55FF" },
    0: { name: "Wood",      color: "#FFAA00" },
    1: { name: "Wood",      color: "#FFAA00" },
    2: { name: "Stone",     color: "#AAAAAA" },
    3: { name: "Iron",      color: "#AAAAAA" },
    4: { name: "Diamond",   color: "#55FFFF" },
    5: { name: "Netherite", color: "#555555" }
}

var _TOOL_DATA = {
    "pickaxe_dig":    { name: "Pickaxe",  emoji: "⛏" },
    "axe_dig":        { name: "Axe",      emoji: "🪓" },
    "axe_strip":      { name: "Strip",    emoji: "🪓" },
    "axe_scrape":     { name: "Scrape",   emoji: "🪓" },
    "axe_wax_off":    { name: "Wax Off",  emoji: "🪓" },
    "shovel_dig":     { name: "Shovel",   emoji: "⚒" },
    "shovel_flatten": { name: "Flatten",  emoji: "⚒" },
    "hammer_dig":     { name: "Hammer",   emoji: "🔨" },
    "hoe_dig":        { name: "Hoe",      emoji: "🌾" },
    "till":           { name: "Till",     emoji: "🌾" },
    "pry":            { name: "Pry",      emoji: "🔧" },
    "cut":            { name: "Cut",      emoji: "⚔" },
    "dowse":          { name: "Dowse",    emoji: "💧" }
}


var _MV_NAMES = {
    "basic_pickaxe": "Pick Head",
    "basic_axe":     "Axe Head",
    "claw":          "Claw Head",
    "butt":          "Butt Head",
    "adze":          "Adze Head",
    "basic_hammer":  "Hammer Head",
    "sickle":        "Sickle Head",
    "hoe":           "Hoe Head",
    "basic_handle":  "Handle",
    "double_binding":"Binding",
    "sword_binding": "Binding",
    "basic_blade":   "Blade",
    "short_blade":   "Short Blade",
    "machete":       "Machete",
    "throwing_knife":"Throwing Knife",
    "heavy_blade":   "Heavy Blade",
    "spearhead":     "Spearhead",
    "basic_shovel":  "Shovel Head",
    "long_handle":   "Long Handle",
    "light_handle":  "Light Handle",
    "single_binding":"Binding",
    "straight_stave":"Straight Stave",
    "long_stave":    "Long Stave",
    "recurve_stave": "Recurve Stave",
    "laminated_stave":"Laminated Stave",
    "basic_string":  "String",
    "sights":        "Sights",
    "stabilizer":    "Stabilizer",
    "extended_rest": "Extended Rest",
    "basic_stave":   "Stave",
    "basic_stock":   "Stock",
    "stirrup":       "Stirrup"
}

function _sign(val) {
    return val >= 0 ? "+" + val : "" + val
}
function _attrName(k)      { return _ATTR_NAMES[k]      || k }
function _effectName(k)    { return _EFFECT_NAMES[k]    || k }
function _toolLevelName(k) {
    var entry = _TOOL_LEVEL_DATA[k]
    return entry ? entry.name : "" + k
}
function _toolLevelColor(k) {
    var entry = _TOOL_LEVEL_DATA[k]
    return entry ? entry.color : "#AAAAAA"
}
function _mvLabel(mv) {
    var parts = (mv + "").split("/")
    var suffix  = parts[0]
    var matName = parts.length > 1 ? parts[1] : ""
    var modName = _MV_NAMES[suffix] || suffix
    var mat     = matName.charAt(0).toUpperCase() + matName.slice(1)
    return mat + " " + modName
}
function _toolName(k) {
    var d = _TOOL_DATA[k]
    return d ? d.name : k
}

function _toolEmoji(k) {
    var d = _TOOL_DATA[k]
    return d ? d.emoji : "🔹"
}

// A contribuição numérica e a apresentação não são sempre a mesma unidade.
// Efeitos percentuais mostram o valor agregado; identidades discretas mostram
// rank mesmo quando seu payload técnico (como Reinforced=15) usa porcentagem.
var MD_TT_CLIENT_EFFECT_DISPLAY = {
    "magnetic": { "type": "rank", "rank": 1 },
    "mechanized/magnetic": { "type": "rank", "rank": 1 },
    "reinforced": { "type": "rank", "rank": 1 },
    "mechanized/reinforced": { "type": "rank", "rank": 1 },
    "holy": { "type": "percentage" },
    "mechanized/holy": { "type": "percentage" }
}

function MD_TT_CLIENT_formatRank(level) {
    var numericLevel = Number(level)
    var romanRanks = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"]
    if (numericLevel >= 1 && numericLevel <= 10 && numericLevel === Math.floor(numericLevel)) {
        return romanRanks[numericLevel]
    }
    return "" + level
}

function MD_TT_CLIENT_formatEffectLevel(key, level) {
    var display = MD_TT_CLIENT_EFFECT_DISPLAY[key]
    if (display && display.type === "percentage") return level + "%"
    if (display && display.type === "rank") return MD_TT_CLIENT_formatRank(display.rank || level)
    return MD_TT_CLIENT_formatRank(level)
}

function MD_TT_CLIENT_appendEffectGroup(text, label, effects, labelColor) {
    if (!effects) return
    var effectKeys = Object.keys(effects)
    if (effectKeys.length === 0) return

    text.add(Text.ofString("  " + label).color(labelColor))
    for (var i = 0; i < effectKeys.length; i++) {
        var key = effectKeys[i]
        var effect = effects[key]
        var parts = [Text.ofString("    " + _effectName(key) + " ").color("#AAAAAA")]
        if (effect.level !== undefined) {
            parts.push(Text.ofString(MD_TT_CLIENT_formatEffectLevel(key, effect.level)).color("#AA00AA"))
        }
        if (effect.efficiency !== undefined) {
            parts.push(Text.ofString(" (" + effect.efficiency + ")").color("#888888"))
        }
        text.add(parts)
    }
}

function MD_TT_CLIENT_appendContextualModifiers(text, modifiers) {
    if (!modifiers) return
    text.add(Text.ofString("  Affinity Modifiers").color("#FFAA00"))
    if (modifiers.finalDurability !== undefined) {
        text.add(Text.ofString("    " + _sign(modifiers.finalDurability) + "% Final Durability").color("#55FF55"))
    }
    if (modifiers.attackSpeed !== undefined) {
        text.add(Text.ofString("    " + _sign(modifiers.attackSpeed) + "% Attack Speed").color(modifiers.attackSpeed >= 0 ? "#55FF55" : "#FF5555"))
    }
    if (modifiers.drawTime !== undefined) {
        text.add(Text.ofString("    " + _sign(modifiers.drawTime) + "% Draw Time").color(modifiers.drawTime <= 0 ? "#55FF55" : "#FF5555"))
    }
    if (modifiers.miningSpeed !== undefined) {
        text.add(Text.ofString("    " + _sign(modifiers.miningSpeed) + "% Mining Speed").color(modifiers.miningSpeed >= 0 ? "#55FF55" : "#FF5555"))
    }
}

// =============================================================================
// Handlers de tooltip por item
// =============================================================================

var _TIC_PARTS = [
    "tconstruct:pick_head",
    "tconstruct:small_axe_head",
    "tconstruct:small_blade",
    "tconstruct:adze_head",
    "tconstruct:hammer_head",
    "tconstruct:broad_blade",
    "tconstruct:tool_handle",
    "tconstruct:tough_handle",
    "tconstruct:tool_binding",
    "tconstruct:bow_limb",
    "tconstruct:bowstring",
    "tconstruct:bow_grip"
]

ItemEvents.tooltip(function(event) {

    for (var pi = 0; pi < _TIC_PARTS.length; pi++) {
        var partId = _TIC_PARTS[pi]

        event.addAdvanced(partId, function(item, advanced, text) {

            var tt = global.TetraToolTips
            if (!tt) return

            // Lê material direto do NBT como propriedade
            var nbt = item.nbt
            if (!nbt) return
            var rawMat = nbt.Material  // ex: "tconstruct:cobalt"
            if (!rawMat) return

            // Extrai só o nome: "tconstruct:cobalt" -> "cobalt"
            var rawMatStr = rawMat + ""
            var colonIdx  = rawMatStr.indexOf(":")
            var matName   = rawMatStr.slice(colonIdx + 1)
            if (!matName) return

            var matData = tt.materials[matName]
            if (!matData) return
            var matType = matData.materialType

            // Chave de lookup para variantes de módulo
            var nbtKey = item.getId() + "|{Material:\"" + rawMatStr + "\"}"
            var moduleVariants = tt.variants[nbtKey]
            var itemName = text.get(0)
            text.clear()
            text.add(itemName)
            if (event.shift) {
                text.add(Text.of(""))
                text.add([
                    Text.ofString(matName.charAt(0).toUpperCase() + matName.slice(1)).underlined().color("#55FF55"), 
                    Text.ofString(" | "), 
                    Text.ofString(matType.charAt(0).toUpperCase() + matType.slice(1)).underlined().color("#AAAAAA")])
                text.add([Text.ofString("Hardness: ").color("#FFFFFF"), Text.ofString("" + matData.primary).color("#FF5555")])
                text.add([Text.ofString("Density: ").color("#FFFFFF"), Text.ofString("" + matData.secondary).color("#FFAA00")])
                text.add([Text.ofString("Flexibility: ").color("#FFFFFF"), Text.ofString("" + matData.tertiary).color("#FFFF55")])
                text.add(Text.of(""))
                text.add([Text.ofString("Durability: ").color("#FFFFFF"), Text.ofString("" + matData.durability).color("#55FF55")])
                text.add([Text.ofString("Magic Capacity: ").color("#FFFFFF"), Text.ofString("" + matData.magicCapacity).color("#55FFFF")])
                text.add([Text.ofString("Integrity Cost: ").color("#FFFFFF"), Text.ofString("" + matData.integrityCost).color("#FF55FF")])
                text.add([Text.ofString("Integrity Gain: ").color("#FFFFFF"), Text.ofString("" + matData.integrityGain).color("#5555FF")])
                text.add(Text.of(""))
                text.add([Text.ofString("Tool Level: ").color("#FFFFFF"), Text.ofString(_toolLevelName(matData.toolLevel)).color(_toolLevelColor(matData.toolLevel))])
                text.add([Text.ofString("Efficiency: ").color("#FFFFFF"), Text.ofString("" + matData.toolEfficiency).color("#AAAAAA")])
                var innateKeys = Object.keys(matData.innateImprovements || {})
                var materialEffectKeys = Object.keys(matData.materialEffects || {})
                if (innateKeys.length > 0 || materialEffectKeys.length > 0) {
                    text.add(Text.of(""))
                    text.add(Text.ofString("Innate Material Traits").color("#AAAAFF"))
                    for (var ii = 0; ii < innateKeys.length; ii++) {
                        var innateKey = innateKeys[ii]
                        text.add([
                            Text.ofString("  " + _effectName(innateKey) + " ").color("#AAAAAA"),
                            Text.ofString(MD_TT_CLIENT_formatEffectLevel(innateKey, matData.innateImprovements[innateKey])).color("#AA00AA")
                        ])
                    }
                    MD_TT_CLIENT_appendEffectGroup(text, "Material Effects", matData.materialEffects, "#55FFFF")
                }

            } else if (event.ctrl) {
                // ---- CTRL: stats transformados por módulo -------------------
                if (!moduleVariants || moduleVariants.length === 0) {
                    text.add(Text.of(""))
                    text.add(Text.ofString("No modules found for this part").color("#FF5555"))
                    return
                }
                for (var vi = 0; vi < moduleVariants.length; vi++) {
                    var mv    = moduleVariants[vi]
                    var entry = tt.modules[mv]
                    if (!entry) continue

                    var stats = entry.stats

                    // Cabeçalho do módulo
                    text.add(Text.of(""))
                    text.add(Text.ofString(_mvLabel(mv)).color("#FFAA00").underlined())

                    // Attributes
                    if (stats.attributes) {
                        var attrKeys = Object.keys(stats.attributes)
                        for (var i = 0; i < attrKeys.length; i++) {
                            var k   = attrKeys[i]
                            var val = stats.attributes[k]
                            var col = val >= 0 ? "#55FF55" : "#FF5555"
                            text.add([
                                Text.ofString("  " + _attrName(k) + ": ").color("#ffffff"),
                                Text.ofString(_sign(val)).color(col)
                            ])
                        }
                    }

                    // Tools
                    if (stats.tools) {
                        var toolKeys = Object.keys(stats.tools)
                        for (var i = 0; i < toolKeys.length; i++) {
                            var k = toolKeys[i]
                            var t = stats.tools[k]
                            text.add([
                                Text.ofString("  " + _toolName(k) + ": ").color("#FFFFFF"),
                                Text.ofString(t.level + _toolEmoji(k)).color(_toolLevelColor(t.level)),
                                Text.ofString(" | "), 
                                Text.ofString("Efficiency: ").color("#ffffff"),
                                Text.ofString(" " + t.efficiency).color(_toolLevelColor(t.level))])
                        }
                    }

                    // Effects are separated by origin: native module payload
                    // first, then the material-specific contextual affinity.
                    MD_TT_CLIENT_appendEffectGroup(text, "Module Effects", stats.moduleEffects, "#888888")
                    MD_TT_CLIENT_appendEffectGroup(text, "Material Affinity", stats.contextualEffects, "#55FFFF")
                    MD_TT_CLIENT_appendContextualModifiers(text, stats.contextualModifiers)

                    // Durability / Integrity / MagicCap
                    text.add([
                        Text.ofString("  Dur  ").color("#888888"),
                        Text.ofString("" + stats.durability).color("#FFFF55"),
                        Text.ofString("   Int  ").color("#888888"),
                        Text.ofString(_sign(stats.integrity)).color(stats.integrity >= 0 ? "#55FF55" : "#FF5555"),
                        Text.ofString("   Mag  ").color("#888888"),
                        Text.ofString("" + stats.magicCapacity).color("#AA00AA")
                    ])

                }

            } else {
                // ---- Neutro: hint -------------------------------------------
                if (!moduleVariants || moduleVariants.length === 0) {
                    text.add(Text.ofString("No modules found for this part").color("#FF5555"))
                    text.add(Text.ofString("This could be either intended design or a bug.").italic())
                    text.add(Text.ofString("Report it as an issue if it looks strange or broken.").italic())
                    text.add(Text.of(""))
                } else {
                    text.add(Text.ofString("Suitable tetra component").color("#55FF55"))
                }
                text.add([
                    Text.ofString("Hold ").color("#ffffff"),
                    Text.ofString("Shift ").color("#55FFFF").italic(),
                    Text.ofString("for ").color("#ffffff"),
                    Text.ofString("Material Info").color("#55FFFF")])
                text.add([
                    Text.ofString("Hold ").color("#ffffff"),
                    Text.ofString("Ctrl ").color("#FFD700").italic(),
                    Text.ofString("for ").color("#ffffff"),
                    Text.ofString("Module Info").color("#FFD700")])
                text.add(Text.of(" "))
            }
        })
    }
})
