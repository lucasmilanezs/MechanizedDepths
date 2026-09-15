// These categories only describe the disabled Tinkers tool progression.
JEIEvents.removeCategories(event => {
    const disabledCategories = [
        'tconstruct:modifiers',
        'tconstruct:severing',
        'tconstruct:tool_recipes',
        'tconstruct:worktable'
    ]

    disabledCategories.forEach(categoryId => event.remove(categoryId))
})
