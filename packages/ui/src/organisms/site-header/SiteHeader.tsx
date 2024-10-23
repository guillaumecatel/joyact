import React from 'react'
import { cn } from '../../utils'

export interface SiteHeaderProps
  extends React.ComponentPropsWithoutRef<'header'> {
  navigationLinks: { href: string, label: string }[]
}

export const SiteHeader = ({ className, navigationLinks, ...rest }: SiteHeaderProps) => {
  return (
    <header
      className={cn('fixed inset-x-0 top-0 py-l px-m md:py-s md:px-m pointer-events-none will-change-scroll', className)}
      {...rest}
    >
      <div className="grid grid-cols-12 items-baseline justify-between overflow-hidden sm:items-center">
        <div className="col-span-5">
          <h1 className="pointer-events-auto inline-flex rounded-full bg-black px-s py-2xs text-heading-6 font-bold italic leading-none tracking-tighter text-white">
            <a className="pointer-events-auto" href="/">JOYACT.</a>
          </h1>
        </div>
        <div className="col-span-7 hidden flex-row items-center justify-between gap-xl md:flex">
          <nav className="text-body">
            <ul className="flex flex-col justify-end gap-s sm:flex-row sm:gap-xl">
              {navigationLinks.map(item => (
                <li key={item.href}>
                  <a className="pointer-events-auto" href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex flex-row gap-m text-small font-medium sm:gap-m">
            <div>(EN)</div>
            <div>Sound on</div>
          </div>
        </div>
        <div className="md:hidden">Menu</div>
      </div>

      <div className="absolute inset-0 z-[-1] h-[calc(100%+16.6666666667vh)] *:absolute *:inset-0">
        <div className="[&:nth-child(1)]:z-[6] [&:nth-child(1)]:backdrop-blur-[32px]" style={{ mask: 'linear-gradient( to top, rgba(0, 0, 0, 0) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 1) 100% )' }}></div>
        <div className="[&:nth-child(2)]:z-[5] [&:nth-child(2)]:backdrop-blur-lg" style={{ mask: 'linear-gradient( to top, rgba(0, 0, 0, 0) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 1) 87.5%, rgba(0, 0, 0, 0) 100% )' }}></div>
        <div className="[&:nth-child(3)]:z-[4] [&:nth-child(3)]:backdrop-blur" style={{ mask: 'linear-gradient( to top, rgba(0, 0, 0, 0) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 1) 75%, rgba(0, 0, 0, 0) 87.5% )' }}></div>
        <div className="[&:nth-child(4)]:z-[3] [&:nth-child(4)]:backdrop-blur-sm" style={{ mask: 'linear-gradient( to top, rgba(0, 0, 0, 0) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 1) 62.5%, rgba(0, 0, 0, 0) 75% )' }}></div>
        <div className="[&:nth-child(5)]:z-[2] [&:nth-child(5)]:backdrop-blur-[2px]" style={{ mask: 'linear-gradient( to top, rgba(0, 0, 0, 0) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 1) 50%, rgba(0, 0, 0, 0) 62.5% )' }}></div>
        <div className="[&:nth-child(6)]:z-[1] [&:nth-child(6)]:backdrop-blur-[1px]" style={{ mask: 'linear-gradient( to top, rgba(0, 0, 0, 0) 12.5%, rgba(0, 0, 0, 1) 25%, rgba(0, 0, 0, 1) 37.5%, rgba(0, 0, 0, 0) 50% )' }}></div>
      </div>
    </header>
  )
}
