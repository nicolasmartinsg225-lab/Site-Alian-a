import { Reveal } from '@/components/reveal'
import { Icon, type IconName } from '@/components/icon'
import { SERVICES } from '@/lib/site'

export function Services() {
  return (
    <section id="servicos" className="relative bg-panel py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <Reveal className="max-w-2xl">
          <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-light">
            <span className="h-px w-8 bg-brand-light" aria-hidden />
            Serviços
          </p>
          <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance text-fg sm:text-4xl md:text-5xl">
            Soluções para diferentes necessidades industriais
          </h2>
        </Reveal>

        <ul className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service, i) => (
            <Reveal as="li" key={service.title} delay={(i % 3) * 90}>
              <article className="group relative flex h-full flex-col overflow-hidden rounded-xl border border-white/10 bg-ink/60 p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand-light/60 hover:bg-ink hover:shadow-[0_24px_60px_-24px_rgba(0,0,0,0.7)]">
                <span
                  className="absolute inset-x-0 top-0 h-px scale-x-0 bg-gradient-to-r from-transparent via-brand-light to-transparent transition-transform duration-500 group-hover:scale-x-100"
                  aria-hidden
                />
                <span
                  className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-brand/10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
                  aria-hidden
                />
                <span className="flex size-12 items-center justify-center rounded-lg border border-white/10 bg-brand-soft text-brand transition-colors duration-300 group-hover:border-brand-light/60">
                  <Icon name={service.icon as IconName} className="icon-pop size-6" />
                </span>
                <h3 className="mt-6 font-display text-lg font-semibold text-fg">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">
                  {service.description}
                </p>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
