import { RecipeList } from '~/components/list'
import { allRecipes } from '~/constants/recipes'

export const getServerSideProps = () => {
  return { props: { recipes: allRecipes } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ recipes }) => {
  return <RecipeList recipes={recipes} />
}

export default Index
