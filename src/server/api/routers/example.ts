import { z } from 'zod'
import { createTRPCRouter, publicProcedure } from '~/server/api/trpc'

export const exampleRouter = createTRPCRouter({
  hello: publicProcedure
    .input(z.object({ title: z.string() }))
    .query(({ input }) => {
      return {
        title: input.title,
      }
    }),
})
