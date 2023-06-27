import { cx } from 'class-variance-authority'
import type { Category, Tag } from '~/constants/tags'

type CategoryListProps = {
  tag: Tag
  selected: string[]
  onChange: (categories: string[]) => void
}

export const CategoryList: React.FC<CategoryListProps> = ({
  tag,
  selected,
  onChange,
}) => {
  const isSelected = (category: string) => selected.includes(category)

  const handleClick = (category: Category) =>
    onChange(
      isSelected(category.value)
        ? selected?.filter(c => c !== category.value)
        : [...selected, category.value],
    )

  return (
    <div className="grid grid-cols-2 gap-4 font-semibold md:grid-cols-3 lg:grid-cols-4">
      {tag.categories?.map(category => (
        <button
          key={category.value}
          onClick={() => handleClick(category)}
          className={cx(
            'border border-black p-4 text-left ring-gray-300 transition-shadow hover:bg-gray-50 hover:text-black hover:ring-2 hover:ring-offset-2',
            isSelected(category.value) &&
              'bg-black text-white hover:bg-gray-800 hover:text-white',
          )}
        >
          {category.name}
        </button>
      ))}
    </div>
  )
}
