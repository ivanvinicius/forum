'use client'

import * as Accordion from '@radix-ui/react-accordion'
import * as Collapsible from '@radix-ui/react-collapsible'
import { ChefHat, Flag, Sparkles } from 'lucide-react'
import NextLink from 'next/link'

import { UiAccordion } from '~/components/ui/accordion'
import { useNavContent } from '~/querys/use-nav-content'

import { Skeleton } from '../skeleton'

export function SidebarNav() {
  const { data, isLoading, isError } = useNavContent()

  if (isLoading) {
    return (
      <div className="flex flex-col gap-3">
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
        <Skeleton className="h-12" />
      </div>
    )
  }

  if (isError) return <span>Houve um erro...</span>

  return (
    <nav>
      <Accordion.Root className="w-full" type="single" collapsible>
        <UiAccordion.Item
          className="overflow-hidden data-[state=open]:border-b data-[state=open]:border-zinc-100/50"
          value="meals"
        >
          <UiAccordion.Trigger className="data-[state=open]:bg-ruby-50">
            <UiAccordion.TriggerContent icon={ChefHat} title="Refeições" />
          </UiAccordion.Trigger>

          <UiAccordion.Content>
            <ul className="group list-none pl-10 text-base text-zinc-700">
              {isLoading && <li>Carregando...</li>}
              {isError && <li>Houve um erro...</li>}

              {data?.meals.map(({ id, name }) => (
                <li key={id}>
                  <NextLink href={`/recipes/meals/${id}`} title={name}>
                    <Collapsible.Trigger className="group/link w-full py-1.5">
                      <span className="line-clamp-1 text-start transition-colors duration-300 group-hover/link:text-ruby-600">
                        {name}
                      </span>
                    </Collapsible.Trigger>
                  </NextLink>
                </li>
              ))}
            </ul>
          </UiAccordion.Content>
        </UiAccordion.Item>

        <UiAccordion.Item
          className="overflow-hidden data-[state=open]:border-b data-[state=open]:border-zinc-100/50"
          value="nationalities"
        >
          <UiAccordion.Trigger className="data-[state=open]:bg-ruby-50/50">
            <UiAccordion.TriggerContent icon={Flag} title="Nacionalidades" />
          </UiAccordion.Trigger>

          <UiAccordion.Content>
            <ul className="group list-none pl-10 text-base text-zinc-700">
              {isLoading && <li>Carregando...</li>}
              {isError && <li>Houve um erro...</li>}

              {data?.nationalities.map(({ id, name }) => (
                <li key={id}>
                  <NextLink href={`/recipes/nationalities/${id}`} title={name}>
                    <Collapsible.Trigger className="group/link w-full py-1.5">
                      <span className="line-clamp-1 text-start transition-colors duration-300 group-hover/link:text-ruby-600">
                        {name}
                      </span>
                    </Collapsible.Trigger>
                  </NextLink>
                </li>
              ))}
            </ul>
          </UiAccordion.Content>
        </UiAccordion.Item>

        <UiAccordion.Item
          className="overflow-hidden data-[state=open]:border-b data-[state=open]:border-zinc-100/50"
          value="holidays"
        >
          <UiAccordion.Trigger className="data-[state=open]:bg-ruby-50/50">
            <UiAccordion.TriggerContent icon={Sparkles} title="Celebrações" />
          </UiAccordion.Trigger>

          <UiAccordion.Content>
            <ul className="group list-none pl-10 text-base text-zinc-700">
              {isLoading && <li>Carregando...</li>}
              {isError && <li>Houve um erro...</li>}

              {data?.holidays.map(({ id, name }) => (
                <li key={id}>
                  <NextLink href={`/recipes/holidays/${id}`} title={name}>
                    <Collapsible.Trigger className="group/link w-full py-1.5">
                      <span className="line-clamp-1 text-start transition-colors duration-300 group-hover/link:text-ruby-600">
                        {name}
                      </span>
                    </Collapsible.Trigger>
                  </NextLink>
                </li>
              ))}
            </ul>
          </UiAccordion.Content>
        </UiAccordion.Item>
      </Accordion.Root>
    </nav>
  )
}
