import recipes from './recipes/index.js';

export function getAllRecipes() {
    return recipes;
}

export function getRecipesByCategory(category) {
    return recipes.filter(recipe => recipe.category === category);
}

export function getRecipeById(id) {
    return recipes.find(recipe => recipe.id === id);
}