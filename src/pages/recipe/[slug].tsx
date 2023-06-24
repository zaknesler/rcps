import type { GetServerSidePropsContext } from 'next'
import { RecipeItem } from '~/components/item'

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

  return <RecipeItem recipe={recipe} headingLink={false} />
}

export default Index
