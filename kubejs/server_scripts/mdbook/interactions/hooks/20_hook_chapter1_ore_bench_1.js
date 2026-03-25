global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.defer(function () {
  console.log('[MDBook] registering interaction: chapter1.crafting_table')

  MDBook.Engine.register({
    id: 'chapter1.ore_bench_1',
    kind: 'hook',
    once: false,
    cooldownTicks: 20 * 5,

    logic: function (ctx) {
      var p = ctx.player
      var s = ctx.server
      s.scheduleInTicks(20*10, function() {
        p.give('kubejs:quest_book_1')
        p.tell("§7— I told you. I'm alright! Not a single scratch.")
        s.runCommandSilent('playsound custom:damage_dark master ' + p.username + ' ' + p.x + ' ' + p.y + ' ' + p.z + ' 1.0 1.0')
      })
    }
  })
})
