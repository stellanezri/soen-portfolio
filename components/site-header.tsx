'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { nav, site, headerNav } from '@/lib/content'
import { Monogram } from '@/components/monogram'
import { cn } from '@/lib/utils'
import { useLanguage } from '@/contexts/LanguageContext'
import LanguageSwitcher from '@/components/LanguageSwitcher'

export function SiteHeader() {
  const pathname = usePathname()
  const { lang } = useLanguage()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const t = (field: any) => (typeof field === 'string' ? field : field?.[lang] ?? '')

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Ferme le menu mobile à chaque changement de page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-colors duration-500',
        scrolled
          ? 'border-border bg-linen/85 backdrop-blur-md'
          : 'border-transparent bg-transparent',
      )}
    >
      <a
        href="#contenu"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-sm focus:bg-espresso focus:px-3 focus:py-2 focus:text-ivoire"
      >
        {lang === 'fr' ? 'Aller au contenu' : 'Skip to content'}
      </a>
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
        <Link href="/" className="group flex items-center gap-3" aria-label={`${site.name} — home`}>
          <Monogram className="size-9 text-cocoa transition-transform duration-500 group-hover:rotate-6" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-lg tracking-tight text-espresso">{site.name}</span>
            <span className="text-[11px] uppercase tracking-[0.1em] text-muted-foreground">
              Marketing · <br /> International Business
            </span>
          </span>
        </Link>

        {/* Navigation bureau */}
        <nav className="hidden items-center gap-6 lg:flex whitespace-nowrap" aria-label="Main navigation">
          {headerNav.map((item) => {
            const active = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  'relative text-sm transition-colors hover:text-espresso',
                  active ? 'text-espresso' : 'text-muted-foreground',
                )}
              >
                {t(item.label)}
                <span
                  className={cn(
                    'absolute -bottom-1.5 left-0 h-px bg-camel transition-all duration-300',
                    active ? 'w-full' : 'w-0',
                  )}
                />
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <LanguageSwitcher />
          <Link
            href="/contact"
            className="shrink-0 whitespace-nowrap rounded-full bg-espresso px-5 py-2.5 text-sm text-ivoire transition-colors hover:bg-cocoa"
          >
            {lang === 'fr' ? 'Me recruter' : 'Hire me'}
          </Link>
        </div>

        {/* Bouton menu mobile */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-full border border-border text-espresso lg:hidden"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu') : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Menu mobile */}
      {open && (
        <nav
          id="menu-mobile"
          className="border-t border-border bg-linen lg:hidden"
          aria-label="Mobile navigation"
        >
          <ul className="mx-auto flex max-w-6xl flex-col px-5 py-4 md:px-8">
            {nav.map((item) => {
              const active = pathname === item.href
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      'flex items-center justify-between border-b border-border/60 py-3.5 font-serif text-xl',
                      active ? 'text-cocoa' : 'text-espresso',
                    )}
                  >
                    {t(item.label)}
                    <span className="text-xs text-muted-foreground">
                      {String(nav.indexOf(item) + 1).padStart(2, '0')}
                    </span>
                  </Link>
                </li>
              )
            })}
            <li className="flex items-center justify-between pt-5">
              <LanguageSwitcher />
              <Link
                href="/contact"
                className="rounded-full bg-espresso px-5 py-3 text-center text-ivoire"
              >
                {lang === 'fr' ? 'Me recruter' : 'Hire me'}
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
