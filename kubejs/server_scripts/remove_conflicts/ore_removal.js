ServerEvents.highPriorityData(event => {
    event.addJson('immersiveengineering:forge/biome_modifier/bauxite', {
        type: "forge:remove_features",
        biomes: "#minecraft:is_overworld",
        features: "immersiveengineering:bauxite",
        step: "underground_ores"
    })
})

ServerEvents.highPriorityData(event => {
    event.addJson('immersiveengineering:forge/biome_modifier/silver', {
        type: "forge:remove_features",
        biomes: "#minecraft:is_overworld",
        features: "immersiveengineering:silver",
        step: "underground_ores"
    })
})

ServerEvents.highPriorityData(event => {
    event.addJson('immersiveengineering:forge/biome_modifier/nickel', {
        type: "forge:remove_features",
        biomes: "#minecraft:is_overworld",
        features: "immersiveengineering:nickel",
        step: "underground_ores"
    })
})

ServerEvents.highPriorityData(event => {
    event.addJson('immersiveengineering:forge/biome_modifier/lead', {
        type: "forge:remove_features",
        biomes: "#minecraft:is_overworld",
        features: "immersiveengineering:lead",
        step: "underground_ores"
    })
})

ServerEvents.highPriorityData(event => {
    event.addJson('immersiveengineering:forge/biome_modifier/uranium', {
        type: "forge:remove_features",
        biomes: "#minecraft:is_overworld",
        features: "immersiveengineering:uranium",
        step: "underground_ores"
    })
})

