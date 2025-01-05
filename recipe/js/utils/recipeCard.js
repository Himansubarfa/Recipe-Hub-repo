// Make functions globally available
window.createRecipeCard = async function(recipe) {
    const card = document.createElement('div');
    card.className = 'recipe-card';
    
    // Load image with recipe name
    const imageUrl = await loadImage(recipe.name, recipe.category);
    
    card.innerHTML = `
        <img src="${imageUrl}" alt="${recipe.name}">
        <div class="recipe-content">
            <h3>${recipe.name}</h3>
            <p>${recipe.description}</p>
            <button class="view-recipe" data-recipe-id="${recipe.id}">View Recipe</button>
        </div>
    `;
    
    // Add click event listener to the button
    const viewButton = card.querySelector('.view-recipe');
    viewButton.addEventListener('click', () => showRecipe(recipe.id));
    
    return card;
}

window.showRecipe = async function(recipeId) {
    const recipe = recipes.find(r => r.id === recipeId);
    if (!recipe) return;
    
    // Load image with recipe name
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
    
    // Add click event listener to close button
    const closeButton = modal.querySelector('.close-modal');
    closeButton.addEventListener('click', () => closeModal(modal));
    
    document.body.appendChild(modal);
    modal.style.display = 'block';
}

window.closeModal = function(modal) {
    modal.remove();
}