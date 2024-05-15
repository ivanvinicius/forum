import { ElementType } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  icon: ElementType
  description: string | number
}

export function RecipeCardInfo({ icon: Icon, description }: Props) {
  return (
    <div className="flex items-center gap-2 lg:gap-3">
      <Icon
        className={twMerge([
          'flex h-4 w-4 flex-shrink-0 flex-grow-0 lg:h-5 lg:w-5',
          'text-sun-500 group-hover:text-sun-550',
          'transition-all duration-300',
        ])}
      />
      <span
        className={twMerge([
          'line-clamp-1 font-nunito text-sm font-medium lg:text-base',
          'text-zinc-500 group-hover:text-sun-550',
          'transition-all  duration-300',
        ])}
      >
        {description}
      </span>
    </div>
  )
}
