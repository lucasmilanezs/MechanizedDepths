global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

// ✅ novo: sessionId em memória (muda ao reiniciar mundo/servidor)
// Não persiste; isso garante “uma vez por sessão”.
MDBook.sessionId = MDBook.sessionId || (Date.now().toString(36) + Math.random().toString(36).slice(2))

MDBook.Engine = {
  register: function (def) {
    MDBook.Registry.register(def)
  },

  // ✅ tempo fica como best-effort. Não é mais requisito pro “cooldown real”.
  makeCtx: function (player, hookId, payload, meta) {
    var server = player.server
    var dbg = MDBook.State.debugEnabled(server)

    var t = 0
    try { t = Number(player.level.getGameTime()) } catch (e) {
      try { t = Number(server.overworld().getGameTime()) } catch (e2) { t = 0 }
    }
    if (!isFinite(t)) t = 0

    var ctx = {
      server: server,
      player: player,
      level: player.level,
      pos: player.blockPosition(),
      gameTime: t,
      hookId: hookId,
      payload: payload || {},
      meta: meta || {},
      debugEnabled: dbg,

      say: function (text) {
        if (text === undefined || text === null) return
        var s = String(text)
        if (!s.length) return
        if (s.indexOf('&') !== -1) s = s.replace(/&/g, '§')
        player.tell(Text.of(s))
      },

      // ✅ corrigido: loga só quando debug está ligado
      debug: function (msg) {
        if (!dbg) return
        console.log(String(msg))
      }
    }

    return ctx
  },

  trigger: function (player, id, payload, meta) {
    var def = MDBook.Registry.get(id)
    if (!def) return { ok: false, reason: 'unknown_id' }
    if (!player) return { ok: false, reason: 'no_player' }

    var ctx = this.makeCtx(player, id, payload, meta)

    if (!MDBook.Rules.isEligible(def, ctx)) {
      if (ctx.debugEnabled) ctx.debug('[MDBook] blocked: ' + id)
      return { ok: false, reason: 'not_eligible' }
    }

    try {
      if (typeof def.say === 'function') ctx.say(def.say(ctx))
      else if (typeof def.say === 'string') ctx.say(def.say)
    } catch (e) {
      if (ctx.debugEnabled) ctx.debug('[MDBook] say() error on ' + id + ': ' + e)
    }

    try {
      if (typeof def.logic === 'function') def.logic(ctx)
    } catch (e) {
      if (ctx.debugEnabled) ctx.debug('[MDBook] logic() error on ' + id + ': ' + e)
    }

    // ✅ marcações pós-exec
    if (def.once) MDBook.State.markSeen(player, def.id)

    // ✅ “cooldown real”: sessionOnce
    if (def.sessionOnce) MDBook.State.markSeenThisSession(player, def.id)

    // legado (não é a base do sistema)
    if (def.cooldownTicks && ctx.gameTime > 0) {
      var until = Number(ctx.gameTime) + Number(def.cooldownTicks)
      if (isFinite(until) && until > 0) MDBook.State.setCooldownUntil(player, def.id, until)
    }

    if (ctx.debugEnabled) ctx.debug('[MDBook] executed: ' + id)
    return { ok: true }
  },

  triggerForce: function (player, id, payload, meta) {
    var def = MDBook.Registry.get(id)
    if (!def) return { ok: false, reason: 'unknown_id' }
    if (!player) return { ok: false, reason: 'no_player' }

    var ctx = this.makeCtx(player, id, payload, meta)

    try {
      if (typeof def.say === 'function') ctx.say(def.say(ctx))
      else if (typeof def.say === 'string') ctx.say(def.say)
    } catch (e) {
      if (ctx.debugEnabled) ctx.debug('[MDBook] say() error on ' + id + ': ' + e)
    }

    try {
      if (typeof def.logic === 'function') def.logic(ctx)
    } catch (e) {
      if (ctx.debugEnabled) ctx.debug('[MDBook] logic() error on ' + id + ': ' + e)
    }

    if (ctx.debugEnabled) ctx.debug('[MDBook] executed (force): ' + id)
    return { ok: true }
  },

  rollTime: function (player) {
    var defs = MDBook.Registry.allTime()
    if (!defs.length) return { ok: false, reason: 'no_time_defs' }

    var ctxBase = this.makeCtx(player, '__time_roll__', {}, { source: 'scheduler' })
    if (ctxBase.debugEnabled) {
      ctxBase.debug('[MDBook] time roll for ' + player.username + ' | defs=' + defs.length)
    }

    var eligible = []
    for (var i = 0; i < defs.length; i++) {
      var d = defs[i]
      if (MDBook.Rules.isEligible(d, ctxBase)) eligible.push(d)
    }

    if (!eligible.length) {
      if (ctxBase.debugEnabled) ctxBase.debug('[MDBook] time roll: none eligible')
      return { ok: false, reason: 'none_eligible' }
    }

    var unseen = []
    for (var j = 0; j < eligible.length; j++) {
      var dd = eligible[j]
      if (!MDBook.State.hasSeen(player, dd.id)) unseen.push(dd)
    }

    var pool = unseen.length ? unseen : eligible
    var picked = this.weightedPick(pool)
    if (!picked) return { ok: false, reason: 'pick_failed' }

    return this.trigger(player, picked.id, {}, { source: 'scheduler' })
  },

  weightedPick: function (list) {
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

// flush defer
;(function () {
  var MDB = global.MDBook
  if (!MDB) { console.log('[MDBook] flush: no MDBook'); return }
  if (MDB.__pending === undefined) { console.log('[MDBook] flush: no pending'); return }
  var q = MDB.__pending
  console.log('[MDBook] flush start; pending=' + q.length)
  var ok = 0
  for (var i = 0; i < q.length; i++) {
    try { q[i](); ok++ } catch (e) { console.log('[MDBook] pending failed: ' + e) }
  }
  MDB.__pending = []
  console.log('[MDBook] flush done; ok=' + ok + ' | regs=' + (MDB.Registry ? MDB.Registry.all().length : -1))
})()

console.log('[MDBook] engine loaded; sessionId=' + MDBook.sessionId)
