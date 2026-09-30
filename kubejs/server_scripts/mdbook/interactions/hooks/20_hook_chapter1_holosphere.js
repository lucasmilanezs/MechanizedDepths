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
  })
})
