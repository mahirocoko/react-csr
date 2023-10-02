import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/utils'

interface ITypographyH2Props extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean
}

const TypographyH2 = forwardRef<HTMLHeadingElement, ITypographyH2Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h2'
    return (
      <Comp
        className={cn(
          `scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight transition-colors first:mt-0`,
          className,
        )}
        ref={ref}
        {...props}
      />
    )
  },
)
TypographyH2.displayName = 'TypographyH2'

export { TypographyH2 }
