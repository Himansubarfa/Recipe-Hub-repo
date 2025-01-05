import { loadImage } from '../utils/imageLoader.js';
import { showRecipeModal } from './recipeModal.js';

export async function createRecipeCard(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    const imageUrl = await loadImage(recipe.name, recipe.category);
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${recipe.name}">
        <div class="recipe-content">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="view-recipe" data-recipe-id="${recipe.id}">View Recipe</button>
        </div>
    `;
    
    const viewButton = card.querySelector('.view-recipe');
    viewButton.addEventListener('click', () => showRecipeModal(recipe));
    
    return card;
}