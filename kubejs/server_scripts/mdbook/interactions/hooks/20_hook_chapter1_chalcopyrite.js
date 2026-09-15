global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.defer(function () {

  MDBook.Engine.register({
    id: 'general.chalcopyrite',
    kind: 'hook',
    once: false,
    cooldownTicks: 20 * 5,

    say: function (ctx) {
      return "&7&o— That's copper! Well... kinda.&r"
    },
  })
})
