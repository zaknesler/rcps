import type { GetServerSidePropsContext } from 'next'
import { RecipeList } from '~/components/list'

export const getServerSideProps = async ({
  query,
}: GetServerSidePropsContext) => {
  const search = query.q as string

  const { prisma } = await import('../server/db/client')
  const recipes = await prisma.recipe.findMany({
    where: { title: { contains: search, mode: 'insensitive' } },
  })

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
