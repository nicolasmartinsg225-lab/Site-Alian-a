'use client'

import { useEffect, useRef, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

type ParallaxProps = {
  children: ReactNode
  /** Positive values drift down as you scroll past; keep small for subtlety. */
  speed?: number
  className?: string
}

export function Parallax({ children, speed = 0.12, className }: ParallaxProps) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const node = ref.current
    if (!node) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = node.getBoundingClientRect()
      const vh = window.innerHeight || 1
      const progress = (rect.top + rect.height / 2 - vh / 2) / vh
      node.style.transform = `translate3d(0, ${(progress * speed * 100).toFixed(2)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }

    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={ref} className={cn('will-change-transform', className)}>
      {children}
    </div>
  )
}
