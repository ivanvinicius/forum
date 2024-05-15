import { Nunito, Cookie, Inter } from 'next/font/google'

const cookie = Cookie({
  variable: '--font-cookie',
  subsets: ['latin'],
  weight: '400',
})

const nunito = Nunito({
  variable: '--font-nunito',
  subsets: ['latin'],
})

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const fonts = `${cookie.variable} ${nunito.variable} ${inter.variable}`
