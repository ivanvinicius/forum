import { SVGProps } from 'react'

export function Corner({ className, ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      width={832}
      height={142}
      viewBox="0 0 832 142"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M832 0v124.768c-17.742 11.276-43.88 19.87-108 16.232-64.12-3.638-179.937-84-354.395-84C208 57 38.299 9 0 0h832z"
        fill="url(#paint0_linear_731_450)"
      />
      <defs>
        <linearGradient
          id="paint0_linear_731_450"
          x1={832.311}
          y1={70.8593}
          x2={650.135}
          y2={-286.967}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#F89E1B" />
          <stop offset={1} stopColor="#FFCF02" />
        </linearGradient>
      </defs>
    </svg>
  )
}
