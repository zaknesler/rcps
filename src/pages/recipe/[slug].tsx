import type { GetServerSidePropsContext } from 'next'
import Head from 'next/head'
import { RecipeCard } from '~/components/recipes/card'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const slug = params?.slug as string

  const { prisma } = await import('../../server/db/client')
  const recipe = await prisma.recipe.findFirst({ where: { slug } })

  return { props: { recipe } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ recipe }) => {
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
