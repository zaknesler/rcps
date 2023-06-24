import { z } from 'zod'
import { allRecipes } from '~/constants/recipes'
import { router, procedures } from '~/server/api/trpc'

export const recipeRouter = router({
  list: procedures.public.query(async ({ ctx }) =>
    ctx.prisma.recipe.findMany({}),
  ),
  show: procedures.public
    .input(z.object({ id: z.number() }))
    .query(({ input }) => allRecipes.find(recipe => recipe.id === input.id)),
  create: procedures.public
    .input(
      z.object({
        slug: z.string(),
        title: z.string(),
        summary: z.string(),
        ingredients: z.array(
          z.object({
            amount: z.string(),
            name: z.string(),
            prep: z.string().optional(),
            note_id: z.string().optional(),
          }),
        ),
        steps: z.array(z.object({ text: z.string() })),
        notes: z.array(z.object({ id: z.string(), text: z.string() })),
      }),
    )
    .mutation(async ({ input, ctx }) =>
      ctx.prisma.recipe.create({ data: input }),
    ),
})
