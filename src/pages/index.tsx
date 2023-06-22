import { RecipeItem } from '~/components/item'
import { recipes } from '~/constants/recipes'

export const getServerSideProps = () => {
  return { props: { recipes } }
}

const Index: InferSSR<typeof getServerSideProps> = ({ recipes }) => {
  return (
    <div className="flex flex-col gap-12">
      {recipes.map(recipe => (
        <RecipeItem recipe={recipe} className="-mx-3 -mb-3 md:m-0 md:-mx-8" />
      ))}
    </div>
  )
}

export default Index
