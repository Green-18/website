import type { MealCategory } from '~/types';

export const kidsMenu: MealCategory = {
  title: 'Kinder Menü',
  meals: [
    {
      name: 'Keine Ahnung',
      ingredients: ['Chicken Nuggets', 'Pommes'],
    },
    {
      name: 'Ich hab keinen Hunger',
      ingredients: ['kleines Schnitzel vom Schwein', 'Pommes'],
    },
    {
      name: 'Mir egal',
      ingredients: ['Portion Pommes'],
    },
    {
      name: 'Mir ist langweilig',
      ingredients: ['kleine Penne Napoli'],
    },
    {
      name: 'Irgendwas',
      ingredients: ['kleine Spaghetti Bolognese'],
    },
    {
      name: 'Suppenkaspa',
      ingredients: ['kleine Portion Spätzle mit Sauce'],
    },
  ],
};
