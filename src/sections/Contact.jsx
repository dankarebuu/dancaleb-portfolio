import { useState } from 'react'

export default function Contact() {
  // Replace this with your preferred primary email address
  const CONTACT_EMAIL = 'dancaleb724@gmail.com'
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(CONTACT_EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  return (
    <section
      id="contact"
      className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#27313A]"
    >
      {/* Section Eyebrow */}
      <div className="space-y-3 mb-16">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-[#40C9BD]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#40C9BD]">
            04 / Contact
          </span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-[#F1F3F5] tracking-tight max-w-3xl">
          Let’s build something intentional together.
        </h2>
        <p className="text-base text-[#A1AAB5] max-w-2xl">
          Whether you have a freelance web project, want to discuss software engineering, or explore an internship collaboration, I am always open to connecting.
        </p>
      </div>

      {/* Main Grid: Direct Contact & Channels */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* Email Direct Action Card */}
        <div className="lg:col-span-7 border border-[#27313A] bg-[#11171D] rounded-xl p-8 md:p-10 flex flex-col justify-between space-y-8 hover:border-[#40C9BD]/40 transition-colors">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="font-mono text-xs uppercase tracking-widest text-[#778391]">
                Direct Communication
              </span>
              <span className="flex items-center gap-2 font-mono text-xs text-[#40C9BD]">
                <span className="w-2 h-2 rounded-full bg-[#40C9BD] animate-pulse" />
                Open to Opportunities
              </span>
            </div>

            <div className="pt-2">
              <div className="text-xs font-mono text-[#778391] uppercase tracking-wider mb-2">
                Drop me a message at
              </div>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-xl sm:text-2xl md:text-3xl font-mono font-bold text-[#F1F3F5] hover:text-[#40C9BD] transition-colors break-all"
              >
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 pt-4 border-t border-[#27313A]">
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="px-6 py-3 rounded-lg bg-[#40C9BD] text-[#0B0E11] font-semibold text-sm hover:bg-[#54D8CC] transition-colors"
            >
              Send an Email ↗
            </a>
            <button
              onClick={handleCopyEmail}
              type="button"
              className="px-6 py-3 rounded-lg border border-[#27313A] bg-[#171F27] text-[#F1F3F5] font-mono text-xs hover:border-[#40C9BD]/60 transition-colors cursor-pointer"
            >
              {copied ? '✓ Copied to Clipboard' : 'Copy Email Address'}
            </button>
          </div>
        </div>

        {/* Profiles & Technical Presence */}
        <div className="lg:col-span-5 border border-[#27313A] bg-[#11171D] rounded-xl p-8 md:p-10 flex flex-col justify-between space-y-6">
          <div>
            <div className="font-mono text-xs uppercase tracking-widest text-[#778391] border-b border-[#27313A] pb-4 mb-6">
              Verified Profiles
            </div>

            <div className="space-y-4">
              {/* GitHub */}
              <a
                href="https://github.com/dankarebuu"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-lg border border-[#27313A] bg-[#171F27]/40 hover:border-[#40C9BD]/50 hover:bg-[#171F27] transition-all"
              >
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-[#F1F3F5] group-hover:text-[#40C9BD] transition-colors">
                    GitHub
                  </div>
                  <div className="font-mono text-xs text-[#778391]">
                    @dankarebuu
                  </div>
                </div>
                <span className="text-[#778391] group-hover:text-[#40C9BD] transition-colors font-mono text-sm">
                  ↗
                </span>
              </a>

              {/* Portfolio Source Repository */}
              <a
                href="https://github.com/dankarebuu/dancaleb-portfolio"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between p-4 rounded-lg border border-[#27313A] bg-[#171F27]/40 hover:border-[#40C9BD]/50 hover:bg-[#171F27] transition-all"
              >
                <div className="space-y-1">
                  <div className="text-sm font-semibold text-[#F1F3F5] group-hover:text-[#40C9BD] transition-colors">
                    Portfolio Source
                  </div>
                  <div className="font-mono text-xs text-[#778391]">
                    Inspect Codebase
                  </div>
                </div>
                <span className="text-[#778391] group-hover:text-[#40C9BD] transition-colors font-mono text-sm">
                  ↗
                </span>
              </a>
            </div>
          </div>

          <div className="pt-4 border-t border-[#27313A] font-mono text-xs text-[#778391]">
            Response window: Typically within 24–48 hours
          </div>
        </div>
      </div>
    </section>
  )
}