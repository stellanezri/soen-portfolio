import Link from 'next/link'
import { Monogram } from '@/components/monogram'
import { contact, nav, site } from '@/lib/content'

export function SiteFooter() {
  const year = new Date().getFullYear()
  return (
    <footer className="relative overflow-hidden bg-espresso text-linen">
      {/* Monogramme en filigrane — fil rouge de la maison */}
      <Monogram
        showRing={false}
        className="pointer-events-none absolute -right-8 -top-16 size-60 text-ivoire/[0.04] select-none"
      />
      <div className="relative z-10 mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-20">
        <div className="flex flex-col gap-12 md:flex-row md:justify-between">
          <div className="max-w-sm">
            <div className="flex items-center gap-3">
              <Monogram className="size-11 text-camel" />
              <span className="font-serif text-2xl tracking-tight">{site.name}</span>
            </div>
            <p className="mt-5 text-pretty leading-relaxed text-linen/70">
              {site.role}. {site.degree}.
            </p>
            <Link
              href="/contact"
              className="mt-7 inline-block rounded-full bg-ivoire px-6 py-3 text-sm text-espresso transition-colors hover:bg-khaki"
            >
              Discutons-en !
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:gap-16">
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-linen/50">Navigation</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="text-sm text-linen/80 transition-colors hover:text-ivoire"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h2 className="text-xs uppercase tracking-[0.2em] text-linen/50">Contact</h2>
              <ul className="mt-5 flex flex-col gap-3">
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-linen/80 transition-colors hover:text-ivoire"
                  >
                    {contact.email}
                  </a>
                </li>
                <li>
                  <a
                    href={`tel:${contact.phone.replace(/\s/g, '')}`}
                    className="text-sm text-linen/80 transition-colors hover:text-ivoire"
                  >
                    {contact.phone}
                  </a>
                </li>
                {contact.socials.map((s) => (
                  <li key={s.label}>
                    <a
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm text-linen/80 transition-colors hover:text-ivoire"
                    >
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-2 border-t border-ivoire/10 pt-6 text-xs text-linen/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {year} Stella Nezri. Tous droits réservés.
          </p>
          <p>{contact.city}</p>
        </div>
      </div>
    </footer>
  )
}
