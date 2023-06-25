import type { Recipe } from '@prisma/client'
import { RecipeSummary } from './recipes/summary'

type RecipeListProps = {
  recipes?: Pick<Recipe, 'id' | 'title' | 'slug' | 'summary'>[]
  notFoundText?: string
}

export const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  notFoundText = 'No recipes found',
}) => {
  if (!recipes) return null

  return (
    <div className="flex flex-col gap-4 md:gap-8">
      {recipes.length ? (
        recipes.map(recipe => <RecipeSummary key={recipe.id} recipe={recipe} />)
      ) : (
        <p className="text-center">{notFoundText}</p>
      )}
    </div>
  )
}
