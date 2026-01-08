// kubejs/server_scripts/mdbook/inputs/06_scheduler.js
global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

// garante objeto
MDBook.Scheduler = MDBook.Scheduler || {}

MDBook.Scheduler.intervalTicks = 20          // 1s
MDBook.Scheduler.pulseEvery    = 5           // a cada 5 ticks do loop (5s se intervalTicks=20)
MDBook.Scheduler._localTick    = 0           // relógio local (não depende de gameTime)

function MDBookScheduler_getState(server) {
  var pdata = server.persistentData
  if (pdata.mdbookScheduler === undefined) pdata.mdbookScheduler = {}
  var st = pdata.mdbookScheduler

  if (st.gen === undefined) st.gen = 0
  if (st.running === undefined) st.running = false
  return st
}

MDBook.Scheduler.start = function (server) {
  var st = MDBookScheduler_getState(server)

  // ✅ safeguard real: não inicia outro loop se já está running no persistentData
  if (st.running) {
    return { ok: false, reason: 'already_running', gen: Number(st.gen) }
  }

  // inicia nova geração
  st.gen = Number(st.gen) + 1
  st.running = true

  var gen = Number(st.gen)
  MDBook.Scheduler._localTick = 0

  if (MDBook.State && MDBook.State.debugEnabled && MDBook.State.debugEnabled(server)) {
    console.log('[MDBook] scheduler start gen=' + gen)
  }

  function loop() {
    var st2 = MDBookScheduler_getState(server)

    // ✅ mata zumbis (reloads antigos / loops antigos)
    if (!st2.running || Number(st2.gen) !== gen) {
      if (MDBook.State && MDBook.State.debugEnabled && MDBook.State.debugEnabled(server)) {
        console.log('[MDBook] scheduler loop killed (running=' + st2.running + ' gen=' + st2.gen + ' expected=' + gen + ')')
      }
      return
    }

    MDBook.Scheduler._localTick = MDBook.Scheduler._localTick + 1

    if (MDBook.State && MDBook.State.debugEnabled && MDBook.State.debugEnabled(server)) {
      console.log('[MDBook] heartbeat tick=' + MDBook.Scheduler._localTick + ' gen=' + gen)
    }

    // pulse: roda engine
    if (MDBook.Scheduler._localTick % MDBook.Scheduler.pulseEvery === 0) {
      if (MDBook.Engine && MDBook.Engine.rollTime) {
        var players = server.players
        if (players && players.length) {
          for (var i = 0; i < players.length; i++) {
            try {
              MDBook.Engine.rollTime(players[i])
            } catch (e) {
              if (MDBook.State && MDBook.State.debugEnabled && MDBook.State.debugEnabled(server)) {
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
  return { ok: true, started: true, gen: gen }
}

MDBook.Scheduler.stop = function (server) {
  var st = MDBookScheduler_getState(server)

  if (!st.running) {
    return { ok: false, reason: 'not_running', gen: Number(st.gen) }
  }

  st.running = false
  st.gen = Number(st.gen) + 1 // ✅ invalida qualquer loop pendente

  return { ok: true, stopped: true, gen: Number(st.gen) }
}

MDBook.Scheduler.status = function (server) {
  var st = MDBookScheduler_getState(server)
  return {
    ok: true,
    running: !!st.running,
    gen: Number(st.gen),
    intervalTicks: Number(MDBook.Scheduler.intervalTicks),
    pulseEvery: Number(MDBook.Scheduler.pulseEvery)
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
  )
})

console.log('[MDBook] scheduler loaded (command-driven)')
 