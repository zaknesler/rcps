import type { GetServerSidePropsContext } from 'next'
import { RecipeList } from '~/components/list'
import { CategoryList } from '~/components/recipes/catetory-list'
import { validTags } from '~/constants/tags'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const { prisma } = await import('../../server/db/client')

  const tag = validTags.find(item => item.value === (params?.tag as string))
  const category = tag?.categories?.find(
    item => item.value === (params?.category as string),
  )
  if (!tag || !category) return { notFound: true }

  const recipes = await prisma.recipe.findMany({
    where: {
      tags: {
        some: {
          name: tag.value,
          categories: { has: category.value },
        },
      },
    },
    select: { id: true, title: true, slug: true, summary: true },
  })

  return { props: { tag, category, recipes } }
}

const Index: InferSSR<typeof getServerSideProps> = ({
  tag,
  category,
  recipes,
}) => {
  return (
    <div className="flex flex-col gap-8">
      <CategoryList tag={tag} selectedCategory={category.value} />

      <RecipeList recipes={recipes} />
    </div>
  )
}

export default Index
