global.MDBook = global.MDBook || {}
var MDBook = global.MDBook


MDBook.defer(function () {

  MDBook.Engine.register({
    id: 'general.killed_cat',
    kind: 'hook',
    once: false,
    cooldownTicks: 20 * 10, 

    say: function (ctx) {
      return '&7&o— I &c&lwarned&r&7&o you.&r'
    },

    logic: function (ctx) {
      var p = ctx.player
      var DURATION = 20 * 60 * 60 

      var NEG = [
        'minecraft:blindness',
        'minecraft:darkness',
        'minecraft:hunger',
        'minecraft:nausea',
        'minecraft:poison',
        'minecraft:slowness',
        'minecraft:weakness',
        'minecraft:mining_fatigue',
        'minecraft:wither',
        'minecraft:levitation',
        'minecraft:unluck'
      ]

      for (var i = 0; i < NEG.length; i++) {
        try {
          p.potionEffects.add(NEG[i], DURATION, 0)
        } catch (e) {
          if (ctx.debugEnabled) {
            ctx.debug('[MDBook] failed to add effect ' + NEG[i] + ': ' + e)
          }
        }
      }
    }
  })
})
