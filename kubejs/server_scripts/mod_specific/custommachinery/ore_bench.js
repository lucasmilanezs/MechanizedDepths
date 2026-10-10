// CUSTOM MACHINERY - ORE SORTING BENCH

// Raw ore + hammer in slot input2 -> sorted raw metals.
// Lives in KubeJS (not kubejs/data JSON) because the broken-hammer check is a
// function requirement, which only exists for recipes built in a KubeJS event.

//====================CUSTOM RECIPES==================

ServerEvents.recipes(event => {
  const Hammers = global.MDRecipes.Hammers;

  // outputs: [item, chance]; chance 1 is guaranteed
  const recipes = [
    { id: 'argentite_raw', input: 'kubejs:argentite_raw', outputs: [['thermal:raw_silver', 1], ['thermal:raw_silver', 0.3], ['thermal:sulfur', 0.4]] },
    { id: 'bauxite_raw', input: 'kubejs:bauxite_raw', outputs: [['immersiveengineering:raw_aluminum', 1], ['immersiveengineering:raw_aluminum', 0.3], ['minecraft:raw_iron', 0.3]] },
    { id: 'cassiterite_raw', input: 'kubejs:cassiterite_raw', outputs: [['thermal:raw_tin', 1], ['thermal:raw_tin', 0.3], ['minecraft:raw_iron', 0.1]] },
    { id: 'chalcopyrite_raw', input: 'kubejs:chalcopyrite_raw', outputs: [['minecraft:raw_copper', 1], ['minecraft:raw_iron', 0.3], ['thermal:raw_silver', 0.05], ['thermal:sulfur_dust', 0.2]] },
    { id: 'galena_raw', input: 'kubejs:galena_raw', outputs: [['thermal:raw_lead', 1], ['thermal:raw_silver', 0.3], ['minecraft:raw_copper', 0.2]] },
    { id: 'hematite_raw', input: 'kubejs:hematite_raw', outputs: [['minecraft:raw_iron', 1], ['minecraft:raw_iron', 0.6]] },
    { id: 'pentlandite_raw', input: 'kubejs:pentlandite_raw', outputs: [['thermal:raw_nickel', 1], ['minecraft:raw_iron', 0.4], ['thermal:sulfur', 0.4]] }
  ];

  for (let r of recipes) {
    let recipe = event.recipes.custommachinery.custom_machine('custommachinery:ore_bench', 1)
      .requireFunctionToStart(ctx => Hammers.isBroken(ctx.machine.getItemStored('input2'))
        ? ctx.error(Text.of('Broken hammer: repair it at a workbench'))
        : ctx.success())
      .requireItem(Item.of(r.input))
      .damageItemTagNoBreak(Hammers.tag, 1, 'input2');

    for (let out of r.outputs) {
      recipe.produceItem(Item.of(out[0]));
      if (out[1] < 1) recipe.chance(out[1]);
    }

    recipe.id(`kubejs:custommachinery/ore_bench/${r.id}`);
  }
});
