import type { GetServerSidePropsContext } from 'next'
import { RecipeList } from '~/components/list'
import { allRecipes } from '~/constants/recipes'

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const search = query.q as string
  if (!search) return { notFound: true }
  const recipes = allRecipes.filter(
    recipe =>
      recipe.title.toLowerCase().includes(search.toLowerCase()) ||
      recipe.tags?.includes(search.toLowerCase() as any),
  )

  return { props: { query: search, recipes } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ query, recipes }) => {
  return (
    <>
      {!!recipes.length && (
        <p className="md:text-center">
          {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'} for "
          {query}"
        </p>
      )}
      <RecipeList
        recipes={recipes}
        notFoundText={`No recipes found for "${query}"`}
      />
    </>
  )
}

export default Index
