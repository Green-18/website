import type { MealCategory } from '~/types';

export const smoothies: MealCategory = {
  title: 'Smoothies',
  subtitle: 'Frisch und selbstgemacht',
  meals: [
    {
      name: 'Coconut Dream',
      ingredients: ['Mandeldrink', 'Banane', 'Ananas', 'blauer Spirulina', 'Cocos Mandelcreme', 'Sojajoghurt'],
    },
    {
      name: 'Sunny Mango',
      ingredients: ['Mandeldrink', 'Cocos Mandelcreme', 'Banane', 'Mango', 'Mangosaft', 'Sojajoghurt'],
    },
    {
      name: 'Red Berry',
      ingredients: ['Mandeldrink', 'Banane', 'Erdbeeren', 'Sojajoghurt'],
    },
  ],
};
