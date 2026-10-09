"use client"

import { useState } from 'react'
import Link from 'next/link'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { softSkills, hardSkills, projects, personal } from '@/lib/content'
import { skillProjects, projectHref } from '@/lib/skills'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Bi } from '@/lib/content'

const pageEyebrow: Bi = { fr: 'Compétences', en: 'Skills' }
const pageTitle: Bi = { fr: 'Ma palette de compétences.', en: 'My range of skills.' }
const softSkillsTitle: Bi = { fr: 'Savoir-être', en: 'Soft skills' }
const bannerTagline: Bi = { fr: 'S.O.E.N', en: 'S.O.E.N' }
const bannerText: Bi = {
  fr: 'Un équilibre entre l\'éclat d\'une identité assumée et la rigueur d\'une trajectoire choisie, pour avancer avec clarté vers des résultats qui nous ressemblent.',
  en: 'A balance between the brightness of an identity fully owned and the rigor of a deliberately chosen path, moving forward with clarity toward results that reflect who we are.',
}
const ctaTitle: Bi = { fr: 'Ces compétences vous parlent ?', en: 'Does this skillset speak to you?' }
const ctaText: Bi = { fr: 'Voyons comment elles peuvent servir votre équipe.', en: 'Let’s see how they can serve your team.' }
const proofLabel: Bi = { fr: 'Où je l’ai mise en pratique', en: 'Where I put it into practice' }

type Titled = { slug: string; title?: Bi }
const personalList = ((personal as any).projects ?? (personal as any).items ?? []) as Titled[]
const allProjects: Titled[] = [...(projects as Titled[]), ...personalList]
const titleFor = (slug: string, lang: keyof Bi) =>
  allProjects.find((p) => p.slug === slug)?.title?.[lang] ?? slug

export function SkillsContent() {
  const { lang } = useLanguage()
  const [open, setOpen] = useState<string | null>(null)

  const pillBase =
    'rounded-full border border-border bg-linen px-4 py-2 text-sm text-espresso transition-colors hover:border-camel hover:bg-khaki/40'

  return (
    <>
      <PageHeader index="02" eyebrow={pageEyebrow[lang]} title={pageTitle[lang]} intro={hardSkills.intro[lang]} />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-6">
            <section className="rounded-2xl border border-border bg-camel p-7 md:p-9">
              <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                <h2 className="font-serif text-2xl tracking-tight text-white">{softSkillsTitle[lang]}</h2>
                <span className="font-serif text-lg text-camel"></span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {softSkills.map(({ label, icon: Icon, level }) => (
                  <div key={label.fr} className="rounded-xl border border-border bg-white p-4 shadow-sm">
                    <Icon className="h-5 w-5 text-camel" strokeWidth={1.75} />
                    <p className="mt-2.5 mb-2 text-sm font-medium text-espresso">{label[lang]}</p>
                    <div className="h-[3px] w-full rounded-full bg-linen">
                      <div className="h-[3px] rounded-full bg-camel" style={{ width: `${level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <div className="my-8 h-px w-full bg-border" />

          <div className="grid gap-6 md:grid-cols-2">
            {hardSkills.groups.map((group, gi) => {
              const prefix = `${gi}:`
              const openFr = open && open.startsWith(prefix) ? open.slice(prefix.length) : null
              const openSlugs = openFr ? skillProjects[openFr] ?? [] : []

              return (
                <Reveal key={group.title.fr} delay={gi * 90}>
                  <div className="flex h-full flex-col rounded-2xl border border-border bg-ivoire p-7 md:p-9">
                    <div className="flex items-baseline justify-between border-b border-border pb-5">
                      <h2 className="font-serif text-2xl tracking-tight text-espresso">
                        {group.title[lang]}
                      </h2>
                      <span className="font-serif text-lg text-camel">
                        {String(gi + 1).padStart(2, '0')}
                      </span>
                    </div>

                    <ul className="mt-6 flex flex-wrap gap-2.5">
                      {group.items[lang].map((item, ii) => {
                        const frItem = group.items.fr[ii]
                        const slugs = skillProjects[frItem] ?? []
                        const key = `${prefix}${frItem}`
                        const isOpen = open === key

                        return (
                          <li key={frItem}>
                            {slugs.length > 0 ? (
                              <button
                                type="button"
                                aria-expanded={isOpen}
                                onClick={() => setOpen(isOpen ? null : key)}
                                className={`${pillBase} cursor-pointer ${isOpen ? 'border-camel bg-khaki/40' : ''}`}
                              >
                                {item} <span aria-hidden>→</span>
                              </button>
                            ) : (
                              <span className={`${pillBase} inline-block`}>{item}</span>
                            )}
                          </li>
                        )
                      })}
                    </ul>

                    {openSlugs.length > 0 && (
                      <div className="mt-5 rounded-xl border border-border bg-white p-4">
                        <p className="text-xs uppercase tracking-[0.2em] text-camel">{proofLabel[lang]}</p>
                        <ul className="mt-3 flex flex-col gap-2">
                          {openSlugs.map((slug) => (
                            <li key={slug}>
                              <Link
                                href={projectHref(slug)}
                                className="text-sm text-espresso underline-offset-4 hover:underline"
                              >
                                {titleFor(slug, lang)} →
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </Reveal>
              )
            })}
          </div>

          <Reveal className="mt-6 overflow-hidden rounded-2xl border border-border bg-espresso p-8 text-center md:p-14">
            <p className="text-xs uppercase tracking-[0.3em] text-camel">{bannerTagline[lang]}</p>
            <p className="mt-4 font-serif text-4xl leading-none tracking-tight text-ivoire md:text-6xl">
              Shine. Own. Earn. Navigate.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-linen/70">
              {bannerText[lang]}
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title={ctaTitle} text={ctaText} />
    </>
  )
}
