global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.defer(function () {

  MDBook.Engine.register({
    id: 'general.cat',
    kind: 'hook',
    once: false,
    cooldownTicks: 20 * 5,

    say: function (ctx) {
      return "&7&o— A cat! Pspspspspspspsp. Don't you dare hurt it. Feel me?&r"
    },
  })
})
