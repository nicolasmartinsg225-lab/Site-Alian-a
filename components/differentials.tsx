import { Reveal } from '@/components/reveal'
import { Icon, type IconName } from '@/components/icon'
import { DIFFERENTIALS } from '@/lib/site'

export function Differentials() {
  return (
    <section className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-light">
              <span className="h-px w-8 bg-brand-light" aria-hidden />
              Diferenciais
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance text-fg sm:text-4xl md:text-5xl">
              Por que escolher a Aliança
            </h2>
            <p className="mt-6 max-w-md text-base leading-relaxed text-fg-muted">
              Compromisso técnico em cada projeto, com foco em segurança, conformidade e
              continuidade operacional da sua indústria.
            </p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {DIFFERENTIALS.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 100}>
                <article className="group flex h-full flex-col rounded-xl border border-white/10 bg-panel p-7 transition-all duration-300 hover:-translate-y-1 hover:border-brand-light/60 hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
                  <span className="flex size-12 items-center justify-center rounded-lg border border-white/10 bg-brand-soft text-brand transition-colors duration-300 group-hover:border-brand-light/60">
                    <Icon name={item.icon as IconName} className="icon-pop size-6" />
                  </span>
                  <h3 className="mt-6 font-display text-lg font-semibold text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                    {item.description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
