'use client'
import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export function ProjectCarousel({ gallery }: { gallery: Array<{ src: string; alt?: string; type?: 'image' | 'video' }> }) {
  const [current, setCurrent] = useState(0)

  if (gallery.length === 0) return null

  const next = () => setCurrent((prev) => (prev + 1) % gallery.length)
  const prev = () => setCurrent((prev) => (prev - 1 + gallery.length) % gallery.length)

  return (
    <div className="relative w-full max-h-[min(1100px,86vh)] min-h-[28rem] overflow-hidden rounded-2xl bg-background">
      {gallery.map((item, i) => (
        <div
          key={i}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-500 ${i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
        >
          {item.type === 'video' ? (
            <video
              src={item.src}
              controls
              className="max-h-full max-w-full object-contain"
            />
          ) : (
            <Image
              src={item.src}
              alt={item.alt || ''}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 90vw"
              priority={i === 0}
            />
          )}
        </div>
      ))}

      {gallery.length > 1 && (
        <>
          <button
            onClick={prev}
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition z-10"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            onClick={next}
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-md transition z-10"
          >
            <ChevronRight className="size-5" />
          </button>

          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-2 z-10">
            {gallery.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${i === current ? 'bg-espresso scale-125' : 'bg-espresso/40'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  )
}