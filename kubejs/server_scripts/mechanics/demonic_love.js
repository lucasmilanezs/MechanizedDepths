const LAST_USE = new Map();  // uuid -> timestamps

ItemEvents.rightClicked('kubejs:liquid_love_bucket', event => {
  if (!event.target || !event.target.entity) return;  // precisa de entidade
  const target = event.target.entity;

  // Verifica se é a entidade certa
  if (target.type !== 'occultism:demonic_wife') return;

  const player = event.player;

  // Consome o item segurado (1 unidade)
  event.item.shrink(1);

  // Dá o item resultado

  event.server.scheduleInTicks(1, () => {
    player.give('kubejs:demonic_love');
    });

  // Efeitos visuais e sonoros opcionais
  const { x, y, z } = target;
  event.server.runCommandSilent(`particle heart ${x} ${y + 1.2} ${z} 0.5 0.5 0.5 0 20 normal @a`);
  event.level.playSound(null, x, y, z, 'minecraft:entity.player.levelup', 'players', 0.8, 1.2);
});
