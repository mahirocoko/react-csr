import { Fragment } from 'react'

import { cn } from '@/utils'
import { TypographyH1 } from '@/components/UI/Typography'

const HomePage = () => {
  return (
    <Fragment>
      <section className={cn(`bg-muted`)}>
        <div className={cn(`container flex min-h-[83vh] items-center justify-center text-center`)}>
          <TypographyH1>🙌🏻 Hello React CSR</TypographyH1>
        </div>
      </section>
    </Fragment>
  )
}

export default HomePage
