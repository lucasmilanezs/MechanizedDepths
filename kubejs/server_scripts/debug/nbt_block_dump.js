// kubejs/server_scripts/debug/nbt_block_dump.js

ServerEvents.commandRegistry((event) => {
  const { commands: Commands, arguments: Arguments } = event

  event.register(
    Commands.literal("kubejs")
      .then(
        Commands.literal("nbtblock")
          // opcional: raio (default 8)
          .then(
            Commands.argument("range", Arguments.INTEGER.create(event))
              .executes((ctx) => dumpTargetBlockEntityNbt(ctx, true))
          )
          .executes((ctx) => dumpTargetBlockEntityNbt(ctx, false))
      )
  )
})


function dumpTargetBlockEntityNbt(ctx, hasRangeArg) {
  const player = ctx.source.player
  if (!player) return 0

  const range = hasRangeArg ? ctx.getArgument("range") : 8

  // rayTrace: pega o bloco que o player está mirando
  const hit = player.rayTrace(range, false)
  if (!hit || hit.type !== "block") {
    player.tell(Text.red(`No block targeted (range=${range}).`))
    return 0
  }

  const pos = hit.blockPos
  const level = player.level
  const be = level.getBlockEntity(pos)

  if (!be) {
    player.tell(Text.yellow(`Target has no BlockEntity at ${pos}.`))
    return 1
  }

  // NBT completo do BlockEntity
  const nbt = be.saveWithFullMetadata()
  const s = nbt.toString()

  player.tell(Text.gray(`--- BlockEntity NBT @ ${pos} ---`))

  // Pagina em chunks pra não truncar no chat
  const CHUNK = 240
  for (let i = 0; i < s.length; i += CHUNK) {
    player.tell(Text.white(s.substring(i, i + CHUNK)))
  }

  return 1
}