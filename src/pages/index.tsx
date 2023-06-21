import { RecipeItem } from '~/components/item'
import { api } from '~/utils/api'

export default function Home() {
  const { data: recipes } = api.recipes.list.useQuery()

  return (
    <>
      {recipes?.map(recipe => (
        <RecipeItem recipe={recipe} />
      ))}
    </>
  )
}
