import { twMerge } from 'tailwind-merge'

import { FeaturedTitle } from '~/components/feature-title'
import { RecipeCard } from '~/components/recipe/card'
import { getRecipeGroups } from '~/data/get-recipe-groups'

interface Props {
  params: { group: string[] }
  searchParams: { [key: string]: string }
}

export default async function Recipes(props: Props) {
  const [group, id] = props.params.group

  const recipes = await getRecipeGroups({ group, id }, { paginate: false })

  if (recipes.length === 0)
    return (
      <div
        className={twMerge([
          'mx-auto mt-14 flex w-full max-w-7xl flex-col items-center justify-center p-4',
          'lg:mt-0 lg:items-start lg:justify-normal lg:p-8',
        ])}
      >
        <FeaturedTitle title="Ooops!" />
        <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-2xl">
          Nenhum resultado foi encontrado...
        </h2>
      </div>
    )

  return (
    <div
      className={twMerge([
        'mx-auto mt-14 flex w-full max-w-7xl flex-col items-center justify-center gap-4 p-4',
        'lg:mt-0 lg:items-start lg:justify-normal lg:gap-8 lg:p-8',
      ])}
    >
      <div className="flex flex-col items-center lg:items-start lg:justify-normal">
        <FeaturedTitle title="Menu" />
        <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-right lg:text-2xl">
          Nosso catálogo de receitas pra você
        </h2>
        {/* <span className="text-center font-nunito text-sm font-normal text-zinc-500 lg:text-right lg:text-base">
          Buscado por Norte americana
        </span> */}
      </div>

      <div
        className={twMerge([
          'flex flex-wrap items-center justify-center gap-4',
          'lg:items-start lg:justify-normal lg:gap-8',
        ])}
      >
        {recipes.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </div>
    </div>
  )
}
