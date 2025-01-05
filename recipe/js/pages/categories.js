import { createRecipeCard } from '../components/recipeCard.js';
import { getRecipesByCategory } from '../data/recipeService.js';

document.addEventListener('DOMContentLoaded', () => {
    const categories = document.querySelectorAll('.category');
    
    categories.forEach(category => {
        category.addEventListener('click', () => {
            const selectedCategory = category.dataset.category;
            displayRecipesByCategory(selectedCategory);
        });
    });
    
    displayRecipesByCategory('main-course');
});

async function displayRecipesByCategory(category) {
    const categoryRecipes = document.getElementById('category-recipes');
    categoryRecipes.innerHTML = '';
    
    const recipes = getRecipesByCategory(category);
    
    for (const recipe of recipes) {
        const recipeCard = await createRecipeCard(recipe);
        categoryRecipes.appendChild(recipeCard);
    }
}