import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ArrowUpRight } from 'lucide-react'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { PersonalCatalogue } from '@/components/projets-personnels/catalogue'
import { personal } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projets personnels',
  description: personal.intro,
}

export default async function PersonalPage({
  searchParams,
}: {
  searchParams: Promise<{ projet?: string }>
}) {
  const { projet } = await searchParams

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
          <Suspense fallback={null}>
            <PersonalCatalogue initialSlug={projet} />
          </Suspense>

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
