"use client"

import Link from 'next/link'
import { BaseImage as Image } from '@/components/base-image'
import { ArrowUpRight } from 'lucide-react'
import { Hero } from '@/components/home/hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { projects, caseStudy, about, personal } from '@/lib/content'
import { useLanguage } from '@/contexts/LanguageContext'
import type { Bi } from '@/lib/content'

const journey: { href: string; label: Bi; desc: Bi }[] = [
  { href: '/a-propos', label: { fr: 'À propos', en: 'About' }, desc: { fr: 'Qui je suis, d’où je viens, où je vais.', en: 'Who I am, where I come from, where I’m going.' } },
  { href: '/competences', label: { fr: 'Compétences', en: 'Skills' }, desc: { fr: 'Ce que je maîtrise, entre stratégie et création.', en: 'What I master, between strategy and creation.' } },
  { href: '/realisations', label: { fr: 'Réalisations', en: 'Portfolio' }, desc: { fr: 'Entrez directement dans le vif du sujet.', en: 'Get straight to the heart of the matter.' } },
  { href: '/etude-de-cas', label: { fr: 'Étude de cas', en: 'Case study' }, desc: { fr: 'Ludi Show 3e édition : un projet décortiqué.', en: 'Ludi Show, 3rd edition: a project broken down.' } },
]

const journeyEyebrow: Bi = { fr: 'Le parcours', en: 'The journey' }
const journeyTitle: Bi = { fr: 'Suivez le fil ;)', en: 'Follow the thread ;)' }
const journeyIntro: Bi = { fr: 'Quatre entrées pour découvrir comment je travaille, ce que je sais faire, et ce que ça donne concrètement.', en: 'Four entry points to discover how I work, what I can do, and what it looks like in practice.' }

const aboutEyebrow: Bi = { fr: 'À propos', en: 'About' }
const aboutTitle: Bi = { fr: 'Un profil solaire, créatif et rigoureux.', en: 'A bright, creative, rigorous profile.' }
const discoverLink: Bi = { fr: 'Découvrir mon parcours', en: 'Discover my journey' }

const realisationsEyebrow: Bi = { fr: 'Réalisations', en: 'Portfolio' }
const realisationsTitle: Bi = { fr: 'Des projets, pas des promesses.', en: 'Projects, not promises.' }
const realisationsIntro: Bi = { fr: 'Réseaux sociaux, contenus, traduction : chaque projet compte.', en: 'Social media, content, translation: every project counts.' }
const fullCatalogLink: Bi = { fr: 'Tout le catalogue', en: 'Full catalog' }

const readCaseStudyLink: Bi = { fr: 'Lire l’étude de cas', en: 'Read the case study' }

const personalEyebrow: Bi = { fr: 'Projets personnels', en: 'Personal projects' }
const personalTitle: Bi = { fr: 'Ce que je construis à côté.', en: 'What I build on the side.' }
const personalIntro: Bi = { fr: 'Modeling, branding, testing : mes projets perso.', en: 'Modeling, branding, testing: my personal projects.' }
const allProjectsLink: Bi = { fr: 'Tous les projets', en: 'All projects' }

export default function HomePage() {
  const { lang } = useLanguage()
  const featured = projects.slice(0, 3)
  const featuredPersonal = personal.items.slice(0, 3)

  return (
    <>
      <Hero />

      {/* Parcours guidé */}
      <section className="border-y border-border bg-ivoire px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <SectionHeading
              eyebrow={journeyEyebrow[lang]}
              title={journeyTitle[lang]}
              intro={journeyIntro[lang]}
            />
          </Reveal>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
            {journey.map((step, i) => (
              <Reveal key={step.href} delay={i * 80}>
                <Link
                  href={step.href}
                  className="group flex h-full flex-col justify-between gap-8 bg-linen p-7 transition-colors hover:bg-khaki/40"
                >
                  <span className="font-serif text-2xl text-camel">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span>
                    <span className="flex items-center gap-1.5 font-serif text-xl text-espresso">
                      {step.label[lang]}
                      <ArrowUpRight className="size-4 text-cocoa transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {step.desc[lang]}
                    </span>
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Aperçu à propos */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/5] max-w-md overflow-hidden rounded-2xl border border-border bg-ivoire">
              <Image
                src={about.portrait || '/placeholder.svg'}
                alt="Portrait de profil"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </Reveal>
          <Reveal className="order-1 lg:order-2" delay={100}>
            <SectionHeading eyebrow={aboutEyebrow[lang]} title={aboutTitle[lang]} />
            <div className="mt-6 space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {about.intro[lang].map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {about.paragraphs[lang][0]}
            </p>
            <Link
              href="/a-propos"
              className="mt-8 inline-flex items-center gap-2 border-b border-cocoa/40 pb-1 text-sm text-cocoa transition-colors hover:border-cocoa"
            >
              {discoverLink[lang]}
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* Aperçu réalisations */}
      <section className="border-t border-border bg-ivoire px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={realisationsEyebrow[lang]}
              title={realisationsTitle[lang]}
              intro={realisationsIntro[lang]}
            />
            <Link
              href="/realisations"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-espresso/25 px-6 py-3 text-sm text-espresso transition-colors hover:bg-espresso hover:text-ivoire"
            >
              {fullCatalogLink[lang]}
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featured.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <Link
                  href={`/realisations?projet=${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-linen transition-colors hover:border-camel"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.cover || '/placeholder.svg'}
                      alt={project.title[lang]}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-linen/90 px-3 py-1 font-serif text-sm text-cocoa backdrop-blur">
                      N° {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs uppercase tracking-[0.15em] text-camel">
                      {project.categoryLabel[lang]}
                    </span>
                    <h3 className="mt-2 font-serif text-xl leading-snug text-espresso">
                      {project.title[lang]}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Teaser étude de cas */}
      <section className="px-5 py-20 md:px-8 md:py-28">
        <Reveal className="mx-auto grid max-w-6xl items-center gap-10 overflow-hidden rounded-2xl border border-border bg-espresso text-linen lg:grid-cols-2">
          <div className="relative aspect-[16/10] lg:aspect-auto lg:h-full lg:min-h-[26rem]">
            <Image
              src={caseStudy.cover || '/placeholder.svg'}
              alt={`Étude de cas : ${caseStudy.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
          <div className="p-8 md:p-12">
            <span className="text-xs uppercase tracking-[0.25em] text-camel">
              {caseStudy.eyebrow[lang]}
            </span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-ivoire md:text-5xl">
              {caseStudy.title}
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-linen/75">
              {caseStudy.subtitle[lang].map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <Link
              href="/etude-de-cas"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivoire px-7 py-3.5 text-sm text-espresso transition-colors hover:bg-khaki"
            >
              {readCaseStudyLink[lang]}
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </Reveal>
      </section>

      {/* Aperçu projets personnels */}
      <section className="border-t border-border bg-ivoire px-5 py-20 md:px-8 md:py-28">
        <div className="mx-auto max-w-6xl">
          <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <SectionHeading
              eyebrow={personalEyebrow[lang]}
              title={personalTitle[lang]}
              intro={personalIntro[lang]}
            />
            <Link
              href="/projets-personnels"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-espresso/25 px-6 py-3 text-sm text-espresso transition-colors hover:border-espresso"
            >
              {allProjectsLink[lang]}
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredPersonal.map((project, i) => (
              <Reveal key={project.slug} delay={i * 90}>
                <Link
                  href={`/projets-personnels?projet=${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-linen transition-colors hover:border-espresso/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title[lang]}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <span className="absolute left-3 top-3 rounded-full bg-ivoire/90 px-3 py-1 font-serif text-sm text-cocoa backdrop-blur-sm">
                      N° {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div className="p-5">
                    <span className="text-xs uppercase tracking-[0.15em] text-camel">
                      {project.type[lang]}
                    </span>
                    <h3 className="mt-2 font-serif text-xl leading-snug text-espresso">
                      {project.title[lang]}
                    </h3>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  )
}
