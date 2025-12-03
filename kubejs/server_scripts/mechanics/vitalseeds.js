ItemEvents.rightClicked('kubejs:rose_needle', event => {
  if (!event.target || !event.target.block) return
  if (event.level.isClientSide()) return  // evita rodar no cliente

  const player = event.player
  const block  = event.target.block
  const pos    = block.pos
  const lvl    = event.level

  // Apenas no trigo
  if (block.id !== 'minecraft:wheat') return

  // Dano no jogador (meio coração)
  player.attack(1.0)

  // Quebra sem dropar o trigo
  lvl.destroyBlock(pos, false)

  // Define qual planta será colocada — 50% de chance para cada
  const crops = [
    'vital_herbs:bleeding_heart_plant',
    'vital_herbs:needle_heart_plant'
  ]
  const chosenCrop = crops[Math.floor(Math.random() * crops.length)]

  // Coloca a planta escolhida no tick seguinte
  event.server.scheduleInTicks(1, () => {
    const crop = Block.getBlock(chosenCrop)
    if (!crop) {
      player.tell(`§c[vh] Bloco '${chosenCrop}' não encontrado.`)
      return
    }
    lvl.setBlockAndUpdate(pos, crop.defaultBlockState())
  })

  // Feedback visual
  event.server.runCommandSilent(`particle minecraft:poof ${pos.x + 0.5} ${pos.y + 0.8} ${pos.z + 0.5} 0.2 0.2 0.2 0 6 normal @a`)
  lvl.playSound(null, pos.x + 0.5, pos.y + 0.5, z + 0.5, 'minecraft:block.crop.break', 'blocks', 0.8, 1.0)
})
