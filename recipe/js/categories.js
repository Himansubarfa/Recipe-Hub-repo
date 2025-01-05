import { createRecipeCard } from './components/recipeCard.js';
import recipes from './data/recipes/index.js';

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
    
    const filteredRecipes = recipes.filter(recipe => recipe.category === category);
    
    for (const recipe of filteredRecipes) {
        const recipeCard = await createRecipeCard(recipe);
        categoryRecipes.appendChild(recipeCard);
    }
}