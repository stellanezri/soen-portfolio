import type { Metadata } from 'next'
import { AboutContent } from '@/components/about-content'
import { about } from '@/lib/content'

export const metadata: Metadata = {
  title: 'À propos',
  description: about.intro.fr.join(' '),
}

export default function AboutPage() {
  return <AboutContent />
}
