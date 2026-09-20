import { COMPANY, NAV_LINKS } from '@/lib/site'

export function SiteFooter() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#0b0f12]">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8">
        <div className="grid gap-10 md:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-9 items-center justify-center rounded-md border border-brand/40 bg-brand-soft text-brand">
                <span className="font-display text-lg font-bold leading-none">A</span>
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
                    className="text-sm text-fg-muted transition-colors hover:text-brand"
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
              <li>(00) 00000-0000</li>
              <li>contato@alianca.com.br</li>
              <li>
                <a
                  href="#contato"
                  className="font-medium text-brand underline-offset-4 hover:underline"
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
