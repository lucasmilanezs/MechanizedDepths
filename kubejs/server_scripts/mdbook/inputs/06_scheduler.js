// kubejs/server_scripts/mdbook/inputs/06_scheduler.js
global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

// garante objeto
MDBook.Scheduler = MDBook.Scheduler || {}

MDBook.Scheduler.intervalTicks = 20          // 1s
MDBook.Scheduler.pulseEvery    = 500           // a cada 5 ticks do loop (5s se intervalTicks=20)
MDBook.Scheduler._localTick    = 0           // relógio local (não depende de gameTime)

// --- helpers ------------------------------------------------

function MDBookScheduler_dbg(server) {
  return (MDBook.State && MDBook.State.debugEnabled && MDBook.State.debugEnabled(server)) ? true : false
}

// ✅ "agora" robusto para lease/heartbeat (sem Java.type, sem overworld wrapper)
function MDBookScheduler_nowMs() {
  try {
    if (Date && Date.now) return Number(Date.now())
    return Number(new Date().getTime())
  } catch (e) {
    return 0
  }
}

function MDBookScheduler_getState(server) {
  var pdata = server.persistentData
  if (pdata.mdbookScheduler === undefined) pdata.mdbookScheduler = {}
  var st = pdata.mdbookScheduler

  if (st.gen === undefined) st.gen = 0
  if (st.running === undefined) st.running = false

  // ✅ heartbeat persistido em ms (para detectar zumbi após crash/fechamento)
  if (st.lastBeatMs === undefined) st.lastBeatMs = 0

  // ✅ lease em ms (calculado no start; mantido aqui por compat)
  if (st.leaseMs === undefined) st.leaseMs = 0

  return st
}

// Mata o "running" persistido sem tocar em outras persistências do pack
function MDBookScheduler_killZombie(server, st, reason) {
  st.running = false
  st.lastBeatMs = 0
  st.leaseMs = 0
  // incrementa gen pra invalidar qualquer loop antigo que ainda tente rodar
  st.gen = Number(st.gen) + 1

  if (MDBookScheduler_dbg(server)) {
    console.log('[MDBook] scheduler zombie killed: ' + reason + ' | newGen=' + st.gen)
  }
}

// Reconciliador: só roda quando alguém chama /mdbook start|status
MDBook.Scheduler.reconcile = function (server) {
  var st = MDBookScheduler_getState(server)

  // se não está running, nada a fazer
  if (!st.running) return { ok: true, running: false, reason: 'not_running', gen: Number(st.gen) }

  var now = MDBookScheduler_nowMs()
  var last = Number(st.lastBeatMs || 0)
  var lease = Number(st.leaseMs || 0)

  // se não temos relógio válido ou lease definido, não matamos agressivo
  if (!(now > 0) || !(lease > 0)) {
    return {
      ok: true,
      running: true,
      reason: 'no_clock',
      gen: Number(st.gen),
      lastBeatMs: last,
      nowMs: now,
      leaseMs: lease
    }
  }

  // sem heartbeat recente => zumbi
  var silent = (last > 0) ? (now - last) : (lease + 1)
  if (silent > lease) {
    MDBookScheduler_killZombie(server, st, 'lease_expired silentMs=' + silent + ' leaseMs=' + lease)
    return { ok: true, running: false, reason: 'lease_expired', gen: Number(st.gen), silentMs: silent, leaseMs: lease }
  }

  return { ok: true, running: true, reason: 'healthy', gen: Number(st.gen), silentMs: silent, leaseMs: lease }
}

// --- API ----------------------------------------------------

MDBook.Scheduler.start = function (server) {
  var st = MDBookScheduler_getState(server)

  // sempre reconcilia no start (start é chamado periodicamente via FTBQ)
  var rec = MDBook.Scheduler.reconcile(server)

  // se está saudável, não inicia duplicado
  if (rec.running && rec.reason === 'healthy') {
    return {
      ok: false,
      reason: 'already_running',
      gen: Number(st.gen),
      health: rec.reason,
      silentMs: rec.silentMs,
      leaseMs: rec.leaseMs
    }
  }

  // inicia nova geração
  st.gen = Number(st.gen) + 1
  st.running = true

  var gen = Number(st.gen)
  MDBook.Scheduler._localTick = 0

  // lease em ms baseado nos valores atuais (3 pulses + folga de 2 intervalTicks)
  var intervalMs = Number(MDBook.Scheduler.intervalTicks) * 50
  var leaseMs = intervalMs * Number(MDBook.Scheduler.pulseEvery) * 3 + intervalMs * 2
  st.leaseMs = Number(leaseMs)

  // marca primeiro beat imediatamente
  st.lastBeatMs = MDBookScheduler_nowMs()

  if (MDBookScheduler_dbg(server)) {
    console.log('[MDBook] scheduler start gen=' + gen + ' leaseMs=' + st.leaseMs)
  }

  function loop() {
    var st2 = MDBookScheduler_getState(server)

    // kill switch: se mudou running/gen, essa instância morre
    if (!st2.running || Number(st2.gen) !== gen) {
      if (MDBookScheduler_dbg(server)) {
        console.log('[MDBook] scheduler loop killed (running=' + st2.running + ' gen=' + st2.gen + ' expected=' + gen + ')')
      }
      return
    }

    MDBook.Scheduler._localTick = MDBook.Scheduler._localTick + 1

    // heartbeat persistido
    st2.lastBeatMs = MDBookScheduler_nowMs()

    if (MDBookScheduler_dbg(server)) {
      console.log('[MDBook] heartbeat tick=' + MDBook.Scheduler._localTick + ' gen=' + gen + ' beatMs=' + st2.lastBeatMs)
    }

    if (MDBook.Scheduler._localTick % MDBook.Scheduler.pulseEvery === 0) {
      if (MDBook.Engine && MDBook.Engine.rollTime) {
        var players = server.players
        if (players && players.length) {
          for (var i = 0; i < players.length; i++) {
            try {
              MDBook.Engine.rollTime(players[i])
            } catch (e) {
              if (MDBookScheduler_dbg(server)) {
                console.log('[MDBook] rollTime error: ' + e)
              }
            }
          }
        }
      }
    }

    server.scheduleInTicks(MDBook.Scheduler.intervalTicks, loop)
  }

  server.scheduleInTicks(MDBook.Scheduler.intervalTicks, loop)
  return { ok: true, started: true, gen: gen, leaseMs: Number(st.leaseMs) }
}

MDBook.Scheduler.stop = function (server) {
  var st = MDBookScheduler_getState(server)

  if (!st.running) {
    return { ok: false, reason: 'not_running', gen: Number(st.gen) }
  }

  st.running = false
  st.lastBeatMs = 0
  st.leaseMs = 0
  st.gen = Number(st.gen) + 1

  if (MDBookScheduler_dbg(server)) {
    console.log('[MDBook] scheduler stopped; newGen=' + st.gen)
  }

  return { ok: true, stopped: true, gen: Number(st.gen) }
}

MDBook.Scheduler.status = function (server) {
  var st = MDBookScheduler_getState(server)

  // status também reconcilia
  var rec = MDBook.Scheduler.reconcile(server)

  return {
    ok: true,
    running: !!st.running,
    gen: Number(st.gen),
    intervalTicks: Number(MDBook.Scheduler.intervalTicks),
    pulseEvery: Number(MDBook.Scheduler.pulseEvery),
    leaseMs: Number(st.leaseMs || 0),
    lastBeatMs: Number(st.lastBeatMs || 0),
    health: rec.reason,
    silentMs: rec.silentMs
  }
}

// comandos: /mdbook start|stop|status
ServerEvents.commandRegistry(function (event) {
  var Commands = event.commands

  event.register(
    Commands.literal('mdbook')
      .then(
        Commands.literal('start').executes(function (ctx) {
          var res = MDBook.Scheduler.start(ctx.source.server)
          ctx.source.sendSuccess(Text.of('[MDBook] ' + JSON.stringify(res)), false)
          return res.ok ? 1 : 0
        })
      )
      .then(
        Commands.literal('stop').executes(function (ctx) {
          var res = MDBook.Scheduler.stop(ctx.source.server)
          ctx.source.sendSuccess(Text.of('[MDBook] ' + JSON.stringify(res)), false)
          return res.ok ? 1 : 0
        })
      )
      .then(
        Commands.literal('status').executes(function (ctx) {
          var res = MDBook.Scheduler.status(ctx.source.server)
          ctx.source.sendSuccess(Text.of('[MDBook] ' + JSON.stringify(res)), false)
          return 1
        })
      )
      .then(
  Commands.literal('session')
    .then(
      Commands.literal('reset').executes(function (ctx) {
        MDBook.sessionId = 'manual:' + (Date.now().toString(36) + Math.random().toString(36).slice(2))
        ctx.source.sendSuccess(Text.of('[MDBook] sessionId reset -> ' + MDBook.sessionId), false)
        return 1
      })
    )
)

  )
})

console.log('[MDBook] scheduler loaded (command-driven, lease-based-ms)')
