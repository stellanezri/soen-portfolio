'use client'
import Image, { type ImageProps } from 'next/image'
import { BASE_PATH } from '@/lib/base-path'

export function BaseImage({ src, ...props }: ImageProps) {
  const prefixed = typeof src === 'string' && src.startsWith('/') ? `${BASE_PATH}${src}` : src
  return <Image src={prefixed} {...props} />
}