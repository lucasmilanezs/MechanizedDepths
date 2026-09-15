// =============================================================================
// Tetra x Tinkers' Construct -- Schematic Integration
// =============================================================================
// Uso:
//   addMaterial("cobalt",    2, "metal", "iron")
//   addMaterial("darkthread", 1, "fiber")
//   addMaterial("manyullyn", 3, "metal", "diamond")
//
// hammerTier (4o argumento, opcional):
//   "wood" | "gold" | "stone" | "iron" | "diamond"
//   Quando ausente, nenhum outcome e gerado para double/basic_hammer.
// =============================================================================

// true  = replace completo (producao)
// false = merge (debug, nao destroi outcomes existentes)
var REPLACE = false

// =============================================================================
// Mapeamentos
// =============================================================================

var TOOL_LEVEL_TO_INT = {
    "minecraft:wood":           1,
    "minecraft:gold":           2,
    "minecraft:stone":          3,
    "minecraft:iron":           4,
    "minecraft:diamond":        5,
    "minecraft:netherite":      6,
    "tetra:maxed_forge_hammer": 7
}

var TYPE_TO_ACTION = {
    "wood":   "axe_dig",
    "stone":  "hammer_dig",
    "metal":  "hammer_dig",
    "gem":    "hammer_dig",
    "bone":   "hammer_dig",
    "rod":    "hammer_dig",
    "misc":   "hammer_dig",
    "scale":  "cut",
    "skin":   "cut",
    "fiber":  "cut",
    "fabric": "cut"
}

var TYPE_TO_PARTS = {
    "wood":   ["tool_handle", "tool_binding", "bow_limb"],
    "stone":  ["pick_head", "small_axe_head", "small_blade", "adze_head", "hammer_head", "broad_blade"],
    "metal":  ["pick_head", "small_axe_head", "small_blade", "adze_head", "hammer_head", "broad_blade", "tool_handle", "bow_limb", "bow_grip"],
    "gem":    ["pick_head", "small_axe_head", "small_blade", "adze_head", "broad_blade"],
    "bone":   ["pick_head", "small_axe_head", "small_blade", "adze_head", "hammer_head", "broad_blade", "tool_handle", "bow_grip"],
    "rod":    ["tool_handle"],
    "misc":   ["tool_handle", "tool_binding"],
    "scale":  ["tool_binding"],
    "skin":   ["tool_binding"],
    "fiber":  ["bowstring", "tool_binding"],
    "fabric": ["bowstring", "tool_binding"]
}

// hammer_head lista vazia -- controlado via hammerTier exclusivamente
var PART_TO_SCHEMATICS = {
    "pick_head":      ["double/basic_pickaxe"],
    "small_axe_head": ["double/basic_axe", "double/claw", "double/butt"],
    "small_blade":    ["sword/basic_blade", "sword/short_blade", "sword/machete", "sword/throwing_knife"],
    "adze_head":      ["double/adze"],
    "hammer_head":    [],
    "broad_blade":    ["sword/heavy_blade", "double/sickle", "double/hoe", "single/spearhead", "single/basic_shovel"],
    "tool_handle":    ["double/basic_handle", "single/basic_handle", "single/long_handle", "single/light_handle"],
    "tool_binding":   ["double/binding", "single/binding"],
    "bow_limb":       ["bow/straight_stave", "bow/long_stave", "bow/recurve_stave", "bow/laminated_stave", "crossbow/basic_stave"],
    "bowstring":      ["bow/basic_string", "crossbow/basic_string"],
    "bow_grip":       ["bow/sights", "bow/stabilizer", "bow/extended_rest", "crossbow/stirrup", "crossbow/basic_stock"]
}

var PART_TO_ITEM = {
    "pick_head":      "tconstruct:pick_head",
    "small_axe_head": "tconstruct:small_axe_head",
    "small_blade":    "tconstruct:small_blade",
    "adze_head":      "tconstruct:adze_head",
    "hammer_head":    "tconstruct:hammer_head",
    "broad_blade":    "tconstruct:broad_blade",
    "tool_handle":    "tconstruct:tool_handle",
    "tool_binding":   "tconstruct:tool_binding",
    "bow_limb":       "tconstruct:bow_limb",
    "bowstring":      "tconstruct:bowstring",
    "bow_grip":       "tconstruct:bow_grip"
}

// moduleKey por schematic-id
var SCHEMATIC_MODULE_KEY = {
    "double/basic_pickaxe":  "double/basic_pickaxe",
    "double/basic_axe":      "double/basic_axe",
    "double/claw":           "double/claw",
    "double/butt":           "double/butt",
    "double/adze":           "double/adze",
    "double/basic_hammer":   "double/basic_hammer",
    "double/sickle":         "double/sickle",
    "double/hoe":            "double/hoe",
    "double/basic_handle":   "double/basic_handle",
    "double/binding":        "double/binding",
    "sword/basic_blade":     "sword/basic_blade",
    "sword/short_blade":     "sword/short_blade",
    "sword/machete":         "sword/machete",
    "sword/throwing_knife":  "sword/throwing_knife",
    "sword/heavy_blade":     "sword/heavy_blade",
    "single/spearhead":      "single/spearhead",
    "single/basic_shovel":   "single/basic_shovel",
    "single/basic_handle":   "single/basic_handle",
    "single/long_handle":    "single/long_handle",
    "single/light_handle":   "single/light_handle",
    "single/binding":        "single/binding",
    "bow/straight_stave":    "bow/straight_stave",
    "bow/long_stave":        "bow/long_stave",
    "bow/recurve_stave":     "bow/recurve_stave",
    "bow/laminated_stave":   "bow/laminated_stave",
    "bow/basic_string":      "bow/basic_string",
    "bow/sights":            "bow/sights",
    "bow/stabilizer":        "bow/stabilizer",
    "bow/extended_rest":     "bow/extended_rest",
    "crossbow/basic_stave":  "crossbow/basic_stave",
    "crossbow/basic_stock":  "crossbow/basic_stock",
    "crossbow/basic_string": "crossbow/basic_string",
    "crossbow/stirrup":      "crossbow/stirrup"
}



// -- CONFERIR: ids que dependem do teu registro de materiais -------------------
var HAMMER_T2_MATERIAL = "tetra:metal/infused_iron"   // material Tetra
var HAMMER_T2_NAMESPACE = "mechanized"               // namespace do material TiC
var HAMMER_T2_NAME      = "infused_iron"

var HAMMER_T3_MATERIAL = "tetra:metal/steel"
var HAMMER_T3_NAMESPACE = "tconstruct"
var HAMMER_T3_NAME      = "steel"

// Qual material de tetra:wood/ a hammer_head de tconstruct:wood consome.
// A categoria tem varios membros; o outcome precisa nomear um concreto.
var HAMMER_WOOD_VARIANT = "basic_hammer/oak"

// -- Variantes do modulo ------------------------------------------------------
// materials  = materiais Tetra que a variante cobre
// toolLevel  = tools.hammer_dig fixo (null = variante sem nivel, so a de wood)
// integrity  = penalidade extra no topo da variante (null = ausente)
// textures   = extract.availableTextures ("metal" | "stone" | "log");
//              quando presente, o modelo e dirigido pelo material
// fixedModel = modelo cravado no topo da variante (ignora textures)
var HAMMER_VARIANTS = [
    {
        "materials": ["tetra:wood/"],
        "toolLevel": null,
        "integrity": null,
        "textures":  ["log"],
        "fixedModel": null
    },
    {
        "materials": ["tetra:stone/stone"],
        "toolLevel": "minecraft:wood",
        "integrity": null,
        "textures":  null,
        "fixedModel": {
            "location": "tetra:item/module/double/head/basic_hammer/stone",
            "tint": "aaaaaa"
        }
    },
    {
        "materials": ["tetra:stone/diorite", "tetra:stone/andesite", "tetra:stone/granite"],
        "toolLevel": "minecraft:wood",
        "integrity": null,
        "textures":  ["stone"],
        "fixedModel": null
    },
    {
        "materials": ["tetra:metal/copper"],
        "toolLevel": "minecraft:gold",
        "integrity": null,
        "textures":  ["metal"],
        "fixedModel": null
    },
    {
        "materials": ["tetra:metal/iron"],
        "toolLevel": "minecraft:gold",
        "integrity": null,
        "textures":  ["metal"],
        "fixedModel": null
    },
    {
        // era tetra:stone/blackstone -- mantem tools/integrity, vira metal
        "materials": [HAMMER_T2_MATERIAL],
        "toolLevel": "minecraft:stone",
        "integrity": -1,
        "textures":  ["metal"],
        "fixedModel": null
    },
    {
        // era tetra:stone/obsidian -- o nativo cravava o modelo de obsidian,
        // aqui o modelo passa a ser dirigido pelo material (steel e metal)
        "materials": [HAMMER_T3_MATERIAL],
        "toolLevel": "minecraft:iron",
        "integrity": null,
        "textures":  ["metal"],
        "fixedModel": null
    },
    {
        "materials": ["tetra:metal/netherite"],
        "toolLevel": "minecraft:diamond",
        "integrity": -1,
        "textures":  ["metal"],
        "fixedModel": null
    }
]

// Monta uma variante completa. O bloco extract e literalmente identico em
// todas as variantes do JSON nativo -- por isso mora aqui e nao na tabela.
function buildHammerVariant(v) {
    var out = {
        "materials": v.materials,
        "key": "basic_hammer/",
        "attributes": { "generic.attack_speed": -1.1 },
        "aspects": {
            "block_breaker": 2,
            "breakable": 2,
            "blunt_weapon": 1
        }
    }

    if (v.toolLevel !== null)  out.tools     = { "hammer_dig": v.toolLevel }
    if (v.fixedModel !== null) out.models    = [v.fixedModel]
    if (v.integrity !== null)  out.integrity = v.integrity

    var extract = {
        "primaryAttributes":   { "generic.attack_damage": 0.5 },
        "secondaryAttributes": {
            "generic.attack_damage": 1,
            "generic.attack_speed": -0.08
        },
        "tools": { "hammer_dig": [0, 0.8333] },
        "durability": 0.55,
        "integrity": -1,
        "magicCapacity": 1,
        "glyph": { "textureX": 64 }
    }
    if (v.textures !== null) {
        extract.availableTextures = v.textures
        extract.models = [
            { "location": "tetra:item/module/double/head/basic_hammer/" }
        ]
    }
    out.extract = extract

    return out
}

function buildHammerModule() {
    var variants = []
    for (var i = 0; i < HAMMER_VARIANTS.length; i++) {
        variants.push(buildHammerVariant(HAMMER_VARIANTS[i]))
    }
    return {
        "replace": true,
        "type": "tetra:multi_major_module",
        "slots": ["double/head_left", "double/head_right"],
        "slotSuffixes": ["_left", "_right"],
        "improvements": [
            "tetra:double/hammer/",
            "tetra:double/shared_head/",
            "tetra:double/shared/",
            "tetra:shared/"
        ],
        "variants": variants
    }
}

// -- Outcomes do schematic ----------------------------------------------------
// Sempre toolpart: tconstruct:hammer_head casado por NBT.
// requiredTools e SEMPRE explicito -- matching por item/NBT nao herda o
// requiredTools declarado no JSON do material.
function hammerHead(namespace, material) {
    return {
        "items": ["tconstruct:hammer_head"],
        "nbt": "{Material:\"" + namespace + ":" + material + "\"}"
    }
}

var HAMMER_OUTCOMES = [
    {
        "material": hammerHead("tconstruct", "wood"),
        "toolFactor": 0,
        "moduleKey": "double/basic_hammer",
        "moduleVariant": HAMMER_WOOD_VARIANT
    },
    {
        // tconstruct:rock cobre stone/diorite/andesite/granite de uma vez
        "material": hammerHead("tconstruct", "rock"),
        "toolFactor": 0,
        "moduleKey": "double/basic_hammer",
        "moduleVariant": "basic_hammer/stone"
    },
    {
        "material": hammerHead("tconstruct", "copper"),
        "countFactor": 2,
        "requiredTools": { "hammer_dig": "minecraft:wood" },
        "moduleKey": "double/basic_hammer",
        "moduleVariant": "basic_hammer/copper"
    },
    {
        "material": hammerHead("tconstruct", "iron"),
        "countFactor": 2,
        "requiredTools": { "hammer_dig": "minecraft:wood" },
        "moduleKey": "double/basic_hammer",
        "moduleVariant": "basic_hammer/iron"
    },
    {
        // era tetra:stone/blackstone
        "material": hammerHead(HAMMER_T2_NAMESPACE, HAMMER_T2_NAME),
        "requiredTools": { "hammer_dig": "minecraft:stone" },
        "moduleKey": "double/basic_hammer",
        "moduleVariant": "basic_hammer/" + HAMMER_T2_NAME
    },
    {
        // era a tag forge:obsidian -- improvements preservado do nativo
        "material": hammerHead(HAMMER_T3_NAMESPACE, HAMMER_T3_NAME),
        "requiredTools": { "hammer_dig": "minecraft:netherite" },
        "moduleKey": "double/basic_hammer",
        "moduleVariant": "basic_hammer/" + HAMMER_T3_NAME,
        "improvements": { "arrested": 0 }
    },
    {
        // era minecraft:netherite_ingot x2
        "material": hammerHead("tconstruct", "netherite"),
        "count": 2,
        "requiredTools": { "hammer_dig": "tetra:maxed_forge_hammer" },
        "moduleKey": "double/basic_hammer",
        "moduleVariant": "basic_hammer/netherite"
    }
]

// applicableMaterials: whitelist do schematic. "#cat" libera categoria,
// "!nome" libera material individual.
var HAMMER_APPLICABLE = [
    "#wood", "#stone", "!copper", "!iron",
    "!" + HAMMER_T2_NAME, "!" + HAMMER_T3_NAME, "!netherite"
]

// =============================================================================
// Declaracao de materiais
// =============================================================================

var _materials = []

function addMaterial(name, materialType, namespace, toolLevel, hammerTier) {
    if (hammerTier === undefined) hammerTier = null
    if (toolLevel === undefined) toolLevel = null
    if (namespace === undefined) namespace = "tconstruct"
    _materials.push({
        name: name,
        namespace: namespace,
        toolLevel: toolLevel,
        materialType: materialType,
        hammerTier: hammerTier
    })
}
// -- Adicione materiais aqui --------------------------------------------------
// TIER WOOD
addMaterial("gold", "metal")
addMaterial("copper", "metal")

// TIER GOLD
addMaterial("iron", "metal")
addMaterial("osmium", "metal")
addMaterial("silver", "metal")
addMaterial("lead", "metal")
addMaterial("electrum", "metal")
addMaterial("constantan", "metal")
// TIER STONE
addMaterial("invar", "metal")
addMaterial("amethyst", "gem", "mechanized")
addMaterial("bone", "bone")
addMaterial("bronze", "metal")

// TIER IRON
addMaterial("infused_iron", "metal", "mechanized")
// TIER DIAMOND
addMaterial("diamond", "gem", "mechanized")
addMaterial("obsidian", "stone")
addMaterial("steel", "metal")
// TIER NETHERITE
addMaterial("netherite", "metal")
addMaterial("cobalt", "metal")
addMaterial("manyullyn", "metal")
// TIER MAXHAMMER




// =============================================================================
// Acumulacao de outcomes (roda fora do evento)
// =============================================================================

var _outcomes = {}

// Inicializa entradas para todos os schematics conhecidos
var _allSchematics = [
    "double/basic_pickaxe", "double/basic_axe", "double/claw", "double/butt",
    "double/adze", "double/basic_hammer", "double/sickle", "double/hoe",
    "double/basic_handle", "double/binding",
    "sword/basic_blade", "sword/short_blade", "sword/machete",
    "sword/throwing_knife", "sword/heavy_blade",
    "single/spearhead", "single/basic_shovel", "single/basic_handle",
    "single/long_handle", "single/light_handle", "single/binding",
    "bow/straight_stave", "bow/long_stave", "bow/recurve_stave",
    "bow/laminated_stave", "bow/basic_string",
    "bow/sights", "bow/stabilizer", "bow/extended_rest",
    "crossbow/basic_stave", "crossbow/basic_stock",
    "crossbow/basic_string", "crossbow/stirrup"
]
for (var si = 0; si < _allSchematics.length; si++) {
    _outcomes[_allSchematics[si]] = []
}

// O martelo nao passa pelo loop de materiais -- ladder estatico
_outcomes["double/basic_hammer"] = HAMMER_OUTCOMES

for (var mi = 0; mi < _materials.length; mi++) {
    var mat          = _materials[mi]
    var matName      = mat.name
    var toolLevel = mat.toolLevel
    if (toolLevel === null) {
        var matJson = JsonIO.read("kubejs/data/tetra/materials/" + mat.materialType + "/" + mat.name + ".json")
        if (!matJson) matJson = JsonIO.read("kubejs/data/materials_inherit/materials/" + mat.materialType + "/" + mat.name + ".json")
        if (matJson && matJson.requiredTools) {
            var rtKeys = Object.keys(matJson.requiredTools)
            if (rtKeys.length > 0) {
                var rtVal = matJson.requiredTools[rtKeys[0]]
                toolLevel = TOOL_LEVEL_TO_INT[rtVal] || 1
            }
    }
    if (toolLevel === null) toolLevel = 1
}
    var materialType = mat.materialType
    var hammerTier   = mat.hammerTier

    var action = TYPE_TO_ACTION[materialType]
    var parts  = TYPE_TO_PARTS[materialType]
    if (!parts) parts = []

    for (var pi = 0; pi < parts.length; pi++) {
        var part      = parts[pi]
        var schematics = PART_TO_SCHEMATICS[part]
        if (!schematics) schematics = []
        var item = PART_TO_ITEM[part]
        if (!item) continue

        for (var sci = 0; sci < schematics.length; sci++) {
            var schematic = schematics[sci]
            if (!_outcomes[schematic]) _outcomes[schematic] = []

            var moduleKey       = SCHEMATIC_MODULE_KEY[schematic]
            var moduleKeySuffix = moduleKey.split("/")[1]
            var moduleVariant   = moduleKeySuffix + "/" + matName

            var requiredTools = {}
            requiredTools[action] = toolLevel

            _outcomes[schematic].push({
                "material": {
                    "items": [item],
                    "nbt": "{Material:\"" + mat.namespace + ":" + matName + "\"}"
                },
                "moduleKey": moduleKey,
                "moduleVariant": moduleVariant,
                "requiredTools": requiredTools
            })
        }
    }

    // Hammer: NAO e gerado por material aqui. O ladder do martelo e estatico
    // e vive no bloco HAMMER_* mais abaixo (o modulo do Tetra enumera material
    // por material, entao nao existe variante generica por categoria).
}

// Para cada material registrado em _materials,
// tenta ler kubejs/data/tetra/materials/<materialType>/<name>.json
// e acumula num objeto de lookup global

var _materialData = {}

for (var mi = 0; mi < _materials.length; mi++) {
    var mat  = _materials[mi]
    var path = "kubejs/data/tetra/materials/" + mat.materialType + "/" + mat.name + ".json"
    var json = JsonIO.read(path)
    if (!json) {
        path = "kubejs/data/materials_inherit/materials/" + mat.materialType + "/" + mat.name + ".json"
        json = JsonIO.read(path)
    }
    if (json) {
        _materialData[mat.name] = json
        console.log("[Mechanized/Tetra] Material carregado: " + mat.name + " -> primary=" + json.primary + " secondary=" + json.secondary + " durability=" + json.durability)
    } else {
        console.warn("[Mechanized/Tetra] Material JSON nao encontrado: " + path)
    }
}

ServerEvents.commandRegistry(function(event) {
    var Commands = event.commands

    event.register(
        Commands.literal("dumpMaterialData")
            .executes(function(ctx) {
                var source = ctx.source
                var keys = Object.keys(_materialData)
                source.sendSuccess(Text.of("=== materialData — " + keys.length + " materiais ==="), false)
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i]
                    var d = _materialData[k]
                    source.sendSuccess(Text.of(
                        k + " | pri=" + d.primary +
                        " sec=" + d.secondary +
                        " ter=" + d.tertiary +
                        " dur=" + d.durability +
                        " mag=" + d.magicCapacity
                    ), false)
                }
                return 1
            })
    )
})

// Comando de debug: /kubejs debugSchematics [schematic-id]
// Exemplos:
//   /kubejs debugSchematics
//   /kubejs debugSchematics double/basic_axe
ServerEvents.command("debugSchematics", function(event) {
    var args   = event.args
    var filter = (args && args.length > 0) ? args[0] : null

    if (filter) {
        var list = _outcomes[filter]
        if (!list) {
            event.source.sendSuccess("Schematic nao encontrado: " + filter, false)
            return
        }
        event.source.sendSuccess("=== " + filter + " (" + list.length + " outcomes) ===", false)
        for (var i = 0; i < list.length; i++) {
            var o = list[i]
            event.source.sendSuccess(
                "  [" + i + "] " + o.moduleVariant + " | item: " + o.material.items[0] + " | nbt: " + o.material.nbt,
                false
            )
        }
    } else {
        var keys = Object.keys(_outcomes)
        for (var ki = 0; ki < keys.length; ki++) {
            var k = keys[ki]
            event.source.sendSuccess(k + ": " + _outcomes[k].length + " outcomes", false)
        }
    }
})
global._ticMaterials = _materials
global._ticOutcomes  = _outcomes
// =============================================================================
// Injecao dos schematics -- um addJson por schematic, estatico e explicito
// =============================================================================

ServerEvents.highPriorityData(function(event) {

    var DEBUG_DUMP = true

    function debugDump(tetraPath, obj) {
        if (!DEBUG_DUMP) return
        JsonIO.write("kubejs/debug/data/" + tetraPath + ".json", obj)
    }

    function inject(tetraResourcePath, obj) {
        debugDump(tetraResourcePath.replace(":", "/"), obj)
        event.addJson(tetraResourcePath, obj)
    }

    // -------------------------------------------------------------------------

    inject("tetra:schematics/double/basic_pickaxe/basic_pickaxe", {
        "replace": REPLACE,
        "slots": ["double/head_left", "double/head_right"],
        "keySuffixes": ["_left", "_right"],
        "materialSlotCount": 1,
        "glyph": { "textureX": 176 },
        "displayType": "major",
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 3 },
            "tools": { "pickaxe_dig": [3, 2] },
            "durability": 2,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["double/basic_pickaxe"]
    })

    inject("tetra:schematics/double/basic_axe/basic_axe", {
        "replace": REPLACE,
        "slots": ["double/head_left", "double/head_right"],
        "keySuffixes": ["_left", "_right"],
        "materialSlotCount": 1,
        "glyph": { "textureX": 144 },
        "displayType": "major",
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 2 },
            "secondaryAttributes": { "generic.attack_damage": 1 },
            "tools": { "axe_dig": [3, 3] },
            "durability": 2,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["double/basic_axe"]
    })

    inject("tetra:schematics/double/claw/claw", {
        "replace": REPLACE,
        "slots": ["double/head_left", "double/head_right"],
        "keySuffixes": ["_left", "_right"],
        "materialSlotCount": 1,
        "glyph": { "textureX": 64, "textureY": 32 },
        "displayType": "major",
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 3 },
            "tools": { "pry": [3, 2] },
            "durability": 2,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["double/claw"]
    })

    inject("tetra:schematics/double/butt/butt", {
        "replace": REPLACE,
        "slots": ["double/head_right"],
        "keySuffixes": ["_right"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 160 },
        "outcomes": _outcomes["double/butt"]
    })

    inject("tetra:schematics/double/adze/adze", {
        "replace": REPLACE,
        "slots": ["double/head_left", "double/head_right"],
        "keySuffixes": ["_left", "_right"],
        "materialSlotCount": 1,
        "glyph": { "textureY": 32 },
        "displayType": "major",
        "outcomes": _outcomes["double/adze"]
    })

    // -- Hammer ---------------------------------------------------------------
    // O modulo vai ANTES: sem a variante declarada, o Tetra descarta o outcome
    // silenciosamente (reconhece o material, nao acha basic_hammer/<nome>).
    inject("tetra:modules/double/basic_hammer", buildHammerModule())

    // replace:true FIXO mesmo em modo debug: os outcomes nativos foram
    // redeclarados por inteiro em HAMMER_OUTCOMES. Merge duplicaria tudo.
    inject("tetra:schematics/double/basic_hammer/basic_hammer", {
        "replace": true,
        "slots": ["double/head_left", "double/head_right"],
        "keySuffixes": ["_left", "_right"],
        "materialSlotCount": 1,
        "glyph": { "textureX": 64 },
        "displayType": "major",
        "applicableMaterials": HAMMER_APPLICABLE,
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 2 },
            "secondaryAttributes": {
                "generic.attack_damage": 3,
                "generic.attack_speed": -1
            },
            "tools": { "hammer_dig": [0, 2] },
            "durability": 2,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["double/basic_hammer"]
    })

    inject("tetra:schematics/double/sickle/sickle", {
        "replace": REPLACE,
        "slots": ["double/head_left", "double/head_right"],
        "keySuffixes": ["_left", "_right"],
        "materialSlotCount": 1,
        "glyph": { "textureX": 32, "textureY": 32 },
        "displayType": "major",
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 3 },
            "tools": { "hoe_dig": [2, 2] },
            "durability": 2,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["double/sickle"]
    })

    inject("tetra:schematics/double/hoe/hoe", {
        "replace": REPLACE,
        "slots": ["double/head_left", "double/head_right"],
        "keySuffixes": ["_left", "_right"],
        "materialSlotCount": 1,
        "glyph": { "textureX": 16, "textureY": 32 },
        "displayType": "major",
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 3 },
            "tools": { "hoe_dig": [3, 3] },
            "durability": 2,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["double/hoe"]
    })

    inject("tetra:schematics/double/basic_handle/basic_handle", {
        "replace": true,
        "slots": ["double/handle"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 16 },
        "translation": {
            "secondaryAttributes": { "generic.attack_speed": -1 },
            "durability": 2,
            "integrity": 3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["double/basic_handle"]
    })

    inject("tetra:schematics/double/binding", {
        "replace": REPLACE,
        "slots": ["double/binding"],
        "materialSlotCount": 1,
        "displayType": "minor",
        "glyph": { "textureX": 88, "textureY": 112 },
        "outcomes": _outcomes["double/binding"]
    })

    inject("tetra:schematics/sword/basic_blade", {
        "replace": REPLACE,
        "slots": ["sword/blade"],
        "materialSlotCount": 1,
        "displayType": "major",
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 3 },
            "durability": 4,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["sword/basic_blade"]
    })

    inject("tetra:schematics/sword/short_blade", {
        "replace": REPLACE,
        "slots": ["sword/blade"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 32 },
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 3 },
            "secondaryAttributes": { "generic.attack_speed": -1 },
            "secondaryEffects": { "jab": -1 },
            "tools": { "cut": [2, 3] },
            "durability": 4,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["sword/short_blade"]
    })

    inject("tetra:schematics/sword/machete", {
        "replace": REPLACE,
        "slots": ["sword/blade"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureY": 32, "textureX": 48 },
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 3 },
            "secondaryAttributes": { "generic.attack_speed": -1 },
            "tools": { "cut": [0, 4] },
            "durability": 3,
            "integrity": -3
        },
        "outcomes": _outcomes["sword/machete"]
    })

    inject("tetra:schematics/sword/throwing_knife", {
        "replace": REPLACE,
        "slots": ["sword/blade"],
        "materialSlotCount": 1,
        "rarity": "temporary",
        "displayType": "major",
        "glyph": { "textureX": 160, "textureY": 48 },
        "requirement": { "type": "tetra:locked", "key": "tetra:sword/throwing_knife" },
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 3 },
            "secondaryEffects": { "throwable": [0, 1] },
            "tools": { "cut": [1, 3] },
            "durability": 2,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["sword/throwing_knife"]
    })

    inject("tetra:schematics/sword/heavy_blade", {
        "replace": REPLACE,
        "slots": ["sword/blade"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 48 },
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 2 },
            "secondaryAttributes": {
                "generic.attack_damage": 1,
                "generic.attack_speed": -1
            },
            "primaryEffects": { "sweeping": 2 },
            "durability": 3,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["sword/heavy_blade"]
    })

    inject("tetra:schematics/single/head/spearhead/spearhead", {
        "replace": REPLACE,
        "slots": ["single/head"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 208, "textureY": 32 },
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 4 },
            "secondaryAttributes": {
                "generic.attack_speed": -1,
                "generic.attack_damage": 1
            },
            "durability": 3,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["single/spearhead"]
    })

    inject("tetra:schematics/single/head/basic_shovel/basic_shovel", {
        "replace": REPLACE,
        "slots": ["single/head"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 176, "textureY": 32 },
        "translation": {
            "primaryAttributes": { "generic.attack_damage": 1 },
            "tools": { "shovel_dig": [3, 3] },
            "durability": 3,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["single/basic_shovel"]
    })

    inject("tetra:schematics/single/handle/basic_handle", {
        "replace": REPLACE,
        "slots": ["single/handle"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 16 },
        "translation": {
            "secondaryAttributes": { "generic.attack_speed": -1 },
            "durability": 1,
            "integrity": 3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["single/basic_handle"]
    })

    inject("tetra:schematics/single/handle/long_handle", {
        "replace": REPLACE,
        "slots": ["single/handle"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 112, "textureY": 32 },
        "translation": {
            "primaryAttributes": {
                "forge:reach_distance": 1,
                "forge:attack_range": 1
            },
            "secondaryAttributes": { "generic.attack_speed": -2 },
            "tertiaryAttributes": {
                "forge:reach_distance": 2,
                "forge:attack_range": 2
            },
            "durability": 1,
            "integrity": 3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["single/long_handle"]
    })

    inject("tetra:schematics/single/handle/light_handle", {
        "replace": REPLACE,
        "slots": ["single/handle"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 16 },
        "translation": {
            "secondaryAttributes": { "generic.attack_speed": -1 },
            "secondaryEffects": { "throwable": [0, 1] },
            "durability": 1,
            "integrity": 3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["single/light_handle"]
    })

    inject("tetra:schematics/single/binding", {
        "replace": REPLACE,
        "slots": ["double/binding"],
        "materialSlotCount": 1,
        "displayType": "minor",
        "glyph": { "textureX": 88, "textureY": 112 },
        "outcomes": _outcomes["single/binding"]
    })

    inject("tetra:schematics/bow/stave/straight_stave", {
        "replace": REPLACE,
        "slots": ["bow/stave"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 128, "textureY": 32 },
        "translation": {
            "primaryAttributes": { "tetra:draw_speed": -2, "tetra:draw_strength": 3 },
            "tertiaryAttributes": { "tetra:draw_speed": 1, "tetra:draw_strength": 2 },
            "durability": 4,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["bow/straight_stave"]
    })

    inject("tetra:schematics/bow/stave/long_stave", {
        "replace": REPLACE,
        "slots": ["bow/stave"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 144, "textureY": 32 },
        "translation": {
            "primaryAttributes": { "tetra:draw_speed": -3, "tetra:draw_strength": 4 },
            "tertiaryAttributes": { "tetra:draw_speed": 1, "tetra:draw_strength": 2 },
            "primaryEffects": { "overbowed": -1 },
            "durability": 4,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["bow/long_stave"]
    })

    inject("tetra:schematics/bow/stave/recurve_stave", {
        "replace": REPLACE,
        "slots": ["bow/stave"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 160, "textureY": 32 },
        "translation": {
            "primaryAttributes": { "tetra:draw_speed": -1, "tetra:draw_strength": 3 },
            "tertiaryAttributes": { "tetra:draw_speed": 1, "tetra:draw_strength": 1 },
            "durability": 2,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["bow/recurve_stave"]
    })

    inject("tetra:schematics/bow/stave/laminated_stave", {
        "replace": REPLACE,
        "slots": ["bow/stave"],
        "materialSlotCount": 2,
        "displayType": "major",
        "preview": "applicable",
        "glyph": { "textureX": 240, "textureY": 48 },
        "requirement": { "type": "tetra:feature_flag", "feature": "laminatedStave" },
        "translation": {
            "primaryAttributes": { "tetra:draw_speed": -3, "tetra:draw_strength": 4 },
            "tertiaryAttributes": { "tetra:draw_speed": 1, "tetra:draw_strength": 2 },
            "durability": 4,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["bow/laminated_stave"]
    })

    inject("tetra:schematics/bow/string/basic_string", {
        "replace": REPLACE,
        "slots": ["bow/string"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 112, "textureY": 32 },
        "translation": {
            "secondaryAttributes": { "tetra:draw_speed": -1 },
            "durability": 2,
            "integrity": 3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["bow/basic_string"]
    })

    inject("tetra:schematics/crossbow/stave/basic_stave", {
        "replace": REPLACE,
        "slots": ["crossbow/stave"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 128, "textureY": 32 },
        "translation": {
            "primaryAttributes": { "tetra:draw_speed": -2, "tetra:draw_strength": 4 },
            "tertiaryAttributes": { "tetra:draw_speed": 1, "tetra:draw_strength": 3 },
            "durability": 3,
            "integrity": -3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["crossbow/basic_stave"]
    })

    inject("tetra:schematics/crossbow/stock/basic_stock", {
        "replace": REPLACE,
        "slots": ["crossbow/stock"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 128, "textureY": 48 },
        "translation": {
            "secondaryAttributes": { "tetra:draw_speed": -2 },
            "durability": 3,
            "integrity": 2,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["crossbow/basic_stock"]
    })

    inject("tetra:schematics/crossbow/string/basic_string", {
        "replace": REPLACE,
        "slots": ["crossbow/string"],
        "materialSlotCount": 1,
        "displayType": "major",
        "glyph": { "textureX": 112, "textureY": 32 },
        "translation": {
            "secondaryAttributes": { "tetra:draw_speed": -1 },
            "durability": 2,
            "integrity": 3,
            "magicCapacity": 3
        },
        "outcomes": _outcomes["crossbow/basic_string"]
    })

})

ServerEvents.commandRegistry(function(event) {
    var StringArgumentType = Java.loadClass("com.mojang.brigadier.arguments.StringArgumentType")
    var Commands = event.commands

    event.register(
        Commands.literal("debugSchematics")
            .executes(function(ctx) {
                var source = ctx.source
                var keys = Object.keys(_outcomes)
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i]
                    source.sendSuccess(Text.of(k + ": " + _outcomes[k].length + " outcomes"), false)
                }
                return 1
            })
            .then(
                Commands.argument("schematic", StringArgumentType.greedyString())
                    .suggests(function(ctx, builder) {
                        var keys = Object.keys(_outcomes)
                        for (var i = 0; i < keys.length; i++) {
                            builder.suggest(_outcomes[keys[i]].length > 0 ? keys[i] : null)
                        }
                        return builder.buildFuture()
                    })
                    .executes(function(ctx) {
                        var source = ctx.source
                        var filter = StringArgumentType.getString(ctx, "schematic")
                        var list = _outcomes[filter]
                        if (!list) {
                            source.sendFailure(Text.of("Schematic nao encontrado: " + filter))
                            return 0
                        }
                        source.sendSuccess(Text.of("=== " + filter + " (" + list.length + " outcomes) ==="), false)
                        for (var i = 0; i < list.length; i++) {
                            var o = list[i]
                            source.sendSuccess(
                                Text.of("[" + i + "] " + o.moduleVariant + " | " + o.material.items[0] + " | " + o.material.nbt),
                                false
                            )
                        }
                        return 1
                    })
            )
    )
})

var $ResourcePackLoader = Java.loadClass("net.minecraftforge.resource.ResourcePackLoader")
var $Collectors         = Java.loadClass("java.util.stream.Collectors")
var $FallbackResourceManager = Java.loadClass("net.minecraft.server.packs.resources.FallbackResourceManager")

function readTetraMaterialsFolder(folder) {
    var pack = new $FallbackResourceManager(1, "tetra") // 1 = data
    var resourcePack = $ResourcePackLoader.getPackFor("tetra").get()
    pack.push(resourcePack)

    var result = {}
    var predicate = function(rl) { return rl.path.endsWith(".json") }
    var map = pack.listResources(folder, predicate)

    map.forEach(function(key, val) {
        var reader = val.openAsReader()
        var string = reader.lines().collect($Collectors.joining("\n"))
        reader.close()
        result[key.toString()] = string
    })

    pack.listPacks().forEach(function(p) { p.close() })
    return result
}

ServerEvents.commandRegistry(function(event) {
    var Commands = event.commands

    event.register(
        Commands.literal("dumpTetraMaterials")
            .executes(function(ctx) {
                var source = ctx.source

                // Testa leitura direta de um arquivo conhecido
                var result = JsonIO.read("kubejs/data/tetra/materials/metal/cobalt.json")
                if (result) {
                    source.sendSuccess(Text.of("result type: " + result.getClass().getName()), false)
                    source.sendSuccess(Text.of("content: " + result.toString()), false)
                } else {
                    source.sendSuccess(Text.of("null — arquivo nao encontrado"), false)
                }

                return 1
            })
    )
})

ServerEvents.commandRegistry(function(event) {
    var Commands = event.commands
    event.register(
        Commands.literal("dumpMaterialState")
            .executes(function(ctx) {
                var source = ctx.source
                source.sendSuccess(Text.of("=== _materials declarados: " + _materials.length + " ==="), false)
                for (var i = 0; i < _materials.length; i++) {
                    var m = _materials[i]
                    var hasData = _materialData[m.name] ? "✓" : "✗"
                    source.sendSuccess(Text.of(
                        hasData + " " + m.namespace + ":" + m.name +
                        " (" + m.materialType + ") tl=" + m.toolLevel
                    ), false)
                }
                
                // Conta outcomes por material
                source.sendSuccess(Text.of("=== outcomes por material ==="), false)
                var countByMat = {}
                var schematicKeys = Object.keys(_outcomes)
                for (var si = 0; si < schematicKeys.length; si++) {
                    var list = _outcomes[schematicKeys[si]]
                    for (var oi = 0; oi < list.length; oi++) {
                        var mv = list[oi].moduleVariant
                        var matName = mv.split("/")[1]
                        countByMat[matName] = (countByMat[matName] || 0) + 1
                    }
                }
                var matKeys = Object.keys(countByMat)
                for (var i = 0; i < matKeys.length; i++) {
                    source.sendSuccess(Text.of("  " + matKeys[i] + ": " + countByMat[matKeys[i]] + " outcomes"), false)
                }
                return 1
            })
    )
})