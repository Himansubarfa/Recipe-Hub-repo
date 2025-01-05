import { mainCourseRecipes } from './categories/mainCourse.js';
import { dessertRecipes } from './categories/desserts.js';
import { beverageRecipes } from './categories/beverages.js';
import { appetizerRecipes } from './categories/appetizers.js';

const recipes = [
    ...mainCourseRecipes,
    ...dessertRecipes,
    ...beverageRecipes,
    ...appetizerRecipes
];

export default recipes;