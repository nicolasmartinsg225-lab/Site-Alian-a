'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import { COMPANY, NAV_LINKS } from '@/lib/site'

export function SiteHeader() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-500',
        scrolled
          ? 'border-b border-white/10 bg-[#0b0f12]/80 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent',
      )}
    >
      <div
        className={cn(
          'mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-500 sm:px-8',
          scrolled ? 'h-16 py-3' : 'h-20 py-4',
        )}
      >
        <a href="#inicio" className="group flex items-center gap-3" aria-label={COMPANY.fullName}>
          <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand-dark/60 bg-brand-soft transition-colors group-hover:border-brand-light">
            <Image
              src="/images/logo%20site.jpeg"
              alt=""
              width={36}
              height={36}
              className="size-full object-cover"
            />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-base font-bold tracking-wide text-fg">
              {COMPANY.name.toUpperCase()}
            </span>
            <span className="mt-0.5 text-[10px] font-medium uppercase tracking-[0.18em] text-fg-muted">
              {COMPANY.tagline}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group relative rounded-md px-3 py-2 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              {link.label}
              <span
                className="pointer-events-none absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-brand-light transition-transform duration-300 ease-out group-hover:scale-x-100"
                aria-hidden
              />
            </a>
          ))}
        </nav>

        <div className="hidden lg:block">
          <a
            href="https://wa.me/5534992691101?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2.5 text-sm font-semibold text-[#0b0f12] shadow-[0_0_0_0_var(--color-brand-glow)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_10px_30px_-8px_var(--color-brand-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light/70"
          >
            Solicitar orçamento
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-white/10 text-fg transition-colors hover:bg-white/5 lg:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={cn(
          'overflow-hidden border-t border-white/10 bg-[#0b0f12]/95 backdrop-blur-xl transition-[max-height,opacity] duration-500 lg:hidden',
          open ? 'max-h-[80vh] opacity-100' : 'max-h-0 opacity-0',
        )}
      >
        <nav className="mx-auto flex max-w-7xl flex-col gap-1 px-5 py-6 sm:px-8" aria-label="Navegação mobile">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="rounded-md px-3 py-3 text-base font-medium text-fg-muted transition-colors hover:bg-white/5 hover:text-fg"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/5534992691101?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
            target="_blank"
            rel="noreferrer"
            onClick={() => setOpen(false)}
            className="mt-3 inline-flex items-center justify-center rounded-md bg-brand px-4 py-3.5 text-base font-semibold text-[#0b0f12] transition-colors hover:bg-brand-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light/70"
          >
            Solicitar orçamento
          </a>
        </nav>
      </div>
    </header>
  )
}
