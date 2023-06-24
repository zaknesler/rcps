export type Tag = (typeof validTags)[number]
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
      { name: 'Smoothies', value: 'smoothies' },
      { name: 'Vegan', value: 'vegan' },
    ],
  },
]

export const allRecipes = [
  {
    id: 1,
    slug: 'raw-kombucha',
    tags: ['drinks', 'vegan'],
    title: 'Raw Kombucha',
    summary:
      'The start for any proper kombucha. You can drink it as is, or use it as a base for other flavors.',
    ingredients: [
      { amount: '12-oz bottle', name: 'raw kombucha', note_symbol: '*' },
      {
        amount: '1 gallon',
        name: 'water',
        prep: 'filtered',
        note_symbol: '**',
      },
      { amount: '4-5 bags', name: 'black tea' },
      { amount: '1/2 cup', name: 'sugar' },
    ],
    steps: [
      'Bring water to boil and steep tea for 15-20 minutes. You want a strong tea base, so the darker the better.',
      'Pour into a large, well-cleaned 1-gallon glass jar and add sugar. Stir until dissolved.',
      'Allow tea to cool to room temperature (otherwise the heat will kill the SCOBY). You can speed up this process by placing the pot in an ice bath.',
      'Add the raw kombucha. Cover the jar with a clean cloth and secure with a rubber band (the fermenation needs air, but not bugs).',
      "Place the jar in a warm, dark place (warmer means a faster ferment). Allow to ferment for 1-2 weeks. The longer you let it ferment, the more vinegary it will taste. Taste it often after a week until it's to your liking.",
      "Once it's ready, remove a few cups of the kombucha to use as a starter for your next batch.",
    ],
    notes: [
      {
        symbol: '*',
        text: "You can buy raw kombucha or just use some from a previous batch (or from a friend). If you're using store-bought, make sure it's unflavored (if possible) and unpasteurized. I like GT's Original. I have also used GT's Gingerade and it worked just as well.",
      },
      {
        symbol: '**',
        text: 'You want a total of 1 gallon of water, including the starter kombucha. I recommend steeping in about 1/2 gallon of water. Then, once you have dissolved the sugar, cooled it, and added the raw kombucha, you can top it off until it reaches 1 gallon.',
      },
      {
        text: "The slimy thing floating around is called the pellicle (often mistaken as the SCOBY). The SCOBY is the liquid itself. You can discard the pellicle or keep it for the next batch. It's not necessary, but it may help speed up subsequent ferments.",
      },
    ],
  },
  {
    id: 2,
    slug: 'strawberry-basil-kombucha',
    tags: ['drinks', 'vegan'],
    title: 'Strawberry-Basil Kombucha',
    summary:
      'I almost always have a freshly-bottled batch of this stuff in the refrigerator. I tend to start brewing a new batch before I run out of inventory so that I have a continual stock.',
    ingredients: [
      { amount: '1 2/3 gallons', name: 'homemade kombucha', note_symbol: '*' },
      { amount: '2 heaping cups', name: 'ripe strawberries', prep: 'chopped' },
      { amount: '1/2 cup', name: 'sugar' },
      { amount: '1/2 cup', name: 'water' },
      { amount: '2 ounces (1 cup)', name: 'fresh basil', prep: 'chopped' },
    ],
    steps: [
      "Brew a batch of homemade kombucha. When it's ready to be bottled for secondary fermentation (after 7 to 10 days of brewing), follow instructions below.",
      'Add the strawberries, sugar, water and basil to a saucepan and bring to a full boil.',
      'Reduce heat and simmer for 10 minutes. Remove from heat, mash the strawberries with a fork and allow mixture to cool to room temperature (to speed up this process, pour the mixture in a bowl and refrigerate).',
      'In a large glass pitcher, combine half of the strawberry-basil mixture (including the pulp) and half of the kombucha. Stir well.',
      'Pour the strawberry-basil kombucha into 16-ounce glass flip cap bottles 3/4 of the way up. Distribute the strawberry and basil pulp between the bottles.',
      'Repeat for the remaining half of the kombucha and strawberry-basil mixture.',
      'Seal flip cap bottles and leave in a warm, dark place for 2 to 4 days for secondary fermentation. Refrigerate all of the bottles to chill before drinking (refrigeration also slows the fermentation).',
      'When ready to drink, point the bottle away from your face and carefully open, as gasses will have built and the kombucha will be fizzy.',
      'Using a small fine strainer, strain the kombucha into a glass and discard the pulp.',
    ],
    notes: [
      {
        symbol: '*',
        text: 'Brew a 2-gallon batch of kombucha and save some of the liquid (about 1/3 gallon) with your SCOBY for starting your next batch. In order to keep this recipe raw, skip the heating process. Instead, blend 2 cups of water with 2 cups of strawberries, then mix together with chopped basil, sugar, and kombucha prior to bottling.',
      },
    ],
  },
]
