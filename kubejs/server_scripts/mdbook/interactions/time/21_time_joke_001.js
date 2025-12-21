// kubejs/server_scripts/mdbook/interactions/21_time_whisper_001.js
global.MDBook = global.MDBook || {}
var MDBook = global.MDBook



MDBook.defer(function () {
  MDBook.Engine.register({
    id: 'time.joke.001',
    kind: 'time',
    weight: 10,
    once: false,
    cooldownTicks: 20 * 60 * 10,

    say: '&7&o— Manual breathing activated! No need to thank me.&r'
  })
})
