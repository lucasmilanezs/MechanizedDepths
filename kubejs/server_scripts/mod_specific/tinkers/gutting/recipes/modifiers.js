// Tetra owns tool progression, so Tinkers modifier application and salvage are disabled.
ServerEvents.recipes(event => {
    event.remove({ id: /^tconstruct:tools\/modifiers\// })
})
