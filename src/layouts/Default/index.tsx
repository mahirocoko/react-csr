import { Fragment } from 'react'

import { Link, Outlet } from 'react-router-dom'

import { cn } from '@/utils'
import ThemeToggle from '@/components/ThemeToggle'

export const DefaultLayout = () => {
  return (
    <Fragment>
      <header className={cn(`sticky top-0 z-50 border-b backdrop-blur-sm`)}>
        <div className={cn(`container flex h-14 items-center`)}>
          <Link to="/">Logo</Link>

          <ThemeToggle className={cn(`ml-auto`)} />
        </div>
      </header>
      <main className={cn(`min-h-screen`)}>
        <Outlet />
      </main>
      <footer>footer</footer>
    </Fragment>
  )
}
