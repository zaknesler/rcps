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

      const { data } = await fetchNutritionInfo(
        recipe.ingredients.map(ingredient =>
          [ingredient.amount, ingredient.name].join(' '),
        ),
      )

      await ctx.prisma.recipe.update({
        where: { id: input.recipeId },
        data: {
          nutrition_info: data.foods.map(food => ({
            id: new ObjectId().toString(),
            ingredient_id: new ObjectId().toString(), // @todo -- this is supposed to be mapped to an ingredient
            food_name: food?.food_name,
            serving_qty: food?.serving_qty,
            serving_unit: food?.serving_unit,
            serving_weight_grams: food?.serving_weight_grams,
            stat_calories: food?.nf_calories,
            stat_total_fat: food?.nf_total_fat,
            stat_saturated_fat: food?.nf_saturated_fat,
            stat_cholesterol: food?.nf_cholesterol,
            stat_sodium: food?.nf_sodium,
            stat_total_carbohydrate: food?.nf_total_carbohydrate,
            stat_dietary_fiber: food?.nf_dietary_fiber,
            stat_sugars: food?.nf_sugars,
            stat_protein: food?.nf_protein,
            stat_potassium: food?.nf_potassium,
            stat_p: food?.nf_p,
            alt_measures: [],
          })),
        },
      })

      return data
    }),
})
