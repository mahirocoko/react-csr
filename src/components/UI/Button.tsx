import type { ButtonHTMLAttributes } from 'react'
import { forwardRef } from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/utils'

const buttonVariants = cva(
  cn(
    `inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors`,
    `focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-ring`,
    `disabled:pointer-events-none disabled:opacity-50`,
  ),
  {
    variants: {
      variant: {
        default: cn(`bg-primary text-primary-foreground hover:bg-primary/90`),
        destructive: cn(`bg-destructive text-destructive-foreground hover:bg-destructive/90`),
        outline: cn(`border border-input bg-background hover:bg-accent hover:text-accent-foreground`),
        secondary: cn(`bg-secondary text-secondary-foreground hover:bg-secondary/80`),
        ghost: cn(`hover:bg-accent hover:text-accent-foreground`),
        link: cn(`text-primary underline-offset-4 hover:underline`),
      },
      size: {
        default: cn(`h-10 px-4 py-2`),
        sm: cn(`h-9 rounded-md px-3`),
        lg: cn(`h-11 rounded-md px-8`),
        icon: cn(`h-10 w-10`),
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = forwardRef<HTMLButtonElement, IButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
