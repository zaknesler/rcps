import Head from 'next/head'
import { useRouter } from 'next/router'
import { RecipeCard } from '~/components/recipes/card'
import { api } from '~/utils/api'

export const getServerSideProps = async ({ params }: SSPC) => ({
  props: { slug: params?.slug as string },
})

const Index: InferSSP<typeof getServerSideProps> = ({ slug: _slug }) => {
  const router = useRouter()
  const slug = (router.query.slug as string) || _slug

  const { data: recipe } = api.recipes.show.useQuery({ slug })
  if (!recipe) return null

  return (
    <>
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
      <RecipeCard recipe={recipe} />
    </>
  )
}

export default Index
