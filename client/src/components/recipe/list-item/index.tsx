import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props {
  children: ReactNode
  description: string | number
}

export function RecipeListItem({ children, description }: Props) {
  return (
    <>
      <div
        className={twMerge([
          'group-odd:bg-sun-500 group-even:bg-ruby-600',
          'flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full ',
          'lg:h-12 lg:w-12',
        ])}
      >
        {children}
      </div>
      <p className="w-full font-nunito text-sm font-semibold leading-6 text-zinc-500 lg:text-base lg:leading-7">
        {description}
      </p>
    </>
  )
}
