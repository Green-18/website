import type { MealCategory } from '~/types';

export const steaks: MealCategory = {
  title: 'Steaks & Co',
  subtitle: 'inkl. kleinem gemischtem Salat',
  meals: [
    { name: 'Zwiebelrostbraten mit Bratkartoffel und hausgemachter Sauce' },
    { name: 'Mixgrillteller (Rind, Schwein, Pute) mit Rosmarinkartoffeln' },
    { name: 'Putensteak mit Metaxasauce und Bratkartoffeln' },
    { name: 'Pfeffersteak mit Speckbohnen' },
    { name: 'Schnitzel mit Pommes', remark: 'Schwein 18,90€\nPute 19,80€\nKalb 22,90€' },
    {
      name: 'Schnitzel mit Pommes',
      ingredients: [
        '300g Rindersteak vom Agentinischen Rind mit gebratenem Gemüse',
        'Bratkartoffeln',
        'Maiskolbenstück',
        'Zitronenbutter und hausgemachtes Pesto',
      ],
    },
  ],
};
