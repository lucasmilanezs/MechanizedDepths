// Custom command to log all items in a specified tag to the server console.
ServerEvents.commandRegistry(event => {
  const ResourceLocationArgument = Java.loadClass('net.minecraft.commands.arguments.ResourceLocationArgument')
  const ResourceLocation = Java.loadClass('net.minecraft.resources.ResourceLocation')
  const Logger = Java.loadClass('org.apache.logging.log4j.LogManager')

  const LOGGER = Logger.getLogger('TagLogger') 

  const { commands: Commands } = event

  event.register(
    Commands.literal('listtag')
      .then(
        Commands.argument('tag', ResourceLocationArgument.id())
          .executes(ctx => {
            const tagArg = ctx.getArgument('tag', ResourceLocation)
            const tagName = `${tagArg.namespace}:${tagArg.path}`

            const ingredient = Ingredient.of(`#${tagName}`)
            const ids = ingredient.itemIds

            if (ids.length === 0) {
              LOGGER.info(`[TagLogger] Tag '${tagName}' está vazia ou não existe.`)
              ctx.source.sendSuccess(Text.of(`Tag '${tagName}' está vazia ou não encontrada.`), true)
              return 0
            }

            LOGGER.info(`--- [TagLogger] Itens da tag '${tagName}' (${ids.length}) ---`)
            ids.forEach(id => LOGGER.info(` - ${id}`))

            ctx.source.sendSuccess(
              Text.of(`[TagLogger] Foram listados ${ids.length} itens da tag '${tagName}' (veja o console do servidor).`),
              true
            )
            return 1
          })
      )
  )
})
