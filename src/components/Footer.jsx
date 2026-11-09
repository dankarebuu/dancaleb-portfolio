export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="border-t border-[#27313A] bg-[#0B0E11] py-12 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-mono text-[#778391]">
        {/* Identity & Legal */}
        <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-center sm:text-left">
          <span className="text-[#F1F3F5] font-semibold tracking-wider">
            DAN CALEB.
          </span>
          <span className="hidden sm:inline text-[#27313A]">|</span>
          <span>© 2026 Dan Caleb. Built with intention.</span>
        </div>

        {/* Social links + Stack colophon */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/dankarebuu"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1AAB5] hover:text-[#40C9BD] transition-colors"
              aria-label="GitHub profile"
            >
              GitHub
            </a>
            <span className="text-[#27313A]">|</span>
            <a
              href="mailto:dancaleb724@gmail.com"
              className="text-[#A1AAB5] hover:text-[#40C9BD] transition-colors"
              aria-label="Email Dan"
            >
              Email
            </a>
            <span className="text-[#27313A]">|</span>
            <a
              href="https://github.com/dankarebuu/dancaleb-portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A1AAB5] hover:text-[#40C9BD] transition-colors"
              aria-label="View portfolio source code"
            >
              Source
            </a>
          </div>
          <span className="text-[#A1AAB5]">Vite 8 · React 19 · Tailwind CSS v4</span>
        </div>

        {/* Return to Top */}
        <button
          onClick={scrollToTop}
          type="button"
          className="flex items-center gap-1.5 text-[#A1AAB5] hover:text-[#40C9BD] transition-colors cursor-pointer"
        >
          <span>Back to Top</span>
          <span aria-hidden="true" className="float">
            ↑
          </span>
        </button>
      </div>
    </footer>
  )
}