import type { Metadata } from 'next'
import { RealisationsContent } from '@/components/realisations-content'

export const metadata: Metadata = {
  title: 'Réalisations',
  description: 'Catalogue de mes réalisations en marketing, contenu et communication.',
}

export default function RealisationsPage() {
  return <RealisationsContent />
}
