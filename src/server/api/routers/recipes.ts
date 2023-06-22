import { z } from 'zod'
import { allRecipes } from '~/constants/recipes'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const recipeRouter = createTRPCRouter({
  list: publicProcedure.query(() => allRecipes),
  show: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => allRecipes.find(recipe => recipe.id === input.id)),
})
