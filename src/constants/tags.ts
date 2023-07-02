export type Tag = (typeof VALID_TAGS)[number]
export type Category = Tag['categories'][number]

export const VALID_TAGS = [
  {
    name: 'Breakfast',
    value: 'breakfast',
    short: 'brkfst',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Overnight', value: 'overnight' },
      { name: 'Sweet', value: 'sweet' },
      { name: 'Savory', value: 'savory' },
      { name: 'Vegan', value: 'vegan' },
    ],
  },
  {
    name: 'Lunch',
    value: 'lunch',
    short: 'lnch',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Light', value: 'light' },
      { name: 'Spicy', value: 'spicy' },
      { name: 'Sandwiches', value: 'sandwiches' },
      { name: 'Vegan', value: 'vegan' },
    ],
  },
  {
    name: 'Dinner',
    value: 'dinner',
    short: 'dnnr',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Light', value: 'light' },
      { name: 'Spicy', value: 'spicy' },
      { name: 'Sandwiches', value: 'sandwiches' },
      { name: 'Pasta', value: 'pasta' },
      { name: 'Vegan', value: 'vegan' },
    ],
  },
  {
    name: 'Snacks',
    value: 'snacks',
    short: 'sncks',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Protein', value: 'protein' },
      { name: 'Fruit', value: 'fruit' },
      { name: 'Savory', value: 'savory' },
      { name: 'Sweet', value: 'sweet' },
      { name: 'Vegan', value: 'vegan' },
    ],
  },
  {
    name: 'Dessert',
    value: 'dessert',
    short: 'dssrt',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Fruit', value: 'fruit' },
      { name: 'Chocolate', value: 'chocolate' },
      { name: 'Ice Cream', value: 'ice-cream' },
      { name: 'Pastry', value: 'pastry' },
      { name: 'Vegan', value: 'vegan' },
    ],
  },
  {
    name: 'Drinks',
    value: 'drinks',
    short: 'drnks',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Protein', value: 'protein' },
      { name: 'Fruit', value: 'fruit' },
      { name: 'Alcoholic', value: 'alcoholic' },
      { name: 'Non-Alcoholic', value: 'non-alcoholic' },
      { name: 'Smoothie', value: 'smoothie' },
      { name: 'Vegan', value: 'vegan' },
    ],
  },
]
