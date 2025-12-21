global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.Rules = {
  isEligible: function (def, ctx) {
    var p = ctx.player
    if (!p) return false

    if (def.once && MDBook.State.hasSeen(p, def.id)) return false

    var until = MDBook.State.cooldownUntil(p, def.id)
    if (until > 0 && ctx.gameTime < until) return false

    if (typeof def.requirements === 'function') {
      try {
        if (!def.requirements(ctx)) return false
      } catch (e) {
        if (ctx && ctx.debug) ctx.debug('[MDBook] requirements() error on ' + def.id + ': ' + e)
        return false
      }
    }

    return true
  }
}

console.log('[MDBook] rules loaded')
