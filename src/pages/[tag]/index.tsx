import Head from 'next/head'
import { RecipeList } from '~/components/list'
import { CategoryList } from '~/components/recipes/category-list'
import { validTags } from '~/constants/tags'
import { api } from '~/utils/api'

export const getServerSideProps = async ({ params }: SSPC) => {
  const tag = validTags.find(
    t => t.value === (params?.tag as string).toLowerCase().trim(),
  )
  if (!tag) return { notFound: true }
  return { props: { tag } }
}

const Index: InferSSP<typeof getServerSideProps> = ({ tag }) => {
  const { data: recipes, isLoading } = api.recipes.byTag.useQuery({
    tag: tag.value,
  })

  return (
    <>
      <Head>
        <title>{`${tag.value} recipes - r.c.p.s`}</title>
      </Head>

      <div className="flex flex-col gap-8">
        <CategoryList tag={tag} />
        <RecipeList isLoading={isLoading} recipes={recipes} />
      </div>
    </>
  )
}

export default Index
