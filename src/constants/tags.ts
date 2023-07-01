export type Tag = (typeof validTags)[number]
export type Category = Tag['categories'][number]

export const validTags = [
  {
    name: 'Breakfast',
    value: 'breakfast',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Overnight', value: 'overnight' },
      { name: 'Sweet', value: 'sweet' },
      { name: 'Savory', value: 'savory' },
    ],
  },
  {
    name: 'Lunch',
    value: 'lunch',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Light', value: 'light' },
      { name: 'Spicy', value: 'spicy' },
      { name: 'Sandwiches', value: 'sandwiches' },
    ],
  },
  {
    name: 'Dinner',
    value: 'dinner',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Light', value: 'light' },
      { name: 'Spicy', value: 'spicy' },
      { name: 'Sandwiches', value: 'sandwiches' },
      { name: 'Pasta', value: 'pasta' },
    ],
  },
  {
    name: 'Snacks',
    value: 'snacks',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Protein', value: 'protein' },
      { name: 'Fruit', value: 'fruit' },
      { name: 'Savory', value: 'savory' },
      { name: 'Sweet', value: 'sweet' },
    ],
  },
  {
    name: 'Dessert',
    value: 'dessert',
    categories: [
      { name: 'Hot', value: 'hot' },
      { name: 'Cold', value: 'cold' },
      { name: 'Fruit', value: 'fruit' },
      { name: 'Chocolate', value: 'chocolate' },
      { name: 'Ice Cream', value: 'ice-cream' },
      { name: 'Pastry', value: 'pastry' },
    ],
  },
  {
    name: 'Vegan',
    value: 'vegan',
    categories: [
      { name: 'Breakfast', value: 'breakfast' },
      { name: 'Lunch', value: 'lunch' },
      { name: 'Dinner', value: 'dinner' },
      { name: 'Snacks', value: 'snacks' },
    ],
  },
  {
    name: 'Drinks',
    value: 'drinks',
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
