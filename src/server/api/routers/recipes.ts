import { type Recipe } from '@prisma/client'
import { z } from 'zod'
import { router, procedures } from '~/server/api/trpc'

export const recipeRouter = router({
  list: procedures.public.query(async ({ ctx }) =>
    ctx.prisma.recipe.findMany({
      select: { id: true, title: true, slug: true, summary: true },
    }),
  ),

  search: procedures.public.input(z.object({ query: z.string() })).query(
    async ({ input, ctx }) =>
      ctx.prisma.recipe.aggregateRaw({
        pipeline: [
          {
            $search: {
              index: 'search',
              text: {
                query: input.query,
                path: { wildcard: '*' },
                fuzzy: { maxEdits: 1 },
              },
            },
          },
          { $addFields: { id: { $toString: '$_id' } } },
          { $project: { _id: 0, id: 1, title: 1, slug: 1, summary: 1 } },
        ],
      }) as unknown as Pick<Recipe, 'id' | 'title' | 'slug' | 'summary'>[],
  ),

  show: procedures.public
    .input(z.object({ slug: z.string() }))
    .query(async ({ input, ctx }) =>
      ctx.prisma.recipe.findFirst({
        where: { slug: input.slug },
      }),
    ),

  byTag: procedures.public
    .input(z.object({ tag: z.string(), categories: z.array(z.string()) }))
    .query(async ({ input, ctx }) =>
      ctx.prisma.recipe.findMany({
        where: {
          tags: {
            some: {
              name: input.tag,
              categories: { hasEvery: input.categories },
            },
          },
        },
        select: { id: true, title: true, slug: true, summary: true },
      }),
    ),

  // create: procedures.auth
  //   .input(
  //     z.object({
  //       slug: z.string(),
  //       title: z.string(),
  //       summary: z.string(),
  //       ingredients: z.array(
  //         z.object({
  //           amount: z.string(),
  //           name: z.string(),
  //           prep: z.string().optional(),
  //           note_id: z.string().optional(),
  //         }),
  //       ),
  //       steps: z.array(z.object({ text: z.string() })),
  //       notes: z.array(z.object({ id: z.string(), text: z.string() })),
  //     }),
  //   )
  //   .mutation(async ({ input, ctx }) =>
  //     ctx.prisma.recipe.create({ data: input }),
  //   ),
})
