import type { MealCategory } from '~/types';

export const burgers: MealCategory = {
  title: 'OH MY BURGER',
  subtitle: 'Wahlweise mit Pommes oder Süßkartoffelpommes',
  meals: [
    {
      name: 'Hamburger',
      ingredients: [
        'selbstgemachtes Rinder Patty',
        'Salat',
        'Tomate',
        'Essiggurke',
        'eingelegte Zwiebel',
        'eingelegtes Blaukraut',
        'Burger Sauce',
      ],
    },
    {
      name: 'Cheeseburger',
      ingredients: [
        'selbstgemachtes Rinder Patty',
        'Cheddar Cheese',
        'Salat',
        'Tomate',
        'Essiggurke',
        'eingelegte Zwiebel',
        'eingelegtes Blaukraut',
        'Burger Sauce',
      ],
    },
    {
      name: 'BBQ Bacon Cheeseburger',
      ingredients: [
        'selbstgemachtes Rinder Patty',
        'Bacon',
        'Cheddar Cheese',
        'Salat',
        'Tomate',
        'Essiggurke',
        'eingelegte Zwiebel',
        'eingelegtes Blaukraut',
        'BBQ Sauce',
      ],
    },
    {
      name: 'Hot Chili Cheeseburger',
      ingredients: [
        'selbstgemachtes Rinder Patty',
        'Jalapeños',
        'Cheddar Cheese',
        'Salat',
        'Tomate',
        'Essiggurke',
        'eingelegte Zwiebel',
        'eingelegtes Blaukraut',
        'Burger Sauce',
      ],
    },
    {
      name: 'White Tiger Burger',
      ingredients: [
        'White Tiger Garnele',
        'selbstgemachte Avocado-Wasabi-Limetten Creme',
        'Salat',
        'eingelegtes Blaukraut',
        'Tomate',
        'Remoulade',
      ],
    },
    {
      name: 'Veganer Crunchy Chicken Burger',
      dietaryLabels: ['🥬'],
      ingredients: [
        'veganes Crunchy Chicken Patty',
        'Salat',
        'Tomate',
        'Essiggurke',
        'einglegte Zwiebel',
        'einglegtes Blaukraut',
        'vegane Trüffel Mayonnaise',
      ],
    },
  ],
};
