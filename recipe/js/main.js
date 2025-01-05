import { createRecipeCard } from './components/recipeCard.js';
import recipes from './data/recipes/index.js';

document.addEventListener('DOMContentLoaded', async () => {
    const featuredRecipes = document.getElementById('featured-recipes');
    
    for (const recipe of recipes) {
        const recipeCard = await createRecipeCard(recipe);
        featuredRecipes.appendChild(recipeCard);
    }
});