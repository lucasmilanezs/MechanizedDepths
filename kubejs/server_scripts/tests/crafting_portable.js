
ItemEvents.rightClicked('kubejs:portable_crafting', event => {
  const player = event.player;
  player.openMenu('minecraft:crafting_table');
  const stack = event.item;
  stack.damage(1, player);

});

// ItemEvents.rightClicked('kubejs:packed_gravel', event => {
//   if (!event.target) return;
//   if (event.target.block !== 'minecraft:water') return;
//   event.item.shrink(1);
//   event.level.playSound(null, event.player.x, event.player.y, event.player.z,
//       'minecraft:block.water.ambient', 'blocks', 1.0, 1.0);

//   event.server.scheduleInTicks(30, () => {
//     event.player.give('minecraft:gold_nugget');

//     event.level.playSound(null, event.player.x, event.player.y, event.player.z,
//     'minecraft:entity.boat.paddle_water', 'players', 1.0, 1.0);
//   });
// });

const LAST_WASH = new Map();     // uuid -> timestamp do último uso
const COOLDOWN_MS = 2200; 
ItemEvents.rightClicked('kubejs:packed_gravel', event => {
  if (!event.target) return;
  if (event.target.block !== 'minecraft:water') return;

  const id = event.player.uuid;
  const now = Date.now();
  const last = LAST_WASH.get(id) || 0;
  if (now - last < COOLDOWN_MS) return;  // ainda em cooldown
  LAST_WASH.set(id, now);  

  // consome 1
  event.item.shrink(1);

  const bp = (event.target.blockPos ?? event.target.pos);
  const x = (bp?.x ?? Math.floor(event.player.x)) + 0.5;
  const y = (bp?.y ?? Math.floor(event.player.y - 1)) + 0.9;
  const z = (bp?.z ?? Math.floor(event.player.z)) + 0.5;

  // burst inicial
  event.server.runCommandSilent(`particle minecraft:splash ${x} ${y} ${z} 0.6 0.4 0.6 0.1 50 normal @a`);
  event.level.playSound(null, event.player.x, event.player.y, event.player.z,
    'minecraft:entity.boat.paddle_water', 'players', 1.0, 1.0);

  // partículas contínuas (loop a cada 5 ticks)
  for (let i = 5; i < 40; i += 5) {
    event.server.scheduleInTicks(i, () => {
      event.server.runCommandSilent(`particle minecraft:bubble ${x} ${y} ${z} 0.25 0.15 0.25 0.0 12 normal @a`);
      event.server.runCommandSilent(`particle minecraft:splash ${x} ${y} ${z} 0.2 0.1 0.2 0.02 8 normal @a`);
      event.level.playSound(
        null,
        event.player.x, event.player.y, event.player.z,
        'minecraft:block.gravel.hit',
        'blocks',
        0.6,                // volume mais baixo que splash
        0.9 + Math.random()*0.2 // pitch levemente variado
      );
    });

  }
  // recompensa após 40 ticks (~2s)
  event.server.scheduleInTicks(40, () => {
    event.player.give('minecraft:gold_nugget');
    event.server.runCommandSilent(`particle minecraft:splash ${x} ${y} ${z} 0.5 0.3 0.5 0.05 40 normal @a`);
    event.level.playSound(null, event.player.x, event.player.y, event.player.z,
      'minecraft:block.water.ambient', 'blocks', 1.0, 1.0);
  });

  event.cancel();
});

// kubejs/server_scripts/open_quest_book.js
ItemEvents.rightClicked('minecraft:stick', event => {
  // apenas mão principal para não duplicar


  // abre o livro de quests para o jogador
  event.player.tell("§aAbrindo o livro de quests...");
  event.player.runCommandSilent(`/ftbquests open_book`);

  // opcional: evita comportamento vanilla do stick
  event.cancel();
});


// // Item do “livro” — troque para o real quando sair do teste
// const BOOK_ITEM_ID = 'minecraft:stick';       // em teste pode usar 'minecraft:stick'
// const PAGE_ID      = 'kubejs:torn_page';     // item de página rasgada
// const RECIPE_ID    = 'kubejs:book_to_pages_once';
// const PAGES_PER_USE = 3;
// const LIMIT_PER_PLAYER = 1;                  // 1 vez por jogador

// // 4.1) Receita: livro -> páginas (livro NÃO é consumido)
// ServerEvents.recipes(event => {
//   event.shapeless(Item.of(PAGE_ID, PAGES_PER_USE), [BOOK_ITEM_ID])
//        .keepIngredient(BOOK_ITEM_ID)
//        .id(RECIPE_ID);
// });

// // 4.2) Limitador por jogador + anti shift-click (limpo e direto)
// ItemEvents.crafted(PAGE_ID, event => {
//   const p    = event.player;
//   const data = p.persistentData;
//   const used = data.book_pages_uses ?? 0;
//   p.tell(`o evento disparou` + p + data + used);

//   if (used >= LIMIT_PER_PLAYER) {
//     // Bloqueia qualquer crafting adicional
//     event.cancel(); // pode ser tarde em algumas builds → usamos remoção no tick seguinte também
//     p.tell('§cEu falei pra não abusar.');
//     p.potionEffects.add('minecraft:instant_damage', 1, 0);
//     e.player.tell(p, data, used);
//     p.inventory.remove(Item.of(PAGE_ID), 3);
//     return;
//   }

//   // Primeiro (e único) uso permitido
//   data.book_pages_uses = used + 1;
// });

// kubejs/server_scripts/book_to_pages_once.js

// kubejs/server_scripts/book_to_pages_debug.js

// kubejs/server_scripts/book_pages_minimal.js

// kubejs/server_scripts/book_pages_minimal_logs.js

// const BOOK_ITEM_ID = 'minecraft:stick';
// const PAGE_ID      = 'kubejs:torn_page';
// const RECIPE_ID    = 'kubejs:book_to_pages';
// const PAGES_PER    = 3;
// const LIMIT        = 1;
// const COUNTER_KEY  = 'book_pages_uses';

// // 1) Receita (livro não é consumido)
// ServerEvents.recipes(event => {
//   event.shapeless(Item.of(PAGE_ID, PAGES_PER), [BOOK_ITEM_ID])
//        .keepIngredient(BOOK_ITEM_ID)
//        .id(RECIPE_ID);
// });

// // 2) Evento com logs claros de TUDO que importa
// ItemEvents.crafted(PAGE_ID, event => {
//   const p    = event.player;
//   const data = p.persistentData;

//   const prev = Number(data[COUNTER_KEY] ?? 0);
//   const next = prev + 1;
//   data[COUNTER_KEY] = next;  // persiste

//   // --- LOGS: contexto do craft e contadores ---
//   const outId    = event.item?.id ?? 'undef';
//   const outCount = event.item?.count ?? 'undef';
//   p.tell(`§e[DBG] out=${outId} x${outCount}`);
//   p.tell(`§e[DBG] uses: prev=${prev} -> next=${next} | limit=${LIMIT} | perCraft=${PAGES_PER}`);

//   if (next > LIMIT) {
//     // LOG do ramo bloqueado + números de inventário
//     p.tell(`§c[DBG] BLOCK: uses(${next}) > limit(${LIMIT})`);

//     const invBefore = p.inventory.count(Item.of(PAGE_ID));
//     const removed   = p.inventory.removeItem('kubejs:torn_page');  // sua remoção atual
//     const invAfter  = p.inventory.count(Item.of(PAGE_ID));

//     p.tell(`§c[DBG] invBefore=${invBefore} removed=${removed} invAfter=${invAfter}`);

//     // efeitos
//     p.potionEffects.add('minecraft:instant_damage', 1, 0);
//     p.tell('§cEu falei pra não abusar.');
//   } else {
//     p.tell(`§a[DBG] ALLOW: uses=${next}/${LIMIT}`);
//   }
// });

ItemEvents.rightClicked('kubejs:torn_page', e => {
  e.player.persistentData.book_pages_uses = 0
  e.player.tell('counter resetado')
})

// kubejs/server_scripts/book_pages_punishments_refund.js

const BOOK_ITEM_ID      = 'minecraft:stick';      // troque pelo seu livro real (ex.: 'ftbquests:book')
const PAGE_ID           = 'kubejs:torn_page';     // páginas exclusivas deste craft
const RECIPE_ID         = 'kubejs:book_to_pages';
const PAGES_PER         = 3;                      // por craft
const LIMIT             = 4;                      // usos livres por jogador
const COUNTER_KEY       = 'book_pages_uses';      // chave no NBT do jogador

// parâmetros de punição
const PAGES_TO_REMOVE   = 3;
const DARKNESS_TICKS    = 100;                    // ~5s
const SPECIAL_REWARD_ID = 'minecraft:oak_log';    // item especial do 3º estágio

// 1) Receita: livro -> páginas (AGORA consome o livro)
ServerEvents.recipes(event => {
  event
    .shapeless(Item.of(PAGE_ID, PAGES_PER), [BOOK_ITEM_ID])
    .id(RECIPE_ID);
});

// 2) Controlador de usos + punições por estágio (sempre devolve o livro no final)
ItemEvents.crafted(PAGE_ID, event => {
  const p    = event.player;
  const data = p.persistentData;

  const next = (data[COUNTER_KEY] ?? 0) + 1;
  data[COUNTER_KEY] = next; // persiste

  const over = next - LIMIT; // <=0: dentro do limite

  if (over === 1) { // atingiu o limite
    p.potionEffects.add('minecraft:instant_damage', 1, 0);
    p.tell('§cI warned you not to abuse this.');
    event.server.runCommandSilent(`clear ${p.username} ${PAGE_ID} ${PAGES_TO_REMOVE}`);
  } else if (over === 2) { // primeira acima do limite
    p.tell('§cYou don\'t learn, do you?');
    p.potionEffects.add('minecraft:darkness', DARKNESS_TICKS, 1);
    // som de caverna (variação aleatória do pool)
    p.playSound('minecraft:ambient.cave', 1.0, 1.0);
    event.server.runCommandSilent(`clear ${p.username} ${PAGE_ID} ${PAGES_TO_REMOVE}`);
    event.server.scheduleInTicks(DARKNESS_TICKS, () => {
      p.potionEffects.add('minecraft:instant_damage', 1, 1); // dano mais forte
    });
  } else if (over === 3) { // segunda acima do limite
    p.tell('§cDude — that page actually had content. Give you a hand and you want the whole arm.');
    event.server.runCommandSilent(`clear ${p.username} ${PAGE_ID} ${PAGES_TO_REMOVE}`);
    p.give(Item.of(SPECIAL_REWARD_ID, 1));
  } else if (over >= 4) { // terceira e seguintes
    event.server.runCommandSilent(`kill ${p.username}`); // sem mensagem
  }

  // Sempre devolver o livro ao final do craft (independente do estágio)
  p.give(Item.of(BOOK_ITEM_ID));
});




