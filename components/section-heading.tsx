import { cn } from '@/lib/utils'

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = 'left',
  className,
}: {
  eyebrow?: string
  title: string
  intro?: string
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex flex-col gap-4',
        align === 'center' && 'items-center text-center',
        className,
      )}
    >
      {eyebrow && (
        <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-camel">
          <span className="h-px w-6 bg-camel" aria-hidden="true" />
          {eyebrow}
        </span>
      )}
      <h2 className="text-balance font-serif text-3xl leading-[1.1] tracking-tight text-espresso md:text-4xl lg:text-5xl">
        {title}
      </h2>
      {intro && (
        <p
          className={cn(
            'max-w-2xl text-pretty leading-relaxed text-muted-foreground md:text-lg',
            align === 'center' && 'mx-auto',
          )}
        >
          {intro}
        </p>
      )}
    </div>
  )
}
