import { FeaturedTitle } from '~/components/feature-title'
import { ingredients } from '~/data/ingredients-data'

export default async function Nutrition() {
  return (
    <div className="mx-auto mt-14 flex w-full max-w-content flex-col p-4 lg:mt-0 lg:p-8">
      <div>
        <FeaturedTitle title="Nutrição" />
        <h1 className="font-nunito text-xl font-bold text-zinc-700 lg:text-2xl">
          Beneficios dos ingredientes.
        </h1>
      </div>

      <section className="mt-4 flex flex-col divide-y divide-zinc-100 ">
        {ingredients.map(({ name, description }) => (
          <div className="py-4 lg:max-w-3xl" key={name}>
            <h2 className="font-nunito text-base font-bold text-zinc-700 lg:text-lg">
              {name}
            </h2>
            <p className="mt-2 whitespace-pre-wrap text-justify font-nunito text-sm font-semibold leading-6 text-zinc-500 lg:text-base lg:leading-7">
              {description}
            </p>
          </div>
        ))}
      </section>
    </div>
  )
}
