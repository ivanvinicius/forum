import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import hero from './hero.svg'

export function Hero() {
  return (
    <Image
      className={twMerge([
        'flex h-[40rem] w-full object-cover object-left',
        '2xl:-mt-8 2xl:h-auto',
        '4xl:-mt-56',
      ])}
      src={hero}
      alt=""
      width={100}
      height={100}
      quality={10}
    />
  )
}
