import { createContext, useEffect, useState } from 'react'

import { STORE_KEY } from '@/contants'
import type { Theme } from '@/types/theme'

type ThemeProviderProps = {
  children: React.ReactNode
  defaultTheme?: Theme
  storageKey?: string
}

type ThemeProviderState = {
  theme: Theme
  setTheme: (theme: Theme) => void
}

const initialState: ThemeProviderState = {
  theme: 'system',
  setTheme: () => null,
}

export const ThemeProviderContext = createContext<ThemeProviderState>(initialState)

export function ThemeProvider({
  children,
  defaultTheme = 'system',
  storageKey = STORE_KEY.theme.key,
  ...props
}: ThemeProviderProps) {
  const [theme, setTheme] = useState<Theme>(() => (localStorage.getItem(storageKey) as Theme) || defaultTheme)

  console.log(theme)

  useEffect(() => {
    const root = window.document.documentElement
    const themeAttrKey = 'data-theme'

    root.classList.remove('light', 'dark')
    root.removeAttribute(themeAttrKey)

    if (theme === 'system') {
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'

      root.classList.add(systemTheme)
      root.setAttribute(themeAttrKey, systemTheme)
      return
    }

    root.classList.add(theme)
    root.setAttribute(themeAttrKey, theme)
  }, [theme])

  const value = {
    theme,
    setTheme: (theme: Theme) => {
      localStorage.setItem(storageKey, theme)
      setTheme(theme)
    },
  }

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  )
}
