import type { Recipe } from '@prisma/client'
import { cx } from 'class-variance-authority'

type RecipeItemProps = {
  recipe: Recipe
  headingLink?: boolean
  className?: string
}

export const RecipeItem: React.FC<RecipeItemProps> = ({
  recipe,
  headingLink = true,
  className,
}) => (
  <article
    aria-label={recipe.title}
    aria-description={recipe.summary}
    className={cx(
      'flex flex-col gap-6 border border-black p-4 text-sm md:p-8 md:text-base',
      className,
    )}
  >
    {headingLink ? (
      <a
        className="max-w-lg text-2xl font-bold leading-snug hover:underline md:text-3xl"
        href={`/recipe/${recipe.slug}`}
      >
        {recipe.title}
      </a>
    ) : (
      <h1 className="max-w-lg text-2xl font-bold leading-snug md:text-3xl">
        {recipe.title}
      </h1>
    )}

    <p>{recipe.summary}</p>

    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold md:text-xl">Ingredients</h2>
      <ul className="ml-8 flex list-disc flex-col gap-1.5">
        {recipe.ingredients.map((ingredient, index) => (
          <li key={index}>
            <strong>{ingredient.amount}</strong> {ingredient.name}
            {ingredient.prep && `, ${ingredient.prep}`}
            {ingredient.note_symbol && (
              <a href={`#note-${recipe.slug}-${ingredient.note_symbol}`}>
                {ingredient.note_symbol}
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
          <li key={index}>{step.text}</li>
        ))}
      </ol>
    </section>

    <section className="flex flex-col gap-4">
      <h2 className="text-lg font-semibold md:text-xl">Notes</h2>
      {recipe.notes?.map((note, index) => (
        <p key={index} id={`note-${recipe.slug}-${note.symbol}`}>
          {note.symbol}
          {note.text}
        </p>
      ))}
    </section>
  </article>
)
