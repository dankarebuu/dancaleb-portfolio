import Navbar from './components/Navbar'
import Hero from './sections/Hero'
import Projects from './sections/Projects'
import About from './sections/About'
import Skills from './sections/Skills'
import Notes from './sections/Notes'
import Contact from './sections/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0E11] text-[#F1F3F5] selection:bg-[#40C9BD]/20 selection:text-[#54D8CC]">
      {/* Skip-to-content link for keyboard users */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-20 focus:left-4 focus:z-50 focus:rounded-lg focus:bg-[#40C9BD] focus:px-4 focus:py-2 focus:text-[#0B0E11] focus:font-semibold"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" tabIndex={-1}>
        <Hero />
        <Projects />
        <About />
        <Skills />
        <Notes />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App