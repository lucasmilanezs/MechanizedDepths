// // kubejs/server_scripts/routine_probe.js

// ItemEvents.rightClicked('kubejs:routine_tablet', e => {
//   if (!e.target) {
//     e.player.tell("§7[Probe] sem target");
//     return;
//   }

//   // mostra o ID do bloco que foi clicado
//   if (e.target.block) {
//     e.player.tell("§b[Probe] bloco: " + e.target.block.id);
//   }

//   // tenta pegar a BlockEntity diretamente
//   let be = null;
//   if (e.target.block && e.target.block.entity) {
//     be = e.target.block.entity;
//   } else if (e.target.blockPos) {
//     be = e.level.getBlockEntity(e.target.blockPos);
//   }

//   if (!be) {
//     e.player.tell("§c[Probe] sem BlockEntity nesse alvo.");
//     return;
//   }

//   // dump do NBT
//   let nbt = be.serializeNBT ? be.serializeNBT() : (be.getNbt ? be.getNbt() : be.nbt);
//   e.player.tell("§a[Probe] NBT: " + String(nbt));
//   console.info("[Probe][NBT Dump] " + String(nbt));

//   e.cancel(); // evita abrir GUI
// });

// kubejs/server_scripts/routine_probe.js

// ItemEvents.rightClicked('kubejs:routine_tablet', e => {
//   if (!e.target) return;

//   // pega a BlockEntity do bloco clicado
//   let be = null;
//   if (e.target.block && e.target.block.entity) {
//     be = e.target.block.entity;
//   } else if (e.target.blockPos) {
//     be = e.level.getBlockEntity(e.target.blockPos);
//   }
//   if (!be) {
//     e.player.tell("§c[Probe] Sem BlockEntity nesse bloco.");
//     return;
//   }

//   // extrai o NBT
//   const nbt = be.serializeNBT ? be.serializeNBT() : (be.getNbt ? be.getNbt() : be.nbt);

//   // pega só o campo machineID
//   const machineId = nbt.machineID || "<sem machineID>";
//   e.player.tell("§a[Probe] machineID: " + machineId);
//   console.info("[Probe][machineID] " + machineId);

//   e.cancel(); // evita abrir GUI
// });

// kubejs/server_scripts/routine_tablet_step1.js

// const ROUTINE_TABLET = 'kubejs:routine_tablet';
// const CM_BLOCK_ID   = 'custommachinery:custom_machine_block';

// ItemEvents.rightClicked(ROUTINE_TABLET, e => {
//   if (!e.target || !e.target.block) return;

//   const blockId = e.target.block.id;

//   // Só age se for o bloco base genérico do CM
//   if (blockId !== CM_BLOCK_ID) return;

//   // Puxa a BlockEntity
//   const be = e.target.block.entity || (e.target.blockPos ? e.level.getBlockEntity(e.target.blockPos) : null);
//   if (!be) {
//     e.player.tell("§c[Routine] Sem BlockEntity neste bloco CM.");
//     return;
//   }

//   // Extrai NBT e machineID
//   const nbt = be.serializeNBT ? be.serializeNBT() : (be.getNbt ? be.getNbt() : be.nbt);
//   const machineId = nbt.machineID || "<sem machineID>";

//   // Log simples
//   e.player.tell("§a[Routine] machineID detectado: " + machineId);
//   console.info("[RoutineTablet] machineID detectado: " + machineId);
// });

// kubejs/server_scripts/routine_tablet_step2.js

// const ROUTINE_TABLET = 'kubejs:routine_tablet';

// ItemEvents.rightClicked(ROUTINE_TABLET, e => {

//   // pega o NBT atual ou cria um novo
//   const n = e.item.nbt || {};

//   // grava uma chave de teste
//   n.testKey = "hello_routine";

//   // aplica de volta no item
//   e.item.nbt = n;

//   e.player.tell("§a[Routine] marcado NBT de teste no Routine Tablet!");
// });

// kubejs/server_scripts/routine_tablet_proto_select.js

// const ROUTINE_TABLET = 'kubejs:routine_tablet';
// const CM_BLOCK_ID    = 'custommachinery:custom_machine_block';

// // Mapping: machineID (do NBT da máquina CM) → nome do protocolo
// const PROTOCOL_MAP = {
//   'custommachinery:codex_crucible': 'codex_crucible',
//   'custommachinery:alloy_maw':      'alloy_maw'
// };

// ItemEvents.rightClicked(ROUTINE_TABLET, e => {
//   // precisa clicar em um bloco CM (id genérico)
//   if (!e.target || !e.target.block || e.target.block.id !== CM_BLOCK_ID) {
//     e.player.tell('§7[Routine] Alvo inválido (não é máquina do CM).');
//     return;
//   }

//   // BlockEntity da máquina
//   const be = e.target.block.entity || (e.target.blockPos ? e.level.getBlockEntity(e.target.blockPos) : null);
//   if (!be) {
//     e.player.tell('§7[Routine] Sem BlockEntity no alvo.');
//     return;
//   }

//   // NBT → machineID
//   const nbt = be.serializeNBT ? be.serializeNBT() : (be.getNbt ? be.getNbt() : be.nbt);
//   const machineId = nbt && nbt.machineID ? String(nbt.machineID) : null;

//   // protocolo via mapping
//   const proto = machineId ? PROTOCOL_MAP[machineId] : null;
//   if (!proto) {
//     e.player.tell('§7[Routine] Máquina não mapeada: ' + (machineId || '<desconhecido>'));
//     e.cancel();
//     return;
//   }

//   // grava no NBT do tablet
//   const n = e.item.nbt || {};
//   n.protocol = proto;
//   e.item.nbt = n;

//   e.player.tell('§a[Routine] Protocolo selecionado: §f' + proto);
// });

// kubejs/server_scripts/routine_tablet_proto_cycle.js

// const ROUTINE_TABLET = 'kubejs:routine_tablet';
// const CM_BLOCK_ID    = 'custommachinery:custom_machine_block';

// const MAP = global.ROUTINE_MAP;
// const MACHINE_TO_PROTOCOL = MAP.machineToProtocol;
// const PROTOCOLS = MAP.protocols;

// ItemEvents.rightClicked(ROUTINE_TABLET, e => {
//   // --- caminho A: clicou em bloco CM -> selecionar protocolo + subrotina inicial ---
//   if (e.target && e.target.block && e.target.block.id === CM_BLOCK_ID) {
//     const be  = e.target.block.entity || (e.target.blockPos ? e.level.getBlockEntity(e.target.blockPos) : null);
//     if (!be) { e.player.tell('§7[Routine] Sem BlockEntity no alvo.'); e.cancel(); return; }

//     const nbt = be.serializeNBT ? be.serializeNBT() : (be.getNbt ? be.getNbt() : be.nbt);
//     const machineId = nbt && nbt.machineID ? String(nbt.machineID) : null;

//     const proto = machineId ? MACHINE_TO_PROTOCOL[machineId] : null;
//     if (!proto) { e.player.tell('§7[Routine] Máquina não mapeada: ' + (machineId || '<desconhecido>')); e.cancel(); return; }

//     const firstSub = (PROTOCOLS[proto] && PROTOCOLS[proto].subroutines.length) ? PROTOCOLS[proto].subroutines[0] : null;

//     const n = e.item.nbt || {};
//     n.protocol   = proto;
//     n.subroutine = firstSub;
//     e.item.nbt   = n;

//     e.player.tell('§a[Routine] Protocolo selecionado: §f' + proto + (firstSub ? ` §7(ini: §f${firstSub}§7)` : ''));
//     e.cancel(); // evita abrir HUD
//     return;
//   }

//   // --- caminho B: qualquer outro clique -> ciclar subrotina do protocolo atual ---
//   const n = e.item.nbt || {};
//   const proto = n.protocol;
//   if (!proto || !PROTOCOLS[proto] || !PROTOCOLS[proto].subroutines.length) {
//     e.player.tell('§7[Routine] Selecione um protocolo numa máquina do CM primeiro.');
//     return;
//   }

//   const list = PROTOCOLS[proto].subroutines;
//   const cur  = n.subroutine || null;
//   const idx  = cur ? list.indexOf(cur) : -1;
//   const next = list[(idx + 1) % list.length];

//   n.subroutine = next;
//   e.item.nbt   = n;

//   e.player.tell(`§a[Routine] ${proto} → subrotina: §f${next}`);
// });

// kubejs/server_scripts/routine_tablet.js

// // kubejs/server_scripts/routine_tablet.js
// const ROUTINE_TABLET = 'rt:routine_tablet';
// const CM_BLOCK_ID    = 'custommachinery:custom_machine_block';

// const MAP = global.ROUTINE_MAP;
// const MACHINE_TO_PROTOCOL = MAP.machineToProtocol;
// const PROTOCOLS = MAP.protocols;

// // resolve CMD somente pelo mapping hardcoded
// function resolveCmd(proto, subId) {
//   const P = PROTOCOLS[proto];
//   if (!P || !subId) return undefined;
//   const m = P.cmd || {};
//   return Object.prototype.hasOwnProperty.call(m, subId) ? m[subId] : undefined;
// }

// ItemEvents.rightClicked(ROUTINE_TABLET, e => {
//   // A) clique em bloco CM -> escolher protocolo + subrotina inicial + CMD
//   if (e.target && e.target.block && e.target.block.id === CM_BLOCK_ID) {
//     const be  = e.target.block.entity || (e.target.blockPos ? e.level.getBlockEntity(e.target.blockPos) : null);
//     if (!be) { e.player.tell('§7[Routine] Sem BlockEntity no alvo.'); e.cancel(); return; }

//     const nbt = be.serializeNBT ? be.serializeNBT() : (be.getNbt ? be.getNbt() : be.nbt);
//     const machineId = nbt && nbt.machineID ? String(nbt.machineID) : null;

//     const proto = machineId ? MACHINE_TO_PROTOCOL[machineId] : null;
//     if (!proto) { e.player.tell('§7[Routine] Máquina não mapeada: ' + (machineId || '<desconhecido>')); e.cancel(); return; }

//     const list = (PROTOCOLS[proto] && PROTOCOLS[proto].subroutines) ? PROTOCOLS[proto].subroutines : [];
//     const firstSub = list.length ? list[0] : null;

//     const n = e.item.nbt || {};
//     n.protocol   = proto;
//     n.subroutine = firstSub;

//     const cmd0 = resolveCmd(proto, firstSub);
//     if (typeof cmd0 === 'number') n.CustomModelData = cmd0;

//     e.item.nbt = n;

//     e.player.tell('§a[Routine] Protocolo: §f' + proto + (firstSub ? ` §7(ini: §f${firstSub}§7)` : ''));
//     e.cancel();
//     return;
//   }

//   // B) ciclo de subrotina -> atualizar sub e CMD pelo mapping
//   const n = e.item.nbt || {};
//   const proto = n.protocol;
//   if (!proto || !PROTOCOLS[proto] || !PROTOCOLS[proto].subroutines.length) {
//     e.player.tell('§7[Routine] Selecione um protocolo numa máquina do CM primeiro.');
//     return;
//   }

//   const list = PROTOCOLS[proto].subroutines;
//   const cur  = n.subroutine || null;
//   const idx  = cur ? list.indexOf(cur) : -1;
//   const next = list[(idx + 1) % list.length];

//   n.subroutine = next;

//   const cmdNext = resolveCmd(proto, next);
//   if (typeof cmdNext === 'number') n.CustomModelData = cmdNext;

//   e.item.nbt = n;

//   e.player.tell(`§a[Routine] ${proto} → subrotina: §f${next}` + (typeof cmdNext === 'number' ? ` §7(CMD=${cmdNext})` : ''));
// });

// kubejs/server_scripts/routine_map_server.js

// colors

// const ROUTINE_TABLET = 'rt:routine_tablet';
// const CM_BLOCK_ID    = 'custommachinery:custom_machine_block';

const ROUTINE_TABLET = 'rt:routine_tablet';
const CM_BLOCK_ID    = 'custommachinery:custom_machine_block';

const MAP = global.ROUTINE_MAP;
const MACHINE_TO_PROTOCOL = MAP.machineToProtocol;
const PROTOCOLS = MAP.protocols;

const C_GRAY  = '§7'
const C_BLUE  = '§9'
const C_GREEN = '§a'
const C_WHITE = '§f'

// helper: status line
function tellRoutine(p, proto, sub) {
  const msg = `${C_BLUE}Protocol${C_GRAY} → ${C_WHITE}${proto}${C_GRAY}, ${C_GREEN}Subroutine${C_GRAY} → ${C_WHITE}${sub ?? '-'}`
  p.tell(msg)
}

// helper: UI-like sound only for the player
function ping(player, pitch) {
  if (pitch === undefined || pitch === null) pitch = 1.0
  if (typeof player.playNotifySound === 'function') {
    // source 'players' costuma funcionar bem; ajuste se necessário
    player.playNotifySound('minecraft:block.note_block.pling', 'players', 0.6, pitch)
  } else if (typeof player.playSound === 'function') {
    player.playSound('minecraft:block.note_block.pling', 0.6, pitch)
  }
}

// resolve CMD permanece interno
function resolveCmd(proto, subId) {
  const P = PROTOCOLS[proto]
  if (!P || !subId) return undefined
  const m = P.cmd || {}
  return Object.prototype.hasOwnProperty.call(m, subId) ? m[subId] : undefined
}

ItemEvents.rightClicked(ROUTINE_TABLET, e => {
  // A) click em bloco CM
  if (e.target && e.target.block && e.target.block.id === CM_BLOCK_ID) {
    const be  = e.target.block.entity || (e.target.blockPos ? e.level.getBlockEntity(e.target.blockPos) : null)
    if (!be) { e.player.tell(`${C_WHITE}No BlockEntity at target.`); e.cancel(); return }

    const nbt = be.serializeNBT ? be.serializeNBT() : (be.getNbt ? be.getNbt() : be.nbt)
    const machineId = nbt && nbt.machineID ? String(nbt.machineID) : null

    const proto = machineId ? MACHINE_TO_PROTOCOL[machineId] : null
    if (!proto) { e.player.tell(`${C_WHITE}Unmapped machine: ${machineId || '<unknown>'}`); e.cancel(); return }

    const list = (PROTOCOLS[proto] && PROTOCOLS[proto].subroutines) ? PROTOCOLS[proto].subroutines : []
    const firstSub = list.length ? list[0] : null

    const n = e.item.nbt || {}
    n.protocol   = proto
    n.subroutine = firstSub

    const cmd0 = resolveCmd(proto, firstSub)
    if (typeof cmd0 === 'number') n.CustomModelData = cmd0

    e.item.nbt = n

    tellRoutine(e.player, proto, firstSub)
    ping(e.player, 1.0)
    e.cancel()
    return
  }

  // B) ciclo de subrotina
  const n = e.item.nbt || {}
  const proto = n.protocol
  if (!proto || !PROTOCOLS[proto] || !PROTOCOLS[proto].subroutines.length) {
    e.player.tell(`${C_WHITE}Select a protocol on a ${C_BLUE}Mechanized Machine ${C_WHITE}first.`)
    return
  }

  const list = PROTOCOLS[proto].subroutines
  const cur  = n.subroutine || null
  const idx  = cur ? list.indexOf(cur) : -1
  const next = list[(idx + 1) % list.length]
  const wrapped = (idx + 1) % list.length === 0

  n.subroutine = next

  const cmdNext = resolveCmd(proto, next)
  if (typeof cmdNext === 'number') n.CustomModelData = cmdNext

  e.item.nbt = n

  tellRoutine(e.player, proto, next)
  ping(e.player, wrapped ? 0.85 : 1.1)
})

