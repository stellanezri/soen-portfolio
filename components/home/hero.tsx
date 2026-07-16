import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Monogram } from '@/components/monogram'
import { hero, site } from '@/lib/content'

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div
      className="absolute inset-0 -z-10 bg-cover bg-center"
      style={{ backgroundImage: "url('/hero-background.png')" }}/>
      {/* Voile pour garder le texte lisible */}
      <div className="absolute inset-0 -z-10 bg-ivoire/70" />
      {/* Sceau géant en filigrane — fil rouge de la maison */}
      <Monogram
        showRing={false}
      />

      <div className="mx-auto flex max-w-6xl flex-col gap-14 px-5 pb-20 pt-16 md:px-8 md:pb-28 md:pt-24 lg:flex-row lg:items-center lg:gap-16">
        <div className="flex-1">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-ivoire px-4 py-1.5 text-xs uppercase tracking-[0.2em] text-cocoa">
            <Monogram className="size-4 text-camel" showRing={false} />
            {hero.eyebrow}
          </span>

          <h1 className="mt-7 text-balance font-serif text-5xl leading-[0.98] tracking-tight text-espresso sm:text-6xl md:text-7xl">
            {hero.titleLines.map((line, i) => (
              <span key={i} className="block">
                {i === hero.titleLines.length - 1 ? (
                  <span className="italic text-cocoa">{line}</span>
                ) : (
                  line
                )}
              </span>
            ))}
          </h1>

          <p className="mt-7 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground">
            {hero.valueProposition}
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link
              href={hero.primaryCta.href}
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm text-ivoire transition-colors hover:bg-cocoa"
            >
              {hero.primaryCta.label}
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href={hero.secondaryCta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full border border-espresso/25 px-7 py-3.5 text-sm text-espresso transition-colors hover:bg-espresso hover:text-ivoire"
            >
              {hero.secondaryCta.label}
            </Link>
          </div>

          <dl className="mt-14 grid max-w-lg grid-cols-3 gap-6 border-t border-border pt-8">
            {hero.facts.map((fact) => (
              <div key={fact.label}>
                <dt className="sr-only">{fact.label}</dt>
                <dd>
                  <span className="block font-serif text-3xl text-cocoa md:text-4xl">
                    {fact.value}
                  </span>
                  <span className="mt-1 block text-sm leading-snug text-muted-foreground">
                    {fact.label}
                  </span>
                </dd>
              </div>
            ))}
          </dl>
        </div>

        {/* Carte identité — sceau encadré */}
        <div className="relative w-full max-w-sm shrink-0 lg:w-[22rem]">
          <div className="relative aspect-[4/5] overflow-hidden rounded-2xl border border-border bg-ivoire">
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
              <Monogram className="size-28 text-cocoa" />
              <div>
                <p className="font-serif text-2xl tracking-tight text-espresso">{site.name}</p>
                <p className="mt-2 text-sm uppercase tracking-[0.2em] text-muted-foreground">
                  {site.location}
                </p>
              </div>
              <div className="mt-2 h-px w-16 bg-camel" aria-hidden="true" />
              <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                {site.degree}
              </p>
            </div>
          </div>
          <span className="absolute -bottom-3 -left-3 rounded-full bg-camel px-6 py-2 font-serif text-sm text-ivoire shadow-sm">
            Shine. Own. Earn. Navigate.
          </span>
        </div>
      </div>
    </section>
  )
}
