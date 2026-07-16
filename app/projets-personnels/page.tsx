import type { Metadata } from 'next'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { personal } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projets personnels',
  description: personal.intro,
}

export default function PersonalPage() {
  return (
    <>
      <PageHeader
        index="05"
        eyebrow="Projets personnels"
        title="Les backstages."
        intro={personal.intro}
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 sm:grid-cols-2">
            {personal.items.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 90}>
                <article className="group overflow-hidden rounded-2xl border border-border bg-ivoire">
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image || '/placeholder.svg'}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, 50vw"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-linen/90 px-3 py-1 text-xs uppercase tracking-[0.15em] text-cocoa backdrop-blur">
                      {item.type}
                    </span>
                  </div>
                  <div className="p-6">
                    <h2 className="font-serif text-2xl leading-snug text-espresso">{item.title}</h2>
                    <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          {/* Bandeau Instagram */}
          <Reveal className="mt-6">
            <a
              href={personal.instagram.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-camel p-8 text-ivoire transition-colors hover:bg-cocoa md:flex-row md:items-center md:p-12"
            >
              <div>
                <span className="text-xs uppercase tracking-[0.25em] text-ivoire/70">
                  Suivre au quotidien
                </span>
                <p className="mt-3 font-serif text-3xl md:text-4xl">{personal.instagram.handle}</p>
              </div>
              <span className="inline-flex items-center gap-2 rounded-full bg-ivoire px-6 py-3 text-sm text-espresso">
                Voir sur Instagram
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </a>
          </Reveal>
        </div>
      </section>

      <CtaBand title="J’ai attisé votre curiosité ?" text="Photo, vidéo, direction artistique : mettons de l’image sur vos idées ;)" />
    </>
  )
}
