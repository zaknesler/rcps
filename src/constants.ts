export type Tag = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'vegan' | 'drink'

export type Recipe = {
  id: number
  tags?: Tag[]
  title: string
  ingredients: {
    amount: string
    name: string
    prep?: string
    note_symbol?: string
  }[]
  steps: string[]
  notes?: {
    symbol: string
    text: string
  }[]
}

export const recipes: Recipe[] = [
  {
    id: 1,
    tags: ['drink', 'vegan'],
    title: 'Raw Kombucha',
    ingredients: [
      { amount: '12-oz bottle', name: 'raw kombucha', note_symbol: '*' },
      {
        amount: '1 gallon',
        name: 'water',
        prep: 'filtered',
        note_symbol: '**',
      },
      { amount: '4-5 bags', name: 'black tea' },
      { amount: '1 cup', name: 'sugar' },
    ],
    steps: [
      'Bring water to boil and steep tea for 15-20 minutes. You want a strong tea base, so the darker the better.',
      'Pour into a large, well-cleaned 1-gallon glass jar and add sugar. Stir until dissolved.',
      'Allow tea to cool to room temperature (otherwise the heat will kill the SCOBY). You can speed up this process by placing the pot in an ice bath.',
    ],
    notes: [
      {
        symbol: '*',
        text: "You can buy raw kombucha or just use some from a previous batch (or from a friend). If you're using store-bought, make sure it's unflavored (if possible) and unpasteurized. I like GT's Original. I have also used GT's Gingerade and it worked just as well.",
      },
      {
        symbol: '**',
        text: 'You want a total of 1 gallon of water. I recommend steeping in about 1/2 gallon of water, and then filling up to 1 gallon after dissolving the sugar, cooling, and adding the SCOBY.',
      },
    ],
  },
  {
    id: 2,
    tags: ['drink', 'vegan'],
    title: 'Strawberry-Basil Kombucha',
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
