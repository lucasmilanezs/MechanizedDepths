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
var MD_TT_REPLACE = false

// =============================================================================
// Export estatico de localizacao Tetra
// =============================================================================
// O resource pack do cliente e montado antes de ServerEvents.highPriorityData.
// Portanto, a localizacao nao pode depender de ClientEvents.lang lendo os
// outcomes deste gerador: o arquivo abaixo e o artefato versionado que sera
// consumido no proximo carregamento de recursos.
var MD_TT_STATIC_LANG_PATH = "kubejs/assets/tetra/lang/en_us.json"

var MD_TT_VARIANT_NAMES = {
    "basic_pickaxe": "Pick Head",
    "basic_axe": "Axe Head",
    "claw": "Claw Head",
    "butt": "Butt Head",
    "adze": "Adze Head",
    "basic_hammer": "Hammer Head",
    "sickle": "Sickle Head",
    "hoe": "Hoe Head",
    "basic_handle": "Handle",
    "double_binding": "Binding",
    "basic_blade": "Blade",
    "short_blade": "Short Blade",
    "machete": "Machete",
    "throwing_knife": "Throwing Knife",
    "heavy_blade": "Heavy Blade",
    "spearhead": "Spearhead",
    "basic_shovel": "Shovel Head",
    "long_handle": "Long Handle",
    "light_handle": "Light Handle",
    "single_binding": "Binding",
    "straight_stave": "Straight Stave",
    "long_stave": "Long Stave",
    "recurve_stave": "Recurve Stave",
    "laminated_stave": "Laminated Stave",
    "basic_string": "String",
    "sights": "Sights",
    "stabilizer": "Stabilizer",
    "extended_rest": "Extended Rest",
    "basic_stave": "Stave",
    "basic_stock": "Stock",
    "stirrup": "Stirrup"
}

function MD_TT_titleCase(value) {
    var words = (value + "").split("_")
    for (var i = 0; i < words.length; i++) {
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1)
    }
    return words.join(" ")
}

function MD_TT_buildStaticLang(materials, outcomes) {
    var lang = {}

    for (var mi = 0; mi < materials.length; mi++) {
        var materialName = materials[mi].name
        var displayName = MD_TT_titleCase(materialName)
        lang["tetra.material." + materialName] = displayName
        lang["tetra.material." + materialName + ".prefix"] = displayName
        lang["tetra.material.feature." + materialName] = displayName
    }

    var seenVariants = {}
    var schematicKeys = Object.keys(outcomes).sort()
    for (var si = 0; si < schematicKeys.length; si++) {
        var outcomeList = outcomes[schematicKeys[si]]
        for (var oi = 0; oi < outcomeList.length; oi++) {
            var moduleVariant = outcomeList[oi].moduleVariant
            if (!moduleVariant || seenVariants[moduleVariant]) continue
            seenVariants[moduleVariant] = true

            var parts = (moduleVariant + "").split("/")
            var suffix = parts[0]
            var materialName = parts.length > 1 ? parts[1] : ""
            var moduleName = MD_TT_VARIANT_NAMES[suffix] || MD_TT_titleCase(suffix)
            lang["tetra.variant." + moduleVariant] = MD_TT_titleCase(materialName) + " " + moduleName
        }
    }

    return lang
}

function MD_TT_hasSameLang(existing, generated) {
    var existingKeys = Object.keys(existing).sort()
    var generatedKeys = Object.keys(generated).sort()
    if (existingKeys.length !== generatedKeys.length) return false

    for (var i = 0; i < generatedKeys.length; i++) {
        var key = generatedKeys[i]
        if (key !== existingKeys[i] || existing[key] !== generated[key]) return false
    }
    return true
}

function MD_TT_writeStaticLang(materials, outcomes) {
    var generated = MD_TT_buildStaticLang(materials, outcomes)
    // Este arquivo é integralmente gerado; escreva JS puro e não releia o
    // wrapper Java de JsonIO durante a montagem do datapack.
    JsonIO.write(MD_TT_STATIC_LANG_PATH, generated)
    return true
}

// =============================================================================
// Mapeamentos
// =============================================================================

// P0: cada proxy tem um destino declarado.  Nada fora desta tabela pode
// entrar nos schematics, o que evita converter parts de Tinkers em módulos
// que continuam deliberadamente nativos (bindings, risers, strings e sockets).
var MD_TT_ROUTE_TABLE = {
    "pick_head":      { "item": "tconstruct:pick_head",      "schematics": ["double/basic_pickaxe"] },
    "small_axe_head": { "item": "tconstruct:small_axe_head", "schematics": ["double/basic_axe", "double/claw", "double/butt"] },
    "small_blade":    { "item": "tconstruct:small_blade",    "schematics": ["sword/basic_blade", "sword/short_blade", "sword/machete"] },
    "adze_head":      { "item": "tconstruct:adze_head",      "schematics": ["double/adze"] },
    "broad_blade":    { "item": "tconstruct:broad_blade",    "schematics": ["sword/heavy_blade", "double/sickle", "double/hoe", "single/spearhead", "single/basic_shovel"] },
    "tool_handle":    { "item": "tconstruct:tool_handle",    "schematics": ["double/basic_handle", "single/basic_handle", "single/light_handle"] },
    "tough_handle":   { "item": "tconstruct:tough_handle",   "schematics": ["single/long_handle"] },
    "bow_limb":       { "item": "tconstruct:bow_limb",       "schematics": ["bow/straight_stave", "bow/long_stave", "bow/recurve_stave", "bow/laminated_stave", "crossbow/basic_stave"] },
    "bow_grip":       { "item": "tconstruct:bow_grip",       "schematics": ["crossbow/basic_stock"] }
}

var MD_TT_TYPE_PARTS = {
    "metal": ["pick_head", "small_axe_head", "small_blade", "adze_head", "broad_blade", "tool_handle", "tough_handle", "bow_limb", "bow_grip"],
    "gem":   ["pick_head", "small_axe_head", "small_blade", "adze_head", "broad_blade"],
    "stone": ["pick_head", "small_axe_head", "small_blade", "adze_head", "broad_blade"],
    "bone":  ["small_blade", "broad_blade", "tool_handle", "tough_handle"]
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
        // Era tetra:stone/blackstone. O custo fixo conserva a exigencia de
        // integridade deste degrau da progressao.
        "materials": [HAMMER_T2_MATERIAL],
        "toolLevel": "minecraft:stone",
        "integrity": -1,
        "textures":  ["metal"],
        "fixedModel": null
    },
    {
        // era tetra:stone/obsidian -- o nativo cravava o modelo de obsidian,
        // aqui o modelo passa a ser dirigido pelo material (steel e metal).
        // Mantem o mesmo custo fixo do degrau Infused Iron.
        "materials": [HAMMER_T3_MATERIAL],
        "toolLevel": "minecraft:iron",
        "integrity": -1,
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

var MD_TT_HAMMER_OUTCOMES = [
    {
        "material": hammerHead("tconstruct", "wood"),
        "moduleKey": "double/basic_hammer",
        "moduleVariant": HAMMER_WOOD_VARIANT
    },
    {
        // tconstruct:rock cobre stone/diorite/andesite/granite de uma vez
        "material": hammerHead("tconstruct", "rock"),
        "moduleKey": "double/basic_hammer",
        "moduleVariant": "basic_hammer/stone"
    },
    {
        "material": hammerHead("tconstruct", "copper"),
        "requiredTools": { "hammer_dig": "minecraft:wood" },
        "moduleKey": "double/basic_hammer",
        "moduleVariant": "basic_hammer/copper"
    },
    {
        "material": hammerHead("tconstruct", "iron"),
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
        "material": hammerHead("mechanized", "netherite"),
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

var MD_TT_MATERIALS = []

function MD_TT_addMaterial(name, materialType, namespace) {
    if (namespace === undefined) namespace = "tconstruct"
    MD_TT_MATERIALS.push({
        name: name,
        namespace: namespace,
        materialType: materialType
    })
}
// -- Adicione materiais aqui --------------------------------------------------
// TIER WOOD
MD_TT_addMaterial("gold", "metal")
MD_TT_addMaterial("copper", "metal")

// TIER GOLD
MD_TT_addMaterial("iron", "metal")
MD_TT_addMaterial("osmium", "metal")
MD_TT_addMaterial("silver", "metal")
MD_TT_addMaterial("lead", "metal")
MD_TT_addMaterial("electrum", "metal")
MD_TT_addMaterial("constantan", "metal")
// TIER STONE
MD_TT_addMaterial("invar", "metal")
MD_TT_addMaterial("amethyst", "gem", "mechanized")
MD_TT_addMaterial("bone", "bone")
MD_TT_addMaterial("bronze", "metal")

// TIER IRON
MD_TT_addMaterial("infused_iron", "metal", "mechanized")
// TIER DIAMOND
MD_TT_addMaterial("diamond", "gem", "mechanized")
MD_TT_addMaterial("obsidian", "stone")
MD_TT_addMaterial("steel", "metal")
// TIER NETHERITE
MD_TT_addMaterial("netherite", "metal", "mechanized")
MD_TT_addMaterial("cobalt", "metal")
MD_TT_addMaterial("manyullyn", "metal")
// TIER MAXHAMMER




// =============================================================================
// Acumulacao de outcomes (roda fora do evento)
// =============================================================================

var MD_TT_OUTCOMES = {}

// Somente módulos explicitamente dentro do recorte P0 recebem proxy Tinkers.
var MD_TT_ALL_SCHEMATICS = [
    "double/basic_pickaxe", "double/basic_axe", "double/claw", "double/butt",
    "double/adze", "double/basic_hammer", "double/sickle", "double/hoe",
    "double/basic_handle",
    "sword/basic_blade", "sword/short_blade", "sword/machete",
    "sword/heavy_blade",
    "single/spearhead", "single/basic_shovel", "single/basic_handle",
    "single/long_handle", "single/light_handle",
    "bow/straight_stave", "bow/long_stave", "bow/recurve_stave", "bow/laminated_stave",
    "crossbow/basic_stave", "crossbow/basic_stock"
]
for (var MD_TT_si = 0; MD_TT_si < MD_TT_ALL_SCHEMATICS.length; MD_TT_si++) {
    MD_TT_OUTCOMES[MD_TT_ALL_SCHEMATICS[MD_TT_si]] = []
}

// Contrato de outcome normalizado em JS puro. Não percorra objetos retornados
// por JsonIO aqui: no Rhino 2001 eles expõem reflexão Java e podem alocar uma
// superfície enorme antes mesmo de o datapack ser validado.
var MD_TT_MATERIAL_CONTRACTS = {
    "gold":         { "requiredTools": { "hammer_dig": "minecraft:wood" } },
    "copper":       { "requiredTools": { "hammer_dig": "minecraft:wood" }, "improvements": { "workable": 1 } },
    "iron":         { "requiredTools": { "hammer_dig": "minecraft:gold" } },
    "osmium":       { "requiredTools": { "hammer_dig": "minecraft:stone" } },
    "silver":       { "requiredTools": { "hammer_dig": "minecraft:stone" } },
    "lead":         { "requiredTools": { "hammer_dig": "minecraft:stone" } },
    "electrum":     { "requiredTools": { "hammer_dig": "minecraft:stone" } },
    "constantan":   { "requiredTools": { "hammer_dig": "minecraft:iron" } },
    "invar":        { "requiredTools": { "hammer_dig": "minecraft:stone" } },
    "amethyst":     { "requiredTools": { "hammer_dig": "minecraft:stone" } },
    "bone":         { "requiredTools": { "hammer_dig": "minecraft:wood" } },
    "bronze":       { "requiredTools": { "hammer_dig": "minecraft:iron" } },
    "infused_iron": { "requiredTools": { "hammer_dig": "minecraft:gold" } },
    "diamond":      { "requiredTools": { "hammer_dig": "minecraft:stone" }, "improvements": { "arrested": 0 } },
    "obsidian":     { "requiredTools": { "hammer_dig": "minecraft:diamond" }, "improvements": { "arrested": 0 } },
    "steel":        { "requiredTools": { "hammer_dig": "minecraft:stone" } },
    "netherite":    { "requiredTools": { "hammer_dig": "minecraft:iron" } },
    "cobalt":       { "requiredTools": { "hammer_dig": "minecraft:diamond" } },
    "manyullyn":    { "requiredTools": { "hammer_dig": "minecraft:diamond" } }
}

// =============================================================================
// Afinidades contextuais de material → módulo
// =============================================================================
// Um material Tetra contribui seus dados para todo módulo que o aceita. Uma
// capacidade que só deve existir em um módulo específico precisa, portanto,
// de uma variante específica daquele módulo, inserida antes da variante
// genérica. Esta tabela é a única fonte para o módulo emitido e para o
// tooltip; ela contém apenas literais JavaScript próprios, nunca wrappers de
// JsonIO ou dados percorridos do registry.
//
// Começa vazio por design. A infraestrutura foi validada com um fixture de
// Cobalt, removido após a aceitação; entradas futuras só entram após revisão
// de leitor, multiplicidade e UX.
var MD_TT_CONTEXTUAL_AFFINITIES = []

// Apenas módulos que recebem uma afinidade ganham um template local. Cada
// template é uma cópia integral, auditada contra Tetra 6.13.0, do módulo
// nativo correspondente. Não leia nem mescle o JAR aqui: o Rhino/KubeJS deste
// pack não é uma fronteira segura para resolver recursos dinamicamente.
var MD_TT_CONTEXTUAL_MODULE_BASES = {
    "double/basic_pickaxe": {
        "replace": true,
        "type": "tetra:multi_major_module",
        "slots": ["double/head_left", "double/head_right"],
        "slotSuffixes": ["_left", "_right"],
        "improvements": [
            "tetra:double/pickaxe/", "tetra:double/shared_head/",
            "tetra:double/shared/", "tetra:shared/"
        ],
        "variants": [{
            "materials": ["tetra:metal/", "tetra:stone/", "tetra:wood/", "tetra:gem/"],
            "key": "basic_pickaxe/",
            "attributes": { "generic.attack_damage": -2, "generic.attack_speed": -1.2 },
            "aspects": { "block_breaker": 2, "breakable": 2 },
            "tools": { "pickaxe_dig": -1 },
            "durability": -10,
            "extract": {
                "primaryAttributes": { "generic.attack_damage": 1 },
                "tools": { "pickaxe_dig": [1, 0.91] },
                "durability": 0.5,
                "integrity": -1,
                "magicCapacity": 1,
                "glyph": { "textureX": 176 },
                "availableTextures": ["crude", "metal", "shiny"],
                "models": [{ "location": "tetra:item/module/double/head/basic_pickaxe/" }]
            }
        }]
    },
    "sword/basic_blade": {
        "replace": true,
        "slots": ["sword/blade"],
        "type": "tetra:basic_major_module",
        "improvements": [
            "tetra:sword/basic_blade/", "tetra:sword/shared_blade/",
            "tetra:sword/shared/", "tetra:shared/"
        ],
        "variants": [{
            "materials": ["tetra:wood/", "tetra:stone/", "tetra:metal/", "tetra:gem/", "tetra:bone/"],
            "key": "basic_blade/",
            "attributes": { "generic.attack_speed": -1.9 },
            "effects": { "sweeping": 1 },
            "tools": { "cut": [1, 2] },
            "aspects": { "edged_weapon": 2, "breakable": 2 },
            "durability": -20,
            "tags": ["forge:swords"],
            "extract": {
                "primaryAttributes": { "generic.attack_damage": 1 },
                "durability": 0.9,
                "integrity": -1,
                "magicCapacity": 1,
                "glyph": { "textureX": 0 },
                "availableTextures": ["metal", "shiny", "grainy", "crude"],
                "models": [{ "location": "tetra:item/module/sword/blade/basic/" }]
            }
        }]
    }
}

function MD_TT_copyLiteral(value) {
    if (value === null || typeof value !== "object") return value
    var result = Array.isArray(value) ? [] : {}
    var keys = Object.keys(value)
    for (var i = 0; i < keys.length; i++) {
        result[keys[i]] = MD_TT_copyLiteral(value[keys[i]])
    }
    return result
}

function MD_TT_contextualMaterialPath(materialName) {
    for (var i = 0; i < MD_TT_MATERIALS.length; i++) {
        var material = MD_TT_MATERIALS[i]
        if (material.name === materialName) {
            return "tetra:" + material.materialType + "/" + material.name
        }
    }
    return null
}

function MD_TT_variantAcceptsPath(variant, materialPath) {
    var materials = variant.materials || []
    for (var i = 0; i < materials.length; i++) {
        var selector = materials[i]
        if (selector === materialPath) return true
        if (selector.charAt(selector.length - 1) === "/" && materialPath.indexOf(selector) === 0) return true
    }
    return false
}

function MD_TT_validateContextualAffinity(affinity) {
    if (!affinity || typeof affinity.material !== "string" || typeof affinity.module !== "string") {
        throw new Error("[Mechanized/Tetra] Afinidade contextual sem material/modulo")
    }
    var effects = affinity.effects
    if (!effects || Object.keys(effects).length === 0) {
        throw new Error("[Mechanized/Tetra] Afinidade contextual sem efeito: " + affinity.material + " → " + affinity.module)
    }
    var effectKeys = Object.keys(effects)
    for (var i = 0; i < effectKeys.length; i++) {
        var value = effects[effectKeys[i]]
        var validPair = Array.isArray(value) && value.length === 2 && typeof value[0] === "number" && typeof value[1] === "number"
        if (typeof value !== "number" && !validPair) {
            throw new Error("[Mechanized/Tetra] Efeito contextual invalido: " + effectKeys[i])
        }
    }
}

function MD_TT_contextualVariant(baseVariant, materialPath, affinity) {
    var variant = MD_TT_copyLiteral(baseVariant)
    variant.materials = [materialPath]

    if (affinity.effects) {
        variant.effects = MD_TT_copyLiteral(variant.effects || {})
        var effectKeys = Object.keys(affinity.effects)
        for (var i = 0; i < effectKeys.length; i++) {
            var effectKey = effectKeys[i]
            variant.effects[effectKey] = MD_TT_copyLiteral(affinity.effects[effectKey])
        }
    }

    return variant
}

function MD_TT_buildContextualModule(moduleKey) {
    var base = MD_TT_CONTEXTUAL_MODULE_BASES[moduleKey]
    if (!base) throw new Error("[Mechanized/Tetra] Template contextual ausente: " + moduleKey)

    var output = MD_TT_copyLiteral(base)
    var variants = []
    var seenMaterials = {}
    for (var ai = 0; ai < MD_TT_CONTEXTUAL_AFFINITIES.length; ai++) {
        var affinity = MD_TT_CONTEXTUAL_AFFINITIES[ai]
        if (affinity.module !== moduleKey) continue
        MD_TT_validateContextualAffinity(affinity)

        if (seenMaterials[affinity.material]) {
            throw new Error("[Mechanized/Tetra] Afinidade contextual duplicada: " + affinity.material + " → " + moduleKey)
        }
        seenMaterials[affinity.material] = true

        var materialPath = MD_TT_contextualMaterialPath(affinity.material)
        if (!materialPath) throw new Error("[Mechanized/Tetra] Material contextual ausente: " + affinity.material)

        var matched = false
        for (var bi = 0; bi < base.variants.length; bi++) {
            var baseVariant = base.variants[bi]
            if (!MD_TT_variantAcceptsPath(baseVariant, materialPath)) continue
            variants.push(MD_TT_contextualVariant(baseVariant, materialPath, affinity))
            matched = true
        }
        if (!matched) {
            throw new Error("[Mechanized/Tetra] Afinidade sem variante aceita: " + affinity.material + " → " + moduleKey)
        }
    }

    for (var vi = 0; vi < base.variants.length; vi++) {
        variants.push(MD_TT_copyLiteral(base.variants[vi]))
    }
    output.variants = variants
    return output
}

function MD_TT_proxyOutcome(material, route, schematic) {
    var contract = MD_TT_MATERIAL_CONTRACTS[material.name]
    if (!contract) throw new Error("[Mechanized/Tetra] Contrato ausente: " + material.name)
    var suffix = schematic.split("/")[1]
    var outcome = {
        "material": {
            "items": [route.item],
            "nbt": "{Material:\"" + material.namespace + ":" + material.name + "\"}"
        },
        "moduleKey": schematic,
        "moduleVariant": suffix + "/" + material.name,
        "requiredTools": contract.requiredTools,
        "experienceCost": contract.experienceCost || 0
    }

    // MaterialVariantData cobre atributos/durability/aspects. Estes campos
    // pertencem ao outcome e precisam ser levados explicitamente pelo proxy.
    if (contract.improvements) {
        outcome.improvements = contract.improvements
    }
    return outcome
}

for (var MD_TT_mi = 0; MD_TT_mi < MD_TT_MATERIALS.length; MD_TT_mi++) {
    var MD_TT_material = MD_TT_MATERIALS[MD_TT_mi]
    var MD_TT_parts = MD_TT_TYPE_PARTS[MD_TT_material.materialType] || []
    for (var MD_TT_pi = 0; MD_TT_pi < MD_TT_parts.length; MD_TT_pi++) {
        var MD_TT_route = MD_TT_ROUTE_TABLE[MD_TT_parts[MD_TT_pi]]
        for (var MD_TT_sci = 0; MD_TT_sci < MD_TT_route.schematics.length; MD_TT_sci++) {
            var MD_TT_schematic = MD_TT_route.schematics[MD_TT_sci]
            MD_TT_OUTCOMES[MD_TT_schematic].push(MD_TT_proxyOutcome(MD_TT_material, MD_TT_route, MD_TT_schematic))
        }
    }
}

// O martelo continua uma progressão fechada. Também recebe o contrato
// explícito que um outcome NBT não herda automaticamente.
for (var MD_TT_hi = 0; MD_TT_hi < MD_TT_HAMMER_OUTCOMES.length; MD_TT_hi++) {
    var MD_TT_hammer = MD_TT_HAMMER_OUTCOMES[MD_TT_hi]
    var MD_TT_variantParts = MD_TT_hammer.moduleVariant.split("/")
    var MD_TT_hammerContract = MD_TT_MATERIAL_CONTRACTS[MD_TT_variantParts[1]]
    if (MD_TT_hammerContract) {
        MD_TT_hammer.experienceCost = MD_TT_hammerContract.experienceCost || 0
        if (MD_TT_hammerContract.improvements) {
            MD_TT_hammer.improvements = MD_TT_hammerContract.improvements
        }
    }
}
MD_TT_OUTCOMES["double/basic_hammer"] = MD_TT_HAMMER_OUTCOMES

// A injeção legada ainda enumera alguns caminhos fora do P0. Mantê-los como
// merge vazio é seguro nesta transição: o registro nativo permanece intacto.
var MD_TT_LEGACY_SCHEMATICS = [
    "double/binding", "single/binding", "sword/throwing_knife",
    "bow/basic_string", "bow/sights", "bow/stabilizer", "bow/extended_rest",
    "crossbow/basic_string", "crossbow/stirrup"
]
for (var MD_TT_li = 0; MD_TT_li < MD_TT_LEGACY_SCHEMATICS.length; MD_TT_li++) {
    MD_TT_OUTCOMES[MD_TT_LEGACY_SCHEMATICS[MD_TT_li]] = []
}

ServerEvents.commandRegistry(function(event) {
    var Commands = event.commands

    event.register(
        Commands.literal("dumpMaterialData")
            .executes(function(ctx) {
                var source = ctx.source
                var keys = Object.keys(MD_TT_MATERIAL_CONTRACTS)
                source.sendSuccess(Text.of("=== contratos de material — " + keys.length + " materiais ==="), false)
                for (var i = 0; i < keys.length; i++) {
                    var k = keys[i]
                    var d = MD_TT_MATERIAL_CONTRACTS[k]
                    source.sendSuccess(Text.of(
                        k + " | tools=" + JSON.stringify(d.requiredTools) +
                        " | innates=" + JSON.stringify(d.improvements || {}) +
                        " | xp=" + (d.experienceCost || 0)
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
        var list = MD_TT_OUTCOMES[filter]
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
        var keys = Object.keys(MD_TT_OUTCOMES)
        for (var ki = 0; ki < keys.length; ki++) {
            var k = keys[ki]
            event.source.sendSuccess(k + ": " + MD_TT_OUTCOMES[k].length + " outcomes", false)
        }
    }
})
global.MechanizedDepths = global.MechanizedDepths || {}
global.MechanizedDepths.TetraTinkers = {
    materials: MD_TT_MATERIALS,
    outcomes: MD_TT_OUTCOMES,
    contextualAffinities: MD_TT_CONTEXTUAL_AFFINITIES
}
// =============================================================================
// Injecao dos schematics -- um addJson por schematic, estatico e explicito
// =============================================================================

ServerEvents.highPriorityData(function(event) {

    // Compatibilidade local durante a migração da injeção explícita abaixo.
    // Estas variáveis vivem no callback de data, não no escopo compartilhado.
    var _outcomes = MD_TT_OUTCOMES
    var REPLACE = MD_TT_REPLACE

    MD_TT_writeStaticLang(MD_TT_MATERIALS, MD_TT_OUTCOMES)

// JsonIO.write does not reliably create missing nested directories. Debug output
// is optional and must never block high-priority datapack injection.
var DEBUG_DUMP = false

    function debugDump(tetraPath, obj) {
        if (!DEBUG_DUMP) return
        JsonIO.write("kubejs/debug/data/" + tetraPath + ".json", obj)
    }

    function inject(tetraResourcePath, obj) {
        debugDump(tetraResourcePath.replace(":", "/"), obj)
        event.addJson(tetraResourcePath, obj)
    }

    // -------------------------------------------------------------------------

    // Módulos contextuais são emitidos antes dos schematics. Cada um é uma
    // definição completa e auditável; o array de variantes específicas vem
    // antes da variante genérica para o resolvedor nativo do Tetra.
    var contextualModuleKeys = []
    for (var affinityIndex = 0; affinityIndex < MD_TT_CONTEXTUAL_AFFINITIES.length; affinityIndex++) {
        var affinityModuleKey = MD_TT_CONTEXTUAL_AFFINITIES[affinityIndex].module
        var knownContextualModule = false
        for (var knownIndex = 0; knownIndex < contextualModuleKeys.length; knownIndex++) {
            if (contextualModuleKeys[knownIndex] === affinityModuleKey) knownContextualModule = true
        }
        if (!knownContextualModule) contextualModuleKeys.push(affinityModuleKey)
    }
    for (var contextualIndex = 0; contextualIndex < contextualModuleKeys.length; contextualIndex++) {
        var contextualModuleKey = contextualModuleKeys[contextualIndex]
        inject("tetra:modules/" + contextualModuleKey, MD_TT_buildContextualModule(contextualModuleKey))
    }

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

    // O martelo é o único schematic fechado nesta fase: seus outcomes nativos
    // foram reconstituídos pela ladder e não devem ser mesclados novamente.
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
        "replace": MD_TT_REPLACE,
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
    var _outcomes = MD_TT_OUTCOMES
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
                            if (_outcomes[keys[i]].length > 0) builder.suggest(keys[i])
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
    var _materials = MD_TT_MATERIALS
    var _materialData = MD_TT_MATERIAL_CONTRACTS
    var _outcomes = MD_TT_OUTCOMES
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
    var _materials = MD_TT_MATERIALS
    var _materialData = MD_TT_MATERIAL_CONTRACTS
    var _outcomes = MD_TT_OUTCOMES
    var Commands = event.commands
    event.register(
        Commands.literal("dumpMaterialState")
            .executes(function(ctx) {
                var source = ctx.source
                source.sendSuccess(Text.of("=== materiais declarados: " + _materials.length + " ==="), false)
                for (var i = 0; i < _materials.length; i++) {
                    var m = _materials[i]
                    var hasData = _materialData[m.name] ? "✓" : "✗"
                    source.sendSuccess(Text.of(
                        hasData + " " + m.namespace + ":" + m.name +
                        " (" + m.materialType + ")"
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
