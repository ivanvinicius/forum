import { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

type Props = ComponentProps<'div'>

export function Skeleton({ className, ...props }: Props) {
  return (
    <div
      className={twMerge(
        'h-1 w-full animate-pulse rounded-lg bg-zinc-200',
        className,
      )}
      {...props}
    />
  )
}
