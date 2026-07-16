import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { caseStudy } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Étude de cas — Ludi Show',
  description: caseStudy.subtitle.join(' '),
}

export default function CaseStudyPage() {
  return (
    <>
      <PageHeader index="04" eyebrow={caseStudy.eyebrow} title={caseStudy.title} intro={caseStudy.subtitle} />

      {/* Visuel principal */}
      <section className="px-5 pt-12 md:px-8 md:pt-16">
        <Reveal className="mx-auto max-w-6xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-border bg-ivoire">
            <Image
              src={caseStudy.cover || '/placeholder.svg'}
              alt={`Événement ${caseStudy.title}`}
              fill
              className="object-cover"
              sizes="100vw"
              priority
            />
          </div>
        </Reveal>
      </section>

      {/* Contexte + mission */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <h2 className="font-serif text-2xl text-espresso">Contexte</h2>
            <p className="mt-4 text-pretty text-lg leading-relaxed text-muted-foreground">
              {caseStudy.context}
            </p>
          </Reveal>
          <Reveal delay={100}>
            <div className="rounded-2xl border border-border bg-espresso p-8 text-linen md:p-10">
              <h2 className="text-xs uppercase tracking-[0.25em] text-camel">Ma mission</h2>
              <p className="mt-4 text-pretty text-xl leading-relaxed text-ivoire">
                {caseStudy.mission}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Chapitres numérotés */}
      <section className="border-t border-border bg-ivoire px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2">
            {caseStudy.chapters.map((chapter, i) => (
              <Reveal key={chapter.title} delay={(i % 2) * 90}>
                <article className="flex h-full flex-col gap-4 bg-linen p-8 md:p-10">
                  <span className="font-serif text-3xl text-camel">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif text-2xl leading-snug text-espresso">
                    {chapter.title}
                  </h3>
                  <p className="text-pretty leading-relaxed text-muted-foreground">
                    {chapter.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <h2 className="text-center font-serif text-3xl text-espresso md:text-4xl">
              Les résultats
            </h2>
          </Reveal>
          <div className="mt-10 grid grid-cols-2 gap-4 md:grid-cols-4">
            {caseStudy.results.map((r, i) => (
              <Reveal key={r.label} delay={i * 70}>
                <div className="flex h-full flex-col items-center justify-center rounded-2xl border border-border bg-ivoire p-6 text-center">
                  <span className="font-serif text-3xl text-cocoa md:text-4xl">{r.value}</span>
                  <span className="mt-2 text-sm leading-snug text-muted-foreground">{r.label}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section className="px-5 pb-8 md:px-8">
        <div className="mx-auto grid max-w-6xl gap-4 sm:grid-cols-3">
          {caseStudy.gallery.map((src, i) => (
            <Reveal key={src} delay={i * 80}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-border bg-ivoire">
                <Image
                  src={src || '/placeholder.svg'}
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

      <CtaBand title="Un projet à faire rayonner ?" text="De la stratégie au contenu, je peux donner vie au vôtre." />
    </>
  )
}
