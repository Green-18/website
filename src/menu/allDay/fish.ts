import type { MealCategory } from '~/types';

export const fish: MealCategory = {
  title: 'Fisch',
  meals: [
    { name: 'Zanderfilet', ingredients: ['Salzkartoffeln', 'Zitronenbutter', 'kleiner Salat'] },
    { name: 'Frische Dorade', ingredients: ['selbstgemachtes Pesto', 'Gemüse', 'kleiner Salat'] },
    { name: 'Lachssteak', ingredients: ['Bett aus sautiertem Gemüse', 'Zitronen-Senf-Sauce', 'kleiner Salat'] },
  ],
};
