import type { GetServerSidePropsContext } from 'next'
import { RecipeList } from '~/components/list'
import { validTags } from '~/constants/recipes'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const { prisma } = await import('../../server/db/client')

  const tag = validTags.find(item => item.value === (params?.tag as string))
  if (!tag) return { notFound: true }

  const recipes = await prisma.recipe.findMany({
    where: { tags: { some: { name: tag.value } } },
    select: { id: true, title: true, slug: true, summary: true },
  })

  return { props: { tag, recipes } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ tag, recipes }) => {
  return (
    <div className="flex flex-col gap-8">
      <div className="grid grid-cols-4 gap-4 font-semibold">
        {tag.categories?.map(category => (
          <a
            href={`/${tag.value}/${category.value}`}
            className="border border-black p-4 ring-gray-300 transition-shadow hover:bg-gray-50 hover:ring-2 hover:ring-offset-2"
          >
            {category.name}
          </a>
        ))}
      </div>

      <RecipeList
        recipes={recipes}
        notFoundText={`No ${tag.value} recipes found`}
      />
    </div>
  )
}

export default Index
