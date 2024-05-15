'use client'

import {
  useQuery,
  UseQueryOptions,
  UseQueryResult,
} from '@tanstack/react-query'

import { getNavContent, GetNavContentResponse } from '../data/get-nav-content'

type Query = UseQueryOptions<GetNavContentResponse, unknown>
type Options = Omit<Query, 'queryKey' | 'queryFn' | 'staleTime'>
type Res = UseQueryResult<GetNavContentResponse, unknown>

export function useNavContent(options?: Options): Res {
  return useQuery({
    ...options,
    queryKey: ['nav-content'],
    queryFn: () => getNavContent(),
    staleTime: 1000 * 60 * 60, // 1h
  })
}
