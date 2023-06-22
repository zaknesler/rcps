export type Tag = 'breakfast' | 'lunch' | 'dinner' | 'snack' | 'vegan' | 'drink'

export type Recipe = {
  id: number
  tags?: Tag[]
  title: string
  summary: string
  ingredients: {
    amount: string
    name: string
    prep?: string
    note_symbol?: string
  }[]
  steps: string[]
  notes?: {
    symbol?: string
    text: string
  }[]
}
