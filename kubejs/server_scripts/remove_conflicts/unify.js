// Substitui receitas de entrada e saída para usar sempre o ingot escolhido
ServerEvents.recipes(event => {
  for (const [metal, preferred] of Object.entries(global.UNIFY_METALS)) {
    const tag = `#forge:ingots/${metal}`
    event.replaceInput({}, tag, preferred)
    event.replaceOutput({}, tag, preferred)
  }
})



