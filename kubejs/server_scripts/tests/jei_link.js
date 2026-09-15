ServerEvents.commandRegistry(function (event) {
  var Commands = event.commands
  var Arguments = event.arguments
  event.register(Commands.literal('page')
    .then(Commands.argument('id', Arguments.RESOURCE_LOCATION.create(event))
      .executes(function (ctx) {
        var id = Arguments.RESOURCE_LOCATION.getResult(ctx, 'id')
        ctx.source.player.sendData('open_jei_page', { id: id.toString() })
        return 1
      })))
})