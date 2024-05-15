import { ReactNode } from 'react'

import { ReactQueryProvider } from './react-query'

interface Props {
  children: ReactNode
}

export function AppProvider({ children }: Props) {
  return <ReactQueryProvider>{children}</ReactQueryProvider>
}
