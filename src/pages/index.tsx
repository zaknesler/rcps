import { RecipeList } from '~/components/list'
import { api } from '~/utils/api'

const Index = () => {
  const { data: recipes } = api.recipes.list.useQuery()

  if (!recipes) return null
  return <RecipeList recipes={recipes} />
}

export default Index
