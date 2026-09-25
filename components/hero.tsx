import Image from 'next/image'
import { ArrowRight, MoveDown } from 'lucide-react'

export function Hero() {
  return (
    <section id="inicio" className="relative flex min-h-svh items-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/hero-industrial.png"
          alt="Planta industrial com vasos de pressão, caldeiras e tubulações"
          fill
          priority
          sizes="100vw"
          className="slow-zoom object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0b0f12]/85 via-[#0b0f12]/70 to-[#0b0f12]" />
        <div className="absolute inset-0 bg-[#0b0f12]/40" />
        <div className="grid-drift absolute inset-0 opacity-70" aria-hidden />
        <div
          className="float-a pointer-events-none absolute -left-24 top-1/4 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
          aria-hidden
        />
        <div
          className="float-b pointer-events-none absolute -bottom-10 right-[-6%] h-80 w-80 rounded-full bg-brand/[0.06] blur-3xl"
          aria-hidden
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-5 pt-28 pb-24 sm:px-8">
        <div className="max-w-3xl">
          <p
            className="animate-reveal-up flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand"
            style={{ animationDelay: '0.05s' }}
          >
            <span className="h-px w-8 bg-brand" aria-hidden />
            Engenharia e Manutenção Industrial
          </p>

          <h1
            className="animate-reveal-up mt-6 font-display text-4xl font-bold leading-[1.05] text-balance text-fg sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: '0.18s' }}
          >
            Segurança e precisão para a operação da sua indústria.
          </h1>

          <p
            className="animate-reveal-up mt-6 max-w-xl text-base leading-relaxed text-pretty text-fg-muted sm:text-lg"
            style={{ animationDelay: '0.34s' }}
          >
            Soluções em inspeção, integridade, montagem, manutenção e adequação de
            equipamentos industriais, com responsabilidade técnica.
          </p>

          <div
            className="animate-reveal-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: '0.5s' }}
          >
            <a
              href="https://wa.me/5534992691101?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
              target="_blank"
              rel="noreferrer"
              className="btn-sheen btn-press group inline-flex items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-[#0b0f12] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_14px_36px_-10px_var(--color-brand-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light/70"
            >
              Solicitar orçamento
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
            <a
              href="#servicos"
              className="btn-press inline-flex items-center justify-center gap-2 rounded-md border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-fg backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/10"
            >
              Conhecer serviços
            </a>
          </div>
        </div>
      </div>

      <a
        href="#empresa"
        aria-label="Rolar para a próxima seção"
        className="absolute inset-x-0 bottom-8 mx-auto flex w-fit flex-col items-center gap-2 text-fg-muted transition-colors hover:text-fg"
      >
        <span className="text-[10px] font-medium uppercase tracking-[0.24em]">Role para explorar</span>
        <span className="flex h-9 w-6 items-start justify-center rounded-full border border-white/20 p-1.5">
          <MoveDown className="scroll-cue size-3" />
        </span>
      </a>
    </section>
  )
}
