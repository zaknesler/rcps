import Head from 'next/head'
import { RecipeList } from '~/components/list'
import { CategoryList } from '~/components/recipes/category-list'
import { api } from '~/utils/api'

export const getServerSideProps = async ({ params }: SSPC) => ({
  props: { tag: params?.tag as string },
})

const Index: InferSSP<typeof getServerSideProps> = ({ tag }) => {
  const { data } = api.recipes.byTag.useQuery({ tag })
  if (!data?.tag) return null

  return (
    <>
      <Head>
        <title>{`${data.tag?.value} recipes - r.c.p.s`}</title>
      </Head>

      <div className="flex flex-col gap-8">
        <CategoryList tag={data.tag} />
        <RecipeList recipes={data.recipes} />
      </div>
    </>
  )
}

export default Index
