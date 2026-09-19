import { Navbar } from '@/components/navbar'
import { Hero } from '@/components/hero'
import { Portfolio } from '@/components/portfolio'
import { Experience } from '@/components/experience'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Portfolio />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </>
  )
}