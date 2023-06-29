import _ from 'lodash'
import { ObjectId } from 'mongodb'
import { z } from 'zod'
import { procedures, router } from '../trpc'
import { fetchNutritionInfo } from '~/api/nutrition'

export const nutrientsRouter = router({
  fetch: procedures.public
    .input(z.object({ recipeId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const recipe = await ctx.prisma.recipe.findFirst({
        where: { id: input.recipeId },
      })
      if (!recipe) throw new Error('Recipe not found')
      if (!!recipe.nutrition_info.length) return recipe

      const responses = await Promise.all(
        recipe.ingredients.map(async ingredient =>
          fetchNutritionInfo([ingredient.amount, ingredient.name].join(' ')),
        ),
      )

      const nutritionInfo = _.zipWith(
        recipe.ingredients,
        responses,
        (ingredient, { data }) => {
          const food = data?.foods[0]
          if (!food) return null

          return {
            id: new ObjectId().toString(),
            ingredient_id: ingredient.id,
            food_name: food.food_name,
            serving_qty: food.serving_qty,
            serving_unit: food.serving_unit,
            serving_weight_grams: food.serving_weight_grams,
            stats: {
              calories: food.nf_calories,
              total_fat: food.nf_total_fat,
              saturated_fat: food.nf_saturated_fat,
              cholesterol: food.nf_cholesterol,
              sodium: food.nf_sodium,
              total_carbohydrate: food.nf_total_carbohydrate,
              dietary_fiber: food.nf_dietary_fiber,
              sugars: food.nf_sugars,
              protein: food.nf_protein,
              potassium: food.nf_potassium,
              p: food.nf_p,
            },
            alt_measures: [],
          }
        },
      ).filter(Boolean as unknown as ExcludesFalsy)

      const nutritionSummary = nutritionInfo
        .map(info => info.stats)
        .reduce((acc, stats) => ({
          calories: (acc.calories || 0) + stats.calories,
          total_fat: (acc.total_fat || 0) + stats.total_fat,
          saturated_fat: (acc.saturated_fat || 0) + stats.saturated_fat,
          cholesterol: (acc.cholesterol || 0) + stats.cholesterol,
          sodium: (acc.sodium || 0) + stats.sodium,
          total_carbohydrate:
            (acc.total_carbohydrate || 0) + stats.total_carbohydrate,
          dietary_fiber: (acc.dietary_fiber || 0) + stats.dietary_fiber,
          sugars: (acc.sugars || 0) + stats.sugars,
          protein: (acc.protein || 0) + stats.protein,
          potassium: (acc.potassium || 0) + stats.potassium,
          p: (acc.p || 0) + stats.p,
        }))

      await ctx.prisma.recipe.update({
        where: { id: input.recipeId },
        data: {
          nutrition_info: {
            summary_stats: nutritionSummary,
            items: nutritionInfo,
          },
        },
      })

      return recipe
    }),
})
