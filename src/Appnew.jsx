import CustomCursor from './components/CustomCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import About from './components/About'
import Experience from './components/Experience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="scanline">
      <CustomCursor />
      <Navbar />

      <main>
        <Hero />
        <MarqueeTicker color="neural" />
        <About />
        <MarqueeTicker color="plasma" />
        <Experience />
        <Projects />
        <MarqueeTicker color="neural" />
        <Skills />
        <Education />
        <Contact />
      </main>
    </div>
  )
}
