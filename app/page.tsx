import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'
import { Hero } from '@/components/home/hero'
import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { projects, caseStudy, about, personal } from '@/lib/content'

const journey = [
  { href: '/a-propos', label: 'À propos', desc: 'Qui je suis, d’où je viens, où je vais.' },
  { href: '/competences', label: 'Compétences', desc: 'Ce que je maîtrise, entre stratégie et création.' },
  { href: '/realisations', label: 'Réalisations', desc: 'Entrez directement dans le vif du sujet.' },
  { href: '/etude-de-cas', label: 'Étude de cas', desc: 'Ludi Show 3e édition : un projet décortiqué.' },
]

export default function HomePage() {
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
              eyebrow="Le parcours"
              title="Suivez le fil ;)"
              intro="Quatre entrées pour découvrir comment je travaille, ce que je sais faire, et ce que ça donne concrètement."
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
                      {step.label}
                      <ArrowUpRight className="size-4 text-cocoa transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </span>
                    <span className="mt-2 block text-sm leading-relaxed text-muted-foreground">
                      {step.desc}
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
            <SectionHeading eyebrow="À propos" title="Un profil solaire, créatif et rigoureux." />
            <div className="mt-6 space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
              {about.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              {about.paragraphs[0]}
            </p>
            <Link
              href="/a-propos"
              className="mt-8 inline-flex items-center gap-2 border-b border-cocoa/40 pb-1 text-sm text-cocoa transition-colors hover:border-cocoa"
            >
              Découvrir mon parcours
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
              eyebrow="Réalisations"
              title="Des projets, pas des promesses."
              intro="Réseaux sociaux, contenus, traduction : chaque projet compte."
            />
            <Link
              href="/realisations"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-espresso/25 px-6 py-3 text-sm text-espresso transition-colors hover:bg-espresso hover:text-ivoire"
            >
              Tout le catalogue
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
                      alt={project.title}
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
                      {project.category}
                    </span>
                    <h3 className="mt-2 font-serif text-xl leading-snug text-espresso">
                      {project.title}
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
              {caseStudy.eyebrow}
            </span>
            <h2 className="mt-4 font-serif text-4xl tracking-tight text-ivoire md:text-5xl">
              {caseStudy.title}
            </h2>
            <div className="mt-5 space-y-4 text-pretty leading-relaxed text-linen/75">
              {caseStudy.subtitle.map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <Link
              href="/etude-de-cas"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-ivoire px-7 py-3.5 text-sm text-espresso transition-colors hover:bg-khaki"
            >
              Lire l’étude de cas
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
              eyebrow="Projets personnels"
              title="Ce que je construis à côté."
              intro="Modeling, branding, testing : mes projets perso."
            />
            <Link
              href="/projets-personnels"
              className="inline-flex shrink-0 items-center gap-2 rounded-full border border-espresso/25 px-6 py-3 text-sm text-espresso transition-colors hover:border-espresso"
            >
              Tous les projets
              <ArrowUpRight className="size-4" />
            </Link>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {featuredPersonal.map((project: any, i) => (
              <Reveal key={project.title} delay={i * 90}>
                <Link
                  href={`/projets-personnels?projet=${project.slug}`}
                  className="group block overflow-hidden rounded-2xl border border-border bg-linen transition-colors hover:border-espresso/40"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={project.image || '/placeholder.svg'}
                      alt={project.title}
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
                      {project.type}
                    </span>
                    <h3 className="mt-2 font-serif text-xl leading-snug text-espresso">
                      {project.title}
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
