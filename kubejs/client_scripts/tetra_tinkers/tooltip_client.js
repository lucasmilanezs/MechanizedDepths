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
    "slimy":          "Slimy",
    "mechanized/reinforced": "Reinforced",
    "mechanized/venom":      "Venom",
    "mechanized/unholy":     "Unholy",
    "mechanized/slimy":      "Slimy",
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
    0: { name: "None",      color: "#888888" }
}

// Tetra numbers tool levels by tier, starting at 1 (wood = 1, gold = 2 ...
// maxed forge hammer = 7). tooltip_mapping.js computes levels on that scale,
// so the numeric keys reuse the named entries and names and colours match.
var MD_TT_CLIENT_TIER_ORDER = [
    "minecraft:wood", "minecraft:gold", "minecraft:stone", "minecraft:iron",
    "minecraft:diamond", "minecraft:netherite", "tetra:maxed_forge_hammer"
]
for (var MD_TT_CLIENT_ti = 0; MD_TT_CLIENT_ti < MD_TT_CLIENT_TIER_ORDER.length; MD_TT_CLIENT_ti++) {
    _TOOL_LEVEL_DATA[MD_TT_CLIENT_ti + 1] = _TOOL_LEVEL_DATA[MD_TT_CLIENT_TIER_ORDER[MD_TT_CLIENT_ti]]
}

// Tetra's double/tier_bonus synergy: two heads of the same variant add one
// level to this tool. The Ctrl view shows a single head, so it says so.
var MD_TT_CLIENT_TWIN_HEAD_BONUS = {
    "basic_pickaxe": "pickaxe_dig",
    "basic_hammer":  "hammer_dig"
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
// Same formatting as MD_TT_titleCase in schematic_gen.js, which writes the
// Tetra lang file: "refined_obsidian" -> "Refined Obsidian".
function MD_TT_CLIENT_titleCase(value) {
    var words = (value + "").split("_")
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(" ")
}
function _mvLabel(mv) {
    var parts = (mv + "").split("/")
    var suffix  = parts[0]
    var matName = parts.length > 1 ? parts[1] : ""
    var modName = _MV_NAMES[suffix] || MD_TT_CLIENT_titleCase(suffix)
    return MD_TT_CLIENT_titleCase(matName) + " " + modName
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
// Linhas do próprio Tinkers
// =============================================================================
// Tinkers' ToolPartItem writes its own lines right after the item name: the
// material ID (F3+H), Tinkers traits, Tinkers stats on Shift and its own
// Shift/Ctrl hints. They describe Tinkers tools, which this pack replaces with
// Tetra, so the Tetra lines take their place. Every other line (other mods'
// lines, the F3+H item ID and NBT lines) is kept.
//
// To find Tinkers' lines exactly, run the part's own tooltip code again into a
// scratch list and remove the matching lines in order. If that ever fails, the
// Tinkers lines are simply left in place.
var $MD_TT_CLIENT_ArrayList = Java.loadClass("java.util.ArrayList")
var $MD_TT_CLIENT_TooltipFlag = Java.loadClass("net.minecraft.world.item.TooltipFlag")
var MD_TT_CLIENT_partLinesFailed = false

function MD_TT_CLIENT_tinkersPartLines(item, advanced) {
    if (MD_TT_CLIENT_partLinesFailed) return null
    try {
        var lines = new $MD_TT_CLIENT_ArrayList()
        var flag = advanced ? $MD_TT_CLIENT_TooltipFlag.ADVANCED : $MD_TT_CLIENT_TooltipFlag.NORMAL
        item.getItem().appendHoverText(item, null, lines, flag)
        var result = []
        for (var i = 0; i < lines.size(); i++) {
            result.push(MD_TT_CLIENT_lineText(lines.get(i)))
        }
        return result
    } catch (e) {
        MD_TT_CLIENT_partLinesFailed = true
        console.warn("[Mechanized/Tooltip] Could not read the Tinkers part tooltip, so its lines stay: " + e)
        return null
    }
}

function MD_TT_CLIENT_lineText(line) {
    if (line === null || line === undefined) return ""
    return typeof line.getString === "function" ? String(line.getString()) : String(line)
}

function MD_TT_CLIENT_appendLines(text, lines) {
    for (var i = 0; i < lines.length; i++) {
        text.add(lines[i])
    }
}

// The lines after the item name, minus the ones Tinkers added.
function MD_TT_CLIENT_otherLines(item, advanced, text) {
    var lines = []
    for (var i = 1; i < text.size(); i++) {
        lines.push(text.get(i))
    }
    var partLines = MD_TT_CLIENT_tinkersPartLines(item, advanced)
    if (!partLines) return lines

    var from = 0
    for (var pi = 0; pi < partLines.length; pi++) {
        for (var li = from; li < lines.length; li++) {
            if (lines[li] !== null && MD_TT_CLIENT_lineText(lines[li]) === partLines[pi]) {
                lines[li] = null
                from = li + 1
                break
            }
        }
    }

    var kept = []
    for (var k = 0; k < lines.length; k++) {
        if (lines[k] !== null) kept.push(lines[k])
    }
    return kept
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
            // Only Tinkers' own part lines are replaced; the rest go back at
            // the end (see MD_TT_CLIENT_otherLines).
            var otherLines = MD_TT_CLIENT_otherLines(item, advanced, text)
            text.clear()
            text.add(itemName)
            if (event.shift) {
                text.add(Text.of(""))
                text.add([
                    Text.ofString(MD_TT_CLIENT_titleCase(matName)).underlined().color("#55FF55"), 
                    Text.ofString(" | "), 
                    Text.ofString(MD_TT_CLIENT_titleCase(matType)).underlined().color("#AAAAAA")])
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
                    MD_TT_CLIENT_appendLines(text, otherLines)
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
                        var twinTool = MD_TT_CLIENT_TWIN_HEAD_BONUS[(mv + "").split("/")[0]]
                        if (twinTool && stats.tools[twinTool]) {
                            text.add(Text.ofString("    +1 " + _toolName(twinTool) + " level with two matching heads").color("#888888"))
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
            MD_TT_CLIENT_appendLines(text, otherLines)
        })
    }
})
