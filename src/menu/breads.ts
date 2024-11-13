import type { MealCategory } from '~/types';

export const breads: MealCategory = {
  title: 'Brote',
  meals: [
    {
      name: 'Pink Hummus Bread',
      ingredients: ['Frisches Krustenbrot', 'Pink Hummus', 'Avocado', 'Granatapfel', 'Rucola'],
    },
    {
      name: 'Parma Bread',
      ingredients: ['Knuspriges Baguette', 'Parmaschinken', 'Kresse', 'Rucola', 'Getrocknete Tomaten', 'Mozzarella'],
    },
    {
      name: 'Pastrami Bread',
      ingredients: ['Knuspriges Baguette', 'Pastrami', 'Tomaten', 'Salat', 'Essiggurke', 'Frischkäse'],
    },
    {
      name: 'Rinder Bread (warm)',
      ingredients: [
        'Frisches Baguette',
        'Selbstgemachtes Pesto',
        'Edamer Käse',
        'Saftig gebratene Rindfleischstreifen',
        'In Olivenöl angebratenes Gemüse',
        'Rucola ',
      ],
    },
    {
      name: 'Burrata Bread',
      ingredients: [
        'Frisches Krustenbrot',
        'Smashed Avocado',
        'Burrata',
        'In Olivenöl geschwenkte Kirschtomaten',
        'Granatapfel',
        'Selbstgemachtes Pesto',
      ],
    },
  ],
};
