var $JEIEventJS = Java.loadClass('pie.ilikepiefoo.compat.jei.events.JEIEventJS')

JEIAddedEvents.onRuntimeAvailable(function (event) {
  global.JEI_RUNTIME = event.data
})

NetworkEvents.dataReceived('open_jei_page', function (event) {
  var runtime = global.JEI_RUNTIME
  if (!runtime) return
  var type = $JEIEventJS.getCustomRecipeType(Utils.id(event.data.getString('id')))
  if (!type) return
  runtime.getRecipesGui().showTypes([type])
})