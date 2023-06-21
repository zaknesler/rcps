import { z } from 'zod'
import { recipes } from '~/constants'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const recipeRouter = createTRPCRouter({
  list: publicProcedure.query(() => recipes),
  show: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => recipes.find(recipe => recipe.id === input.id)),
})
