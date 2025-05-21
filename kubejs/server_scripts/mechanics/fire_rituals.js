BlockEvents.rightClicked('minecraft:magma_block', event => {
  const { player, level, hand, server } = event;
  if (level.isClientSide()) return;

  const heldItem = player.getHeldItem(hand);
  const inv = player.inventory;

  // Verifica se está com blaze rod na mão
  const hasBlaze = heldItem.id === 'minecraft:blaze_rod';

  // Tenta encontrar manualmente 1 steel_ingot no inventário
  let steelSlot = -1;

  for (let i = 0; i < inv.size(); i++) {
    const stack = inv.get(i);
    if (stack && stack.id === 'thermal:steel_ingot' && stack.count >= 1) {
      steelSlot = i;
      break;
    }
  }

  if (hasBlaze && steelSlot !== -1) {
    // Consome a blaze rod na mão
    heldItem.count--;

    // Consome o steel diretamente do slot
    inv.get(steelSlot).count--;

    // Dá o resultado
    player.give(Item.of('kubejs:blazzing_steel'));

    // Partículas e som
    const { x, y, z } = event.block.pos;
    server.runCommandSilent(`particle lava ${x + 0.5} ${y + 1} ${z + 0.5} 0.2 0.2 0.2 0.01 20`);
    server.runCommandSilent(`playsound minecraft:block.lava.pop master @a ${x + 0.5} ${y + 1} ${z + 0.5} 1 1.2`);

    event.cancel(); // Bloqueia uso normal do bloco
  }
});

BlockEvents.rightClicked(event => {
  console.log(`[KubeJS] Right click on: ${event.block.id} at ${event.block.pos}`);
});