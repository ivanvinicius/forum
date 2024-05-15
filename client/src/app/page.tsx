import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { twMerge } from 'tailwind-merge'

import { FeaturedTitle } from '~/components/feature-title'
import { Link } from '~/components/link'
import { Hero } from '~/components/svgs/hero'
import { Logo } from '~/components/svgs/logo'
import { getNationalities } from '~/data/get-nationalities'

export default async function Home() {
  const nationalities = await getNationalities({ paginate: true, perPage: 6 })

  return (
    <>
      <header className="relative flex justify-center">
        <Hero />

        <nav className="absolute flex w-full max-w-content items-center justify-between p-3 lg:p-4">
          <Logo className="h-10 w-auto flex-shrink-0 " />

          <Link href={'/recipes/meals/cabb452a-8e40-4b35-ab8e-1f56aadeed7a'}>
            Explorar receitas
            <ChevronRight className="h-5 w-5" />
          </Link>
        </nav>

        <div
          className={twMerge([
            'absolute mt-32 flex w-full max-w-content flex-col items-center justify-between p-3',
            'lg:mt-36 lg:flex-row lg:items-start lg:p-4 ',
          ])}
        >
          <div className="flex w-full flex-col items-center lg:items-start">
            <h1
              className={twMerge([
                'text-center font-nunito text-3xl font-bold text-white',
                'lg:max-w-[24rem] lg:text-left lg:text-4xl',
              ])}
            >
              A cozinha do mundo na palma da sua mão
            </h1>

            <span className="mt-6 text-center font-nunito text-sm font-medium text-white lg:mt-8 lg:text-left lg:text-base">
              Diversidade de países na nossa culinária...
            </span>

            <div className="mt-4 flex w-auto flex-wrap items-center justify-center gap-6 lg:justify-start">
              {nationalities.map(({ id, shortName, image: { url } }) => (
                <div
                  key={id}
                  className="flex flex-col items-center justify-center gap-2 lg:gap-3"
                >
                  <Image
                    className="h-8 w-8 rounded-full object-cover lg:h-9 lg:w-9"
                    src={url}
                    alt=""
                    width={64}
                    height={64}
                  />
                  <span className="font-nunito text-sm font-bold text-white">
                    {shortName}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex h-full max-h-102 w-full max-w-102 items-center justify-center lg:mt-0  lg:max-h-full lg:max-w-full">
            <Image
              src="https://cookinplus-images.s3.us-west-2.amazonaws.com/landing-page/banner.png"
              alt=""
              width={496}
              height={496}
            />
          </div>
        </div>
      </header>
      <main
        className={twMerge([
          'mt-32 sm:mt-28 lg:mt-12 xl:mt-4',
          'gap-16 p-3 lg:p-4 ',
          'mx-auto flex w-full max-w-content flex-col',
        ])}
      >
        <section className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex w-full max-w-2xl flex-col gap-3 lg:gap-4">
            <div className="flex flex-col items-center lg:items-end">
              <FeaturedTitle title="Versatilidade" />
              <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-end lg:text-3xl">
                Um mundo de possibilidades
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500 lg:text-end lg:text-base">
              Conheça um pouco mais da incrível variedade de alimentos
              consumidos no Brasil e no mundo.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-start">
            <Image
              className="h-[18rem] w-full max-w-70 rounded-3xl object-cover object-top lg:h-[24.5rem] "
              src="https://images.pexels.com/photos/2543270/pexels-photo-2543270.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>
        </section>

        <section className="flex w-full flex-col-reverse items-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex w-full justify-center lg:justify-end">
            <Image
              className="h-[18rem] w-full max-w-70 rounded-3xl object-cover object-bottom lg:h-[24.5rem]"
              src="https://images.pexels.com/photos/3679973/pexels-photo-3679973.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>

          <div className="flex w-full max-w-2xl flex-col gap-3 lg:gap-4">
            <div className="flex flex-col items-center lg:items-start">
              <FeaturedTitle title="Nutrição" />
              <h2 className="text-start font-nunito text-xl font-bold text-zinc-700 lg:text-start lg:text-3xl">
                Orientações para uma vida saudável
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500 lg:text-start lg:text-base">
              Além de deliciosas receitas, você encontra dicas nutricionais
              valiosas, elaboradas por profissionais especializados na área.
            </p>

            <div className="flex justify-center lg:justify-start">
              <Link href={'../nutrition'}>Catálogo nutricional</Link>
            </div>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-3  lg:gap-4">
          <div className="flex w-full max-w-2xl flex-col items-center gap-3 lg:gap-4">
            <div className="flex flex-col items-center">
              <FeaturedTitle title="Futuro" />
              <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-3xl">
                O próximo passo nunca será o último
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500  lg:text-base">
              Confira algumas funcionalidades que serão implementadas na nossa
              plataforma futuramente.
            </p>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex w-full max-w-2xl flex-col gap-3 lg:gap-4">
            <div className="flex flex-col items-center lg:items-end">
              <FeaturedTitle title="Partilhe" />
              <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-end lg:text-3xl">
                Compartilhe suas receitas
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500 lg:text-end lg:text-base">
              Faça parte da nossa comunidade culinária! Compartilhe suas
              receitas especiais e junte-se a nós na construção de um mundo de
              sabores.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-start">
            <Image
              className="h-[18rem] w-full max-w-70 rounded-3xl object-cover object-top lg:h-[24.5rem] "
              src="https://images.pexels.com/photos/8715596/pexels-photo-8715596.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>
        </section>

        <section className="flex w-full flex-col-reverse items-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex w-full justify-center lg:justify-end">
            <Image
              className="h-[18rem] w-full max-w-70 rounded-3xl object-cover object-top lg:h-[24.5rem]"
              src="https://images.pexels.com/photos/3992370/pexels-photo-3992370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>

          <div className="flex w-full max-w-2xl flex-col gap-3 lg:gap-4">
            <div className="flex flex-col items-center lg:items-start">
              <FeaturedTitle title="Destaque" />
              <h2 className="text-start font-nunito text-xl font-bold text-zinc-700 lg:text-start lg:text-3xl">
                Suas receitas favoritas
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500 lg:text-start lg:text-base">
              Escolha suas receitas favoritas em nosso catálogo e transforme
              cada preparo em uma experiência única.
            </p>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex w-full max-w-2xl flex-col gap-3 lg:gap-4">
            <div className="flex flex-col items-center lg:items-end">
              <FeaturedTitle title="Facilite" />
              <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-end lg:text-3xl">
                Simplifique sua vida na cozinha
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500 lg:text-end lg:text-base">
              Crie seu cardápio semanal automaticamente, e tenha acesso a lista
              de compras do que você vai precisar.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-start">
            <Image
              className="h-[18rem] w-full max-w-70 rounded-3xl object-cover object-center lg:h-[24.5rem] "
              src="https://images.pexels.com/photos/8939309/pexels-photo-8939309.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>
        </section>

        <section className="flex w-full flex-col-reverse items-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex w-full justify-center lg:justify-end">
            <Image
              className="h-[18rem] w-full max-w-70 rounded-3xl object-cover object-center lg:h-[24.5rem]"
              src="https://images.pexels.com/photos/6517193/pexels-photo-6517193.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>

          <div className="flex w-full max-w-2xl flex-col gap-3 lg:gap-4">
            <div className="flex flex-col items-center lg:items-start">
              <FeaturedTitle title="Domine" />
              <h2 className="text-start font-nunito text-xl font-bold text-zinc-700 lg:text-start lg:text-3xl">
                Aprimore-se na culinária
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500 lg:text-start lg:text-base">
              Desenvolva suas habilidades na cozinha através de nossos cursos,
              transformando ingredientes em experiências gastronômicas.
            </p>
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-4 lg:flex-row lg:gap-8">
          <div className="flex w-full max-w-2xl flex-col gap-3 lg:gap-4">
            <div className="flex flex-col items-center lg:items-end">
              <FeaturedTitle title="Disciplina" />
              <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-end lg:text-3xl">
                Plano alimentar
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500 lg:text-end lg:text-base">
              Receitas caloricamente equilibradas, perfeitamente alinhadas com
              suas metas calóricas.
            </p>
          </div>

          <div className="flex w-full justify-center lg:justify-start">
            <Image
              className="h-[18rem] w-full max-w-70 rounded-3xl object-cover object-bottom lg:h-[24.5rem] "
              src="https://images.pexels.com/photos/8844553/pexels-photo-8844553.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              width={500}
              height={600}
              quality={100}
            />
          </div>
        </section>

        <section className="flex w-full flex-col items-center gap-3 lg:gap-4">
          <div className="flex w-full max-w-2xl flex-col items-center gap-3 lg:gap-4">
            <div className="flex flex-col items-center">
              <FeaturedTitle title="Mão na massa" />
              <h2 className="text-center font-nunito text-xl font-bold text-zinc-700 lg:text-3xl">
                Receitas feitas com amor e dedicação
              </h2>
            </div>

            <p className="text-center font-nunito text-sm font-medium text-zinc-500  lg:text-base">
              É hora de cozinhar, experimentar e se divertir, reunindo
              familiares e amigos para compartilhar deliciosas refeições, seja
              você um cozinheiro experiente ou iniciante.
            </p>
          </div>

          <div className="mx-auto flex w-fit pb-32">
            <Link href={'/recipes/meals/cabb452a-8e40-4b35-ab8e-1f56aadeed7a'}>
              Explorar receitas
              <ChevronRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
