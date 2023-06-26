import Head from 'next/head'
import { RecipeList } from '~/components/list'
import { CategoryList } from '~/components/recipes/category-list'
import { api } from '~/utils/api'

export const getServerSideProps = async ({ params }: SSPC) => ({
  props: { tag: params?.tag as string },
})

const Index: InferSSP<typeof getServerSideProps> = ({ tag }) => {
  const { data, isLoading } = api.recipes.byTag.useQuery({ tag })

  return (
    <>
      <Head>
        <title>{`${data?.tag?.value} recipes - r.c.p.s`}</title>
      </Head>

      <div className="flex flex-col gap-8">
        {data?.tag && <CategoryList tag={data.tag} />}
        <RecipeList isLoading={isLoading} recipes={data?.recipes} />
      </div>
    </>
  )
}

export default Index
