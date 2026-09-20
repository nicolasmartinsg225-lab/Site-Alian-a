import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/reveal'

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-panel py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal>
          <div className="relative overflow-hidden rounded-2xl border border-brand/20 bg-gradient-to-br from-ink to-panel px-7 py-14 sm:px-14 sm:py-16">
            <div
              className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
              aria-hidden
            />
            <div className="relative flex flex-col items-start gap-8 lg:flex-row lg:items-center lg:justify-between">
              <div className="max-w-2xl">
                <h2 className="font-display text-3xl font-bold leading-tight text-balance text-fg sm:text-4xl">
                  Precisa de uma solução técnica para sua indústria?
                </h2>
                <p className="mt-4 text-base leading-relaxed text-fg-muted">
                  Fale com a Aliança e receba um atendimento técnico para inspeção,
                  manutenção ou adequação dos seus equipamentos.
                </p>
              </div>
              <a
                href="#contato"
                className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-md bg-brand px-7 py-4 text-sm font-semibold text-[#0b0f12] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_-10px_rgba(245,184,0,0.6)]"
              >
                Solicitar orçamento
                <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
