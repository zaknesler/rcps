import { RecipeList } from '~/components/list'
import { api } from '~/utils/api'

const Index = () => {
  const { data: recipes, isLoading } = api.recipes.list.useQuery()

  return <RecipeList isLoading={isLoading} recipes={recipes} />
}

export default Index
