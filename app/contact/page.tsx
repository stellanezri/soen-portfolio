import type { Metadata } from 'next'
import { ContactContent } from '@/components/contact-content'
import { contactPage } from '@/lib/content'

export const metadata: Metadata = {
  title: 'Contact',
  description: contactPage.intro.fr,
}

export default function ContactPage() {
  return <ContactContent />
}
