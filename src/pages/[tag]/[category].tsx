import Head from 'next/head'
import { RecipeList } from '~/components/list'
import { CategoryList } from '~/components/recipes/category-list'
import { api } from '~/utils/api'

export const getServerSideProps = async ({ params }: SSPC) => ({
  props: {
    tag: params?.tag as string,
    category: params?.category as string,
  },
})

const Index: InferSSP<typeof getServerSideProps> = ({ tag, category }) => {
  const { data } = api.recipes.byTagAndCategory.useQuery({ tag, category })

  if (!data?.tag || !data.category) return null

  return (
    <>
      <Head>
        <title>{`${data.tag.value}/${data.category.value} recipes - r.c.p.s`}</title>
      </Head>

      <div className="flex flex-col gap-8">
        <CategoryList tag={data.tag} selectedCategory={data.category.value} />
        <RecipeList recipes={data.recipes} />
      </div>
    </>
  )
}

export default Index
