import { api } from '~/utils/api'

export default function Home() {
  const { data } = api.recipes.list.useQuery({ id: 1 })

  return (
    <>
      {data && (
        <div className="-mx-3 -mb-3 flex flex-col gap-6 border border-black p-3 md:m-0 md:-mx-8 md:p-8">
          <h1 className="max-w-lg text-2xl font-bold leading-snug md:text-3xl">
            {data.title}
          </h1>

          <p>
            I almost always have a freshly-bottled batch of this stuff in the
            refrigerator. I tend to start brewing a new batch before I run out
            of inventory so that I have a continual stock.
          </p>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold md:text-xl">Ingredients</h2>
            <ul className="ml-8 flex list-disc flex-col gap-1.5">
              {data.ingredients.map((ingredient, index) => (
                <li key={index}>
                  <strong>{ingredient.amount}</strong> {ingredient.name}
                  {ingredient.preparation && `, ${ingredient.preparation}`}
                </li>
              ))}
            </ul>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold md:text-xl">Instructions</h2>
            <ol className="ml-8 flex list-decimal flex-col gap-3">
              {data.steps.map((instruction, index) => (
                <li key={index}>{instruction}</li>
              ))}
            </ol>
          </section>

          <section className="flex flex-col gap-3">
            <h2 className="text-lg font-semibold md:text-xl">Notes</h2>
            {data.notes.map((note, index) => (
              <p key={index}>{note}</p>
            ))}
          </section>
        </div>
      )}
    </>
  )
}
