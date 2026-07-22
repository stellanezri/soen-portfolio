import { Monogram } from '@/components/monogram'

export function PageHeader({
  index,
  eyebrow,
  title,
  intro,
}: {
  index: string
  eyebrow: string
  title: string
  intro?: string | readonly string[]
}) {
  const introLines = typeof intro === 'string' ? [intro] : intro

  return (
    <header className="relative overflow-hidden border-b border-border bg-linen">
      <Monogram
  showRing={false}
  className="pointer-events-none absolute -right-6 top-1/2 size-50 -translate-y-1/2 text-cocoa/[0.05] opacity-[0.10] select-none md:size-80"
/>
      <div className="mx-auto max-w-6xl px-5 py-16 md:px-8 md:py-24">
        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.25em] text-camel">
          <span className="font-serif text-base tracking-normal">N° {index}</span>
          <span className="h-px w-8 bg-camel" aria-hidden="true" />
          {eyebrow}
        </div>
        <h1 className="mt-6 max-w-3xl text-balance font-serif text-4xl leading-[1.05] tracking-tight text-espresso md:text-6xl">
          {title}
        </h1>
        {introLines?.length ? (
          <div className="mt-6 max-w-2xl space-y-6 text-pretty text-lg leading-relaxed text-muted-foreground">
            {introLines.map((line, index) => (
              <p key={index}>{line}</p>
            ))}
          </div>
        ) : null}
      </div>
    </header>
  )
}
