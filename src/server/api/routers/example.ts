import { z } from 'zod'
import { recipes } from '~/constants'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ id: z.number() }))
    .query(({ input }) => recipes.find(recipe => recipe.id === input.id)),
})
