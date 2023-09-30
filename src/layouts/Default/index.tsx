import { Fragment } from 'react'

import { Outlet } from 'react-router-dom'

import { cn } from '@/utils'

export const DefaultLayout = () => {
  return (
    <Fragment>
      <header className={cn('bg-red-500')}>xxx</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </Fragment>
  )
}
