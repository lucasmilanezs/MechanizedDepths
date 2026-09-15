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
            // -- Linha de hint no nome do item --------------------------------
            // Mantém o nome original e adiciona o material
            // (text[0] é o nome do item, não limpamos)
            console.log("[Debug] rawMat=" + rawMat + " | typeof=" + typeof rawMat)
            console.log("[Debug] nbtKey=" + nbtKey)
            console.log("[Debug] lookup=" + nbtKey + " | found=" + (tt.variants[nbtKey] ? "yes" : "no"))

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
                if (matData.traits && matData.traits.length > 0) {
                    text.add(Text.of(""))
                    text.add([Text.ofString("Traits: ").color("#FFFFFF"), Text.ofString(matData.traits.join(", ")).color("#AAAAAA")])
                }

                // Traits do material (prontas, vazias por enquanto)
                if (matData.traits && matData.traits.length > 0) {
                    text.add([
                        Text.ofString("Traits  ").color("#888888"),
                        Text.ofString(matData.traits.join(", ")).color("#AAAAFF")
                    ])
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

                    // Effects
                    if (stats.effects) {
                        var fxKeys = Object.keys(stats.effects)
                        for (var i = 0; i < fxKeys.length; i++) {
                            var k  = fxKeys[i]
                            var fx = stats.effects[k]
                            var parts = [Text.ofString("  " + _effectName(k) + "  ").color("#888888")]
                            if (fx.level !== undefined) {
                                parts.push(Text.ofString("lvl " + fx.level).color("#AA00AA"))
                            }
                            if (fx.efficiency !== undefined) {
                                parts.push(Text.ofString("  (" + fx.efficiency + ")").color("#888888"))
                            }
                            text.add(parts)
                        }
                    }

                    // Durability / Integrity / MagicCap
                    text.add([
                        Text.ofString("  Dur  ").color("#888888"),
                        Text.ofString("" + stats.durability).color("#FFFF55"),
                        Text.ofString("   Int  ").color("#888888"),
                        Text.ofString(_sign(stats.integrity)).color(stats.integrity >= 0 ? "#55FF55" : "#FF5555"),
                        Text.ofString("   Mag  ").color("#888888"),
                        Text.ofString("" + stats.magicCapacity).color("#AA00AA")
                    ])

                    // Traits (prontas, vazias por enquanto)
                    if (stats.moduleTraits && stats.moduleTraits.length > 0) {
                        text.add([
                            Text.ofString("  Module Traits  ").color("#888888"),
                            Text.ofString(stats.moduleTraits.join(", ")).color("#AAAAFF")
                        ])
                    }
                    if (stats.variantTraits && stats.variantTraits.length > 0) {
                        text.add([
                            Text.ofString("  Variant Traits  ").color("#888888"),
                            Text.ofString(stats.variantTraits.join(", ")).color("#AAAAFF")
                        ])
                    }
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
