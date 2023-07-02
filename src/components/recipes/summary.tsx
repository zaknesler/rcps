import type { Recipe } from '@prisma/client'
import { cx } from 'class-variance-authority'
import Link from 'next/link'

type RecipeSummaryProps = {
  recipe: Pick<Recipe, 'id' | 'title' | 'slug' | 'summary'>
  headingLink?: boolean
  className?: string
}

export const RecipeSummary: React.FC<RecipeSummaryProps> = ({
  recipe,
  className,
}) => (
  <Link
    href={`/recipe/${recipe.slug}`}
    className={cx(
      'flex flex-col gap-6 border border-black p-4 text-sm ring-gray-700 transition-shadow hover:bg-gray-50 hover:ring-4 hover:ring-offset-4 dark:border-gray-700 dark:ring-gray-700 dark:ring-offset-black dark:hover:bg-gray-900 md:p-8 md:text-base',
      className,
    )}
  >
    <h1 className="max-w-lg text-2xl font-bold leading-snug md:text-3xl">
      {recipe.title}
    </h1>

    <p>{recipe.summary}</p>
  </Link>
)
