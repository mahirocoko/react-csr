import type { FC } from 'react'

import { RxSun, RxMoon } from 'react-icons/rx'

import { useTheme } from '@/hooks/useTheme'
import { cn } from '@/utils'

import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './UI/DropdownMenu'
import { Button } from './UI/Button'

import type { Theme } from '@/types/theme'

interface IThemeToggleProps {
  className?: string
}

const items: Theme[] = ['light', 'dark', 'system']

const ThemeToggle: FC<IThemeToggleProps> = ({ className }) => {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className={cn(`h-9 w-9 px-0`, className)}>
          <RxSun
            className={cn(`h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all`, `dark:-rotate-90 dark:scale-0`)}
          />
          <RxMoon
            className={cn(
              `absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all`,
              `dark:rotate-0 dark:scale-100`,
            )}
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {items.map((item) => (
          <DropdownMenuItem key={item} onClick={() => setTheme(item)} className={cn(`capitalize`)}>
            {item}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ThemeToggle
