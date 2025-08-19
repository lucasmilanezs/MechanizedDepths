// Living Timber (kubejs:living_timber)
StartupEvents.registry('item', event => {
    event.create('living_timber')
        .displayName('Living Timber')
        .tooltip('Timber infused with persistent memory')
        .texture('custom:item/living_timber') 
        .maxStackSize(64);
});