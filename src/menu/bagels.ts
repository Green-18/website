import type { MealCategory } from '~/types';

export const bagels: MealCategory = {
  title: 'Bagels',
  meals: [
    {
      name: 'Avocado Bagel',
      ingredients: ['Smashed Avocado', 'Kirschtomaten', 'Rucola', 'Frischkäse', 'Zitronenzeste'],
    },
    {
      name: 'Hähnchen Bagel',
      ingredients: [
        'Hähnchen geraspelt',
        'Frischkäse',
        'Smashed Avocado',
        'Tomaten',
        'Gurke',
        'Rucola',
        'Honigsenf Dressing',
      ],
    },
    {
      name: 'Salmon Bagel',
      ingredients: [
        'Räucherlachs',
        'Kirschtomaten',
        'Smashed Avocado',
        'Meerrettich-Frischkäse Aufstrich',
        'Eingelegte Rote Zwiebeln',
        'Rucola ',
      ],
    },
    {
      name: 'Hummus Bagel',
      ingredients: ['Rote-Beete Hummus', 'Angebratene Kirschtomaten', 'Rucola', 'Spiegelei'],
    },
  ],
};
