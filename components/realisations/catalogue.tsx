'use client'

import { useEffect, useMemo, useState } from 'react'
import { BaseImage as Image } from '@/components/base-image'
import Link from 'next/link'
import { ArrowUpRight, X } from 'lucide-react'
import { projects, type Project } from '@/lib/content'
import { Reveal } from '@/components/reveal'
import { cn } from '@/lib/utils'
import { ProjectCarousel } from '@/components/ui/carousel'
import { useLanguage } from '@/contexts/LanguageContext'

const categoriesFr = ['Tous', 'Digital', 'Contenu', 'Retail', 'Événement'] as const
const categoriesEn = ['All', 'Digital', 'Content', 'Retail', 'Event'] as const

export function Catalogue({ initialSlug }: { initialSlug?: string } = {}) {
  const { lang } = useLanguage()
  const categories = lang === 'fr' ? categoriesFr : categoriesEn

  const [filter, setFilter] = useState<string>('Tous')
  const [active, setActive] = useState<Project | null>(null)

  useEffect(() => {
    const resolvedInitialSlug = initialSlug ?? new URLSearchParams(window.location.search).get('projet') ?? undefined
    setActive(projects.find((p) => p.slug === resolvedInitialSlug) ?? null)
  }, [initialSlug])

  // Reset filter when language changes
  useEffect(() => {
    setFilter(lang === 'fr' ? 'Tous' : 'All')
  }, [lang])

  const filtered = useMemo(() => {
    if (filter === 'Tous' || filter === 'All') return projects
    return projects.filter((p) => {
      const cat = typeof p.category === 'string' ? p.category : p.category[lang]
      return cat === filter
    })
  }, [filter, lang])

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

  const t = (field: any) => (typeof field === 'string' ? field : field?.[lang] ?? '')

  return (
    <>
      {/* Filtres */}
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filtrer les réalisations">
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

      {/* Grille numérotée */}
      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {filtered.map((project, i) => (
          <Reveal key={project.slug} delay={(i % 2) * 80}>
            <button
              type="button"
              onClick={() => setActive(project)}
              className="group flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-ivoire text-left transition-colors hover:border-camel"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.cover || '/placeholder.svg'}
                  alt={t(project.title)}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <span className="absolute left-4 top-4 rounded-full bg-linen/90 px-3 py-1 font-serif text-sm text-cocoa backdrop-blur">
                  N° {String(projects.indexOf(project) + 1).padStart(2, '0')}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <div className="flex items-center gap-3 text-xs uppercase tracking-[0.15em] text-camel">
                  <span>{t(project.category)}</span>
                  <span className="h-px w-4 bg-camel" aria-hidden="true" />
                  <span>{project.year}</span>
                </div>
                <h3 className="mt-3 font-serif text-2xl leading-snug text-espresso">
                  {t(project.title)}
                </h3>
                <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
                  {t(project.summary)}
                </p>
                <span className="mt-5 inline-flex items-center gap-1.5 text-sm text-cocoa">
                  {lang === 'fr' ? 'Voir la fiche' : 'View details'}
                  <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </div>
            </button>
          </Reveal>
        ))}
      </div>

      {/* Fiche détaillée en overlay */}
      {active && <ProjectDetail project={active} onClose={() => setActive(null)} lang={lang} t={t} />}
    </>
  )
}

function ProjectDetail({
  project,
  onClose,
  lang,
  t,
}: {
  project: Project
  onClose: () => void
  lang: 'fr' | 'en'
  t: (field: any) => string
}) {
  const number = String(projects.indexOf(project) + 1).padStart(2, '0')

  return (
    <div
      className="fixed inset-0 z-[60] flex justify-end"
      role="dialog"
      aria-modal="true"
      aria-labelledby="fiche-titre"
    >
      <button
        type="button"
        aria-label={lang === 'fr' ? 'Fermer la fiche' : 'Close details'}
        onClick={onClose}
        className="absolute inset-0 bg-espresso/40 backdrop-blur-sm animate-in fade-in"
      />
      <div className="relative flex h-full w-full max-w-[min(100vw,760px)] flex-col overflow-y-auto bg-ivoire shadow-2xl animate-in slide-in-from-right duration-300">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-border bg-ivoire/90 px-6 py-4 backdrop-blur md:px-8">
          <span className="font-serif text-lg text-cocoa">N° {number}</span>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-10 items-center justify-center rounded-full border border-border text-espresso transition-colors hover:bg-khaki/50"
            aria-label={lang === 'fr' ? 'Fermer' : 'Close'}
          >
            <X className="size-5" />
          </button>
        </div>

        {project.gallery && project.gallery.length > 0 ? (
          <ProjectCarousel gallery={project.gallery} />
        ) : (
          <div className="relative aspect-[16/9] md:aspect-[16/10] w-full shrink-0">
            <Image
              src={project.cover || '/placeholder.svg'}
              alt={t(project.title)}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 42rem"
            />
          </div>
        )}

        <div className="px-6 py-8 md:px-8 md:py-10">
          <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.15em] text-camel">
            <span>{t(project.category)}</span>
            <span className="h-px w-4 bg-camel" aria-hidden="true" />
            <span>{project.year}</span>
          </div>
          <h2 id="fiche-titre" className="mt-3 font-serif text-3xl leading-tight text-espresso md:text-4xl">
            {t(project.title)}
          </h2>

          <dl className="mt-6 grid grid-cols-2 gap-4 border-y border-border py-5">
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {lang === 'fr' ? 'Client' : 'Client'}
              </dt>
              <dd className="mt-1 text-espresso">{t(project.client)}</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                {lang === 'fr' ? 'Rôle' : 'Role'}
              </dt>
              <dd className="mt-1 text-espresso">{t(project.role)}</dd>
            </div>
          </dl>

          <section className="mt-7">
            <h3 className="font-serif text-xl text-espresso">
              {lang === 'fr' ? 'Le défi' : 'The challenge'}
            </h3>
            <p className="mt-2 text-pretty leading-relaxed text-muted-foreground">
              {t(project.challenge)}
            </p>
          </section>

          <section className="mt-7">
            <h3 className="font-serif text-xl text-espresso">
              {lang === 'fr' ? 'Mon approche' : 'My approach'}
            </h3>
            <ol className="mt-3 flex flex-col gap-3">
              {(Array.isArray(project.approach)
                ? project.approach
                : project.approach?.[lang] ?? []
              ).map((step: string, i: number) => (
                <li key={i} className="flex gap-3">
                  <span className="font-serif text-sm text-camel">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="text-pretty leading-relaxed text-muted-foreground">{step}</span>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-8">
            <h3 className="font-serif text-xl text-espresso">
              {lang === 'fr' ? 'Résultats' : 'Results'}
            </h3>
            <div className="mt-4 grid grid-cols-3 gap-3">
              {project.results.map((r: any) => (
                <div key={t(r.label)} className="rounded-xl border border-border bg-ivoire p-4 text-center">
                  <span className="block font-serif text-2xl text-cocoa">{t(r.value)}</span>
                  <span className="mt-1 block text-xs leading-snug text-muted-foreground">
                    {t(r.label)}
                  </span>
                </div>
              ))}
            </div>
          </section>

          <div className="mt-8 flex flex-wrap gap-2">
            {(Array.isArray(project.tags) ? project.tags : project.tags?.[lang] ?? []).map((tag: any) => (
              <span
                key={t(tag)}
                className="rounded-full border border-border bg-ivoire px-3 py-1 text-xs text-muted-foreground"
              >
                {t(tag)}
              </span>
            ))}
          </div>

          <Link
            href="/contact"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm text-ivoire transition-colors hover:bg-cocoa"
          >
            {lang === 'fr' ? 'Discuter d’un projet similaire' : 'Discuss a similar project'}
            <ArrowUpRight className="size-4" />
          </Link>
        </div>
      </div>
    </div>
  )
}
