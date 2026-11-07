import Navbar from './components/Navbar'
import Hero from './sections/Hero'

function App() {
  return (
    <div className="min-h-screen bg-[#0B0E11]">
      <Navbar />
      <main>
        <Hero />
      </main>
      <footer className="border-t border-[#27313A] px-6 py-6 text-center text-xs text-[#778391]">
        © 2026 Dan Caleb. Built with intention.
      </footer>
    </div>
  )
}

export default App