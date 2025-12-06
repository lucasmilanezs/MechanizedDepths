import crafttweaker.api.recipe.type.Recipe;
import crafttweaker.api.world.Container;

for recipe in (<recipetype:thermal:press>.getAllRecipes() as stdlib.List<Recipe<Container>>) {
    println("> " + recipe.id);
    for ingredient in recipe.ingredients {
        println(ingredient.commandString);
    }
}