import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { Advantages } from '@/components/advantages'
import { Portfolio } from '@/components/portfolio'
import { Stats } from '@/components/stats'
import { Testimonials } from '@/components/testimonials'
import { Process } from '@/components/process'
import { Faq } from '@/components/faq'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Advantages />
        <Portfolio />
        <Stats />
        <Testimonials />
        <Process />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
