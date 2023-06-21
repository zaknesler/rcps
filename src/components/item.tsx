import type { Recipe } from '~/constants'

type RecipeItemProps = {
  recipe: Recipe
}

export const RecipeItem: React.FC<RecipeItemProps> = ({ recipe }) => (
  <div className="-mx-3 -mb-3 flex flex-col gap-6 border border-black p-3 md:m-0 md:-mx-8 md:p-8">
    <h1 className="max-w-lg text-2xl font-bold leading-snug md:text-3xl">
      {recipe.title}
    </h1>

    <p>{recipe.summary}</p>

    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold md:text-xl">Ingredients</h2>
      <ul className="ml-8 flex list-disc flex-col gap-1.5">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            <strong>{ingredient.amount}</strong> {ingredient.name}
            {ingredient.prep && `, ${ingredient.prep}`}
            {ingredient.note_symbol && (
              <a href={`#note-${recipe.id}-${ingredient.note_symbol}`}>
                {ingredient.note_symbol}
              </a>
            )}
          </li>
        ))}
      </ul>
    </section>

    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold md:text-xl">Instructions</h2>
      <ol className="ml-8 flex list-decimal flex-col gap-3">
        {recipe.steps.map((instruction, index) => (
          <li key={index}>{instruction}</li>
        ))}
      </ol>
    </section>

    <section className="flex flex-col gap-3">
      <h2 className="text-lg font-semibold md:text-xl">Notes</h2>
      {recipe.notes?.map((note, index) => (
        <p key={index} id={`note-${recipe.id}-${note.symbol}`}>
          {note.symbol}
          {note.text}
        </p>
      ))}
    </section>
  </div>
)
