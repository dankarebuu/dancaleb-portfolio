import { useState } from 'react'

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'Projects', href: '#projects' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#0B0E11]/85 backdrop-blur-lg">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#home"
          onClick={() => setMenuOpen(false)}
          className="text-lg font-bold tracking-tight text-[#F1F3F5]"
        >
          DAN CALEB<span className="text-[#40C9BD]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm text-[#A1AAB5] transition-colors hover:text-[#40C9BD]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="rounded-full border border-[#40C9BD]/40 px-5 py-2 text-sm text-[#40C9BD] transition-colors hover:bg-[#40C9BD] hover:text-[#0B0E11]"
          >
            Let's Talk <span aria-hidden="true">↗</span>
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
            aria-expanded={menuOpen}
            className="rounded-lg border border-[#27313A] px-3 py-2 text-sm text-[#F1F3F5] md:hidden"
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>

        {menuOpen && (
          <div className="absolute left-0 right-0 top-full border-b border-[#27313A] bg-[#11171D] p-5 md:hidden">
            <div className="flex flex-col gap-5">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="text-sm text-[#A1AAB5] transition-colors hover:text-[#40C9BD]"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Navbar