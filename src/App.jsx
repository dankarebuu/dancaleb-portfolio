import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Skills from './sections/Skills'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0E11] text-[#F1F3F5] selection:bg-[#40C9BD]/20 selection:text-[#54D8CC]">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App