import { StaticImport } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'
import NextLink from 'next/link'

interface Props {
  imgSrc: string | StaticImport
  name: string
  instagram: string
}

export function RecipeNutriUser({ imgSrc, name, instagram }: Props) {
  return (
    <NextLink
      className="flex items-center justify-start gap-4"
      href={`https://www.instagram.com/${instagram}`}
      target="_blank"
      title="Ir para instagram"
    >
      <Image
        className="aspect-square h-16 w-16 rounded-full object-cover lg:h-20 lg:w-20"
        src={imgSrc}
        alt="nutritionist"
        width={128}
        height={128}
      />
      <div className="flex flex-col">
        <strong className="font-nunito text-base font-semibold text-zinc-700 lg:text-lg">
          {name}
        </strong>
        <span className="bg-gradient-to-b from-sun-600 to-violet-700 bg-clip-text text-sm text-transparent lg:text-base">
          @{instagram}
        </span>
      </div>
    </NextLink>
  )
}
