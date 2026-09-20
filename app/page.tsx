import { SiteHeader } from '@/components/site-header'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { NR13 } from '@/components/nr13'
import { Process } from '@/components/process'
import { Differentials } from '@/components/differentials'
import { CTA } from '@/components/cta'
import { Contact } from '@/components/contact'
import { SiteFooter } from '@/components/site-footer'

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main>
        <Hero />
        <About />
        <Services />
        <NR13 />
        <Process />
        <Differentials />
        <CTA />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
