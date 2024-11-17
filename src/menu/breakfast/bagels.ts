import type { MealCategory } from '~/types';

export const bagels: MealCategory = {
  title: 'Bagels',
  meals: [
    {
      name: 'Salmon Bagel',
      ingredients: [
        'Räucherlachs',
        'Kirschtomaten in Olivenöl',
        'smashed Avocado',
        'Meerrettisch-Frischkäse',
        'rote Zwiebeln',
        'Rucola',
      ],
    },
    { name: 'Hummus Bagel', ingredients: ['Rote-Beete-Hummus', 'in Olivenöl gebratene Kirschtomaten', 'Rucola'] },
    { name: 'Avocado', ingredients: ['smashed Avocado', 'getrocknete Tomaten', 'Rucola', 'Frischkäse'] },
    {
      name: 'Hähnchen',
      ingredients: [
        'geraspeltes Hähnchen',
        'Frischkäse',
        'smashed Avocado',
        'Tomaten',
        'Gurke',
        'Rucola',
        'Honig-Senf Dressing',
      ],
    },
  ],
};
