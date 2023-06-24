import type { GetServerSidePropsContext } from 'next'
import { RecipeList } from '~/components/list'

export const getServerSideProps = async ({}: GetServerSidePropsContext) => {
  const { prisma } = await import('../server/db/client')

  const recipes = await prisma.recipe.findMany({})

  return { props: { recipes } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ recipes }) => {
  if (!recipes) return null
  return <RecipeList recipes={recipes} />
}

export default Index
