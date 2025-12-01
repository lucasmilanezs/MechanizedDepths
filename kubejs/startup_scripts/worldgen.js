
// Remoção estática de ores duplicados com base em prioridades do AlmostUnified
WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.worldgenLayer = 'underground_ores';
        props.blocks = [

            // ----- VANILLA DOMINANTES -----
            // Remove duplicatas de deeperdarker + alltheores
            // COAL
            "deeperdarker:sculk_stone_coal_ore",
            "deeperdarker:gloomslate_coal_ore",
            "alltheores:other_coal_ore",
            "alltheores:coal_ore",
            "alltheores:deepslate_coal_ore",
            "alltheores:nether_coal_ore",
            "alltheores:end_coal_ore",

            // COPPER
            "deeperdarker:sculk_stone_copper_ore",
            "deeperdarker:gloomslate_copper_ore",
            "alltheores:other_copper_ore",
            "alltheores:copper_ore",
            "alltheores:deepslate_copper_ore",
            "alltheores:nether_copper_ore",
            "alltheores:end_copper_ore",

            // IRON
            "deeperdarker:sculk_stone_iron_ore",
            "deeperdarker:gloomslate_iron_ore",
            "alltheores:iron_ore",
            "alltheores:deepslate_iron_ore",
            "alltheores:nether_iron_ore",
            "alltheores:end_iron_ore",

            // GOLD
            "deeperdarker:sculk_stone_gold_ore",
            "deeperdarker:gloomslate_gold_ore",
            "alltheores:gold_ore",
            "alltheores:deepslate_gold_ore",
            "alltheores:nether_gold_ore",
            "alltheores:end_gold_ore",

            // DIAMOND
            "deeperdarker:sculk_stone_diamond_ore",
            "deeperdarker:gloomslate_diamond_ore",
            "alltheores:diamond_ore",
            "alltheores:deepslate_diamond_ore",
            "alltheores:nether_diamond_ore",
            "alltheores:end_diamond_ore",

            // EMERALD
            "deeperdarker:sculk_stone_emerald_ore",
            "deeperdarker:gloomslate_emerald_ore",
            "alltheores:emerald_ore",
            "alltheores:deepslate_emerald_ore",
            "alltheores:nether_emerald_ore",
            "alltheores:end_emerald_ore",

            // LAPIS
            "deeperdarker:sculk_stone_lapis_ore",
            "deeperdarker:gloomslate_lapis_ore",
            "alltheores:lapis_ore",
            "alltheores:deepslate_lapis_ore",
            "alltheores:nether_lapis_ore",
            "alltheores:end_lapis_ore",

            // REDSTONE
            "deeperdarker:sculk_stone_redstone_ore",
            "deeperdarker:gloomslate_redstone_ore",
            "alltheores:redstone_ore",
            "alltheores:deepslate_redstone_ore",
            "alltheores:nether_redstone_ore",
            "alltheores:end_redstone_ore",

            // ----- QUARTZ -----
            "malum:natural_quartz_ore",
            "malum:deepslate_quartz_ore",
            "alltheores:quartz_ore",
            "alltheores:deepslate_quartz_ore",
            "alltheores:nether_quartz_ore",
            "alltheores:end_quartz_ore",

            // ----- ALUMINUM (dominante = Thermal) -----
            "immersiveengineering:ore_aluminum",
            "immersiveengineering:deepslate_ore_aluminum",
            "alltheores:aluminum_ore",
            "alltheores:deepslate_aluminum_ore",
            "alltheores:nether_aluminum_ore",
            "alltheores:end_aluminum_ore",

            // ----- LEAD (dominante = Thermal) -----
            "immersiveengineering:ore_lead",
            "immersiveengineering:deepslate_ore_lead",
            "mekanism:lead_ore",
            "mekanism:deepslate_lead_ore",
            "eidolon:lead_ore",
            "eidolon:deep_lead_ore",
            "occultism:silver_ore",
            "alltheores:lead_ore",
            "alltheores:deepslate_lead_ore",
            "alltheores:nether_lead_ore",
            "alltheores:end_lead_ore",

            // ----- SILVER (dominante = Thermal) -----
            "immersiveengineering:ore_silver",
            "immersiveengineering:deepslate_ore_silver",
            "occultism:silver_ore",
            "occultism:silver_ore_deepslate",
            "eidolon:silver_ore",
            "eidolon:deep_silver_ore",
            "alltheores:silver_ore",
            "alltheores:deepslate_silver_ore",
            "alltheores:nether_silver_ore",
            "alltheores:end_silver_ore",

            // ----- NICKEL (dominante = Thermal) -----
            "immersiveengineering:ore_nickel",
            "immersiveengineering:deepslate_ore_nickel",
            "alltheores:nickel_ore",
            "alltheores:deepslate_nickel_ore",
            "alltheores:nether_nickel_ore",
            "alltheores:end_nickel_ore",

            // ----- TIN (dominante = Thermal) -----
            "mekanism:tin_ore",
            "mekanism:deepslate_tin_ore",
            "alltheores:tin_ore",
            "alltheores:deepslate_tin_ore",
            "alltheores:nether_tin_ore",
            "alltheores:end_tin_ore",

            // ----- URANIUM (dominante = IE) -----
            "mekanism:uranium_ore",
            "mekanism:deepslate_uranium_ore",
            "alltheores:uranium_ore",
            "alltheores:deepslate_uranium_ore",
            "alltheores:nether_uranium_ore",
            "alltheores:end_uranium_ore",

            // ----- OSMIUM -----
            "alltheores:osmium_ore",
            "alltheores:deepslate_osmium_ore",
            "alltheores:nether_osmium_ore",
            "alltheores:end_osmium_ore",

            // ----- ZINC (dominante = Create) -----
            "alltheores:zinc_ore",
            "alltheores:deepslate_zinc_ore",
            "alltheores:nether_zinc_ore",
            "alltheores:end_zinc_ore",

            // ----- IRIDIUM / PLATINUM / PERIDOT -----
            "alltheores:iridium_ore",
            "alltheores:deepslate_iridium_ore",
            "alltheores:nether_iridium_ore",
            "alltheores:end_iridium_ore",
            "alltheores:platinum_ore",
            "alltheores:deepslate_platinum_ore",
            "alltheores:nether_platinum_ore",
            "alltheores:end_platinum_ore",
            "alltheores:peridot_ore",
            "alltheores:deepslate_peridot_ore"
        ];
    });
});
