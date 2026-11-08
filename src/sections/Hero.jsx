import HeroProjectPreview from '../components/HeroProjectPreview'
import Reveal from '../components/Reveal'

function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-[#0B0E11] px-6 pb-20 pt-32 lg:px-10"
    >
      {/* Subtle background grid */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #778391 1px, transparent 1px), linear-gradient(to bottom, #778391 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />

      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-16 lg:grid-cols-2 lg:gap-12">
        {/* Introduction */}
        <Reveal>
          <div>
            <p className="mb-6 text-xs font-medium tracking-[0.25em] text-[#40C9BD]">
              SOFTWARE DEVELOPER <span className="text-[#778391]">/</span> PORTFOLIO
            </p>

            <h1 className="max-w-2xl text-5xl font-display font-bold leading-[1.08] tracking-tight text-[#F1F3F5] sm:text-6xl lg:text-7xl">
              Building things that{' '}
              <span className="text-gradient-accent">make an impact.</span>
            </h1>

            <p className="mt-8 max-w-lg text-base leading-8 text-[#A1AAB5]">
              An aspiring developer focused on building useful digital
              experiences through code, creativity, and continuous learning.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="rounded-full bg-[#40C9BD] px-6 py-3 text-sm font-semibold text-[#0B0E11] transition-colors duration-200 hover:bg-[#54D8CC]"
              >
                Explore My Work <span aria-hidden="true">↗</span>
              </a>

              <a
                href="#about"
                className="rounded-full border border-[#27313A] px-6 py-3 text-sm text-[#F1F3F5] transition-colors duration-200 hover:border-[#40C9BD] hover:text-[#40C9BD]"
              >
                About Me
              </a>
            </div>

            <div className="mt-16 flex items-center gap-3 text-xs tracking-widest text-[#778391]">
              <span className="h-px w-10 bg-[#40C9BD]" />
              SCROLL TO EXPLORE
              <span aria-hidden="true">↓</span>
            </div>
          </div>
        </Reveal>

        {/* Featured project */}
        <Reveal delay={200}>
          <div className="w-full">
            <HeroProjectPreview />
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default Hero