import Image from 'next/image'
import { Reveal } from '@/components/reveal'
import { Parallax } from '@/components/parallax'
import { CountUp } from '@/components/count-up'

const STATS = [
  { value: 'NR-13', label: 'Conformidade técnica' },
  { value: 'ART', label: 'Responsabilidade de engenharia' },
  { count: 360, suffix: 'º', label: 'Da montagem à manutenção' },
]

export function About() {
  return (
    <section id="empresa" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="order-2 lg:order-1">
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden />
              A Empresa
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance text-fg sm:text-4xl md:text-5xl">
              Engenharia que une conhecimento técnico e execução.
            </h2>
            <div className="mt-6 space-y-4 text-base leading-relaxed text-fg-muted">
              <p>
                A {''}
                <span className="font-medium text-fg">Aliança Montagem e Manutenção Industrial</span>{' '}
                atua com inspeção, avaliação e documentação técnica de equipamentos
                industriais, garantindo conformidade e segurança operacional.
              </p>
              <p>
                Da montagem à manutenção, incluindo reparos e adequações, cada etapa é
                conduzida com critério de engenharia e responsabilidade técnica — para que
                sua indústria opere com previsibilidade e confiança.
              </p>
            </div>

            <dl className="mt-10 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
              {STATS.map((stat, i) => (
                <Reveal as="div" key={stat.label} delay={i * 100}>
                  <dt className="font-display text-3xl font-bold text-brand sm:text-4xl">
                    {stat.value}
                  </dt>
                  <dd className="mt-1 text-xs leading-snug text-fg-muted sm:text-sm">
                    {stat.label}
                  </dd>
                </Reveal>
              ))}
            </dl>
          </Reveal>

          <Reveal className="order-1 lg:order-2" delay={120}>
            <div className="group relative aspect-4/5 overflow-hidden rounded-xl border border-white/10 sm:aspect-3/4 lg:aspect-4/5">
              <Image
                src="/images/about-inspection.png"
                alt="Engenheiro inspecionando um vaso de pressão em ambiente industrial"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.05]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f12]/60 via-transparent to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" aria-hidden />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
