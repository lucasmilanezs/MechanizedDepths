// ===============================
// Block + Item Tags for Custom Ores
// ===============================
ServerEvents.tags('block', event => {

  const ORES = [
    { id: 'chalcopyrite_ore', metal: 'copper' },
    { id: 'chalcopyrite_ore_deepslate', metal: 'copper', deep: true },

    { id: 'cassiterite_ore', metal: 'tin' },
    { id: 'cassiterite_ore_deepslate', metal: 'tin', deep: true },

    { id: 'bauxite_ore', metal: 'aluminum' },
    { id: 'bauxite_ore_deepslate', metal: 'aluminum', deep: true },

    { id: 'galena_ore', metal: 'lead' },
    { id: 'galena_ore_deepslate', metal: 'lead', deep: true },

    { id: 'pentlandite_ore', metal: 'nickel' },
    { id: 'pentlandite_ore_deepslate', metal: 'nickel', deep: true },

    { id: 'argentite_ore', metal: 'silver' },
    { id: 'argentite_ore_deepslate', metal: 'silver', deep: true },

    { id: 'gold_quartz_ore', metal: 'gold' },
    { id: 'gold_quartz_ore_deepslate', metal: 'gold', deep: true },

    { id: 'hematite_ore', metal: 'iron' },
    { id: 'hematite_ore_deepslate', metal: 'iron', deep: true },
  ];

  ORES.forEach(ore => {
    const id = `kubejs:${ore.id}`;

    // -------------- Vanilla --------------
    event.add('minecraft:ores', id);
    event.add(`minecraft:${ore.metal}_ores`, id);
    event.add('minecraft:mineable/pickaxe', id);
    event.add('minecraft:needs_stone_tool', id);

    if (ore.deep) {
      event.add('minecraft:deepslate_ore_replaceables', id);
      event.add('forge:ores_in_ground/deepslate', id);
    } else {
      event.add('minecraft:stone_ore_replaceables', id);
      event.add('forge:ores_in_ground/stone', id);
    }

    // -------------- Forge --------------
    event.add('forge:ores', id);
    event.add(`forge:ores/${ore.metal}`, id);        // forge:ores/lead, etc
    event.add(`forge:ores/${ore.id.replace('_ore','')}`, id); // forge:ores/galena

    // -------------- Your custom tag --------------
    // forge:ores/<raw_mineral_name>
    event.add(`forge:ores/${ore.id.replace('_ore','')}`, id);

    // -------------- Optional mod mining tags --------------
    event.add('immersiveengineering:mineable/drill', id);
    event.add('immersiveengineering:mineable/rockcutter', id);
    event.add('pneumaticcraft:jackhammer_ores', id);
    event.add('mekanism:atomic_disassembler_ore', id);

    event.add('actuallyadditions:mineable/aio', id);
    event.add('actuallyadditions:mineable/drill', id);

    event.add('silentgear:prospector_hammer_targets', id);
  });
});

// Mirror tags for items
ServerEvents.tags('item', event => {
  const ids = [
    'chalcopyrite_ore', 'chalcopyrite_ore_deepslate',
    'cassiterite_ore', 'cassiterite_ore_deepslate',
    'bauxite_ore', 'bauxite_ore_deepslate',
    'galena_ore', 'galena_ore_deepslate',
    'pentlandite_ore', 'pentlandite_ore_deepslate',
    'argentite_ore', 'argentite_ore_deepslate',
    'gold_quartz_ore', 'gold_quartz_ore_deepslate',
    'hematite_ore', 'hematite_ore_deepslate'
  ];

  ids.forEach(id => {
    event.add('forge:ores', `kubejs:${id}`);
    event.add(`forge:ores/${id.replace('_ore','')}`, `kubejs:${id}`);
  });
});
