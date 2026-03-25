// =============================================================================
// MDBook — 02_rules.js                                                  v3.0
// Depende de: 00_registry.js, 01_state.js
//
// Responsabilidade única:
//   Determinar se uma definição é elegível para disparo dado um contexto.
//   Sem efeitos colaterais — apenas lê estado.
//   O Engine não toma decisões de elegibilidade; delega inteiramente a Rules.
// =============================================================================

global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.Rules = {

  isEligible: function (def, ctx) {
    var p = ctx.player
    if (!p) return false

    // Bloqueio permanente
    if (def.once && MDBook.State.hasSeen(p, def.id)) return false

    // Bloqueio por sessão
    if (def.sessionOnce && MDBook.State.hasSeenThisSession(p, def.id)) return false

    // [LEGADO] Cooldown por gameTime.
    // Só aplica quando gameTime > 0 (clock confiável).
    if (def.cooldownTicks) {
      var until = MDBook.State.cooldownUntil(p, def.id)
      if (until > 0 && ctx.gameTime > 0 && ctx.gameTime < until) return false
    }

    // Condição customizada da interação
    if (typeof def.requirements === 'function') {
      try {
        if (!def.requirements(ctx)) return false
      } catch (e) {
        ctx.log('[MDBook] requirements() erro em ' + def.id + ': ' + e)
        return false
      }
    }

    return true
  }
}

console.log('[MDBook] rules carregado')
