import Head from 'next/head'
import { RecipeList } from '~/components/list'
import { CategoryList } from '~/components/recipes/category-list'
import { validTags } from '~/constants/tags'
import { api } from '~/utils/api'

export const getServerSideProps = async ({ params }: SSPC) => {
  const tagParam = params?.tag as string
  const categoryParam = params?.category as string
  const tag = validTags.find(t => t.value === tagParam.toLowerCase().trim())
  const category = tag?.categories.find(
    cat => cat.value === categoryParam.toLowerCase().trim(),
  )

  if (!tag || !category) return { notFound: true }

  return { props: { tag, category } }
}

const Index: InferSSP<typeof getServerSideProps> = ({ tag, category }) => {
  const { data: recipes, isLoading } = api.recipes.byTagAndCategory.useQuery({
    tag: tag.value,
    category: category.value,
  })

  return (
    <>
      <Head>
        <title>{`${tag.value}/${category.value} recipes - r.c.p.s`}</title>
      </Head>

      <div className="flex flex-col gap-8">
        <CategoryList tag={tag} selectedCategory={category.value} />
        <RecipeList isLoading={isLoading} recipes={recipes} />
      </div>
    </>
  )
}

export default Index
