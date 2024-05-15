/* eslint-disable @typescript-eslint/no-explicit-any */

import { api } from '~/lib/api'
import { Nationality } from '~/types/nationality'
import { Pagination } from '~/types/pagination'
import { concatRoute } from '~/utils/concat-route'

export async function getNationalities(
  pagination: Pagination,
): Promise<Nationality[]> {
  const route = concatRoute('/nationalities', pagination)

  const response = await api(route)

  if (!response.ok) throw new Error('Unable to fetch data')

  const parsed = await response.json()

  const nationalities = parsed.map(
    (data: any) =>
      ({
        id: data.id,
        name: data.name,
        shortName: data.short_name,
        image: {
          id: data.image.id,
          url: data.image.url,
          fileName: data.image.file_name,
          contentType: data.image.content_type,
          size: data.image.size,
        },
      }) as Nationality,
  )

  return nationalities
}
