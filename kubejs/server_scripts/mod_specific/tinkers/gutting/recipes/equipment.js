// Remove Tinkers armor and wearable equipment without touching material parts.
ServerEvents.recipes(event => {
    event.remove({ id: /^tconstruct:tools\/armor\// })
})
