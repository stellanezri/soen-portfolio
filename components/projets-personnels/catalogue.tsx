'use client'

import { useEffect, useMemo, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowUpRight, X } from 'lucide-react'
import { personal, type PersonalProject } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'

export function PersonalCatalogue({ initialSlug }: { initialSlug?: string }) {
  const items = personal.items as unknown as PersonalProject[]

  const categories = useMemo(
    () => ['Tous', ...Array.from(new Set(items.map((item) => item.type)))],
    [items],
  )

  const [filter, setFilter] = useState<string>('Tous')
  const [active, setActive] = useState<PersonalProject | null>(
    () => items.find((item) => item.slug === initialSlug) ?? null,
  )

  const filtered = useMemo(
    () => (filter === 'Tous' ? items : items.filter((item) => item.type === filter)),
    [filter, items],
  )

  // Verrouille le scroll du corps quand la fiche est ouverte + fermeture au clavier
  useEffect(() => {
    if (!active) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActive(null)
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = prev
      window.removeEventListener('keydown', onKey)
    }
  }, [active])

  return (
    <>
      {/* Filtres */}
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filtrer les projets personnels">
        {categories.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setFilter(cat)}
            aria-pressed={filter === cat}
            className={cn(
              'rounded-full border px-5 py-2 text-sm transition-colors',
              filter === cat
                ? 'border-espresso bg-espresso text-ivoire'
                : 'border-border bg-linen text-espresso hover:border-camel',
            )}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Grille */}
      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 90}>
            <button
              type="button"
              onClick={() => setActive(project)}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-ivoire text-left transition-colors hover:border-camel"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image || '/placeholder.svg'}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-linen/90 px-3 py-1 text-xs uppercase tracking-[0.15em] text-cocoa backdrop-blur">
                  {project.type}
                </span>
              </div>
              <div className="p-6">
                <h2 className="font-serif text-2xl leading-snug text-espresso">{project.title}</h2>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-cocoa">
                  Voir la fiche
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Fiche détaillée en overlay */}
      {active && <ProjectDetail project={active} onClose={() => setActive(null)} />}
    </>
  )
}

function ProjectDetail({ project, onClose }: { project: PersonalProject; onClose: () => void }) {
  const gallery = project.gallery.length > 0 ? project.gallery : [{ type: 'image' as const, src: project.image }]

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fiche-perso-titre"
    >
      <button
        type="button"
        aria-label="Fermer la fiche"
        onClick={onClose}
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-in fade-in"
      />
      <div className="relative flex h-full w-full max-w-2xl flex-col overflow-y-auto bg-linen shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-linen/90 px-6 py-4 backdrop-blur md:px-8">
          <span className="font-serif text-lg text-cocoa">{project.type}</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-espresso transition-colors hover:bg-khaki/50"
            aria-label="Fermer"
          >
            <X className="size-5" />
          </button>
        </div>

        <div className="relative aspect-[16/10] w-full shrink-0">
          {gallery[0].type === 'video' ? (
            <video
              src={gallery[0].src}
              controls
              playsInline
              className="h-full w-full object-cover"
            />
          ) : (
            <Image
              src={gallery[0].src || '/placeholder.svg'}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          )}
        </div>

        <div className="px-6 py-8 md:px-8 md:py-10">
          <h2 id="fiche-perso-titre" className="font-serif text-3xl leading-tight text-espresso md:text-4xl">
            {project.title}
          </h2>

          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {project.description}
          </p>

          {project.details && project.details.length > 0 && (
            <section className="mt-7">
              <h3 className="font-serif text-xl text-espresso">Le détail</h3>
              <ul className="mt-3 flex flex-col gap-3">
                {project.details.map((point, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="font-serif text-sm text-camel">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <span className="text-pretty leading-relaxed text-muted-foreground">{point}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {gallery.length > 1 && (
            <section className="mt-8">
              <h3 className="font-serif text-xl text-espresso">Galerie</h3>
              <div className="mt-4 grid grid-cols-2 gap-3">
                {gallery.slice(1).map((media, i) =>
                  media.type === 'video' ? (
                    <video
                      key={media.src + i}
                      src={media.src}
                      controls
                      playsInline
                      className="aspect-[4/3] w-full rounded-xl border border-border object-cover"
                    />
                  ) : (
                    <div
                      key={media.src + i}
                      className="relative aspect-[4/3] overflow-hidden rounded-xl border border-border bg-ivoire"
                    >
                      <Image
                        src={media.src || '/placeholder.svg'}
                        alt={`${project.title} — visuel ${i + 2}`}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, 21rem"
                      />
                    </div>
                  ),
                )}
              </div>
            </section>
          )}

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm text-ivoire transition-colors hover:bg-cocoa"
          >
            Discuter d’un projet similaire
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
