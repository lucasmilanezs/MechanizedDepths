// kubejs/server_scripts/mdbook/inputs/05_command_hook.js
global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

ServerEvents.commandRegistry(function (event) {
  var StringArgumentType = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType')
  var Commands = event.commands

  event.register(
    Commands.literal('mdbook')

      // /mdbook hook <id> [payload]
      .then(
        Commands.literal('hook')
          .then(
            Commands.argument('id', StringArgumentType.string())
              .executes(function (ctx) { return MDBookCmd_run(ctx, null, false) })
              .then(
                Commands.argument('payload', StringArgumentType.greedyString())
                  .executes(function (ctx) {
                    var payloadRaw = StringArgumentType.getString(ctx, 'payload')
                    return MDBookCmd_run(ctx, payloadRaw, false)
                  })
              )
          )
      )

      // ✅ /mdbook hookf <id> [payload]  (force)
      .then(
        Commands.literal('hookf')
          .then(
            Commands.argument('id', StringArgumentType.string())
              .executes(function (ctx) { return MDBookCmd_run(ctx, null, true) })
              .then(
                Commands.argument('payload', StringArgumentType.greedyString())
                  .executes(function (ctx) {
                    var payloadRaw = StringArgumentType.getString(ctx, 'payload')
                    return MDBookCmd_run(ctx, payloadRaw, true)
                  })
              )
          )
      )

      // /mdbook debug <true|false>
      .then(
        Commands.literal('debug')
          .then(
            Commands.argument('enabled', StringArgumentType.word())
              .executes(function (ctx) {
                var enabled = (StringArgumentType.getString(ctx, 'enabled') + '').toLowerCase()
                var v = (enabled === 'true' || enabled === '1' || enabled === 'on' || enabled === 'yes')
                MDBook.State.setDebug(ctx.source.server, v)
                ctx.source.sendSuccess(Text.of('[MDBook] debug=' + v), true)
                return 1
              })
          )
      )

      // /mdbook list
      .then(
        Commands.literal('list')
          .executes(function (ctx) {
            var arr = (MDBook && MDBook.Registry) ? MDBook.Registry.all() : []
            ctx.source.sendSuccess(Text.of('[MDBook] registered: ' + arr.length), false)
            for (var i = 0; i < arr.length; i++) ctx.source.sendSuccess(Text.of(' - ' + arr[i].id), false)
            return 1
          })
      )

      // ✅ /mdbook resetSeen <id|all>
      .then(
        Commands.literal('resetSeen')
          .then(
            Commands.argument('id', StringArgumentType.string())
              .executes(function (ctx) {
                var id = StringArgumentType.getString(ctx, 'id')
                return MDBookCmd_resetSeen(ctx, id)
              })
          )
      )
  )
})

function MDBookCmd_safeParseJson(raw) {
  if (!raw) return {}
  var s = String(raw).trim()
  if (!s.length) return {}
  try { return JSON.parse(s) } catch (e) { return { _raw: s } }
}

function MDBookCmd_run(ctx, payloadRaw, force) {
  var source = ctx.source
  var player = source.player
  if (!player) { source.sendFailure(Text.of('[MDBook] Run as player.')); return 0 }

  var StringArgumentType = Java.loadClass('com.mojang.brigadier.arguments.StringArgumentType')
  var id = (StringArgumentType.getString(ctx, 'id') + '').trim()

  if (!MDBook || !MDBook.Registry) { source.sendFailure(Text.of('[MDBook] Registry not loaded.')); return 0 }

  if (MDBook.State && MDBook.State.debugEnabled && MDBook.State.debugEnabled(source.server)) {
    source.sendSuccess(Text.of('[MDBook][DBG] id="' + id + '" | regs=' + MDBook.Registry.all().length + ' | force=' + !!force), false)
  }

  if (!MDBook.Registry.has(id)) { source.sendFailure(Text.of('[MDBook] Unknown interaction id: ' + id)); return 0 }

  var payload = MDBookCmd_safeParseJson(payloadRaw)

  // ✅ trigger normal vs force
  var res = force
    ? MDBook.Engine.triggerForce(player, id, payload, { source: 'ftbq_command', force: true })
    : MDBook.Engine.trigger(player, id, payload, { source: 'ftbq_command' })

  if (!res.ok && MDBook.State.debugEnabled(source.server)) {
    source.sendSuccess(Text.of('[MDBook] blocked (' + res.reason + ') id=' + id), false)
  }

  return res.ok ? 1 : 0
}

function MDBookCmd_resetSeen(ctx, idRaw) {
  var source = ctx.source
  var player = source.player
  if (!player) { source.sendFailure(Text.of('[MDBook] Run as player.')); return 0 }

  var id = (idRaw + '').trim()
  var root = MDBook.State.playerRoot(player)

  if (id === 'all') {
    root.seen = {}
    root.cooldowns = {}
    source.sendSuccess(Text.of('[MDBook] resetSeen: all'), true)
    return 1
  }

  if (root.seen && root.seen[id]) delete root.seen[id]
  if (root.cooldowns && root.cooldowns[id]) delete root.cooldowns[id]

  source.sendSuccess(Text.of('[MDBook] resetSeen: ' + id), true)
  return 1
}
