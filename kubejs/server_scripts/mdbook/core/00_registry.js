// =============================================================================
// MDBook — 00_registry.js
// Ponto de entrada obrigatório. Deve ser o PRIMEIRO arquivo carregado.
//
// Responsabilidades:
//   - Inicializar o namespace global MDBook
//   - Manter o registry de definições de interações
//   - Prover MDBook.defer() para registros seguros de interações
//
// Contrato de uma definição (def):
//   id          {string}    Obrigatório. Único. Ex: 'chapter1.crafting_table'
//   kind        {string}    'hook' | 'time'. Default: 'hook'
//   once        {boolean}   Se true, dispara apenas uma vez por player (persistente)
//   sessionOnce {boolean}   Se true, dispara apenas uma vez por sessão de jogo
//   weight      {number}    Peso para o sorteio de interações 'time'. Default: 1
//   say         {string|function(ctx):string}   Mensagem ao player
//   logic       {function(ctx)}                 Efeitos colaterais
//   requirements{function(ctx):boolean}         Condição extra de elegibilidade
//
//   [Legado — evitar em novas interações]
//   cooldownTicks {number}  Cooldown em ticks baseado em gameTime.
//                           Não confiável quando gameTime=0. Prefira sessionOnce.
// =============================================================================

global.MDBook = global.MDBook || {}
var MDBook = global.MDBook

// Fila de registros pendentes, usada antes do Engine estar disponível.
// Populada por MDBook.defer(); drenada pelo Engine ao inicializar.
if (MDBook.__pending === undefined) MDBook.__pending = []

// ---------------------------------------------------------------------------
// MDBook.defer
// Executa fn imediatamente se o Engine já estiver pronto, ou enfileira.
// Toda interação deve ser registrada dentro de defer() para garantir que
// o Engine exista independentemente da ordem de carregamento dos arquivos.
// ---------------------------------------------------------------------------
MDBook.defer = function (fn) {
  if (MDBook.Engine && MDBook.Engine.register) {
    try {
      fn()
    } catch (e) {
      console.log('[MDBook] defer (immediate) falhou: ' + e)
    }
    return
  }
  MDBook.__pending.push(fn)
}

// ---------------------------------------------------------------------------
// MDBook.Registry
// Armazena definições indexadas por id e por kind para evitar filtragem
// repetida em tempo de execução.
// ---------------------------------------------------------------------------
MDBook.Registry = {
  _all:  new Map(), // id -> def
  _time: [],        // cache das defs kind='time', mantido sincronizado

  // Registra uma definição. Lança erro em caso de id duplicado ou ausente.
  register: function (def) {
    if (!def || !def.id) {
      throw new Error('[MDBook] Interação sem id: ' + JSON.stringify(def))
    }
    if (this._all.has(def.id)) {
      throw new Error('[MDBook] Id duplicado: ' + def.id)
    }

    // Defaults
    if (!def.kind)              def.kind   = (def.hookId ? 'hook' : 'time')
    if (def.weight === undefined) def.weight = 1

    this._all.set(def.id, def)
    if (def.kind === 'time') this._time.push(def)
  },

  has:     function (id) { return this._all.has(id) },
  get:     function (id) { return this._all.get(id) },
  all:     function ()   { return Array.from(this._all.values()) },

  // Retorna o cache pré-filtrado — zero custo por chamada.
  allTime: function ()   { return this._time }
}

console.log('[MDBook] registry carregado | pending=' + MDBook.__pending.length)
