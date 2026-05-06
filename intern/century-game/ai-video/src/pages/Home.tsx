import Navbar from '@/components/Navbar'
import ScrollGuide from '@/components/ScrollGuide'
import SectionDivider from '@/components/SectionDivider'
import Hero from '@/sections/Hero'
import About from '@/sections/About'
import Skills from '@/sections/Skills'
import Portfolio from '@/sections/Portfolio'
import Projects from '@/sections/Projects'
import Experience from '@/sections/Experience'
import Contact from '@/sections/Contact'
import Footer from '@/sections/Footer'

export default function Home() {
  return (
    <>
      <Navbar />
      <ScrollGuide />
      <main>
        <Hero />
        <SectionDivider type="wave" />
        <About />
        <SectionDivider type="curve" flip />
        <Skills />
        <SectionDivider type="wave" />
        <Portfolio />
        <SectionDivider type="wave" />
        <Projects />
        <SectionDivider type="curve" flip />
        <Experience />
        <SectionDivider type="wave" />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
