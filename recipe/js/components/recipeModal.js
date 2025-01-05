import { loadImage } from '../utils/imageLoader.js';

export async function showRecipeModal(recipe) {
    const imageUrl = await loadImage(recipe.name, recipe.category);
    
    const modal = document.createElement('div');
    modal.className = 'modal';
    
    modal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>${recipe.name}</h2>
            <img src="${imageUrl}" alt="${recipe.name}" style="max-width: 100%; margin: 1rem 0;">
            <h3>Ingredients:</h3>
            <ul>
                ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions:</h3>
            <ol>
                ${recipe.instructions.map(instruction => `<li>${instruction}</li>`).join('')}
            </ol>
        </div>
    `;
    
    const closeButton = modal.querySelector('.close-modal');
    closeButton.addEventListener('click', () => modal.remove());
    
    document.body.appendChild(modal);
}