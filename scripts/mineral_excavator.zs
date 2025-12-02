

// -----------------------------------------------------
// Remove **TODAS** as Mineral Mixes originais
// (baseado exatamente nos JSONs da sua pasta)
// -----------------------------------------------------

<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/amethyst_crevasse");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/ancient_debris");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/ancient_seabed");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/auricupride");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/beryl");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/bituminous_coal");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/cassiterite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/chalcopyrite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/cinnabar");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/cooled_lava_tube");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/cooperite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/galena");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/hardened_clay_pan");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/igneous_rock");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/laterite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/mephitic_quarzite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/nether_silt");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/pentlandite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/silt");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/uraninite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/wolframite");




// -----------------------------------------------------
// Immersive Engineering - Mineral Mix Example
// -----------------------------------------------------

<recipetype:immersiveengineering:mineral_mix>.addRecipe(
    "ore_cassiterite",
    // Outputs
    [
        <item:kubejs:cassiterite_ore>   % 100,
    ],
    // Spoils
    [
        <item:minecraft:cobblestone>  % 50,
        <item:minecraft:stone>        % 25,
        <item:minecraft:gravel>
    ],
    50,                                // weight
    0.5,                               // failChance
    // Dimensions
    [ <resource:minecraft:overworld> ],
    // Background Block
    <block:kubejs:cassiterite_ore>
);
