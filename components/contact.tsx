'use client'

import { useState, type FormEvent } from 'react'
import { CheckCircle2, Mail, MapPin, Phone, Send } from 'lucide-react'
import { Reveal } from '@/components/reveal'
import { SERVICE_OPTIONS } from '@/lib/site'

const CONTACT_DETAILS = [
  { icon: Phone, label: 'Telefone', value: '(34) 99269-1101' },
  { icon: Mail, label: 'E-mail', value: 'servicosaliancaa@gmail.com' },
  { icon: MapPin, label: 'Atendimento', value: 'Consulte disponibilidade na sua região' },
]

export function Contact() {
  const [sent, setSent] = useState(false)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const form = event.currentTarget
    const formData = new FormData(form)
    const name = String(formData.get('name') ?? '')
    const company = String(formData.get('company') ?? '')
    const email = String(formData.get('email') ?? '')
    const phone = String(formData.get('phone') ?? '')
    const service = String(formData.get('service') ?? '')
    const message = String(formData.get('message') ?? '')

    const whatsappText = encodeURIComponent(
      [
        'Olá! Gostaria de solicitar um orçamento.',
        '',
        `Nome: ${name}`,
        `Empresa: ${company || 'Não informado'}`,
        `E-mail: ${email}`,
        `Telefone: ${phone || 'Não informado'}`,
        `Serviço de interesse: ${service}`,
        '',
        'Mensagem:',
        message,
      ].join('\n'),
    )

    window.open(`https://wa.me/5534992691101?text=${whatsappText}`, '_blank', 'noopener,noreferrer')
    setSent(true)
  }

  return (
    <section id="contato" className="relative bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
          <Reveal>
            <p className="flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-brand-light">
              <span className="h-px w-8 bg-brand-light" aria-hidden />
              Contato
            </p>
            <h2 className="mt-6 font-display text-3xl font-bold leading-tight text-balance text-fg sm:text-4xl md:text-5xl">
              Solicite um orçamento
            </h2>
            <p className="mt-6 text-base leading-relaxed text-fg-muted">
              Preencha o formulário com os dados do seu equipamento ou necessidade. Nossa
              equipe técnica entrará em contato.
            </p>

            <ul className="mt-10 space-y-5">
              {CONTACT_DETAILS.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex size-11 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-brand-soft text-brand">
                    <item.icon className="size-5" />
                  </span>
                  <div>
                    <p className="text-xs font-medium uppercase tracking-[0.14em] text-fg-muted">
                      {item.label}
                    </p>
                    <p className="mt-1 text-sm font-medium text-fg">{item.value}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120}>
            <div className="rounded-2xl border border-white/10 bg-panel p-6 sm:p-9">
              {sent ? (
                <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                  <span className="flex size-16 items-center justify-center rounded-full border border-brand/30 bg-brand-soft text-brand">
                    <CheckCircle2 className="size-8" />
                  </span>
                  <h3 className="mt-6 font-display text-2xl font-bold text-fg">
                    Solicitação enviada
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-relaxed text-fg-muted">
                    Obrigado pelo seu contato. Nossa equipe técnica retornará com as
                    informações solicitadas.
                  </p>
                  <button
                    type="button"
                    onClick={() => setSent(false)}
                    className="mt-8 text-sm font-semibold text-brand-light underline-offset-4 hover:text-brand hover:underline"
                  >
                    Enviar nova solicitação
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="Nome" htmlFor="name">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        autoComplete="name"
                        className={fieldClass}
                        placeholder="Seu nome"
                      />
                    </Field>
                    <Field label="Empresa" htmlFor="company">
                      <input
                        id="company"
                        name="company"
                        type="text"
                        className={fieldClass}
                        placeholder="Nome da empresa"
                      />
                    </Field>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <Field label="E-mail" htmlFor="email">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        autoComplete="email"
                        className={fieldClass}
                        placeholder="seu-email@gmail.com"
                      />
                    </Field>
                    <Field label="Telefone" htmlFor="phone">
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        autoComplete="tel"
                        className={fieldClass}
                        placeholder="(00) 00000-0000"
                      />
                    </Field>
                  </div>

                  <Field label="Serviço de interesse" htmlFor="service">
                    <select id="service" name="service" required className={fieldClass} defaultValue="">
                      <option value="" disabled>
                        Selecione um serviço
                      </option>
                      {SERVICE_OPTIONS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Mensagem" htmlFor="message">
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      required
                      className={`${fieldClass} resize-none`}
                      placeholder="Descreva sua necessidade ou o equipamento"
                    />
                  </Field>

                  <button
                    type="submit"
                    className="group inline-flex w-full items-center justify-center gap-2 rounded-md bg-brand px-6 py-3.5 text-sm font-semibold text-[#0b0f12] transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-dark hover:shadow-[0_14px_36px_-10px_var(--color-brand-glow)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-light/70"
                  >
                    Enviar solicitação
                    <Send className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

const fieldClass =
  'w-full rounded-md border border-white/10 bg-ink px-4 py-3 text-sm text-fg outline-none transition-colors placeholder:text-fg-muted/60 focus:border-brand-light/70 focus:ring-2 focus:ring-brand/25'

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <label htmlFor={htmlFor} className="block">
      <span className="mb-2 block text-xs font-medium uppercase tracking-[0.14em] text-fg-muted">
        {label}
      </span>
      {children}
    </label>
  )
}
