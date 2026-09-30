// Rose Needle: wheat -> one of the two basic vital herbs.
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
  lvl.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 'minecraft:block.crop.break', 'blocks', 0.8, 1.0)
})

// A player drop is the only trigger. The scheduled callbacks observe only this
// one item entity; there is no Nether-wide tick handler or entity scan.
ItemEvents.dropped('kubejs:rose_needle', event => {
  if (event.player.level.dimension !== 'minecraft:the_nether') return

  const needleEntity = event.itemEntity
  const ritualPlayer = event.player
  const server = event.server
  const md_urn_level = needleEntity.level
  const md_urn_redDust = Java.loadClass('net.minecraft.core.particles.DustParticleOptions').REDSTONE
  const md_urn_lavaDrip = Java.loadClass('net.minecraft.core.particles.ParticleTypes').DRIPPING_LAVA
  const md_urn_starX = [0.0, 1.293127, -2.092324, 2.092324, -1.293127, 0.0]
  const md_urn_starZ = [-2.2, 1.779837, -0.679837, -0.679837, 1.779837, -2.2]
  const md_urn_ritualRadius = 2.2
  const md_urn_drawStages = 100
  let md_urn_anchorX = 0.0
  let md_urn_anchorY = 0.0
  let md_urn_anchorZ = 0.0

  function md_underworldNeedlePillar(stage) {
    if (!needleEntity.isAlive() || needleEntity.item.id !== 'kubejs:rose_needle') return

    const md_urn_pillarX = md_urn_anchorX
    const md_urn_pillarY = md_urn_anchorY
    const md_urn_pillarZ = md_urn_anchorZ

    // A narrower, lighter five-block column follows the completed drawing.
    md_urn_level.spawnParticles(md_urn_redDust, true, md_urn_pillarX, md_urn_pillarY + 2.5, md_urn_pillarZ, 0.18, 2.5, 0.18, 120, 0.012)
    md_urn_level.spawnParticles(md_urn_redDust, true, md_urn_pillarX, md_urn_pillarY + 2.5, md_urn_pillarZ, 0.38, 2.5, 0.38, 60, 0.025)
    md_urn_level.spawnParticles(md_urn_lavaDrip, true, md_urn_pillarX, md_urn_pillarY + 4.9, md_urn_pillarZ, 0.35, 0.15, 0.35, 30, 0.01)

    if (stage < 5) {
      server.scheduleInTicks(5, () => md_underworldNeedlePillar(stage + 1))
      return
    }

    needleEntity.setItem(Item.of('kubejs:underworld_rose_needle'))
    needleEntity.setNoPickUpDelay()
    md_urn_level.playSound(null, md_urn_pillarX, md_urn_pillarY, md_urn_pillarZ, 'minecraft:block.respawn_anchor.charge', 'blocks', 0.8, 0.65)
  }

  function md_underworldNeedlePentagram(stage) {
    if (!needleEntity.isAlive() || needleEntity.item.id !== 'kubejs:rose_needle') return

    const md_urn_pointsPerEdge = md_urn_drawStages / 5
    const md_urn_segment = Math.floor(stage / md_urn_pointsPerEdge)
    const md_urn_edgeProgress = (stage % md_urn_pointsPerEdge + 1) / md_urn_pointsPerEdge
    const md_urn_totalProgress = (stage + 1) / md_urn_drawStages
    const md_urn_drawX = md_urn_anchorX + md_urn_starX[md_urn_segment] + (md_urn_starX[md_urn_segment + 1] - md_urn_starX[md_urn_segment]) * md_urn_edgeProgress
    const md_urn_drawZ = md_urn_anchorZ + md_urn_starZ[md_urn_segment] + (md_urn_starZ[md_urn_segment + 1] - md_urn_starZ[md_urn_segment]) * md_urn_edgeProgress
    const md_urn_circleAngle = -Math.PI / 2 + Math.PI * 2 * md_urn_totalProgress
    const md_urn_circleX = md_urn_anchorX + Math.cos(md_urn_circleAngle) * md_urn_ritualRadius
    const md_urn_circleZ = md_urn_anchorZ + Math.sin(md_urn_circleAngle) * md_urn_ritualRadius

    // Preserve the previously working one-point-per-tick star and draw the
    // circle independently at the exact same circumradius as its five tips.
    md_urn_level.spawnParticles(md_urn_lavaDrip, true, md_urn_drawX, md_urn_anchorY, md_urn_drawZ, 0.01, 0.006, 0.01, 8, 0.001)
    md_urn_level.spawnParticles(md_urn_lavaDrip, true, md_urn_circleX, md_urn_anchorY, md_urn_circleZ, 0.01, 0.006, 0.01, 8, 0.001)

    if (stage < md_urn_drawStages - 1) {
      server.scheduleInTicks(1, () => md_underworldNeedlePentagram(stage + 1))
      return
    }

    // Re-emit the entire ring at closure. This keeps it simultaneously visible
    // instead of relying on the earliest droplets to survive the five-second draw.
    let md_urn_ringAngle
    let md_urn_ringX
    let md_urn_ringZ

    for (let md_urn_ringPoint = 0; md_urn_ringPoint < md_urn_drawStages; md_urn_ringPoint++) {
      md_urn_ringAngle = -Math.PI / 2 + Math.PI * 2 * md_urn_ringPoint / md_urn_drawStages
      md_urn_ringX = md_urn_anchorX + Math.cos(md_urn_ringAngle) * md_urn_ritualRadius
      md_urn_ringZ = md_urn_anchorZ + Math.sin(md_urn_ringAngle) * md_urn_ritualRadius
      md_urn_level.spawnParticles(md_urn_lavaDrip, true, md_urn_ringX, md_urn_anchorY, md_urn_ringZ, 0.006, 0.004, 0.006, 5, 0.001)
    }

    console.info('[Rose Needle] Pentagram and circle drawing completed; pillar queued.')
    server.scheduleInTicks(15, () => md_underworldNeedlePillar(0))
  }

  function md_underworldNeedleTryStart(waitedTicks) {
    if (!needleEntity.isAlive() || needleEntity.item.id !== 'kubejs:rose_needle') return

    // A drop from a ledge may need longer than the initial half-second to land.
    if (!needleEntity.onGround() && waitedTicks < 60) {
      server.scheduleInTicks(5, () => md_underworldNeedleTryStart(waitedTicks + 5))
      return
    }

    const md_urn_floorX = Math.floor(needleEntity.x)
    const md_urn_floorY = Math.floor(needleEntity.y) - 1
    const md_urn_floorZ = Math.floor(needleEntity.z)
    let md_urn_hasRitualSpace = needleEntity.onGround()
    let md_urn_floorPos
    let md_urn_floorState
    let md_urn_clearPos

    // Require a full 5x5 floor and five clear blocks above it. This is checked
    // only after the Nether gate and only once this particular item has settled.
    // Keep loop working values outside the bodies for Rhino compatibility.
    for (let md_urn_dx = -2; md_urn_dx <= 2 && md_urn_hasRitualSpace; md_urn_dx++) {
      for (let md_urn_dz = -2; md_urn_dz <= 2 && md_urn_hasRitualSpace; md_urn_dz++) {
        md_urn_floorPos = new BlockPos(md_urn_floorX + md_urn_dx, md_urn_floorY, md_urn_floorZ + md_urn_dz)
        md_urn_floorState = md_urn_level.getBlockState(md_urn_floorPos)

        if (!md_urn_floorState.isCollisionShapeFullBlock(md_urn_level, md_urn_floorPos)) {
          md_urn_hasRitualSpace = false
          break
        }

        for (let md_urn_dy = 1; md_urn_dy <= 5; md_urn_dy++) {
          md_urn_clearPos = new BlockPos(md_urn_floorX + md_urn_dx, md_urn_floorY + md_urn_dy, md_urn_floorZ + md_urn_dz)
          if (!md_urn_level.getBlockState(md_urn_clearPos).isAir()) {
            md_urn_hasRitualSpace = false
            break
          }
        }
      }
    }

    if (!md_urn_hasRitualSpace) {
      ritualPlayer.tell('§cThe Rose Needle requires a flat, unobstructed 5x5 area for the ritual.')
      return
    }

    // Center the complete 4.4-block circle inside the validated 5x5 floor and
    // keep the item itself at the exact ritual origin.
    md_urn_anchorX = md_urn_floorX + 0.5
    md_urn_anchorY = md_urn_floorY + 1.08
    md_urn_anchorZ = md_urn_floorZ + 0.5
    needleEntity.setPos(md_urn_anchorX, needleEntity.y, md_urn_anchorZ)

    // Keep the item in-world until the longer drawing and column are complete.
    needleEntity.setPickUpDelay(240)
    console.info('[Rose Needle] Ritual area accepted; animation started.')
    md_underworldNeedlePentagram(0)
  }

  // Let the dropped item settle before validating and anchoring the ritual.
  server.scheduleInTicks(10, () => md_underworldNeedleTryStart(0))
})

// Underworld Rose Needle: planted carrots -> Snap Pepper or Tox Kiss.
ItemEvents.rightClicked('kubejs:underworld_rose_needle', event => {
  if (!event.target || !event.target.block) return
  if (event.level.isClientSide()) return

  const player = event.player
  const block = event.target.block
  const pos = block.pos
  const lvl = event.level
  if (block.id !== 'minecraft:carrots') return

  // The Nether-touched needle draws a little more blood than its surface form.
  player.attack(1.5)
  lvl.destroyBlock(pos, false)

  const crops = ['vital_herbs:snap_pepper_plant', 'vital_herbs:tox_kiss_plant']
  const chosenCrop = crops[Math.floor(Math.random() * crops.length)]

  event.server.scheduleInTicks(1, () => {
    const crop = Block.getBlock(chosenCrop)
    if (!crop) {
      player.tell(`§c[vh] Bloco '${chosenCrop}' não encontrado.`)
      return
    }
    lvl.setBlockAndUpdate(pos, crop.defaultBlockState())
  })

  event.server.runCommandSilent(`particle minecraft:dust 0.85 0.0 0.0 1 ${pos.x + 0.5} ${pos.y + 0.8} ${pos.z + 0.5} 0.28 0.28 0.28 0.04 18 normal @a`)
  lvl.playSound(null, pos.x + 0.5, pos.y + 0.5, pos.z + 0.5, 'minecraft:block.crop.break', 'blocks', 0.9, 0.8)
})
