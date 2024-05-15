import { Hand } from 'lucide-react'
import Link from 'next/link'

export function SidebarFormWidget() {
  return (
    <div className="flex flex-col items-start gap-4 rounded-lg bg-violet-100 px-4 py-5 font-inter ">
      <span className="text-md flex items-center gap-1 font-medium text-violet-600">
        Olá <Hand className="h-4 w-4 text-violet-600" />
      </span>

      <p className="text-justify text-sm text-violet-500">
        Estamos validando essa ideia, e sua opinião é importante para nós.
        Responda nosso formulário, é rapido e fácil.
      </p>

      <Link
        className="self-end rounded-lg bg-violet-200 px-4 py-2 text-sm font-medium text-violet-600 transition-all duration-500 hover:bg-violet-300/80"
        href={String(process.env.NEXT_PUBLIC_GOOGLE_FORM_URL)}
        target="_blank"
      >
        Acessar formulário
      </Link>
    </div>
  )
}
