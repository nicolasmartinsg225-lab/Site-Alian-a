import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://alianca-industrial.vercel.app'),
  title: {
    default: 'Aliança | Montagem e Manutenção Industrial',
    template: '%s | Aliança Industrial',
  },
  description:
    'Engenharia e manutenção industrial: inspeção, integridade, montagem, manutenção e adequação de equipamentos industriais com responsabilidade técnica. Especialistas em NR-13.',
  keywords: [
    'NR-13',
    'manutenção industrial',
    'inspeção de equipamentos',
    'vasos de pressão',
    'caldeiras',
    'teste hidrostático',
    'PMTA',
    'responsabilidade técnica',
    'engenharia mecânica',
  ],
  generator: 'v0.app',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    title: 'Aliança | Montagem e Manutenção Industrial',
    description:
      'Segurança e precisão para a operação da sua indústria. Inspeção, integridade, montagem, manutenção e adequação de equipamentos industriais.',
    siteName: 'Aliança Montagem e Manutenção Industrial',
  },
  icons: {
    icon: [
      { url: '/images/logo%20site.jpeg', type: 'image/jpeg', sizes: '16x16' },
      { url: '/images/logo%20site.jpeg', type: 'image/jpeg', sizes: '32x32' },
    ],
    apple: [{ url: '/images/logo%20site.jpeg', type: 'image/jpeg', sizes: '180x180' }],
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0f12',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${spaceGrotesk.variable}`}>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
