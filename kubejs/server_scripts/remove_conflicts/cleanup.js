
//Gears
ServerEvents.recipes((event) => {
    event.remove({id: 'industrialforegoing:iron_gear'});
    event.remove({id: 'thermal:parts/iron_gear'});
    event.remove({id: 'thermal:machines/press/press_iron_ingot_to_gear'});
});


// ============================================
// MASS RECIPE REMOVER - Static Mapping
// ============================================
// Suporte para:
// - id exato
// - por mod ('mod:industrialforegoing')
// - por tipo ('type:mekanism:enriching')
// - por output ('output:thermal:iron_gear')
// ============================================

const recipeBlacklist = [
    "thermal:machines/press/press_iron_ingot_to_gear",
    "thermal:parts/iron_gear",
    "thermal:machines/press/press_iron_ingot_to_gear",
    ""

];

// Handler ========================
ServerEvents.recipes(event => {

    recipeBlacklist.forEach(entry => {
        if (entry.startsWith("mod:")) {
            const namespace = entry.replace("mod:", "");
            event.remove({ mod: namespace });

        } else if (entry.startsWith("output:")) {
            const outputId = entry.replace("output:", "");
            event.remove({ output: outputId });

        } else if (entry.startsWith("type:")) {
            const typeId = entry.replace("type:", "");
            event.remove({ type: typeId });

        } else {
            // Remove por ID exato
            event.remove({ id: entry });
        }
    });
});
