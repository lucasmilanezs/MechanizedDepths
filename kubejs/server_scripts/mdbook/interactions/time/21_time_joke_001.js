global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.defer(function () {
  MDBook.Engine.register({
    id: 'time.joke.001',
    kind: 'time',
    weight: 8,
    once: false,
    sessionOnce: false,
    say: '&7&o— Manual breathing activated! No need to thank me.&r'
  })
});
