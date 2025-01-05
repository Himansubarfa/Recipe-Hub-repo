import { DEFAULT_IMAGES, RECIPE_IMAGES } from '../config/constants.js';

export async function loadImage(recipeName, category) {
    try {
        if (RECIPE_IMAGES[recipeName]) {
            const img = new Image();
            const loadResult = await new Promise((resolve) => {
                img.onload = () => resolve(true);
                img.onerror = () => resolve(false);
                img.src = RECIPE_IMAGES[recipeName];
            });
            if (loadResult) return RECIPE_IMAGES[recipeName];
        }

        return DEFAULT_IMAGES[category] || DEFAULT_IMAGES['main-course'];
    } catch (error) {
        console.error('Error loading image:', error);
        return DEFAULT_IMAGES[category] || DEFAULT_IMAGES['main-course'];
    }
}