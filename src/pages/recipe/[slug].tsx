import Head from 'next/head'
import { RecipeCard } from '~/components/recipes/card'
import { api } from '~/utils/api'

export const getServerSideProps = async ({ params }: SSPC) => ({
  props: { slug: params?.slug as string },
})

const Index: InferSSP<typeof getServerSideProps> = ({ slug }) => {
  const { data: recipe, isLoading } = api.recipes.show.useQuery({ slug })

  return (
    <>
      {recipe && (
        <Head>
          <title>{`${recipe.title} - r.c.p.s`}</title>
          <meta name="description" content={recipe.summary} />
          <meta
            property="og:title"
            content={`${recipe.title} Recipe - r.c.p.s`}
          />
          <meta property="og:description" content={recipe.summary} />
          <meta property="og:type" content="article" />
        </Head>
      )}

      <RecipeCard isLoading={isLoading} recipe={recipe} />
    </>
  )
}

export default Index
