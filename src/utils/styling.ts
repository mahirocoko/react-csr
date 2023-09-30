import type { ClassValue } from 'clsx'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs))
}

export const clamp = (val: number, min: number, max: number) => {
  return val > max ? max : val < min ? min : val
}
