import type { FC } from 'react'

import { Outlet } from 'react-router-dom'

import { cn } from '@/utils'

import { DefaultLayout } from '..'

import { SIDEBAR_CONFIG } from '@/contants/sidebar'
import type { SidebarNavItem } from '@/types/nav'

interface IDocumentSidebarItemsProps {
  items: SidebarNavItem[]
  pathname: string | null
}

const DocumentSidebarItems: FC<IDocumentSidebarItemsProps> = ({ items, pathname }) => {
  return items?.length ? (
    <div className={cn(`grid grid-flow-row auto-rows-max text-sm`)}>
      {items.map((item, index) =>
        item.href && !item.disabled ? (
          <a
            key={index}
            href={item.href}
            className={cn(
              'group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline',
              item.disabled && 'cursor-not-allowed opacity-60',
              pathname === item.href ? 'font-medium text-foreground' : 'text-muted-foreground',
            )}
            target={item.external ? '_blank' : ''}
            rel={item.external ? 'noreferrer' : ''}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-[#adfa1d] px-1.5 py-0.5 text-xs leading-none text-[#000000] no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </a>
        ) : (
          <span
            key={index}
            className={cn(
              'flex w-full cursor-not-allowed items-center rounded-md p-2 text-muted-foreground hover:underline',
              item.disabled && 'cursor-not-allowed opacity-60',
            )}
          >
            {item.title}
            {item.label && (
              <span className="ml-2 rounded-md bg-muted px-1.5 py-0.5 text-xs leading-none text-muted-foreground no-underline group-hover:no-underline">
                {item.label}
              </span>
            )}
          </span>
        ),
      )}
    </div>
  ) : null
}

export const DocumentLayout = () => {
  const pathname = ''

  return (
    <DefaultLayout>
      <div className={cn(`container grid grid-cols-[200px_minmax(0,_1fr)] gap-10`)}>
        <aside className={cn(`sticky top-14 self-start py-8`)}>
          {SIDEBAR_CONFIG.map((item, itemIdx) => (
            <div key={itemIdx}>
              <h4>{item.title}</h4>
              {item?.items?.length && <DocumentSidebarItems items={item.items} pathname={pathname} />}
            </div>
          ))}
        </aside>
        <main className={cn(`py-8 [&>section:last-child]:pb-12`)}>
          <Outlet />
        </main>
      </div>
    </DefaultLayout>
  )
}
