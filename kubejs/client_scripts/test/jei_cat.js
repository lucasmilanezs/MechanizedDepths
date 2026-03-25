// kubejs/client_scripts/jei_vanilla_demo.js

const CAT_ID = "kubejs:vanilla_demo"

// ---------- helpers ----------

function addItemSlot(builder, role, x, y, itemLike, guiHelper) {
  const slot = builder.addSlot(role, x, y)

  // desenha a caixinha do slot
  if (guiHelper && slot.setBackground) {
    slot.setBackground(guiHelper.getSlotDrawable(), 0, 0) // 0,0 costuma alinhar melhor que -1,-1
  }

  if (!itemLike) return
  slot.addItemStack(Item.of(itemLike))
}

// tenta pegar a posição real do slot já layoutado (pra ancorar texto)
function getSlotXY(recipeSlotsView, index) {
  try {
    const views = recipeSlotsView?.getSlotViews?.()
    if (!views) return null
    const v = views[index]
    if (!v) return null

    // builds variam: algumas expõem getX/getY, outras x/y
    const x = (v.getX && v.getX()) ?? v.x
    const y = (v.getY && v.getY()) ?? v.y
    if (typeof x !== "number" || typeof y !== "number") return null
    return { x, y }
  } catch (e) {
    return null
  }
}

JEIAddedEvents.registerCategories((event) => {
  event.custom(CAT_ID, (category) => {
    const { jeiHelpers: { guiHelper } } = category

    category
      .title("Vanilla Demo Category")

      // ↑ AUMENTA a área, pra você ter “margem” e parar de vazar texto
      .background(guiHelper.createBlankDrawable(176, 110))

      .icon(guiHelper.createDrawableItemStack(Item.of("minecraft:crafting_table")))

      .isRecipeHandled((recipe) => !!(recipe?.data?.inA && recipe?.data?.inB && recipe?.data?.out))

      .handleLookup((builder, recipe, focuses) => {
        // 3 slots: inA, inB, out
        addItemSlot(builder, "INPUT",  18, 28, recipe.data.inA, guiHelper)
        addItemSlot(builder, "INPUT",  42, 28, recipe.data.inB, guiHelper)
        addItemSlot(builder, "OUTPUT", 132, 28, recipe.data.out, guiHelper)
      })

      .setDrawHandler((recipe, recipeSlotsView, guiGraphics, mouseX, mouseY) => {
        // --- ancoragem no slot 0 (primeiro slot) ---
        // ordem: os slots são criados na ordem do handleLookup
        const s0 = getSlotXY(recipeSlotsView, 0) // inA
        const s2 = getSlotXY(recipeSlotsView, 2) // out

        // fallback se a API não existir na sua build
        const baseX = s0?.x ?? 18
        const baseY = s0?.y ?? 28
        const outX  = s2?.x ?? 132
        const outY  = s2?.y ?? 28

        // Labels (posicionados RELATIVOS aos slots)
        guiGraphics.drawWordWrap(
          Client.font,
          Text.of("Inputs").bold(),
          baseX, baseY - 16,
          80, 0
        )

        guiGraphics.drawWordWrap(
          Client.font,
          Text.of("Output").bold(),
          outX, outY - 16,
          80, 0
        )

        // Nota SEM vazar: coloca embaixo com largura controlada
        if (recipe.data.note) {
          guiGraphics.drawWordWrap(
            Client.font,
            Text.of(recipe.data.note),
            18, 68,
            150, 30
          )
        }

        // Debug pequeno (sem invadir)
        guiGraphics.drawWordWrap(
          Client.font,
          Text.of(`x:${mouseX} y:${mouseY}`).gray(),
          18, 92,
          150, 12
        )
      })
  })
})

JEIAddedEvents.registerRecipeCatalysts((event) => {
  // Item.of por compatibilidade
  event.data.addRecipeCatalyst(Item.of("minecraft:crafting_table"), CAT_ID)
})

JEIAddedEvents.registerRecipes((event) => {
  event.custom(CAT_ID).add({
    inA: "minecraft:stick",
    inB: "minecraft:coal",
    out: "minecraft:torch",
    note: "This is just a JEI UI demo."
  })

  event.custom(CAT_ID).add({
    inA: "minecraft:iron_ingot",
    inB: "minecraft:redstone",
    out: "minecraft:compass",
    note: "Inputs are vanilla items in custom slots."
  })

  event.custom(CAT_ID).add({
    inA: "minecraft:glass_bottle",
    inB: Item.of("minecraft:potion", '{Potion:"minecraft:water"}'),
    out: "minecraft:splash_potion",
    note: "Yes, Item.of with NBT also works."
  })
})
