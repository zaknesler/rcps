import type { Recipe } from '~/types/recipe'
import { RecipeItem } from './item'

type RecipeListProps = {
  recipes: Recipe[]
  notFoundText?: string
}

export const RecipeList: React.FC<RecipeListProps> = ({
  recipes,
  notFoundText = 'No recipes found.',
}) => (
  <div className="flex flex-col gap-4 md:gap-8">
    {recipes.length ? (
      recipes.map(recipe => <RecipeItem key={recipe.id} recipe={recipe} />)
    ) : (
      <p className="text-center">{notFoundText}</p>
    )}
  </div>
)
