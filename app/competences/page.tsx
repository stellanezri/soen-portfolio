import type { Metadata } from 'next'
import { PageHeader } from '@/components/page-header'
import { Reveal } from '@/components/reveal'
import { CtaBand } from '@/components/cta-band'
import { softSkills, hardSkills } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Compétences',
  description: hardSkills.intro,
}

export default function SkillsPage() {
  return (
    <>
      <PageHeader index="02" eyebrow="Compétences" title="Ma palette de compétences." intro={hardSkills.intro} />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-6">
            <section className="rounded-2xl border border-border bg-camel p-7 md:p-9">
              <div className="mb-5 flex items-center justify-between border-b border-border pb-4">
                <h2 className="font-serif text-2xl tracking-tight text-white">Savoir-être</h2>
                <span className="font-serif text-lg text-camel"></span>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {softSkills.map(({ label, icon: Icon, level }) => (
                  <div key={label} className="rounded-xl border border-border bg-white p-4 shadow-sm">
                    <Icon className="h-5 w-5 text-camel" strokeWidth={1.75} />
                    <p className="mt-2.5 mb-2 text-sm font-medium text-espresso">{label}</p>
                    <div className="h-[3px] w-full rounded-full bg-linen">
                      <div className="h-[3px] rounded-full bg-camel" style={{ width: `${level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </section>
          </Reveal>

          <div className="my-8 h-px w-full bg-border" />

          <div className="grid gap-6 md:grid-cols-2">
            {hardSkills.groups.map((group, gi) => (
              <Reveal key={group.title} delay={gi * 90}>
                <div className="flex h-full flex-col rounded-2xl border border-border bg-ivoire p-7 md:p-9">
                  <div className="flex items-baseline justify-between border-b border-border pb-5">
                    <h2 className="font-serif text-2xl tracking-tight text-espresso">
                      {group.title}
                    </h2>
                    <span className="font-serif text-lg text-camel">
                      {String(gi + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <ul className="mt-6 flex flex-wrap gap-2.5">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full border border-border bg-linen px-4 py-2 text-sm text-espresso transition-colors hover:border-camel hover:bg-khaki/40"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Bandeau typographique */}
          <Reveal className="mt-6 overflow-hidden rounded-2xl border border-border bg-espresso p-8 text-center md:p-14">
            <p className="text-xs uppercase tracking-[0.3em] text-camel">S.O.E.N</p>
            <p className="mt-4 font-serif text-4xl leading-none tracking-tight text-ivoire md:text-6xl">
              Shine. Own. Earn. Navigate.
            </p>
            <p className="mx-auto mt-6 max-w-xl text-pretty leading-relaxed text-linen/70">
              Un équilibre entre l'éclat d'une identité assumée et la rigueur d'une trajectoire choisie, pour avancer avec clarté vers des résultats qui nous ressemblent.
            </p>
          </Reveal>
        </div>
      </section>

      <CtaBand title="Ces compétences vous parlent ?" text="Voyons comment elles peuvent servir votre équipe." />
    </>
  )
}
