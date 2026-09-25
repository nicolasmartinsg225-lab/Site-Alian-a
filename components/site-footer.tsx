import Image from 'next/image'
import { COMPANY, NAV_LINKS } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0b0f12]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 shrink-0 items-center justify-center overflow-hidden rounded-full border border-brand-dark/60 bg-brand-soft">
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
            </div>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-fg-muted">
              Soluções técnicas em inspeção, integridade, montagem, manutenção e adequação
              de equipamentos industriais.
            </p>
          </div>

          <nav aria-label="Navegação do rodapé">
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-fg">
              Navegação
            </h3>
            <ul className="mt-5 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-fg-muted transition-colors hover:text-brand-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-fg">
              Contato
            </h3>
            <ul className="mt-5 space-y-3 text-sm text-fg-muted">
              <li>
                <a
                  href="https://wa.me/5534992691101"
                  target="_blank"
                  rel="noreferrer"
                  className="transition-colors hover:text-brand-light"
                >
                  (34) 99269-1101
                </a>
              </li>
              <li>
                <a
                  href="https://wa.me/5534992691101?text=Ol%C3%A1%2C%20gostaria%20de%20solicitar%20um%20or%C3%A7amento."
                  target="_blank"
                  rel="noreferrer"
                  className="font-medium text-brand-light underline-offset-4 hover:text-brand hover:underline"
                >
                  Solicitar orçamento
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <p className="text-xs text-fg-muted">
            {'\u00A9'} {year} {COMPANY.fullName}. Todos os direitos reservados.
          </p>
          <p className="text-xs text-fg-muted">Engenharia e Manutenção Industrial</p>
        </div>
      </div>
    </footer>
  )
}
