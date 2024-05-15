type Props = { title: string }

export function FeaturedTitle({ title }: Props) {
  return (
    <div className="flex items-center gap-2 p-1">
      <hr className="h-[2px] w-8 rounded-full border-0 bg-ruby-600" />
      <span className="font-cookie text-3xl leading-none text-ruby-600 lg:text-4xl">
        {title}
      </span>
    </div>
  )
}
