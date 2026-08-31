import type { Metadata } from 'next'
import { CaseStudyContent } from '@/components/case-study-content'
import { caseStudy } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Étude de cas — Ludi Show',
  description: caseStudy.subtitle.fr.join(' '),
}

export default function CaseStudyPage() {
  return <CaseStudyContent />
}
