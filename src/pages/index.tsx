import type { GetServerSidePropsContext } from 'next'
import { RecipeList } from '~/components/list'

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  const { prisma } = await import('../server/db/client')

  const recipes = await prisma.recipe.findMany({
    select: { id: true, title: true, slug: true, summary: true },
  })

  return { props: { recipes } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ recipes }) => {
  if (!recipes) return null
  return <RecipeList recipes={recipes} summariesOnly />
}

export default Index
