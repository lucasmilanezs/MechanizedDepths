// Thermal supplies the canonical rice and onion crops. Farmer's Delight meals
// already consume forge:crops/rice and forge:crops/onion.
ServerEvents.recipes(event => {
    event.replaceInput({ id: 'farmersdelight:horse_feed' }, 'farmersdelight:rice', '#forge:crops/rice');

    // Storage and crop loops otherwise manufacture the retired variants.
    for (const id of [
        'farmersdelight:onion', 'farmersdelight:onion_crate',
        'farmersdelight:rice', 'farmersdelight:rice_from_bag',
        'farmersdelight:rice_bag', 'farmersdelight:rice_bale',
        'farmersdelight:rice_panicle'
    ]) event.remove({ id: id });

    for (const item of [
        'farmersdelight:onion', 'farmersdelight:rice',
        'farmersdelight:rice_panicle', 'farmersdelight:onion_crate',
        'farmersdelight:rice_bag', 'farmersdelight:rice_bale'
    ]) event.remove({ output: item });
});
