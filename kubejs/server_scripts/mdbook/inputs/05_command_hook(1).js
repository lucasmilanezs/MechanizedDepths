// =============================================================================
// MDBook — 05_command_hook.js                                           v3.0
// Depende de: 00_registry.js, 01_state.js, 03_engine.js
//
// Comandos disponíveis:
//   /mdbook roll                     — sorteia e dispara uma interação 'time'
//                                      (chamado pelo FTBQ timer como reward)
//   /mdbook hook <id> [payload]      — disparo normal de um hook
//   /mdbook hookf <id> [payload]     — disparo forçado (ignora elegibilidade)
//   /mdbook debug <true|false>       — ativa/desativa log de debug
//   /mdbook list                     — lista interações registradas
//   /mdbook resetSeen <id|all>       — limpa seen/cooldown de interações
//   /mdbook session reset            — gera novo sessionId
// =============================================================================

global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

ServerEvents.commandRegistry(function (event) {
  var StringArgumentType = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType')
  var Commands = event.commands

  event.register(
    Commands.literal('mdbook')

      // --- /mdbook roll -------------------------------------------------------
      // Ponto de entrada para interações 'time'.
      // O FTBQ timer chama este comando periodicamente via reward.
      .then(
        Commands.literal('roll')
          .executes(function (ctx) {
            var player = ctx.source.player
            if (!player) {
              ctx.source.sendFailure(Text.of('[MDBook] Execute como player.'))
              return 0
            }
            var res = MDBook.Engine.rollTime(player)
            if (MDBook.State.debugEnabled(ctx.source.server)) {
              ctx.source.sendSuccess(Text.of('[MDBook] roll: ' + JSON.stringify(res)), false)
            }
            return res.ok ? 1 : 0
          })
      )

      // --- /mdbook hook <id> [payload] ----------------------------------------
      .then(
        Commands.literal('hook')
          .then(
            Commands.argument('id', StringArgumentType.string())
              .suggests(function (ctx, builder) {
                var ids = MDBook.Registry.all()
                for (var i = 0; i < ids.length; i++) builder.suggest(ids[i].id)
                return builder.buildFuture()
              })
              .executes(function (ctx) {
                return MDBook.Cmd.runHook(ctx, null, false)
              })
              .then(
                Commands.argument('payload', StringArgumentType.greedyString())
                  .executes(function (ctx) {
                    return MDBook.Cmd.runHook(ctx, StringArgumentType.getString(ctx, 'payload'), false)
                  })
              )
          )
      )

      // --- /mdbook hookf <id> [payload]  (force) ------------------------------
      .then(
        Commands.literal('hookf')
          .then(
            Commands.argument('id', StringArgumentType.string())
              .suggests(function (ctx, builder) {
                var ids = MDBook.Registry.all()
                for (var i = 0; i < ids.length; i++) builder.suggest(ids[i].id)
                return builder.buildFuture()
              })
              .executes(function (ctx) {
                return MDBook.Cmd.runHook(ctx, null, true)
              })
              .then(
                Commands.argument('payload', StringArgumentType.greedyString())
                  .executes(function (ctx) {
                    return MDBook.Cmd.runHook(ctx, StringArgumentType.getString(ctx, 'payload'), true)
                  })
              )
          )
      )

      // --- /mdbook debug <true|false> -----------------------------------------
      .then(
        Commands.literal('debug')
          .then(
            Commands.argument('enabled', StringArgumentType.word())
              .executes(function (ctx) {
                var raw = (StringArgumentType.getString(ctx, 'enabled') + '').toLowerCase()
                var v   = (raw === 'true' || raw === '1' || raw === 'on' || raw === 'yes')
                MDBook.State.setDebug(ctx.source.server, v)
                ctx.source.sendSuccess(Text.of('[MDBook] debug=' + v), true)
                return 1
              })
          )
      )

      // --- /mdbook list -------------------------------------------------------
          .then(
            Commands.literal('list')
              .executes(function (ctx) {
                var arr = MDBook.Registry ? MDBook.Registry.all() : []
                ctx.source.sendSuccess(Text.of('[MDBook] Total interactions: ' + arr.length), false)
                for (var i = 0; i < arr.length; i++) {
                  ctx.source.sendSuccess(Text.of('  ' + arr[i].id + ' [' + arr[i].kind + ']'), false)
                }
                return 1
              })
          )

      // --- /mdbook resetSeen <id|all> -----------------------------------------
      .then(
        Commands.literal('resetSeen')
          .then(
            Commands.argument('id', StringArgumentType.string())
              .executes(function (ctx) {
                return MDBook.Cmd.resetSeen(ctx, StringArgumentType.getString(ctx, 'id'))
              })
          )
      )

      // --- /mdbook session reset ----------------------------------------------
      // Gera novo sessionId, invalidando todos os sessionOnce ativos.
      .then(
        Commands.literal('session')
          .then(
            Commands.literal('reset')
              .executes(function (ctx) {
                MDBook.sessionId = 'manual:' + (Date.now().toString(36) + Math.random().toString(36).slice(2))
                ctx.source.sendSuccess(Text.of('[MDBook] sessionId reset -> ' + MDBook.sessionId), false)
                return 1
              })
          )
      )
  )
})

// ---------------------------------------------------------------------------
// MDBook.Cmd — handlers separados do registro Brigadier
// ---------------------------------------------------------------------------
MDBook.Cmd = {

  _parsePayload: function (server, raw) {
    if (!raw) return {}
    var s = String(raw).trim()
    if (!s.length) return {}
    try {
      return JSON.parse(s)
    } catch (e) {
      if (MDBook.State.debugEnabled(server)) {
        console.log('[MDBook] payload inválido (ignorado): ' + s + ' | erro: ' + e)
      }
      return {}
    }
  },

  runHook: function (ctx, payloadRaw, force) {
    var source = ctx.source
    var player = source.player
    if (!player) { source.sendFailure(Text.of('[MDBook] Execute como player.')); return 0 }

    var StringArgumentType = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType')
    var id = (StringArgumentType.getString(ctx, 'id') + '').trim()

    if (!MDBook.Registry) { source.sendFailure(Text.of('[MDBook] Registry não carregado.')); return 0 }
    if (!MDBook.Registry.has(id)) { source.sendFailure(Text.of('[MDBook] Id desconhecido: ' + id)); return 0 }

    if (MDBook.State.debugEnabled(source.server)) {
      console.log('[MDBook][DBG] hook id="' + id + '" force=' + !!force)
    }

    var payload = this._parsePayload(source.server, payloadRaw)
    var res = force
      ? MDBook.Engine.triggerForce(player, id, payload, { source: 'command', force: true })
      : MDBook.Engine.trigger(player, id, payload, { source: 'command' })

    if (!res.ok && MDBook.State.debugEnabled(source.server)) {
      source.sendSuccess(Text.of('[MDBook] bloqueado (' + res.reason + ') id=' + id), false)
    }

    return res.ok ? 1 : 0
  },

  resetSeen: function (ctx, idRaw) {
    var source = ctx.source
    var player = source.player
    if (!player) { source.sendFailure(Text.of('[MDBook] Execute como player.')); return 0 }

    var id   = (idRaw + '').trim()
    var root = MDBook.State.playerRoot(player)

    if (id === 'all') {
      root.seen        = {}
      root.cooldowns   = {}
      root.sessionSeen = {}
      source.sendSuccess(Text.of('[MDBook] resetSeen: all'), true)
      return 1
    }

    if (root.seen        && root.seen[id])        delete root.seen[id]
    if (root.cooldowns   && root.cooldowns[id])   delete root.cooldowns[id]
    if (root.sessionSeen && root.sessionSeen[id]) delete root.sessionSeen[id]

    source.sendSuccess(Text.of('[MDBook] resetSeen: ' + id), true)
    return 1
  }
}
