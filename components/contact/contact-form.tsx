'use client'

import { useState, type FormEvent } from 'react'
import { Check, Send } from 'lucide-react'
import { contact } from '@/lib/content'

/**
 * Formulaire de contact.
 * Par défaut, il n'envoie rien vers un serveur : il affiche un message de
 * confirmation. Pour recevoir les messages par e-mail, on peut brancher
 * une action serveur ou un service (dis-le moi et je m'en occupe).
 */
export function ContactForm() {
  const [sent, setSent] = useState(false)

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSent(true)
  }

  if (sent) {
    return (
      <div className="flex flex-col items-center justify-center rounded-2xl border border-border bg-ivoire p-10 text-center">
        <span className="inline-flex size-14 items-center justify-center rounded-full bg-camel text-ivoire">
          <Check className="size-7" />
        </span>
        <h3 className="mt-5 font-serif text-2xl text-espresso">Message envoyé.</h3>
        <p className="mt-2 max-w-sm text-pretty leading-relaxed text-muted-foreground">
          Merci pour votre message. Je vous réponds sous 24 h. En attendant, vous pouvez aussi
          m’écrire directement à{' '}
          <a href={`mailto:${contact.email}`} className="text-cocoa underline underline-offset-2">
            {contact.email}
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-6 text-sm text-cocoa underline underline-offset-4"
        >
          Envoyer un autre message
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 rounded-2xl border border-border bg-ivoire p-7 md:p-9">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Nom" name="nom" autoComplete="name" required />
        <Field label="E-mail" name="email" type="email" autoComplete="email" required />
      </div>
      <Field label="Entreprise / École" name="entreprise" autoComplete="organization" />
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm text-espresso">
          Votre message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          required
          placeholder="Parlez-moi de votre poste, de vos besoins ou de votre projet…"
          className="rounded-lg border border-border bg-linen px-4 py-3 text-espresso outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-camel focus:ring-2 focus:ring-camel/30"
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm text-ivoire transition-colors hover:bg-cocoa"
      >
        Envoyer mon message
        <Send className="size-4" />
      </button>
    </form>
  )
}

function Field({
  label,
  name,
  type = 'text',
  required,
  autoComplete,
}: {
  label: string
  name: string
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={name} className="text-sm text-espresso">
        {label}
        {required && <span className="text-camel"> *</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        autoComplete={autoComplete}
        className="rounded-lg border border-border bg-linen px-4 py-3 text-espresso outline-none transition-colors focus:border-camel focus:ring-2 focus:ring-camel/30"
      />
    </div>
  )
}
