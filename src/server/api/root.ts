import { recipeRouter } from '~/server/api/routers/recipes'
import { router } from '~/server/api/trpc'
import { nutrientsRouter } from './routers/nutrients'

export type AppRouter = typeof appRouter
export const appRouter = router({
  recipes: recipeRouter,
  nutrients: nutrientsRouter,
})
