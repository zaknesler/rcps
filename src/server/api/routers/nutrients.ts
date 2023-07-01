import { z } from 'zod'
import { procedures, router } from '../trpc'
import { mapIngredientNutritionInfo } from '~/api/nutrition/utils'
import { getFormattedNutritionStats } from '~/utils/entities/nutrients'

export const nutrientsRouter = router({
  byRecipe: procedures.public
    .input(z.object({ recipeId: z.string() }))
    .query(async ({ ctx, input }) => {
      const recipe = await ctx.prisma.recipe.findFirst({
        where: { id: input.recipeId },
        select: { ingredients: true, nutrition_items: true },
      })
      if (!recipe) throw new Error('Recipe not found')

      // If the recipe doesn't have any nutrition items, we need to fetch them
      let items = recipe.nutrition_items
      if (!items.length) {
        items = await mapIngredientNutritionInfo(recipe)

        await ctx.prisma.recipe.update({
          where: { id: input.recipeId },
          data: { nutrition_items: items },
        })
      }

      return getFormattedNutritionStats(items)
    }),
})
