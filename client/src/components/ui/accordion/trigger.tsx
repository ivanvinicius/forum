'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { ChevronDown } from 'lucide-react'
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Ref = ElementRef<typeof Accordion.Trigger>
type Props = ComponentPropsWithoutRef<typeof Accordion.Trigger>

export const AccordionTrigger = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Accordion.Header className="flex">
      <Accordion.Trigger
        ref={ref}
        className={twMerge([
          'group flex flex-1 items-center justify-between rounded-lg p-3',
          'hover:bg-ruby-50',
          'transition-all duration-150',
          className,
        ])}
        {...props}
      >
        {children}

        <ChevronDown
          className={twMerge([
            'group-hover:text-ruby-600 group-data-[state=open]:rotate-180 group-data-[state=open]:text-ruby-600',
            'h-5 w-5 text-zinc-500 ',
            'transition-transform duration-300',
          ])}
          aria-hidden
        />
      </Accordion.Trigger>
    </Accordion.Header>
  ),
)
