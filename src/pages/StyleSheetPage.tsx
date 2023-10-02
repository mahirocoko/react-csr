import { Fragment } from 'react'

import { Button } from '@/components/UI/Button'
import { cn } from '@/utils'
import { TypographyH2 } from '@/components/UI/Typography'

const StyleSheetPage = () => {
  return (
    <Fragment>
      <section>
        <TypographyH2 id="color">Colors</TypographyH2>

        <div className={cn(`mt-6 grid grid-cols-[repeat(auto-fill,_minmax(300px,_1fr))] gap-5`)}>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-background`)}>--background</div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-foreground text-background`)}>
            --foreground
          </div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-card`)}>--card</div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-popover`)}>--popover</div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-popover-foreground text-background`)}>
            --popover-foreground
          </div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-primary text-background`)}>
            --primary
          </div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-primary-foreground`)}>
            --primary-foreground
          </div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-secondary`)}>--secondary</div>
          <div
            className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-secondary-foreground text-background`)}
          >
            --secondary-foreground
          </div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-muted`)}>--muted</div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-muted-foreground`)}>
            --muted-foreground
          </div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-accent`)}>--accent</div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-accent-foreground text-background`)}>
            --accent-foreground
          </div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-destructive`)}>--destructive</div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-destructive-foreground text-black`)}>
            --destructive-foreground
          </div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-divider`)}>--divider</div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-input`)}>--input</div>
          <div className={cn(`flex h-16 items-center rounded-md border px-4`, `bg-ring text-background`)}>--ring</div>
        </div>
      </section>
      <section className={cn(`mt-12`)}>
        <TypographyH2>Buttons</TypographyH2>

        <div className={cn(`mt-6 flex space-x-4`)}>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>
      <section className={cn(`mt-12`)}>
        <TypographyH2 id="button">Buttons</TypographyH2>

        <div className={cn(`mt-6 flex space-x-4`)}>
          <Button variant="default">Default</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="destructive">Destructive</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="link">Link</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>
    </Fragment>
  )
}

export default StyleSheetPage
