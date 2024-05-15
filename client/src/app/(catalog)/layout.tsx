import { Sidebar } from '~/components/sidebar'
import { Corner } from '~/components/svgs/corner'

interface Props {
  children: React.ReactNode
}

export default function CatalogLayout({ children }: Props) {
  return (
    <div className="relative lg:grid lg:grid-cols-app">
      <Corner className="hidden lg:absolute lg:right-0 lg:top-0 lg:z-10 lg:flex lg:h-auto lg:w-120" />
      <Sidebar />

      <main className="lg:col-start-2">{children}</main>
    </div>
  )
}
