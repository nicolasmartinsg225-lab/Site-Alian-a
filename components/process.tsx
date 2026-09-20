import { Reveal } from '@/components/reveal'
import { PROCESS_STEPS } from '@/lib/site'

export function Process() {
  return (
    <section id="processo" className="relative bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
            <span className="h-px w-8 bg-brand" aria-hidden />
            Como trabalhamos
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance text-fg sm:text-4xl md:text-5xl">
            Um processo técnico, do diagnóstico à solução
          </h2>
        </Reveal>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-5 md:gap-6">
          <span
            className="absolute left-0 right-0 top-6 hidden h-px bg-gradient-to-r from-brand/10 via-brand/30 to-brand/10 md:block"
            aria-hidden
          />
          {PROCESS_STEPS.map((step, i) => (
            <Reveal as="li" key={step.number} delay={i * 110} className="relative">
              <div className="flex items-center gap-4 md:flex-col md:items-start">
                <span className="relative z-10 flex size-12 shrink-0 items-center justify-center rounded-full border border-brand/30 bg-ink font-display text-sm font-bold text-brand">
                  {step.number}
                </span>
                <h3 className="font-display text-lg font-semibold text-fg md:mt-5">
                  {step.title}
                </h3>
              </div>
              <p className="mt-3 pl-16 text-sm leading-relaxed text-fg-muted md:pl-0">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
