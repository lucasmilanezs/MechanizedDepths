// Keep Actually Additions downstream recipes reachable from Thermal rice.
ServerEvents.recipes(event => {
    event.remove({ id: 'actuallyadditions:rice_dough' });
    event.shapeless(Item.of('actuallyadditions:rice_dough', 2), [
        '#forge:crops/rice', '#forge:crops/rice', '#forge:crops/rice'
    ]).id('kubejs:actuallyadditions/rice_dough');

    event.remove({ id: 'actuallyadditions:rice_paper' });
    event.shaped(Item.of('minecraft:paper', 3), [
        'R  ', ' R ', '  R'
    ], { R: '#forge:crops/rice' }).id('kubejs:actuallyadditions/rice_paper');

    event.remove({ id: 'actuallyadditions:rice_seeds' });
    event.remove({ id: 'actuallyadditions:crushing/rice' });
});
