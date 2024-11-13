import type { MealCategory } from '~/types';

export const breakfast: MealCategory = {
  title: 'Frühstück / Brunch',
  meals: [
    {
      name: 'Italienisches Frühstück 1 Person',
      ingredients: [
        'Parmaschinken',
        'Italienische Salami',
        'Tomaten',
        'Mozzarella',
        'Oliven',
        'Parmesan',
        'Blue Cheese',
        'Frischkäseaufstrich',
        'Marmelade',
        'Weintrauben',
        'Baguette',
      ],
      remark: 'auch für 2 Personen erhältlich',
    },
    {
      name: 'Griechisches Frühstück',
      ingredients: [
        'Feta Käse',
        'Tomaten',
        'Oliven',
        'Rote Zwiebeln',
        'Kleiner Griechischer Joghurt mit Honig',
        'Gurke',
        'Gekochtes Ei',
        'Marmelade',
        'Brot',
      ],
      remark: 'auch für 2 Personen Erhältlich',
    },
    {
      name: 'Französisches Frühstück',
      ingredients: [
        'Butter Croissant',
        'Butter',
        'Rührei aus zwei Eier',
        'Marmelade',
        'Camembert',
        'Parmaschinken',
        'Weintrauben',
        'Baguette',
      ],
      remark: 'auch für 2 Personen Erhältlich',
    },
  ],
};
