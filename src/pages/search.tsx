import Head from 'next/head'
import { RecipeList } from '~/components/list'
import { api } from '~/utils/api'

export const getServerSideProps = async ({ query }: SSPC) => ({
  props: { query: (query?.q as string) || '' },
})

const Index: InferSSP<typeof getServerSideProps> = ({ query }) => {
  const { data: recipes, isLoading } = api.recipes.search.useQuery({
    query,
  })

  return (
    <>
      <Head>
        <title>{`"${query}" recipes - r.c.p.s`}</title>
      </Head>

      {!!recipes?.length && (
        <p className="md:text-center">
          {recipes.length} {recipes.length === 1 ? 'recipe' : 'recipes'} for "
          {query}"
        </p>
      )}

      <RecipeList
        isLoading={isLoading}
        recipes={recipes}
        notFoundText={`No recipes found for "${query}"`}
      />
    </>
  )
}

export default Index
