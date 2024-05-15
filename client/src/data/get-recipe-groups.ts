/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from '~/lib/api'
import { Pagination } from '~/types/pagination'
import { concatRoute } from '~/utils/concat-route'
import { convertIngredients } from '~/utils/convert-ingredients'
import { convertInstructions } from '~/utils/convert-instructions'
import { convertSecondsToHours } from '~/utils/convert-second-to-hour'
import { convertServings } from '~/utils/convert-servings'
import { convertDifficulty } from '~/utils/covert-difficulty'

interface Props {
  group: string
  id: string
}

export interface GetRecipeGroupsRes {
  id: string
  slug: string
  name: string
  cookingTime: string
  servings: string
  difficulty: string
  image: {
    id: string
    url: string
  }
  instructions: string
  ingredients: string
  nationality: {
    id: string
    name: string
  }
}

const DAY_IN_SECONDS = 60 * 60 * 24

export async function getRecipeGroups(
  { group, id }: Props,
  pagination: Pagination,
): Promise<GetRecipeGroupsRes[]> {
  const route = concatRoute(`/recipes/groups/${group}/${id}`, pagination)

  const response = await api(route, {
    next: {
      revalidate: DAY_IN_SECONDS,
    },
  })

  if (!response.ok) throw new Error('Unable to fetch data')

  const parsed = await response.json()

  const data = parsed.map(
    (item: any) =>
      ({
        id: item.id,
        slug: item.slug,
        name: item.name,
        cookingTime: convertSecondsToHours(item.cooking_time),
        servings: convertServings(item.servings),
        difficulty: convertDifficulty(item.difficulty),
        image: {
          id: item.image.id,
          url: item.image.url,
        },
        instructions: convertInstructions(item.instructions.length),
        ingredients: convertIngredients(item.ingredients.length),
        nationality: {
          id: item.nationality.id,
          name: `Nacionalidade ${item.nationality.name.toLowerCase()}`,
        },
      }) as GetRecipeGroupsRes,
  )

  return data
}
