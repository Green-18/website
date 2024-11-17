import type { MealCategory } from '~/types';

export const steaks: MealCategory = {
  title: 'Steaks & Co',
  meals: [
    {
      name: 'Mixgrillteller',
      ingredients: ['3erlei Fleisch (Rind, Schwein, Pute)', 'Rosmarinkartoffeln', 'kleiner Salat'],
    },
    {
      name: 'Putensteak',
      ingredients: ['Putenfleisch', 'Metaxasauce', 'Bratkartoffeln', 'kleiner Salat'],
    },
    {
      name: 'Pfeffersteak',
      ingredients: ['250g brasilianisches Rind', 'Speckbohnen', 'kleiner Salat'],
    },
    {
      name: 'Bauernplatte',
      ingredients: [
        '300g Rindersteak',
        'gebratenes Gemüse',
        'Bratkartoffeln',
        'Maiskolbenstück',
        'Zitronenbutter',
        'kleiner Salat',
      ],
    },
  ],
};
