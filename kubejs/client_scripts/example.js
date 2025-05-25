// priority: 0

// Visit the wiki for more info - https://kubejs.com/

console.info('Hello, World! (Loaded client scripts)')

ClientEvents.blockRenderLayer(event => {
  event.put('kubejs:vitrified_obsidian', 'translucent')
})
