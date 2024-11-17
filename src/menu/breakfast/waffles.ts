import type { MealCategory } from '~/types';

export const waffles: MealCategory = {
  title: 'Hausgemachte Waffeln',
  meals: [
    {
      name: 'Classic Waffel',
      ingredients: ['Früchte der Saison', 'Griechischer Joghurt', 'Ahornsirup'],
    },
    {
      name: 'Schoko Waffel',
      ingredients: ['Schokosauce', 'Banane'],
    },
    {
      name: 'Pistatio Waffel',
      ingredients: ['weiße Schokosauce', 'Pistaziencreme', 'Pistazien', 'Banane'],
    },
  ],
};
