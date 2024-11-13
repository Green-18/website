import type { MealCategory } from '~/types';

export const pancakes: MealCategory = {
  title: 'Home made Pancakes',
  subtitle: 'Von Mama selbstgemachte Pancakes',
  meals: [
    {
      name: 'Classic Pancake',
      ingredients: ['Ahornsirup', 'Waldfrüchten', 'Erdbeeren', 'Griechischer Joghurt', 'Krokant'],
    },
    {
      name: 'Nutella Pancake',
      ingredients: ['Nutella', 'Schlagsahne', 'Waldfrüchten', 'Banane', 'Erdbeere', 'Krokant'],
    },
    {
      name: 'Pinker Pancake Traum',
      ingredients: [
        'Selbstgemachte Pinke Vanillesauce',
        'Schlagsahne',
        'Banane',
        'Erdbeeren',
        'Marshmallows',
        'Knusprige Streusel',
      ],
    },
    {
      name: 'Herzhafter Pancake',
      ingredients: ['2 Pancakes', 'Ahornsirup', '2 Spiegeleier', 'Speck'],
    },
  ],
};
