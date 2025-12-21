global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.Scheduler = {
  running: false,
  token: 0,
  tick: 0,

  intervalTicks: 20, 
  pulseEvery: 5,     
  _currentToken: null,

  start(server) {
    if (this.running) {
      return { ok: false, reason: 'already_running', token: this._currentToken }
    }

    this.running = true
    this.tick = 0
    this.token++
    this._currentToken = this.token

    var self = this
    var myToken = this._currentToken

    if (MDBook.State.debugEnabled(server)) {
      console.log('[MDBook] scheduler start token=' + myToken)
    }

    function loop() {
      if (!self.running || self._currentToken !== myToken) return

      self.tick++

      if (MDBook.State.debugEnabled(server)) {
        console.log('[MDBook] heartbeat tick=' + self.tick)
      }

      if (self.tick % self.pulseEvery === 0) {
        var players = server.players
        for (var i = 0; i < players.length; i++) {
          MDBook.Engine.rollTime(players[i])
        }
      }

      server.scheduleInTicks(self.intervalTicks, loop)
    }

    server.scheduleInTicks(this.intervalTicks, loop)
    return { ok: true, started: true, token: myToken }
  },

  stop() {
    if (!this.running) {
      return { ok: false, reason: 'not_running' }
    }

    this.running = false
    this._currentToken = null
    return { ok: true, stopped: true }
  },

  status() {
    return {
      running: this.running,
      tick: this.tick,
      token: this._currentToken
    }
  }
}

ServerEvents.commandRegistry(event => {
  const Commands = event.commands

  event.register(
    Commands.literal('mdbook')
      .then(
        Commands.literal('start')
          .executes(ctx => {
            const res = MDBook.Scheduler.start(ctx.source.server)
            ctx.source.sendSuccess(Text.of('[MDBook] ' + JSON.stringify(res)), false)
            return res.ok ? 1 : 0
          })
      )
      .then(
        Commands.literal('stop')
          .executes(ctx => {
            const res = MDBook.Scheduler.stop()
            ctx.source.sendSuccess(Text.of('[MDBook] ' + JSON.stringify(res)), false)
            return res.ok ? 1 : 0
          })
      )
      .then(
        Commands.literal('status')
          .executes(ctx => {
            ctx.source.sendSuccess(
              Text.of('[MDBook] ' + JSON.stringify(MDBook.Scheduler.status())),
              false
            )
            return 1
          })
      )
  )
})

console.log('[MDBook] scheduler + commands loaded')
