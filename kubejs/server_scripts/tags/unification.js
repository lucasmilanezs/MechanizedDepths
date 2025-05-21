ServerEvents.tags('item', event => {
  // Plates

  event.add('forge:plates/iron', 'thermal:iron_plate')
  event.add('forge:plates/copper', 'thermal:copper_plate')
  event.add('forge:plates/gold', 'thermal:gold_plate')
  event.add('forge:plates/tin', 'thermal:tin_plate')
  event.add('forge:plates/lead', 'thermal:lead_plate')
  event.add('forge:plates/nickel', 'thermal:nickel_plate')
  event.add('forge:plates/constantan', 'thermal:constantan_plate')
  // Dusts
  event.add('forge:dusts/iron', 'thermal:iron_dust')
  event.add('forge:dusts/gold', 'thermal:gold_dust')
  event.add('forge:dusts/copper', 'thermal:copper_dust')
  // etc.
});
