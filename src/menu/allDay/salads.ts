import type { MealCategory } from '~/types';

export const salads: MealCategory = {
  title: 'Salate',
  meals: [
    {
      name: 'Kleiner gemischter Salat',
      ingredients: ['Gemischter Blattsalat', 'Rucola', 'Tomaten', 'Karotte', 'Gurke', 'Hausgemachtes Dressing'],
    },
    {
      name: 'Salat mit Rindfleischstreifen',
      ingredients: [
        'Gemischter Blattsalat',
        'Brasilianisches Rindfleisch',
        'Rucola',
        'Tomaten',
        'Gurke',
        'Karotte',
        'Hausgemachtes Dressing',
        'Pizza Pane',
      ],
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
        'Pizza Pane',
      ],
    },
    {
      name: 'Griechischer Salat',
      ingredients: [
        'Feta',
        'Tomaten',
        'Zwiebeln',
        'Gurken',
        { name: 'Oliven', dietaryLabels: [2] },
        'Pizza Pane',
        'Selbstgemachtes Dressing',
      ],
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
        'Pizza Pane',
      ],
    },
    {
      name: 'Caesar Salad',
      ingredients: ['Römersalat', 'Tomaten', 'Hähnchenstreifen', 'Parmesan', 'Croutons', 'Caesar Knoblauch Dressing'],
    },
    {
      name: 'Salat mit Garnelen',
      ingredients: [
        'Gemischter Blattsaalt',
        'White Tiger Garnlen',
        'Rucola',
        'Tomaten',
        'Gurke',
        'Karotte',
        'Hausgemachtes Dressing',
        'Brot',
      ],
    },
  ],
};
