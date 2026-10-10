global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.defer(function () {

  MDBook.Engine.register({
    id: 'chapter1.holosphere',
    kind: 'hook',
    once: false,
    cooldownTicks: 20 * 5,
    
    say: function (ctx) {
      return "&7&o— That mysterious looking ball is Tetra's best friend. Treat it well.&r"
    },
    logic: function (ctx) {
    var p = ctx.player
    var s = ctx.server
    s.scheduleInTicks(20 * 10, function() {
    p.tell('§7§o— Yeah, I know. You got one already. Just in case you lose it. Not trying to call you stupid or anything like that.§r')
    })
    }
  })
})
