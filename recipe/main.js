document.addEventListener('DOMContentLoaded', async () => {
    const featuredRecipes = document.getElementById('featured-recipes');
    
    // Display featured recipes
    for (const recipe of recipes) {
        const recipeCard = await createRecipeCard(recipe);
        featuredRecipes.appendChild(recipeCard);
    }
});