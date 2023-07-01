import axios from 'axios'
import { env } from '~/env.mjs'
import type { NutrientsResponse } from './types'

const NUTRIENTS_URL = 'https://trackapi.nutritionix.com/v2/natural/nutrients'

const HEADERS = {
  'x-app-id': env.NUTRITION_API_APP_ID,
  'x-app-key': env.NUTRITION_API_APP_KEY,
}

export const fetchNutritionInfo = async (query: string) => {
  console.log('fetching nutrition data for', query)
  return axios.post<NutrientsResponse>(
    NUTRIENTS_URL,
    { query, timezone: 'US/Eastern' },
    { headers: HEADERS },
  )
}
