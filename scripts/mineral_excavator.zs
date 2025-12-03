

// -----------------------------------------------------
// Remove **TODAS** as Mineral Mixes originais
// (baseado exatamente nos JSONs da sua pasta)
// -----------------------------------------------------

<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/beryl");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/cassiterite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/chalcopyrite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/cinnabar");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/cooperite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/galena");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/laterite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/pentlandite");
<recipetype:immersiveengineering:mineral_mix>.removeByName("immersiveengineering:mineral/silt");


// -----------------------------------------------------
// Immersive Engineering - Mineral Mix Example
// -----------------------------------------------------

//CASSITERITE
<recipetype:immersiveengineering:mineral_mix>.addRecipe(
    "ore_cassiterite",
    // Outputs
    [
        <item:kubejs:cassiterite_ore_deepslate>   % 100,
    ],
    // Spoils
    [
        <item:minecraft:deepslate>  % 50,
        <item:minecraft:stone>        % 25,
        <item:minecraft:gravel>
    ],
    30,                                // weight
    0.1,                               // failChance
    // Dimensions
    [ <resource:minecraft:overworld> ],
    // Background Block
    <block:kubejs:cassiterite_ore_deepslate>
);

//CHALCOPYRITE
<recipetype:immersiveengineering:mineral_mix>.addRecipe(
    "ore_chalcopyrite",
    // Outputs
    [
        <item:kubejs:chalcopyrite_ore_deepslate>   % 60,
        <item:minecraft:raw_copper>   % 20,
        <item:minecraft:raw_iron>
    ],
    // Spoils
    [
        <item:minecraft:deepslate>  % 50,
        <item:minecraft:stone>      % 25,
        <item:minecraft:gravel>
    ],
    50,                                // weight
    0.1,                               // failChance
    // Dimensions
    [ <resource:minecraft:overworld> ],
    // Background Block
    <block:kubejs:chalcopyrite_ore_deepslate>
);

//GALENA
<recipetype:immersiveengineering:mineral_mix>.addRecipe(
    "ore_galena",
    // Outputs
    [
        <item:kubejs:galena_ore_deepslate>   % 70,
        <item:thermal:raw_lead>   % 20,
        <item:thermal:sulfur>
    ],
    // Spoils
    [
        <item:minecraft:deepslate>  % 50,
        <item:minecraft:stone>      % 25,
        <item:minecraft:gravel>
    ],
    20,                                // weight
    0.1,                               // failChance
    // Dimensions
    [ <resource:minecraft:overworld> ],
    // Background Block
    <block:kubejs:galena_ore_deepslate>
);

//BAUXITE
<recipetype:immersiveengineering:mineral_mix>.addRecipe(
    "ore_bauxite",
    // Outputs
    [
        <item:kubejs:bauxite_ore_deepslate>   % 100,      
    ],
    // Spoils
    [
        <item:minecraft:deepslate>  % 50,
        <item:minecraft:stone>      % 25,
        <item:minecraft:gravel>
    ],
    25,                                // weight
    0.1,                               // failChance
    // Dimensions
    [ <resource:minecraft:overworld> ],
    // Background Block
    <block:kubejs:bauxite_ore_deepslate>
);

//HEMATITE
<recipetype:immersiveengineering:mineral_mix>.addRecipe(
    "ore_hematite",
    // Outputs
    [
        <item:kubejs:hematite_ore_deepslate>   % 80,
        <item:minecraft:raw_iron>  % 15,
        <item:thermal:sulfur>
    ],
    // Spoils
    [
        <item:minecraft:deepslate>  % 50,
        <item:minecraft:stone>      % 25,
        <item:minecraft:gravel>
    ],
    30,                                // weight
    0.1,                               // failChance
    // Dimensions
    [ <resource:minecraft:overworld> ],
    // Background Block
    <block:kubejs:hematite_ore_deepslate>
);

//ARGENTITE
<recipetype:immersiveengineering:mineral_mix>.addRecipe(
    "ore_argentite",
    // Outputs
    [
        <item:kubejs:argentite_ore_deepslate>   % 70,
        <item:thermal:raw_silver>  % 20,
        <item:thermal:sulfur>
    ],
    // Spoils
    [
        <item:minecraft:deepslate>  % 50,
        <item:minecraft:stone>      % 25,
        <item:minecraft:gravel>
    ],
    15,                                // weight
    0.1,                               // failChance
    // Dimensions
    [ <resource:minecraft:overworld> ],
    // Background Block
    <block:kubejs:argentite_ore_deepslate>
);

//PENTLANDITE
<recipetype:immersiveengineering:mineral_mix>.addRecipe(
    "ore_pentlandite",
    // Outputs
    [
        <item:kubejs:pentlandite_ore_deepslate>   % 70,
        <item:minecraft:raw_iron>  % 15,
        <item:thermal:sulfur>
    ],
    // Spoils
    [
        <item:minecraft:deepslate>  % 50,
        <item:minecraft:stone>      % 25,
        <item:minecraft:gravel>
    ],
    10,                                // weight
    0.1,                               // failChance
    // Dimensions
    [ <resource:minecraft:overworld> ],
    // Background Block
    <block:kubejs:pentlandite_ore_deepslate>
);

//