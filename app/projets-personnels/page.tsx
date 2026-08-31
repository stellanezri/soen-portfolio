import type { Metadata } from 'next'
import { PersonalContent } from '@/components/personal-content'
import { personal } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Projets personnels',
  description: personal.intro.fr,
}

export default function PersonalPage() {
  return <PersonalContent />
}
