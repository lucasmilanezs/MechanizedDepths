// kubejs/client_scripts/jei_hammer_progression.js

var $JEIEventJS_HP = Java.loadClass('pie.ilikepiefoo.compat.jei.events.JEIEventJS')
var $VanillaTypes_HP = Java.loadClass('mezz.jei.api.constants.VanillaTypes')

var HP_CAT_ID = 'mechanized:hammer_progression'
var HP_W = 236
var HP_H = 96
var HP_X0 = 10
var HP_PITCH = 40
var HP_LABEL_Y = 6
var HP_BASE_Y = 26
var HP_SLOT_Y = 48
var HP_HAMMER_SLOT_Y = 72
var HP_STEEL_INDEX = 4
var HP_RED_ARROW = 3

var HP_HEADS = [
  ['tconstruct:hammer_head', '{Material:"tconstruct:wood"}'],
  ['tconstruct:hammer_head', '{Material:"tconstruct:rock"}'],
  ['tconstruct:hammer_head', '{Material:"tconstruct:iron"}'],
  ['tconstruct:hammer_head', '{Material:"mechanized:infused_iron"}'],
  ['tconstruct:hammer_head', '{Material:"tconstruct:steel"}'],
  ['tconstruct:hammer_head', '{Material:"mechanized:netherite"}']
]

// Cada entrada corresponde à cabeça na mesma coluna de HP_HEADS. O NBT mantém
// somente os componentes necessários para o JEI renderizar o modular double
// como um martelo Tetra formado, sem UUID ou estado de durabilidade.
var HP_HAMMER_VARIANTS = [
  'basic_hammer/oak',
  'basic_hammer/stone',
  'basic_hammer/iron',
  'basic_hammer/infused_iron',
  'basic_hammer/steel',
  'basic_hammer/netherite'
]

var HP_guiHelper = null
var HP_arrow = null
var HP_icon = null

function HP_hammerStack(variant) {
  return Item.of(
    'tetra:modular_double',
    '{' +
    '"double/basic_hammer_left_material":"' + variant + '",' +
    '"double/basic_hammer_right_material":"' + variant + '",' +
    '"double/basic_handle_material":"basic_handle/stick",' +
    '"double/handle":"double/basic_handle",' +
    '"double/head_left":"double/basic_hammer_left",' +
    '"double/head_right":"double/basic_hammer_right"' +
    '}'
  )
}

JEIAddedEvents.registerCategories(function (event) {
  HP_guiHelper = event.JEI_HELPERS.guiHelper

  event.custom(HP_CAT_ID, function (category) {
    category
      .title('Hammer Head Progression')
      .background(HP_guiHelper.createBlankDrawable(HP_W, HP_H))
      .setWidth(HP_W)
      .setHeight(HP_H)
      .icon(HP_guiHelper.createDrawableItemStack(Item.of('tconstruct:hammer_head')))

      .isRecipeHandled(function (recipe) {
        if (!recipe) return false
        if (!recipe.data) return false
        return !!recipe.data.progression
      })

      .handleLookup(function (builder, recipe, focuses) {
        var i
        for (i = 0; i < HP_HEADS.length; i++) {
          var h = HP_HEADS[i]
          var stack = h[1] === null ? Item.of(h[0]) : Item.of(h[0], h[1])
          builder.addSlot('INPUT', HP_X0 + i * HP_PITCH, HP_SLOT_Y)
            .addItemStack(stack)
            .setBackground(HP_guiHelper.getSlotDrawable(), -1, -1)
        }
        for (i = 0; i < HP_HAMMER_VARIANTS.length; i++) {
          builder.addSlot('OUTPUT', HP_X0 + i * HP_PITCH, HP_HAMMER_SLOT_Y)
            .addItemStack(HP_hammerStack(HP_HAMMER_VARIANTS[i]))
            .setBackground(HP_guiHelper.getSlotDrawable(), -1, -1)
        }
        builder.addSlot('CATALYST', HP_X0 + HP_STEEL_INDEX * HP_PITCH, HP_BASE_Y)
          .addItemStack(Item.of('tetra:hammer_base'))
          .setBackground(HP_guiHelper.getSlotDrawable(), -1, -1)
      })

      .setDrawHandler(function (recipe, slots, gui, mouseX, mouseY) {
        if (HP_arrow === null) HP_arrow = HP_guiHelper.getRecipeArrow()
        if (HP_icon === null) {
          HP_icon = HP_guiHelper
            .drawableBuilder(Utils.id('custom:textures/gui/tetra_hammer.png'), 0, 0, 16, 16)
            .setTextureSize(16, 16)
            .build()
        }

        var i
        for (i = 0; i < HP_HEADS.length; i++) {
          gui.drawWordWrap(Client.font, Text.literal(String(i + 1)), HP_X0 + i * HP_PITCH + 1, HP_LABEL_Y + 4, HP_W, 0xFFFFFF)
          HP_icon.draw(gui, HP_X0 + i * HP_PITCH + 9, HP_LABEL_Y)
        }

        for (i = 0; i < HP_HEADS.length - 1; i++) {
          var ax = HP_X0 + i * HP_PITCH + 17
          if (i === HP_RED_ARROW) {
            gui.setColor(1.0, 0.3, 0.3, 1.0)
            HP_arrow.draw(gui, ax, HP_SLOT_Y)
            gui.setColor(1.0, 1.0, 1.0, 1.0)
          } else {
            HP_arrow.draw(gui, ax, HP_SLOT_Y)
          }
        }
      })

      .setTooltipHandlerOverride(function (tooltip, recipe, slots, mouseX, mouseY) {
        var ax = HP_X0 + HP_RED_ARROW * HP_PITCH + 17
        if (mouseX >= ax && mouseX <= ax + 22 && mouseY >= HP_SLOT_Y && mouseY <= HP_SLOT_Y + 16) {
          tooltip.add(Text.of('Requires Forge Hammer').red())
        }
      })
  })
})

JEIAddedEvents.registerRecipeCatalysts(function (event) {
  event.data.addRecipeCatalyst(
    $VanillaTypes_HP.ITEM_STACK,
    Item.of('tetra:hammer_base'),
    $JEIEventJS_HP.getOrCreateCustomRecipeType(Utils.id(HP_CAT_ID))
  )
})

JEIAddedEvents.registerRecipes(function (event) {
  event.custom(HP_CAT_ID).add({ progression: true })
})
