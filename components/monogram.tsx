import { site } from '@/lib/content'
import { cn } from '@/lib/utils'
import Image from "next/image"

/**
 * Sceau / monogramme de la maison.
 * Fil rouge du site : présent dans le header, en filigrane et dans le footer.
 * Les initiales viennent de `site.monogram` (modifiable dans lib/content.ts).
 */
export function Monogram({
  className,
  showRing = true,
}: {
  className?: string
  showRing?: boolean
}) {
  return (
    <span
      className={cn(
        'relative inline-flex items-center justify-center',
        className,
      )}
      aria-hidden="true"
    >
      {showRing && (
        <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full">
          <circle
            cx="50"
            cy="50"
            r="47"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            opacity="0.5"
          />
          <circle
            cx="50"
            cy="50"
            r="42"
            fill="none"
            stroke="currentColor"
            strokeWidth="0.5"
            opacity="0.35"
          />
        </svg>
      )}
      <Image
        src="/s-logo-soen.svg"
        alt=""
        fill
        className="object-contain p-[15%]"
      />
    </span>
  )
}
