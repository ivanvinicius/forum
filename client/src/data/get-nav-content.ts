import { api } from '~/lib/api'
import { Holiday } from '~/types/holiday'
import { Meal } from '~/types/meal'
import { Nationality } from '~/types/nationality'

export interface GetNavContentResponse {
  meals: Meal[]
  nationalities: Nationality[]
  holidays: Holiday[]
}

export async function getNavContent(): Promise<GetNavContentResponse> {
  const pagination = '?paginate=false'

  const [meals, nationalities, holidays] = await Promise.all([
    api('/meals'.concat(pagination)),
    api('/nationalities'.concat(pagination)),
    api('/holidays'.concat(pagination)),
  ])

  if (!meals.ok) {
    throw new Error()
  }

  return {
    meals: await meals.json(),
    nationalities: await nationalities.json(),
    holidays: await holidays.json(),
  }
}
