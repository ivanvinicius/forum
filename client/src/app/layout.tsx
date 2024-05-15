import './globals.css'

import type { Metadata } from 'next'
import { ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

import { AppProvider } from '~/providers'
import { fonts } from '~/utils/fonts'

export const metadata: Metadata = {
  title: 'Cookin+',
}

interface Props {
  children: ReactNode
}

export default function RootLayout({ children }: Props) {
  return (
    <html lang="pt-BR">
      <body className={twMerge('min-h-screen bg-white antialiased', fonts)}>
        <AppProvider>{children}</AppProvider>
      </body>
    </html>
  )
}
