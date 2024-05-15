import { Timer, Users, ShoppingBag, ChefHat, Info, Globe2 } from 'lucide-react'
import Image from 'next/image'
import NextLink from 'next/link'
import { twMerge } from 'tailwind-merge'

import { GetRecipeGroupsRes } from '~/data/get-recipe-groups'

import { RecipeCardInfo } from './info'

interface Props {
  recipe: GetRecipeGroupsRes
}

export function RecipeCard({ recipe }: Props) {
  return (
    <NextLink
      className={twMerge([
        'flex flex-shrink-0 flex-grow-0 flex-col',
        'group h-fit w-full max-w-70 overflow-hidden rounded-2xl lg:rounded-3xl',
        'border border-zinc-100 bg-white hover:border-sun-200 hover:bg-sun-50',
        'transition-all duration-300',
      ])}
      href={`../../recipe/${recipe.slug}`}
      title="Ir para receita"
    >
      <div className="overflow-hidden">
        <Image
          className={twMerge([
            'aspect-video h-44 w-full object-cover',
            'transition-all duration-300 group-hover:scale-110',
          ])}
          src={recipe.image.url}
          alt={recipe.name}
          width={480}
          height={480}
        />
      </div>

      <div className="flex flex-col gap-2 p-2 lg:gap-3 lg:p-3 ">
        <span
          className={twMerge([
            'line-clamp-2 font-nunito text-base font-semibold lg:text-lg/6',
            'text-zinc-700 group-hover:text-sun-550',
            'transition-all duration-300',
          ])}
        >
          {recipe.name}
        </span>

        <div className="flex flex-col gap-2 lg:gap-3">
          <RecipeCardInfo icon={Timer} description={recipe.cookingTime} />
          <RecipeCardInfo icon={Users} description={recipe.servings} />
          <RecipeCardInfo icon={ShoppingBag} description={recipe.ingredients} />
          <RecipeCardInfo icon={ChefHat} description={recipe.instructions} />
          <RecipeCardInfo icon={Info} description={recipe.difficulty} />
          <RecipeCardInfo icon={Globe2} description={recipe.nationality.name} />
        </div>
      </div>
    </NextLink>
  )
}
