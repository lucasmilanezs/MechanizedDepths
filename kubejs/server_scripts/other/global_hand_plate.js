// Hand plates: 2 ingots + any item in #forge:tools/hammers -> 1 plate.
// The tag is the only gate; add or remove hammers there, never here.
// A broken Tetra hammer still matches, but modifyResult empties the output.
ServerEvents.recipes(event => {
  const Hammers = global.MDRecipes.Hammers;
  const hammer = Hammers.tag;

  const plates = [
    { input: '#forge:ingots/iron', output: 'thermal:iron_plate' },
    { input: '#forge:ingots/copper', output: 'thermal:copper_plate' },
    { input: '#forge:ingots/gold', output: 'thermal:gold_plate' },
    { input: '#forge:ingots/tin', output: 'thermal:tin_plate' },
    { input: '#forge:ingots/silver', output: 'thermal:silver_plate' },
    { input: '#forge:ingots/lead', output: 'thermal:lead_plate' },
    { input: '#forge:ingots/nickel', output: 'thermal:nickel_plate' },
    { input: '#forge:ingots/bronze', output: 'thermal:bronze_plate' },
    { input: '#forge:ingots/constantan', output: 'thermal:constantan_plate' },
    { input: '#forge:ingots/electrum', output: 'thermal:electrum_plate' },
    { input: '#forge:ingots/invar', output: 'thermal:invar_plate' },
    { input: '#forge:ingots/signalum', output: 'thermal:signalum_plate' },
    { input: '#forge:ingots/lumium', output: 'thermal:lumium_plate' },
    { input: '#forge:ingots/enderium', output: 'thermal:enderium_plate' },
    { input: '#forge:ingots/refined_quartz', output: 'kubejs:plate_refined_quartz' },
    { input: '#forge:ingots/titanium', output: 'kubejs:plate_titanium' }
  ];

  for (let plate of plates) {
    event.shapeless(plate.output, [plate.input, plate.input, hammer])
      .damageIngredient(hammer)
      .modifyResult((grid, result) => Hammers.isBroken(grid.find(hammer)) ? Item.empty : result)
      .id(`kubejs:hand_plate/${plate.output.split(':')[1]}`);
  }

  // Mod hand-hammer plate recipes. Patterns match every metal each mod ships
  // (IE 11, All The Ores 23 at the pinned versions); type keeps other recipes out.
  event.remove({ type: 'minecraft:crafting_shapeless', id: /^immersiveengineering:crafting\/plate_[a-z_]+_hammering$/ });
  event.remove({ type: 'minecraft:crafting_shaped', id: /^alltheores:[a-z_]+_plate$/ });
});
