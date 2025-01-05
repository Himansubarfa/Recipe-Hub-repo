import { createRecipeCard } from '../components/recipeCard.js';
import { getAllRecipes } from '../data/recipeService.js';

document.addEventListener('DOMContentLoaded', async () => {
    const featuredRecipes = document.getElementById('featured-recipes');
    const recipes = getAllRecipes();
    
    for (const recipe of recipes) {
        const recipeCard = await createRecipeCard(recipe);
        featuredRecipes.appendChild(recipeCard);
    }
});