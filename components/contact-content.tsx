"use client"

import { Mail, Phone, MapPin, Calendar, Check, ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { ContactForm } from '@/components/contact/contact-form'
import { contact, contactPage } from '@/lib/content'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Bi } from '@/lib/content'

const pageEyebrow: Bi = { fr: 'Contact', en: 'Contact' }
const whyTitle: Bi = { fr: 'Pourquoi me recruter ?', en: 'Why hire me?' }
const emailLabel: Bi = { fr: 'E-mail', en: 'Email' }
const phoneLabel: Bi = { fr: 'Téléphone', en: 'Phone' }
const locationLabel: Bi = { fr: 'Localisation', en: 'Location' }
const availabilityLabel: Bi = { fr: 'Disponibilité', en: 'Availability' }
const downloadCvLabel: Bi = { fr: 'Télécharger mon CV', en: 'Download my CV' }

export function ContactContent() {
  const { lang } = useLanguage()

  const coords = [
    { icon: Mail, label: emailLabel[lang], value: contact.email, href: `mailto:${contact.email}` },
    { icon: Phone, label: phoneLabel[lang], value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, '')}` },
    { icon: MapPin, label: locationLabel[lang], value: contact.city[lang] },
    { icon: Calendar, label: availabilityLabel[lang], value: contact.availability[lang] },
  ]

  return (
    <>
      <PageHeader index="06" eyebrow={pageEyebrow[lang]} title={contactPage.title[lang]} intro={contactPage.intro[lang]} />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          <Reveal className="flex flex-col gap-8">
            <div>
              <h2 className="font-serif text-2xl text-espresso">{whyTitle[lang]}</h2>
              <ul className="mt-5 flex flex-col gap-3">
                {contactPage.reasons[lang].map((reason) => (
                  <li key={reason} className="flex gap-3">
                    <span className="mt-0.5 inline-flex size-5 shrink-0 items-center justify-center rounded-full bg-camel text-ivoire">
                      <Check className="size-3" />
                    </span>
                    <span className="text-pretty leading-relaxed text-muted-foreground">{reason}</span>
                  </li>
                ))}
              </ul>
            </div>

            <dl className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {coords.map((c) => {
                const Icon = c.icon
                const inner = (
                  <>
                    <dt className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-camel">
                      <Icon className="size-4" />
                      {c.label}
                    </dt>
                    <dd className="mt-2 text-espresso">{c.value}</dd>
                  </>
                )
                return (
                  <div key={c.label} className="bg-linen p-5">
                    {c.href ? (
                      <a href={c.href} className="block transition-colors hover:text-cocoa">
                        {inner}
                      </a>
                    ) : (
                      inner
                    )}
                  </div>
                )
              })}
            </dl>

            <div className="flex flex-wrap gap-3">
              {contact.socials.map((s) => {
                return (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 rounded-full border border-border bg-ivoire px-4 py-2 text-sm text-espresso transition-colors hover:border-camel">
                    {s.label}
                    <ArrowUpRight className="size-3.5" />
                  </a>
                )
              })}
            </div>

            <a href="/CV-Stella-Nezri-FR-US.pdf" download="CV-Stella-Nezri-FR-US.pdf" target="_blank" rel="noopener noreferrer" className="inline-flex w-fit items-center gap-2 rounded-full border border-espresso/25 px-6 py-3 text-sm text-espresso transition-colors hover:bg-espresso hover:text-ivoire">
              {downloadCvLabel[lang]}
              <ArrowUpRight className="size-4" />
            </a>
          </Reveal>

          <Reveal delay={100}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  )
}
