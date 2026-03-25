global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.defer(function () {
  MDBook.Engine.register({
    id: 'time.whisper.001',
    kind: 'time',
    weight: 10,
    once: false,
    cooldownTicks: 20 * 60 * 10,

    say: '&7&o— Você ainda não percebeu que está seguindo um roteiro que você mesmo escreveu.&r'
  })
})
