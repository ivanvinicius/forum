import { Pagination } from '~/types/pagination'

export function concatRoute(
  params: string,
  { paginate = true, page = 1, perPage = 10 }: Pagination,
): string {
  return `${params}?paginate=${paginate}&page=${page}&per_page=${perPage}`
}
