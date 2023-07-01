import type { Recipe } from '@prisma/client'
import { PulsingItems } from './pulsing-items'
import { RecipeSummary } from './recipes/summary'

type RecipeListProps = {
  isLoading?: boolean
  recipes?: Pick<Recipe, 'id' | 'title' | 'slug' | 'summary'>[]
  notFoundText?: string
}

export const RecipeList: React.FC<RecipeListProps> = ({
  isLoading = false,
  recipes,
  notFoundText = 'No recipes found',
}) => {
  return (
    <div className="flex flex-1 flex-col gap-4 md:gap-8">
      {isLoading ? (
        <PulsingItems count={3} itemHeightClass="h-32" />
      ) : recipes?.length ? (
        recipes.map(recipe => <RecipeSummary key={recipe.id} recipe={recipe} />)
      ) : (
        <p className="flex flex-1 items-center justify-center text-center">
          {notFoundText}
        </p>
      )}
    </div>
  )
}
