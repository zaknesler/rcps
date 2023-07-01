import type { NutritionItem } from '@prisma/client'
import _ from 'lodash'
import { FULL_NUTRIENTS_MAP } from '~/constants/nutrients'

export const getFormattedNutritionStats = (items: NutritionItem[]) =>
  _.chain(items)
    .map(item => item.nutrient_data)
    .flatten()
    .groupBy('attr_id')
    .map(items => {
      if (!items[0]) return null
      return { attr_id: items[0].attr_id, value: _.sumBy(items, 'value') }
    })
    .filter(Boolean as unknown as ExcludesFalsy)
    .map(stat => {
      const nutrient = FULL_NUTRIENTS_MAP.find(
        nutrient => nutrient.attr_id === stat.attr_id,
      )
      if (!nutrient) return null

      return { ...nutrient, value: stat.value }
    })
    .filter(Boolean as unknown as ExcludesFalsy)
    .value()
