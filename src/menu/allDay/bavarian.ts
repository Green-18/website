import type { MealCategory } from '~/types';

export const bavarian: MealCategory = {
  title: 'Bayrische Schmankerl',
  meals: [
    {
      name: 'Zwiebelrostbraten',
      ingredients: ['Fleisch vom Brasilianischen Rind', 'Bratkartoffeln', 'hausgemachte Sauce', 'kleiner Salat'],
    },
    {
      name: 'Schweinebraten',
      ingredients: ['Fleisch vom glücklichen Strohschwein', '2erlei Knödel', 'Dunkelbiersauce', 'Krautsalat'],
    },
    {
      name: 'Schweinshaxe',
      remark: 'nur Samstag & Sonntag solange der Vorrat reicht',
      ingredients: [
        '½ Schweinshaxe vom glücklichen Strohschwein resch gebraten',
        '2erlei Knödel',
        'Dunkelbiersauce',
        'Krautsalat',
      ],
    },
    {
      name: 'Schweinefilet Medallion',
      ingredients: ['Fleisch vom glücklichen Strohschwein', 'Rahmsauce', 'Spätzle'],
    },
    {
      name: 'Fleischpflanzerl',
      ingredients: ['hausgemachte Zwiebelsauce', 'Kartoffelsalat'],
    },
    { name: 'Hausgemachte Käsespätzle' },
    {
      name: 'Brotzeitplatte',
      ingredients: [
        'Wurstspezialitäten',
        'Käse',
        'Speck',
        'kalter Braten',
        'Obatzter',
        'Essiggurken',
        'Kren',
        'frisches Hausbrot',
      ],
    },
    { name: 'Backfisch mit Kartoffelsalat', remark: 'nur Freitag solange der Vorrat reicht' },
    { name: 'Schnitzel mit Pommes', remark: 'Schwein, Pute oder Kalb' },
  ],
};
