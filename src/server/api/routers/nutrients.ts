import { type NutritionItem } from '@prisma/client'
import _ from 'lodash'
import { ObjectId } from 'mongodb'
import { z } from 'zod'
import { procedures, router } from '../trpc'
import { fetchNutritionInfo } from '~/api/nutrition'
import { getFormattedNutritionStats } from '~/utils/nutrients'

export const nutrientsRouter = router({
  byRecipe: procedures.public
    .input(z.object({ recipeId: z.string() }))
    .query(async ({ ctx, input }) => {
      const recipe = await ctx.prisma.recipe.findFirst({
        where: { id: input.recipeId },
        select: { nutrition_items: true },
      })
      if (!recipe) throw new Error('Recipe not found')

      const statSums = _.chain(recipe.nutrition_items)
        .map(item => item.nutrient_data)
        .flatten()
        .groupBy('attr_id')
        .map(groupedObjs => {
          if (!groupedObjs[0]) return null

          return {
            attr_id: groupedObjs[0].attr_id,
            value: _.sumBy(groupedObjs, 'value'),
          }
        })
        .filter(Boolean as unknown as ExcludesFalsy)
        .value()

      return getFormattedNutritionStats(statSums)
    }),

  fetch: procedures.public
    .input(z.object({ recipeId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const recipe = await ctx.prisma.recipe.findFirst({
        where: { id: input.recipeId },
      })
      if (!recipe) throw new Error('Recipe not found')

      const items = (
        await Promise.all(
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
      ).filter(Boolean as unknown as ExcludesFalsy)

      await ctx.prisma.recipe.update({
        where: { id: input.recipeId },
        data: { nutrition_items: items },
      })

      return recipe
    }),
})
