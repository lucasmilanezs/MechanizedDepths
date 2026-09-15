// (function () {
//   var $JEIEventJS = Java.loadClass('pie.ilikepiefoo.compat.jei.events.JEIEventJS')
//   var $VanillaTypes = Java.loadClass('mezz.jei.api.constants.VanillaTypes')

//   global._jei = global._jei || {}
//   global._jei.vanilla_demo = {
//     CAT_ID: 'mechanized:vanilla_demo',
//     guiHelper: null
//   }

//   JEIAddedEvents.registerCategories(function (event) {
//     var g = global._jei.vanilla_demo
//     g.guiHelper = event.JEI_HELPERS.guiHelper
//     var guiHelper = g.guiHelper

//     event.custom(g.CAT_ID, function (category) {
//       category
//         .title('Vanilla Demo Category')
//         .background(guiHelper.createBlankDrawable(176, 110))
//         .setWidth(176)
//         .setHeight(110)
//         .icon(guiHelper.createDrawableItemStack(Item.of('minecraft:crafting_table')))

//         .isRecipeHandled(function (recipe) {
//           if (!recipe) return false
//           if (!recipe.data) return false
//           return !!recipe.data.out
//         })

//         .handleLookup(function (builder, recipe, focuses) {
//           var g = global._jei.vanilla_demo
//           builder.addSlot('INPUT', 18, 28).addItemStack(Item.of(recipe.data.inA))
//             .setBackground(g.guiHelper.getSlotDrawable(), -1, -1)
//           builder.addSlot('INPUT', 42, 28).addItemStack(Item.of(recipe.data.inB))
//             .setBackground(g.guiHelper.getSlotDrawable(), -1, -1)
//           builder.addSlot('OUTPUT', 132, 28).addItemStack(Item.of(recipe.data.out))
//             .setBackground(g.guiHelper.getSlotDrawable(), -1, -1)
//         })

//         .setDrawHandler(function (recipe, slots, gui, mouseX, mouseY) {
//           gui.drawWordWrap(Client.font, Text.of('Inputs').bold(), 18, 14, 80, 0)
//           gui.drawWordWrap(Client.font, Text.of('Output').bold(), 120, 14, 80, 0)
//           if (recipe.data.note) {
//             gui.drawWordWrap(Client.font, Text.of(recipe.data.note), 8, 62, 160, 0)
//           }
//         })
//     })
//   })

//   JEIAddedEvents.registerRecipeCatalysts(function (event) {
//     var g = global._jei.vanilla_demo
//     event.data.addRecipeCatalyst(
//       $VanillaTypes.ITEM_STACK,
//       Item.of('minecraft:crafting_table'),
//       $JEIEventJS.getOrCreateCustomRecipeType(Utils.id(g.CAT_ID))
//     )
//   })

//   JEIAddedEvents.registerRecipes(function (event) {
//     var g = global._jei.vanilla_demo
//     event.custom(g.CAT_ID)
//       .add({ inA: 'minecraft:stick', inB: 'minecraft:coal', out: 'minecraft:torch', note: 'Demo de UI.' })
//       .add({ inA: 'minecraft:iron_ingot', inB: 'minecraft:redstone', out: 'minecraft:compass', note: 'Outra.' })
//   })
// })()