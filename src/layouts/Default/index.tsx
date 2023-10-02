import type { FC, PropsWithChildren } from 'react'
import { Fragment } from 'react'

import { Link, NavLink, Outlet } from 'react-router-dom'

import { cn } from '@/utils'
import ThemeToggle from '@/components/ThemeToggle'
import { Button } from '@/components/UI/Button'

export const DefaultLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <Fragment>
      <header className={cn(`sticky top-0 z-50 border-b bg-background`)}>
        <div className={cn(`container flex h-14 items-center`)}>
          <Link to="/" className={cn(`font-semibold`)}>
            React CSR
          </Link>

          <nav className={cn(`ml-5`)}>
            <ul>
              <li>
                <NavLink
                  to="stylesheets"
                  className={({ isActive, isPending }) =>
                    cn(`transition-colors`, {
                      'text-foreground': isActive,
                      'text-muted-foreground hover:text-foreground': !isActive || isPending,
                    })
                  }
                >
                  Style Sheets
                </NavLink>
              </li>
            </ul>
          </nav>
          <ThemeToggle className={cn(`ml-auto`)} />
        </div>
      </header>
      {children || (
        <main>
          <Outlet />
        </main>
      )}
      <footer className={cn(`border-t`)}>
        <div className={cn(`container py-10`)}>
          <p className={cn(`text-sm text-muted-foreground`)}>
            Build by{' '}
            <Button variant="link" className={cn(`px-0 underline`)} size="sm" asChild>
              <a href="https://github.com/mahirocoko" target="_blank" rel="noreferrer">
                mahirocoko
              </a>
            </Button>
            . Inspired by{' '}
            <Button variant="link" className={cn(`px-0 underline`)} size="sm" asChild>
              <a href="https://ui.shadcn.com" target="_blank" rel="noreferrer">
                shadcn/ui
              </a>
            </Button>
          </p>
        </div>
      </footer>
    </Fragment>
  )
}
