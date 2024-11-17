import type { MealCategory } from '~/types';

export const pancakes: MealCategory = {
  title: 'Magic Pancakes',
  subtitle: '(Wartezeit ca. 15 min)',
  meals: [
    {
      name: 'Classic Pancake',
      ingredients: ['Pancake', 'Ahornsirup', 'Früchte der Saison', 'Griechischer Joghurt', 'Krokant'],
    },
    {
      name: 'Nutella Pancake',
      ingredients: ['Pancake', 'Nutella', 'Schlagsahne', 'Banane', 'Krokant'],
    },
    {
      name: 'Pinker Pancake Traum',
      ingredients: [
        'Pancake',
        { name: 'selbstgemachte pinke Vanillesauce', dietaryLabels: [1] },
        'Schlagsahne',
        'Banane',
        'Früchte der Saison',
        'bunte Streusel',
      ],
    },
    {
      name: 'Herzhafter Pancake',
      ingredients: ['2 Pancakes', 'Ahornsirup', '2 Spiegeleier', 'knuspriger Speck'],
    },
  ],
};
