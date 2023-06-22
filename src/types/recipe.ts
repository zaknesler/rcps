import { type validTags } from '~/constants/recipes'

export type Tag = (typeof validTags)[number]

export type Recipe = {
  id: number
  slug: string
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
