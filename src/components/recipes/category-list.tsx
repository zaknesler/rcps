import { cx } from 'class-variance-authority'
import Link from 'next/link'
import type { Tag } from '~/constants/tags'

type CategoryListProps = {
  tag: Tag
  selectedCategory?: string
}

export const CategoryList: React.FC<CategoryListProps> = ({
  tag,
  selectedCategory,
}) => (
  <div className="grid grid-cols-2 gap-4 font-semibold md:grid-cols-3 lg:grid-cols-4">
    {tag.categories?.map(category => (
      <Link
        key={category.value}
        href={
          selectedCategory ? `/${tag.value}` : `/${tag.value}/${category.value}`
        }
        className={cx(
          'border border-black p-4 ring-gray-300 transition-shadow hover:bg-gray-50 hover:text-black hover:ring-2 hover:ring-offset-2',
          selectedCategory === category.value &&
            'bg-black text-white hover:bg-gray-800 hover:text-white',
        )}
      >
        {category.name}
      </Link>
    ))}
  </div>
)
