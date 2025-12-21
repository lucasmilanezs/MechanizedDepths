global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

console.log('[MDBook] loading interaction: chapter1.crafting_table')

MDBook.defer(function () {
  console.log('[MDBook] registering interaction: chapter1.crafting_table')

  MDBook.Engine.register({
    id: 'chapter1.crafting_table',
    kind: 'hook',
    once: true,
    cooldownTicks: 20 * 5,

    say: function (ctx) {
      return '&7&o— Tá. Agora você começou a fingir que sabe o que está fazendo.&r'
    },

    logic: function (ctx) {
      var n = MDBook.State.incCounter(ctx.player, 'crafted_table_hooks', 1)
      if (ctx.debug) ctx.debug('[MDBook] counter crafted_table_hooks=' + n)
    }
  })
})
