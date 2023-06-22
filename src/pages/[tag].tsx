import type { GetServerSidePropsContext } from 'next'
import { RecipeList } from '~/components/list'
import { validTags, allRecipes } from '~/constants/recipes'
import type { Tag } from '~/types/recipe'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  if (!validTags.includes(params?.tag as Tag)) return { notFound: true }

  const tag = params?.tag as Tag
  const recipes = allRecipes.filter(recipe => recipe.tags?.includes(tag))

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
