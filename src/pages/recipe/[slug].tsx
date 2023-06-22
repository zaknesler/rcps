import type { GetServerSidePropsContext } from 'next'
import { RecipeItem } from '~/components/item'
import { allRecipes } from '~/constants/recipes'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const slug = params?.slug as string
  const recipe = allRecipes.find(recipe => recipe.slug === slug)

  if (!recipe) return { notFound: true }

  return { props: { recipe } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ recipe }) => {
  return <RecipeItem recipe={recipe} headingLink={false} />
}

export default Index
