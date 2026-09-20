import Image from 'next/image'
import { Reveal } from '@/components/reveal'

const POINTS = [
  { top: '18%', left: '20%', label: 'Inspeção de casco e tampos' },
  { top: '44%', left: '72%', label: 'Válvulas e dispositivos de segurança' },
  { top: '70%', left: '34%', label: 'Base, suportes e fundação' },
]

const TOPICS = [
  'Inspeções periódicas e extraordinárias',
  'Avaliação de integridade estrutural',
  'Documentação e prontuário técnico',
  'Adequação às exigências normativas',
]

export function NR13() {
  return (
    <section id="nr13" className="relative overflow-hidden bg-ink py-24 sm:py-32">
      <div
        className="pointer-events-none absolute -right-40 top-1/2 h-[520px] w-[520px] -translate-y-1/2 rounded-full bg-brand/5 blur-3xl"
        aria-hidden
      />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand">
              <span className="h-px w-8 bg-brand" aria-hidden />
              NR-13
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance text-fg sm:text-4xl md:text-5xl">
              NR-13: segurança e conformidade para equipamentos sob pressão
            </h2>
            <p className="mt-6 text-base leading-relaxed text-fg-muted">
              A Aliança atua com serviços relacionados à NR-13, incluindo inspeções,
              avaliações, documentação e demais serviços técnicos aplicáveis a caldeiras,
              vasos de pressão e equipamentos industriais.
            </p>

            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {TOPICS.map((topic, i) => (
                <Reveal as="li" key={topic} delay={i * 80}>
                  <div className="flex items-start gap-3 rounded-lg border border-white/8 bg-panel px-4 py-3.5">
                    <span className="mt-0.5 size-2 shrink-0 rounded-full bg-brand" aria-hidden />
                    <span className="text-sm leading-snug text-fg">{topic}</span>
                  </div>
                </Reveal>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative aspect-square overflow-hidden rounded-2xl border border-white/10 bg-panel">
              <Image
                src="/images/nr13-vessel.png"
                alt="Representação de um vaso de pressão industrial"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-[#0b0f12]/20" />

              {POINTS.map((point) => (
                <div
                  key={point.label}
                  className="group absolute -translate-x-1/2 -translate-y-1/2"
                  style={{ top: point.top, left: point.left }}
                >
                  <span className="relative flex size-4 items-center justify-center">
                    <span className="absolute inline-flex size-4 animate-ping rounded-full bg-brand/50" aria-hidden />
                    <span className="relative inline-flex size-2.5 rounded-full bg-brand ring-4 ring-brand/20" aria-hidden />
                  </span>
                  <span className="pointer-events-none absolute left-6 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md border border-white/10 bg-[#0b0f12]/90 px-3 py-1.5 text-xs font-medium text-fg opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
                    {point.label}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
