import type { HTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'

import { cn } from '@/utils'

interface ITypographyH1Props extends HTMLAttributes<HTMLHeadingElement> {
  asChild?: boolean
}

const TypographyH1 = forwardRef<HTMLHeadingElement, ITypographyH1Props>(
  ({ className, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'h1'
    return <Comp className={cn(`scroll-m-20 text-4xl font-extrabold tracking-tight`, className)} ref={ref} {...props} />
  },
)
TypographyH1.displayName = 'TypographyH1'

export { TypographyH1 }
