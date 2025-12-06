ServerEvents.recipes(event => {
event.forEachRecipe({}, r => {
  console.log(r.id)
})
});
