import type { MealCategory } from '~/types';

export const starters: MealCategory = {
  title: 'Vorspeisen',
  meals: [
    { name: 'Gemischter Antipasti-Teller' },
    { name: 'Tomaten Burrata' },
    {
      name: 'Reiberdatschi mit Lachs',
      ingredients: ['Salatgarnitur', 'Honig-Senf Dressing'],
    },
    {
      name: '3erlei Aufstrich',
      ingredients: ['Rote-Beete Hummus', 'Obatzter', 'Radikas', 'Zwiebeln', 'Breze und Scheibe Brot'],
    },
  ],
};
