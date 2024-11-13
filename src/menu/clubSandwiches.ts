import type { MealCategory } from '~/types';

export const clubSandwiches: MealCategory = {
  title: 'Clubsandwiches',
  meals: [
    {
      name: 'American Toast',
      ingredients: ['Knuspriger Toast', 'Omelette', 'Knuspriger Bacon', 'Käse', 'Salat', 'Essiggurke'],
    },
    {
      name: 'Toscana Toast',
      ingredients: ['Knuspriger Toast', 'Tomate', 'Mozzarella', 'Parmaschinken', 'Selbstgemachtes Pesto'],
    },
    {
      name: 'Carina Toast',
      ingredients: ['Knuspriger Toast', 'Avocadocreme', 'Kalter Burrata', 'Getrocknete Tomate'],
    },
    {
      name: 'Cheese Lover',
      ingredients: ['Knuspriger Toast', 'Doppelt Käse', 'Tomate', 'Salat'],
    },
  ],
};
