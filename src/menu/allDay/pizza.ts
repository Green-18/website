import type { MealCategory } from '~/types';

export const classicPizza: MealCategory = {
  title: 'Pizza Classic',
  subtitle: '⌀ 32cm',
  meals: [
    { name: 'Pizza Brot', ingredients: ['mit Knoblauch'] },
    { name: 'Margherita', ingredients: ['Tomatensauce', 'Mozzarella'] },
    { name: 'Salami', ingredients: ['Tomatensauce', 'Mozzarella', 'Salami'] },
    { name: 'Prosciutto', ingredients: ['Tomatensauce', 'Mozzarella', 'Schinken'] },
    { name: 'Regina', ingredients: ['Tomatensauce', 'Mozzarella', 'Schinken', 'Champignons'] },
    {
      name: 'Capricciosa',
      ingredients: ['Tomatensauce', 'Mozzarella', 'Schinken', 'Champignons', 'Artischocken', 'Oliven'],
    },
    { name: 'Quattro Formaggi', ingredients: ['Tomatensauce', 'Mozzarella', 'Frischkäse', 'Gorgonzola', 'Camembert'] },
    {
      name: 'Quattro Stagioni',
      ingredients: ['Tomatensauce', 'Mozzarella', 'Schinken', 'Champignons', 'Salami', 'Artischocken'],
    },
    { name: 'Tonno', ingredients: ['Tomatensauce', 'Mozzarella', 'Thunfisch', 'Zwiebeln'] },
    { name: 'Meeresfrüchte', ingredients: ['Tomatensauce', 'Mozzarella', 'Meeresfrüchte', 'Knoblauch'] },
    { name: 'Diavolo', ingredients: ['Tomatensauce', 'Mozzarella', 'scharfe Salami', 'Knoblauch', 'Peperoni'] },
  ],
};

export const specialPizza: MealCategory = {
  title: "Green 18's Spezial Pizza",
  subtitle: '⌀ 32cm',
  meals: [
    { name: 'Calzona Giovanni', ingredients: ['Parmaschinken', 'Mascarpone'] },
    {
      name: 'Romania',
      ingredients: ['Tomatensauce', 'Mozzarella', 'Putenfleisch', 'Knoblauch', 'Zwiebeln', 'Oliven', 'Champignons'],
    },
    {
      name: 'Parma',
      ingredients: [
        'Tomatensauce',
        'Mozzarella',
        'Rucola',
        'Burrata',
        'Cherrytomaten',
        'hausgemachtes Knoblauchpesto',
        'Basilikum',
      ],
    },
    {
      name: 'Burrata',
      ingredients: [
        'Tomatensauce',
        'Mozzarella',
        'Rucola',
        'Burrata',
        'Cherrytomaten',
        'hausgemachtes Knoblauchpesto',
        'Basilikum',
      ],
    },
    {
      name: 'Penzing',
      ingredients: ['Tomatensauce', 'Mozzarella', 'Parmaschinken', 'Knoblauch', 'Gorgonzola', 'Cherrytomaten'],
    },
    { name: 'Peperoni', ingredients: ['Tomatensauce', 'Mozzarella', 'Peperoni', 'Oliven'] },
    { name: 'Vegetaria', ingredients: ['Tomatensauce', 'Mozzarella', 'verschiedene Gemüse'] },
  ],
};
