import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Monogram } from '@/components/monogram'
import { Reveal } from '@/components/reveal'
import Image from "next/image"

export function CtaBand({
  title = 'Prête à rejoindre votre équipe.',
  text = 'Une alternance, une mission, un café pour échanger ? Je réponds sous 24 h.',
}: {
  title?: string
  text?: string
}) {
  return (
    <section className="bg-linen px-5 py-20 md:px-8 md:py-28">
      <Reveal className="relative mx-auto max-w-6xl overflow-hidden rounded-2xl bg-camel px-6 py-16 text-center md:px-16 md:py-24">
        <Image
  src="/plain-logo-soen.svg"
  alt=""
  width={175}
  height={175}
  className="pointer-events-none absolute -center-16 -top-2 opacity-100 select-none"
/>
      <div className="relative z-10">
        <h2 className="mx-auto max-w-2xl text-balance font-serif text-3xl leading-tight tracking-tight text-ivoire md:text-5xl">
          {title}
        </h2>
        <p className="mx-auto mt-5 max-w-xl text-pretty leading-relaxed text-ivoire/85">
          {text}
        </p>
        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-espresso px-7 py-3.5 text-sm text-ivoire transition-colors hover:bg-cocoa"
          >
            Me contacter
            <ArrowRight className="size-4" />
          </Link>
          <Link
            href="/realisations"
            className="inline-flex items-center gap-2 rounded-full border border-ivoire/40 px-7 py-3.5 text-sm text-ivoire transition-colors hover:bg-ivoire/10"
          >
            Voir mes réalisations
          </Link>
        </div>
      </div> 
      </Reveal>
    </section>
  )
}
