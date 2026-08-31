import type { Metadata } from 'next'
import { SkillsContent } from '@/components/skills-content'
import { hardSkills } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Compétences',
  description: hardSkills.intro.fr,
}

export default function SkillsPage() {
  return <SkillsContent />
}
