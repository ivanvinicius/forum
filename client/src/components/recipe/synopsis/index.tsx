import { ElementType } from 'react'

interface Props {
  icon: ElementType
  description: string | number
}

export function ReipeSynopsis({ description, icon: Icon }: Props) {
  return (
    <div className="w-18 flex flex-col items-center justify-center gap-1">
      <Icon className="h-4 w-4 text-sun-500 lg:h-5 lg:w-5" />
      <span className="line-clamp-1 text-center font-nunito text-xs font-semibold text-sun-500">
        {description}
      </span>
    </div>
  )
}
