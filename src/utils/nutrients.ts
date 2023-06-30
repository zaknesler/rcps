import type { NutrientData } from '@prisma/client'
import { FULL_NUTRIENTS_MAP } from '~/constants/nutrients'

export const getFormattedNutritionStats = (stats: NutrientData[]) =>
  stats
    .map(stat => {
      const nutrient = FULL_NUTRIENTS_MAP.find(
        nutrient => nutrient.attr_id === stat.attr_id,
      )
      if (!nutrient) return null

      return {
        ...nutrient,
        value: stat.value,
      }
    })
    .filter(Boolean as unknown as ExcludesFalsy)
