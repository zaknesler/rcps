import { cx } from 'class-variance-authority'

type PulsingItemProps = {
  count?: number
  className?: string
  itemHeightClass?: string
  classNameItem?: string
}

export const PulsingItems: React.FC<PulsingItemProps> = ({
  count = 3,
  className,
  classNameItem,
  itemHeightClass = 'h-32',
}) => {
  return (
    <div className={cx('flex flex-col gap-4 md:gap-8', className)}>
      {Array.from({ length: count }).map((_, index) => (
        <div
          key={index}
          className={cx(
            'w-full animate-pulse rounded-lg bg-gray-100 dark:bg-gray-900',
            classNameItem,
            itemHeightClass,
          )}
        />
      ))}
    </div>
  )
}
