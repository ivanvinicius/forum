import NextLink from 'next/link'
import { ComponentProps } from 'react'
import { tv, VariantProps } from 'tailwind-variants'

const link = tv({
  base: [
    'flex items-center justify-center gap-2 font-inter font-medium py-2 px-4',
    'transition-all duration-300',
  ],

  variants: {
    variant: {
      filled: ['text-white bg-ruby-600  hover:bg-ruby-700 rounded-lg'],
      outlined: [
        'text-ruby-600 0 rounded-lg border-2 border-ruby-600 ',
        ' hover:border-ruby-700 hover:text-ruby-700',
      ],
    },
  },

  defaultVariants: {
    variant: 'filled',
  },
})

type Props = ComponentProps<typeof NextLink> & VariantProps<typeof link>

export function Link({ variant, ...props }: Props) {
  return <NextLink className={link({ variant })} {...props} />
}
