"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { PageHeader } from "@/components/page-header"
import { CtaBand } from "@/components/cta-band"
import { PersonalCatalogue } from "@/components/projets-personnels/catalogue"
import { personal } from "@/lib/content"
import type { Bi } from "@/lib/content"

const pageEyebrow: Bi = { fr: "Projets personnels", en: "Personal projects" }
const pageTitle: Bi = { fr: "Ce que je construis à côté.", en: "What I build on the side." }
const ctaTitle: Bi = { fr: "Envie d’en discuter ?", en: "Want to talk about it?" }
const ctaText: Bi = { fr: "Mes projets perso disent autant de moi que mes expériences pro.", en: "My personal projects say as much about me as my professional experience." }

export function PersonalContent() {
  const { lang } = useLanguage()

  return (
    <>
      <PageHeader
        index="05"
        eyebrow={pageEyebrow[lang]}
        title={pageTitle[lang]}
        intro={personal.intro[lang]}
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <PersonalCatalogue />
        </div>
      </section>

      <CtaBand title={ctaTitle} text={ctaText} />
    </>
  )
}
