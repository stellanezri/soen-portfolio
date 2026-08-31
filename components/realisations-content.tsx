"use client"

import { useLanguage } from "@/contexts/LanguageContext"
import { PageHeader } from "@/components/page-header"
import { CtaBand } from "@/components/cta-band"
import { Catalogue } from "@/components/realisations/catalogue"
import type { Bi } from "@/lib/content"

const pageEyebrow: Bi = { fr: "Réalisations", en: "Work" }
const pageTitle: Bi = { fr: "Des projets, pas des promesses.", en: "Projects, not promises." }
const pageIntro: Bi = {
  fr: "Réseaux sociaux, contenus, traduction : chaque projet compte.",
  en: "Social media, content, translation: every project counts.",
}
const ctaTitle: Bi = { fr: "Un projet en tête ?", en: "Got a project in mind?" }
const ctaText: Bi = { fr: "Parlons-en dès aujourd’hui.", en: "Let’s talk about it today." }

export function RealisationsContent() {
  const { lang } = useLanguage()

  return (
    <>
      <PageHeader
        index="03"
        eyebrow={pageEyebrow[lang]}
        title={pageTitle[lang]}
        intro={pageIntro[lang]}
      />

      <section className="px-5 py-16 md:px-8 md:py-24">
        <div className="mx-auto max-w-6xl">
          <Catalogue />
        </div>
      </section>

      <CtaBand title={ctaTitle} text={ctaText} />
    </>
  )
}
