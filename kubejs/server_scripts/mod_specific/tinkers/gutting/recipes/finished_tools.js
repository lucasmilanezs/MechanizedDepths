// Tinkers remains the source of tool parts. Tetra owns finished tool assembly.
ServerEvents.recipes(event => {
    event.remove({ id: /^tconstruct:tools\/building\// })
})
