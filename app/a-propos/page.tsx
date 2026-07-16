import type { Metadata } from 'next'
import Image from 'next/image'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { about } from '@/lib/content'

export const metadata: Metadata = {
  title: 'À propos',
  description: about.intro.join(' '),
}

export default function AboutPage() {
  return (
    <>
      <PageHeader index="01" eyebrow="À propos" title="Plus qu’un parcours, une évolution." intro={about.intro} />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <Reveal className="lg:sticky lg:top-28 lg:self-start">
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-ivoire">
              <Image
                src={about.portrait || '/placeholder.svg'}
                alt="Portrait de profil"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="flex flex-col gap-6">
              {about.paragraphs.map((p, i) => (
                <p
                  key={i}
                  className="text-pretty text-lg leading-relaxed text-muted-foreground first:text-espresso first:font-serif first:text-2xl first:leading-snug"
                >
                  {p}
                </p>
              ))}
            </div>

            <dl className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
              {about.facts.map((fact) => (
                <div key={fact.label} className="bg-linen p-6">
                  <dt className="text-xs uppercase tracking-[0.2em] text-camel">{fact.label}</dt>
                  <dd className="mt-2 font-serif text-lg leading-snug text-espresso">
                    {fact.value}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Envie d’en savoir plus ?" text="Mon CV bilingue complet et mes références sont à un message près." />
    </>
  )
}
