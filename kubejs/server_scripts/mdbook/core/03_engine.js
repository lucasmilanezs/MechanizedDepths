// =============================================================================
// MDBook — 03_engine.js                                                v3.1
// Depende de: 00_registry.js, 01_state.js, 02_rules.js
//
// sessionId:
//   Gerado uma vez por carga do script. Preservado se o runtime persistir
//   entre sessões (comportamento documentado neste ambiente).
//   Reset manual via /mdbook session reset.
// =============================================================================

global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.sessionId = MDBook.sessionId || (Date.now().toString(36) + Math.random().toString(36).slice(2))

// ---------------------------------------------------------------------------
// Contexto (ctx) — campos disponíveis em say(), logic(), requirements():
//
//   server, player, level, pos   referências KubeJS
//   gameTime   {number}          tick do mundo; pode ser 0 (best-effort)
//   hookId     {string}          id da interação em execução
//   payload    {object}          dados extras do caller
//   meta       {object}          metadados internos (source, force, etc.)
//   say(text)                    envia mensagem ao player (& → §)
//   log(msg)                     loga no console se debug ativo
// ---------------------------------------------------------------------------

MDBook.Engine = {

  register: function (def) {
    MDBook.Registry.register(def)
  },

  makeCtx: function (player, hookId, payload, meta) {
    var server = player.server
    var dbg    = MDBook.State.debugEnabled(server)

    var t = 0
    try      { t = Number(player.level.getGameTime()) }
    catch (e) {
      try   { t = Number(server.overworld().getGameTime()) }
      catch (e2) { t = 0 }
    }
    if (!isFinite(t)) t = 0

    var pos = null
    try { pos = player.blockPosition() } catch (e) { pos = null }

    return {
      server:   server,
      player:   player,
      level:    player.level,
      pos:      pos,
      gameTime: t,
      hookId:   hookId,
      payload:  payload || {},
      meta:     meta    || {},

      say: function (text) {
        if (text === undefined || text === null) return
        var s = String(text)
        if (!s.length) return
        if (s.indexOf('&') !== -1) s = s.replace(/&/g, '\u00a7')
        player.tell(Text.of(s))
      },

      log: function (msg) {
        if (!dbg) return
        console.log(String(msg))
      }
    }
  },

  _execute: function (def, ctx) {
    try {
      if      (typeof def.say === 'function') ctx.say(def.say(ctx))
      else if (typeof def.say === 'string')   ctx.say(def.say)
    } catch (e) {
      ctx.log('[MDBook] say() erro em ' + def.id + ': ' + e)
    }

    try {
      if (typeof def.logic === 'function') def.logic(ctx)
    } catch (e) {
      ctx.log('[MDBook] logic() erro em ' + def.id + ': ' + e)
    }
  },

  // -------------------------------------------------------------------------
  // _markAfter — marcações de estado pós-execução.
  // Chamado apenas por trigger(), não por triggerForce().
  //
  // Toda interação 'time' disparada é marcada em sessionSeen
  // independentemente de ter sessionOnce. Isso alimenta a lógica
  // de prioridade de buckets do rollTime.
  // -------------------------------------------------------------------------
  _markAfter: function (def, ctx) {
    var player = ctx.player

    if (def.once)                  MDBook.State.markSeen(player, def.id)
    if (def.sessionOnce)           MDBook.State.markSeenThisSession(player, def.id)
    if (def.kind === 'time')       MDBook.State.markSeenThisSession(player, def.id)

    // [LEGADO] cooldownTicks
    if (def.cooldownTicks && ctx.gameTime > 0) {
      var until = Number(ctx.gameTime) + Number(def.cooldownTicks)
      if (isFinite(until) && until > 0) MDBook.State.setCooldownUntil(player, def.id, until)
    }
  },

  trigger: function (player, id, payload, meta) {
    var def = MDBook.Registry.get(id)
    if (!def)    return { ok: false, reason: 'unknown_id' }
    if (!player) return { ok: false, reason: 'no_player' }

    var ctx = this.makeCtx(player, id, payload, meta)

    if (!MDBook.Rules.isEligible(def, ctx)) {
      ctx.log('[MDBook] bloqueado: ' + id)
      return { ok: false, reason: 'not_eligible' }
    }

    this._execute(def, ctx)
    this._markAfter(def, ctx)

    ctx.log('[MDBook] executado: ' + id)
    return { ok: true }
  },

  triggerForce: function (player, id, payload, meta) {
    var def = MDBook.Registry.get(id)
    if (!def)    return { ok: false, reason: 'unknown_id' }
    if (!player) return { ok: false, reason: 'no_player' }

    var ctx = this.makeCtx(player, id, payload, meta)
    this._execute(def, ctx)

    ctx.log('[MDBook] executado (force): ' + id)
    return { ok: true }
  },

  // -------------------------------------------------------------------------
  // rollTime — seleciona e dispara uma interação 'time' para o player.
  // Chamado via /mdbook roll (disparado pelo FTBQ timer).
  //
  // Estratégia de seleção em três buckets, em ordem de prioridade:
  //
  //   BUCKET A — nunca visto (seen persistente = false)
  //              O player ainda não conhece esta interação. Máxima prioridade.
  //
  //   BUCKET B — visto alguma vez, mas não nesta sessão
  //              Já apareceu antes, mas está "fresco" para esta sessão.
  //
  //   BUCKET C — visto nesta sessão (fallback)
  //              Só entra no pool quando A e B estão completamente vazios.
  //              Garante que o roll sempre tenha algo para sortear.
  //
  // Interações bloqueadas por once, sessionOnce ou cooldownTicks são
  // descartadas antes da classificação — nunca entram em nenhum bucket.
  // Dentro de cada bucket, o sorteio é ponderado por weight.
  // -------------------------------------------------------------------------
  rollTime: function (player) {
    var defs = MDBook.Registry.allTime()
    if (!defs.length) return { ok: false, reason: 'no_time_defs' }

    var ctx = this.makeCtx(player, '__time_roll__', {}, { source: 'ftbq_timer' })
    ctx.log('[MDBook] time roll para ' + player.username + ' | defs=' + defs.length)

    // Passo 1: filtra elegíveis (once, sessionOnce, cooldownTicks, requirements)
    var eligible = []
    for (var i = 0; i < defs.length; i++) {
      if (MDBook.Rules.isEligible(defs[i], ctx)) eligible.push(defs[i])
    }
    if (!eligible.length) {
      ctx.log('[MDBook] time roll: nenhum elegível')
      return { ok: false, reason: 'none_eligible' }
    }

    // Passo 2: classifica nos três buckets
    var bucketA = []
    var bucketB = []
    var bucketC = []

    for (var j = 0; j < eligible.length; j++) {
      var d = eligible[j]
      var seenEver    = MDBook.State.hasSeen(player, d.id)
      var seenSession = MDBook.State.hasSeenThisSession(player, d.id)

      if      (!seenEver && !seenSession) bucketA.push(d)
      else if (!seenSession)             bucketB.push(d)
      else                               bucketC.push(d)
    }

    var pool = bucketA.length ? bucketA
             : bucketB.length ? bucketB
             : bucketC

    ctx.log('[MDBook] buckets A=' + bucketA.length + ' B=' + bucketB.length + ' C=' + bucketC.length + ' | usando pool=' + (bucketA.length ? 'A' : bucketB.length ? 'B' : 'C'))

    var picked = this._weightedPick(pool)
    if (!picked) return { ok: false, reason: 'pick_failed' }

    return this.trigger(player, picked.id, {}, { source: 'ftbq_timer' })
  },

  _weightedPick: function (list) {
    var total = 0
    for (var i = 0; i < list.length; i++) {
      var w = Number(list[i].weight === undefined ? 1 : list[i].weight)
      if (w > 0) total += w
    }
    if (total <= 0) return null

    var r = Math.random() * total
    for (var j = 0; j < list.length; j++) {
      var ww = Number(list[j].weight === undefined ? 1 : list[j].weight)
      if (ww <= 0) continue
      r -= ww
      if (r <= 0) return list[j]
    }
    return list[list.length - 1]
  }
}

// ---------------------------------------------------------------------------
// Flush — drena MDBook.__pending uma única vez ao carregar o engine.
// ---------------------------------------------------------------------------
;(function _flushPending() {
  var q = MDBook.__pending
  if (!q) { console.log('[MDBook] flush: sem fila pending'); return }

  console.log('[MDBook] flush início | pending=' + q.length)
  var ok = 0
  for (var i = 0; i < q.length; i++) {
    try   { q[i](); ok++ }
    catch (e) { console.log('[MDBook] pending[' + i + '] falhou: ' + e) }
  }
  MDBook.__pending = []
  console.log('[MDBook] flush concluído | ok=' + ok + ' | regs=' + MDBook.Registry.all().length)
})()

console.log('[MDBook] engine carregado | sessionId=' + MDBook.sessionId)
