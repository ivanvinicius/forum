import { ElementType } from 'react'

interface Props {
  icon: ElementType
  title: string
}

export function AccordionTriggerContent({ icon: Icon, title }: Props) {
  return (
    <div className="flex items-center gap-2 ">
      <Icon className="h-5 w-5 text-zinc-500 group-hover:text-ruby-600 group-data-[state=open]:text-ruby-600" />
      <span className="font-inter font-medium text-zinc-700 group-hover:text-ruby-600 group-data-[state=open]:text-ruby-600">
        {title}
      </span>
    </div>
  )
}
