import type { GetServerSidePropsContext } from 'next'
import { RecipeCard } from '~/components/recipes/card'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const slug = params?.slug as string

  const { prisma } = await import('../../server/db/client')
  const recipe = await prisma.recipe.findFirst({ where: { slug } })

  return { props: { recipe } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ recipe }) => {
  if (!recipe) return null

  return <RecipeCard recipe={recipe} />
}

export default Index
