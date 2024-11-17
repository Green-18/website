import type { MealCategory } from '~/types';

export const breads: MealCategory = {
  title: 'Brote',
  meals: [
    {
      name: 'Avo Brot',
      dietaryLabels: ['🥬'],
      ingredients: [
        'Frisches Hausbrot',
        'smashed Avocado',
        'in Olivenöl geschwenkte Kirschtomaten',
        'selbstgemachtes Pesto',
        'Rucola',
      ],
    },
    {
      name: 'Pink Hummus Brot',
      ingredients: [
        'Frisches Hausbrot',
        'Rote-Beete Hummus',
        'Burrata',
        'in Olivenöl geschwenkte Kirschtomaten',
        'Rucola',
      ],
    },
    {
      name: 'Rinder Brot (warm)',
      ingredients: [
        'Frisches Hausbrot',
        'selbstgemachtes Pesto',
        'Bergkäse',
        'saftig gebratene Rindfleischstreifen',
        'in Olivenöl angebratenes Gemüse',
        'Rucola',
      ],
    },
    {
      name: 'Parma Brot',
      ingredients: [
        'Frisches Hausbrot',
        'Parmaschinken',
        'Kresse',
        'Rucola',
        'getrocknete Tomaten',
        'Mozzarella',
        'Frischkäse',
      ],
    },
    {
      name: 'Ziegenkäse Brot',
      ingredients: ['Frisches Hausbrot', 'Frischkäse', 'gegrillter Ziegenkäse', 'Apfelscheiben', 'Honig', 'Walnuss'],
    },
    {
      name: 'Salmon Deluxe',
      ingredients: ['Frisches Hausbrot', 'Räucherlachs', '2 wachsweiche Eier', 'Trüffel-Hollandaise', 'Baby Leaf'],
    },
  ],
};
