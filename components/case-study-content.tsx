"use client"

import { BaseImage as Image } from '@/components/base-image'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { caseStudy } from '@/lib/content'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Bi } from '@/lib/content'

const contextTitle: Bi = { fr: 'Contexte', en: 'Context' }
const missionEyebrow: Bi = { fr: 'Ma mission', en: 'My mission' }
const resultsTitle: Bi = { fr: 'Les résultats', en: 'The results' }
const ctaTitle: Bi = { fr: 'Un projet à faire rayonner ?', en: 'Have a project worth showcasing?' }
const ctaText: Bi = { fr: 'De la stratégie au contenu, je peux donner vie au vôtre.', en: 'From strategy to content, I can help bring yours to life.' }

export function CaseStudyContent() {
  const { lang } = useLanguage()

  return (
    <>
      <PageHeader
        index="04"
        eyebrow={caseStudy.eyebrow[lang]}
        title={caseStudy.title}
        intro={caseStudy.subtitle[lang]}
      />

      <section className="px-5 pt-12 md:px-8 md:pt-16">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-ivoire">
            <Image
              src={caseStudy.cover || '/placeholder.svg'}
              alt={`Événement ${caseStudy.title}`}
              fill
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </Reveal>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-serif text-2xl text-espresso">{contextTitle[lang]}</h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {caseStudy.context[lang]}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-espresso p-8 text-linen md:p-10">
              <h2 className="text-xs uppercase tracking-[0.25em] text-camel">{missionEyebrow[lang]}</h2>
              <p className="mt-4 text-pretty text-xl leading-relaxed text-ivoire">
                {caseStudy.mission[lang]}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-border bg-ivoire px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {caseStudy.chapters.map((chapter, i) => (
              <Reveal key={chapter.title.fr} delay={(i % 2) * 90}>
                <article className="flex h-full flex-col gap-4 bg-linen p-8 md:p-10">
                  <span className="font-serif text-3xl text-camel">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-2xl leading-snug text-espresso">
                    {chapter.title[lang]}
                  </h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {chapter.text[lang]}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-serif text-3xl text-espresso md:text-4xl">
              {resultsTitle[lang]}
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {caseStudy.results.map((r, i) => (
              <Reveal key={r.label.fr} delay={i * 70}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-ivoire p-6 text-center">
                  <span className="font-serif text-3xl text-cocoa md:text-4xl">{r.value[lang]}</span>
                  <span className="mt-2 text-sm leading-snug text-muted-foreground">{r.label[lang]}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {caseStudy.gallery.map((item, i) => (
            <Reveal key={item.src} delay={i * 80}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-ivoire">
                <Image
                  src={item.src || '/placeholder.svg'}
                  alt={`${caseStudy.title} — visuel ${i + 1}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <CtaBand title={ctaTitle} text={ctaText} />
    </>
  )
}
