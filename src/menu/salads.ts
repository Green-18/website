import type { MealCategory } from '~/types';

export const salads: MealCategory = {
  title: 'Salate',
  meals: [
    {
      name: 'Salat mit Rindfleischstreifen',
      ingredients: ['Gemischter Blattsalat', 'Rucola', 'Tomaten', 'Gurke', 'Karotte', 'Hausgemachtes Dressing', 'Brot'],
    },
    {
      name: 'Salat mit Putenstreifen',
      ingredients: [
        'Gemischter Blattsalat',
        'Putenstreifen',
        'Rucola',
        'Tomaten',
        'Karotte',
        'Gurke',
        'Hausgemachtes Dressing',
        'Brot',
      ],
    },
    {
      name: 'Griechischer Salat',
      ingredients: ['Feta Käse', 'Tomaten', 'Zwiebeln', 'Gurken', 'Olive', 'Brot', 'Selbstgemachtes Dressing'],
    },
    {
      name: 'Salat mit gegrilltem Ziegenkäse',
      ingredients: [
        'Gemischter Blattsalat',
        'Rucola',
        'Tomaten',
        'Karotte',
        'Gurke',
        'Ziegenkäse',
        'Honig',
        'Hausgemachtes Dressing',
        'Brot',
      ],
    },
    {
      name: 'Caesar Salad',
      ingredients: [
        'Römersalat',
        'Tomaten',
        'Hähnchenstreifen',
        'Parmesan',
        'Knoblauch',
        'Croutons',
        'Hausgemachtes Caesar Dressing',
      ],
    },
    {
      name: 'Kleiner gemischter Salar',
      ingredients: ['Gemischter Blattsalat', 'Rucola', 'Tomaten', 'Karotte', 'Gurke', 'Hausgemachtes Dressing'],
    },
    { name: 'Salat mit Garnelen' },
  ],
};
