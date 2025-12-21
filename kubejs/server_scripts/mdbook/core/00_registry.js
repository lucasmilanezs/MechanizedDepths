global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

if (MDBook.__pending === undefined) MDBook.__pending = []

MDBook.defer = function (fn) {
  if (MDBook.Engine && MDBook.Engine.register) {
    try { fn() } catch (e) { console.log('[MDBook] defer immediate failed: ' + e) }
    return
  }
  MDBook.__pending.push(fn)
}

MDBook.Registry = {
  defs: new Map(),

  register: function (def) {
    if (!def || !def.id) throw new Error('[MDBook] Interaction missing id: ' + def)
    if (this.defs.has(def.id)) throw new Error('[MDBook] Duplicate interaction id: ' + def.id)

    if (!def.kind) def.kind = (def.hookId ? 'hook' : 'time')
    if (def.weight === undefined) def.weight = 1

    this.defs.set(def.id, def)
  },

  has: function (id) { return this.defs.has(id) },
  get: function (id) { return this.defs.get(id) },

  all: function () { return Array.from(this.defs.values()) },

  allTime: function () {
    var arr = this.all()
    var out = []
    for (var i = 0; i < arr.length; i++) {
      if (arr[i].kind === 'time') out.push(arr[i])
    }
    return out
  }
}

console.log('[MDBook] registry loaded; pending=' + MDBook.__pending.length)
