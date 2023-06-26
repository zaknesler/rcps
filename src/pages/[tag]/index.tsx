import Head from 'next/head'
import { useRouter } from 'next/router'
import { RecipeList } from '~/components/list'
import { CategoryList } from '~/components/recipes/category-list'
import { validTags } from '~/constants/tags'
import { api } from '~/utils/api'

const Index = () => {
  const router = useRouter()

  const tagParam = router.query?.tag as string | undefined
  const categories =
    (router.query?.categories as string | undefined)?.split(',') ?? []

  const tag = validTags.find(t => t.value === tagParam?.toLowerCase().trim())
  if (!tag) return null

  const { data: recipes, isLoading } = api.recipes.byTag.useQuery({
    tag: tag.value,
    categories,
  })

  const handleChange = (categories: string[]) => {
    const query = categories.length
      ? `?categories=${categories.sort().join(',')}`
      : ''
    router.push(`/${tag.value}${query}`)
  }

  return (
    <>
      <Head>
        <title>{`${tag.value} recipes - r.c.p.s`}</title>
      </Head>

      <div className="flex flex-col gap-8">
        <CategoryList tag={tag} selected={categories} onChange={handleChange} />
        <RecipeList isLoading={isLoading} recipes={recipes} />
      </div>
    </>
  )
}

export default Index
