import type { Metadata } from 'next'
import { Suspense } from 'react'
import { PageHeader } from '@/components/page-header'
import { Catalogue } from '@/components/realisations/catalogue'
import { CtaBand } from '@/components/cta-band'

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Catalogue numéroté de mes projets marketing : campagnes, contenus, événements et digital.',
}

export default async function RealisationsPage({
  searchParams,
}: {
  searchParams: Promise<{ projet?: string }>
}) {
  const { projet } = await searchParams

  return (
    <>
      <PageHeader
        index="03"
        eyebrow="Réalisations"
        title="Le catalogue."
        intro="Chaque projet est numéroté comme une pièce de collection. Filtrez par type et cliquez pour ouvrir la fiche détaillée."
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Suspense fallback={null}>
            <Catalogue initialSlug={projet} />
          </Suspense>
        </div>
      </section>

      <CtaBand title="Un projet en tête ?" text="Parlons-en dès aujourd’hui." />
    </>
  )
}
