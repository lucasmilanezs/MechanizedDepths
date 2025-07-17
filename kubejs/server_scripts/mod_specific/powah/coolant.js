PowahEvents.registerCoolants(event => {
    // .addFluid(fluid, coolness)
	event.addFluid('minecraft:lava', 10);
    
    // .addSolid(fluid, coolness)
	event.addSolid('minecraft:cobblestone', 10);
})