import { type NutritionItem, type Recipe } from '@prisma/client'
import { ObjectId } from 'mongodb'
import { fetchNutritionInfo } from '.'

export const mapIngredientNutritionInfo = async (
  recipe: Pick<Recipe, 'ingredients'>,
) => {
  const mapped = await Promise.all(
    recipe.ingredients.map(async ingredient => {
      const { data } = await fetchNutritionInfo(
        [ingredient.amount, ingredient.name].join(' '),
      )

      const food = data?.foods[0]
      if (!food) return null

      return {
        id: new ObjectId().toString(),
        ingredient_id: ingredient.id,
        food_name: food.food_name,
        serving_qty: food.serving_qty,
        serving_unit: food.serving_unit,
        serving_weight_grams: food.serving_weight_grams,
        nutrient_data: food.full_nutrients,
        alt_measures: food.alt_measures.map(measure => ({
          ...measure,
          seq: measure.seq ?? null,
        })),
      } satisfies NutritionItem
    }),
  )

  return mapped.filter(Boolean as unknown as ExcludesFalsy)
}
