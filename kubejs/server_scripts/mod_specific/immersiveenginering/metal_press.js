// IMMERSIVE ENGINEERING - METAL PRESS RECIPE CHANGES
/*

*/
//
//===============CUSTOM RECIPES==================
//==================CHANGED RECIPES==================
ServerEvents.recipes(event => {
  event.remove({
    type: 'immersiveengineering:metal_press',
    output: 'immersiveengineering:graphite_electrode'
  });
});
//==================COMPATIBILITY RECIPES==================
