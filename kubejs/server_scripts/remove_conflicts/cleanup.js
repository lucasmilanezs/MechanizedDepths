
//Gears
ServerEvents.recipes((event) => {
    event.remove({id: 'industrialforegoing:iron_gear'});
    event.remove({id: 'thermal:parts/iron_gear'});
    event.remove({id: 'thermal:machines/press/press_iron_ingot_to_gear'});
});

