import type { MealCategory } from '~/types';

export const burgers: MealCategory = {
  title: 'OH MY BURGER Signature Burgers',
  subtitle: 'Wahlweise mit Pommes oder Süßkartoffelpommes, Aufpreis 3,50€',
  meals: [
    {
      name: 'Hamburger',
      ingredients: [
        'Selbstgemachtes Rinder Patty',
        'Salat',
        'Tomate',
        'Essiggurke',
        'Eingelegte Zwiebel',
        'Eingelegtes Blaukraut',
        'Burger Sauce',
      ],
    },
    {
      name: 'Cheeseburger',
      ingredients: [
        'Selbstgemachtes Rinder Patty',
        'Cheddar Cheese',
        'Salat',
        'Tomate',
        'Essiggurke',
        'Eingelegte Zwiebel',
        'Eingelegtes Blaukraut',
        'Burger Sauce',
      ],
    },
    {
      name: 'BBQ Bacon Cheeseburger',
      ingredients: [
        'Selbstgemachtes Rinder Patty',
        'Bacon',
        'Cheddar Cheese',
        'Salat',
        'Tomate',
        'Essiggurke',
        'Eingelegte Zwiebel',
        'Eingelegtes Blaukraut',
        'BBQ Sauce',
      ],
    },
    {
      name: 'Hot Chili Cheeseburger',
      ingredients: [
        'Selbstgemachtes Rinder Patty',
        'Jalapeños',
        'Cheddar Cheese',
        'Salat',
        'Tomate',
        'Essiggurke',
        'Eingelegte Zwiebel',
        'Eingelegtes Blaukraut',
        'Burger Sauce',
      ],
    },
    {
      name: 'White Tiger Burger',
      ingredients: [
        'Tiger Garnele',
        'Selbstgemachte Avocado Wasabi Limetten Creme',
        'Salat',
        'Eingelegtes Blaukraut',
        'Tomate',
        'Remoulade',
      ],
    },
    {
      name: 'Veganer Crunchy Chicken Burger mit Trüffel Mayonnaise',
      ingredients: [
        'Veganes Crunchy Chicken Patty',
        'Salat',
        'Tomate',
        'Essiggurke',
        'einglegte Zwiebel',
        'einglegtes Blaukraut',
        'Vegane Trüffel Mayonnaise',
      ],
    },
  ],
};
