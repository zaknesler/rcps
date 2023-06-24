import type { Recipe } from '@prisma/client'
import { cx } from 'class-variance-authority'

type RecipeCardProps = {
  recipe: Recipe
  className?: string
}

const noteSymbols = ['*', '**', '†', '‡', '§', '‖', '¶', '‡‡', '§§']

export const RecipeCard: React.FC<RecipeCardProps> = ({
  recipe,
  className,
}) => {
  const notesWithSymbols = recipe.notes?.map((note, index) => ({
    ...note,
    symbol: noteSymbols[index % noteSymbols.length],
  }))

  return (
    <article
      aria-label={recipe.title}
      className={cx(
        'flex flex-col gap-6 border border-black p-4 text-sm md:p-8 md:text-base',
        className,
      )}
    >
      <h1 className="max-w-lg text-2xl font-bold leading-snug md:text-3xl">
        {recipe.title}
      </h1>

      <p>{recipe.summary}</p>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold md:text-xl">Ingredients</h2>
        <ul className="ml-8 flex list-disc flex-col gap-1.5">
          {recipe.ingredients.map((ingredient, index) => (
            <li key={`ingredient-${index}`}>
              <strong>{ingredient.amount}</strong> {ingredient.name}
              {ingredient.prep && `, ${ingredient.prep}`}
              {ingredient.to_taste && `, or to taste`}
              {ingredient.note_id && (
                <a href={`#note-${recipe.slug}-${ingredient.note_id}`}>
                  {
                    notesWithSymbols.find(
                      note => note.id === ingredient.note_id,
                    )?.symbol
                  }
                </a>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold md:text-xl">Instructions</h2>
        <ol className="ml-8 flex list-decimal flex-col gap-4">
          {recipe.steps.map((step, index) => (
            <li key={`step-${index}`}>{step.text}</li>
          ))}
        </ol>
      </section>

      <section className="flex flex-col gap-4">
        <h2 className="text-lg font-semibold md:text-xl">Notes</h2>
        {recipe.notes?.map((note, index) => (
          <p key={`note-${index}`} id={`note-${recipe.slug}-${note.id}`}>
            {noteSymbols[index % noteSymbols.length]}
            {note.text}
          </p>
        ))}
      </section>
    </article>
  )
}
