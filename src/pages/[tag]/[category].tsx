import type { GetServerSidePropsContext } from 'next'
import { validTags } from '~/constants/recipes'

export const getServerSideProps = async ({
  params,
}: GetServerSidePropsContext) => {
  const { prisma } = await import('../../server/db/client')

  const tag = validTags.find(item => item.value === (params?.tag as string))
  if (!tag) return { notFound: true }

  const recipes = await prisma.recipe.findMany({
    where: {
      tags: {
        some: {
          name: tag.value,
          categories: { has: params?.category as string },
        },
      },
    },
    select: { id: true, title: true, slug: true, summary: true },
  })

  return { props: { tag, recipes } }
}

export { default } from './'
