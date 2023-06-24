import type { GetServerSidePropsContext } from 'next'
import { RecipeList } from '~/components/list'
import { validTags } from '~/constants/recipes'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const { prisma } = await import('../server/db/client')
  const tag = params?.tag as string

  if (!validTags.includes(tag)) return { notFound: true }
  const recipes = await prisma.recipe.findMany({
    where: { tags: { has: tag } },
  })

  return { props: { tag, recipes } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ tag, recipes }) => {
  return (
    <RecipeList
      recipes={recipes}
      notFoundText={`No recipes found for "${tag}"`}
    />
  )
}

export default Index
