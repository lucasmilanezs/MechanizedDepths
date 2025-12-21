// kubejs/server_scripts/mdbook/core/01_state.js
global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

MDBook.State = {
  _ensure: function (root) {
    if (root.seen === undefined) root.seen = {}
    if (root.cooldowns === undefined) root.cooldowns = {}
    if (root.flags === undefined) root.flags = {}
    if (root.counters === undefined) root.counters = {}
    if (root.lastTimeRollAt === undefined) root.lastTimeRollAt = 0
    return root
  },

  playerRoot: function (player) {
    if (player.persistentData.mdbook === undefined) player.persistentData.mdbook = {}
    return this._ensure(player.persistentData.mdbook)
  },

  debugEnabled: function (server) {
    if (server.persistentData.mdbook === undefined) server.persistentData.mdbook = {}
    return !!server.persistentData.mdbook.debug
  },

  setDebug: function (server, enabled) {
    if (server.persistentData.mdbook === undefined) server.persistentData.mdbook = {}
    server.persistentData.mdbook.debug = !!enabled
  },

  hasSeen: function (player, id) {
    return !!this.playerRoot(player).seen[id]
  },

  markSeen: function (player, id) {
    this.playerRoot(player).seen[id] = true
  },

  cooldownUntil: function (player, id) {
    var v = this.playerRoot(player).cooldowns[id]
    return Number(v === undefined ? 0 : v)
  },

  setCooldownUntil: function (player, id, until) {
    this.playerRoot(player).cooldowns[id] = Number(until)
  },

  getCounter: function (player, key) {
    var v = this.playerRoot(player).counters[key]
    return Number(v === undefined ? 0 : v)
  },

  incCounter: function (player, key, by) {
    var root = this.playerRoot(player)
    var cur = root.counters[key]
    if (cur === undefined) cur = 0
    var add = (by === undefined ? 1 : by)
    root.counters[key] = Number(cur) + Number(add)
    return root.counters[key]
  }
}

console.log('[MDBook] state loaded')
