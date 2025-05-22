ServerEvents.recipes(event => {
  event.remove({ output: 'thermal:machine_frame' });
  event.shaped('thermal:machine_frame', [
    'SGS',
    'GFG',
    'SGS'
  ], {
    S: 'thermal:steel_ingot',
    G: 'minecraft:glass',
    F: 'kubejs:forged_assembly' 
    });
});