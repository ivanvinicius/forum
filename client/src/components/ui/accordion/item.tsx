'use client'

import * as Accordion from '@radix-ui/react-accordion'
import { forwardRef, ElementRef, ComponentPropsWithoutRef } from 'react'
import { twMerge } from 'tailwind-merge'

type Ref = ElementRef<typeof Accordion.Item>
type Props = ComponentPropsWithoutRef<typeof Accordion.Item>

export const AccordionItem = forwardRef<Ref, Props>(
  ({ className, children, ...props }, ref) => (
    <Accordion.Item
      ref={ref}
      className={twMerge(['mt-px overflow-hidden first:mt-0 ', className])}
      {...props}
    >
      {children}
    </Accordion.Item>
  ),
)
