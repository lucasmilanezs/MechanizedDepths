// =============================================================================
// MDBook — interactions/time/21_time_batch_002.js
// Novo lote — mais piadas + eventos absurdos com logic
// =============================================================================

global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.001', kind: 'time', weight: 9, once: false,
  say: '&7&o— You googled something. The first result was a Reddit post where someone said "just check the wiki." The wiki was wrong.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.002', kind: 'time', weight: 9, once: false,
  say: '&7&o— The "misc" chest has a second "misc" chest next to it now. This is how it starts.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.003', kind: 'time', weight: 8, once: false,
  say: '&7&o— You renamed a chest. You felt better. Nothing changed. This is called coping.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.004', kind: 'time', weight: 3, once: false,
  say: '&7&o— That cable is still there. You know the one.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.005', kind: 'time', weight: 8, once: false,
  say: '&7&o— GTNH has over 3900 quests. I mention this not to impress you, but to provide context for your life choices.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.006', kind: 'time', weight: 7, once: false,
  say: '&7&o— Immersive Engineering is beautiful. You will break its multiblocks at least once. Everyone does.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.007', kind: 'time', weight: 7, once: false,
  say: '&7&o— You will automate something you didn\'t need to automate. You will feel no regret. This is the mindset.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.008', kind: 'time', weight: 7, once: false,
  say: '&7&o— There is a machine for that. Whatever "that" is. There is a machine.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.009', kind: 'time', weight: 6, once: false,
  say: '&7&o— Mods have config files. Nobody reads the config files. The config files contain the answer to at least one of your current problems.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.011', kind: 'time', weight: 6, once: false,
  say: '&7&o— Botania exists. It calls itself "natural magic."  I\'ll pretend it isn\'t. a tech mod with a magic resourcepack.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.013', kind: 'time', weight: 5, once: false,
  say: '&7&o— Divine Journey 2 is three hundred hours of content with the pacing of a meditation retreat. And I love it.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.014', kind: 'time', weight: 5, once: false,
  say: '&7&o— You could have just mined it by hand. You spent four days automating it instead. The math works out eventually. Probably.&r'
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.b2.015', kind: 'time', weight: 5, once: false,
  say: '&7&o— Refined Storage is AE2 but easier. AE2 players consider this an insult. They are not wrong.&r'
})})

// --- COMIC --------------------------------------------------------

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.pufferfish', kind: 'time', weight: 2, once: true,
  say: '&7&o— Here. You will need it.&r',
  logic: function (ctx) {
    ctx.player.give('minecraft:pufferfish')
  }
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.cave_sound', kind: 'time', weight: 2, once: false,
  logic: function (ctx) {
    var p = ctx.player
    var s = ctx.server
    s.runCommandSilent('playsound minecraft:ambient.cave ambient ' + p.username + ' ' + p.x + ' ' + p.y + ' ' + p.z + ' 1.0 1.0')
    s.scheduleInTicks(20 * 5, function() {
      p.tell('§7§o— Holy moly! ...That was creepy.§r')
    })
  }
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.lightning', kind: 'time', weight: 1, once: true,
  say: '&7&o— I did not do that.&r',
  logic: function (ctx) {
    var p = ctx.player
    var s = ctx.server
    s.runCommandSilent('summon minecraft:lightning_bolt ' + (p.x + 10) + ' ' + p.y + ' ' + p.z)
  }
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.xp', kind: 'time', weight: 2, once: true,
  say: '&7&o— You earned this. I\'m not sure what for. Neither are you.&r',
  logic: function (ctx) {
    ctx.player.give('minecraft:experience_bottle')
    ctx.player.give('minecraft:experience_bottle')
    ctx.player.give('minecraft:experience_bottle')
  }
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.ding', kind: 'time', weight: 2, once: true,
  say: '&7&o— Achievement unlocked: Exists.&r',
  logic: function (ctx) {
    var p = ctx.player
    var s = ctx.server
    s.runCommandSilent('playsound minecraft:entity.player.levelup master ' + p.username + ' ' + p.x + ' ' + p.y + ' ' + p.z + ' 0.5 1.0')
  }
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.egg', kind: 'time', weight: 1, once: true,
  say: '&7&o— Don\'t ask.&r',
  logic: function (ctx) {
    ctx.player.give('minecraft:egg', 64)
  }
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.nausea', kind: 'time', weight: 1, once: true,
  say: '&7&o— This will pass. Probably within twenty seconds. Definitely within thirty.&r',
  logic: function (ctx) {
    ctx.player.potionEffects.add('minecraft:nausea', 20 * 20, 0)
  }
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.wither_sound', kind: 'time', weight: 1, once: false,
  logic: function (ctx) {
    var p = ctx.player
    var s = ctx.server
    s.runCommandSilent('playsound minecraft:entity.wither.ambient hostile ' + p.username + ' ' + p.x + ' ' + p.y + ' ' + p.z + ' 0.4 1.0')
    s.scheduleInTicks(20 * 5, function() {
      p.tell('§7§o— That\'s not nearby. I checked. I think.§r')
    })}
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.slowness', kind: 'time', weight: 1, once: false,
  say: '&7&o— Slow down. Literally. Just for a moment.&r',
  logic: function (ctx) {
    ctx.player.potionEffects.add('minecraft:slowness', 20 * 8, 1)
  }
})})

MDBook.defer(function () { MDBook.Engine.register({
  id: 'time.event.bread', kind: 'time', weight: 2, once: false,
  say: '&7&o— You forgot to eat again. Here.&r',
  logic: function (ctx) {
    ctx.player.give('minecraft:bread')
  }
})})
