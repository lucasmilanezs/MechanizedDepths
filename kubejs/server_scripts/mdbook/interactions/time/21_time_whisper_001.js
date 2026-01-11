// kubejs/server_scripts/mdbook/interactions/21_time_whisper_001.js
global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

console.log('[MDBook] loading interaction: time.whisper.001')

MDBook.defer(function () {
  console.log('[MDBook] registering interaction: time.whisper.001')

  MDBook.Engine.register({
    id: 'time.whisper.001',
    kind: 'time',
    weight: 10,
    once: false,
    cooldownTicks: 20 * 60 * 10,

    say: '&7&o— Você ainda não percebeu que está seguindo um roteiro que você mesmo escreveu.&r'
  })
})
