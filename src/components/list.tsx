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
  <div className="flex flex-col gap-12">
    {recipes.length ? (
      recipes.map(recipe => (
        <RecipeItem
          key={recipe.id}
          recipe={recipe}
          className="-mx-3 -mb-3 md:m-0 md:-mx-8"
        />
      ))
    ) : (
      <p className="text-center">{notFoundText}</p>
    )}
  </div>
)
