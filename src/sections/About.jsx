export default function About() {
  const quickFacts = [
    {
      label: 'Current Status',
      value: 'Grade 12 ICT Student',
      detail: 'Specializing in web and software fundamentals',
    },
    {
      label: 'Core Focus',
      value: 'Frontend & Web Applications',
      detail: 'Building responsive, accessible user interfaces',
    },
    {
      label: 'Currently Exploring',
      value: 'Modern React & Component Systems',
      detail: 'React 19, Tailwind CSS v4, and state architectures',
    },
    {
      label: 'Long-Term Trajectory',
      value: 'Computer Science & AI Engineering',
      detail: 'Bridging practical software with intelligent systems',
    },
  ]

  return (
    <section
      id="about"
      className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#27313A]"
    >
      {/* Section Header */}
      <div className="space-y-3 mb-16">
        <div className="flex items-center gap-3">
          <span className="w-8 h-px bg-[#40C9BD]" />
          <span className="font-mono text-xs uppercase tracking-widest text-[#40C9BD]">
            02 / About Me
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-[#F1F3F5] tracking-tight">
          Curiosity-driven development with practical purpose.
        </h2>
      </div>

      {/* Editorial Grid: Narrative (Left) + Technical Facts (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
        {/* Left Column: Authentic Story & Philosophy */}
        <div className="lg:col-span-7 space-y-6 text-[#A1AAB5] text-base md:text-lg leading-relaxed">
          <p>
            I am a <span className="text-[#F1F3F5] font-medium">Grade 12 ICT student</span> and aspiring web developer focused on learning how digital tools are designed, structured, and deployed to solve real-world problems.
          </p>

          <p>
            My interest in development began with core web fundamentals—writing raw HTML, crafting layouts with CSS, and making interfaces dynamic with Vanilla JavaScript. Rather than getting lost in tutorials, I learn best by building actual tools that people can use. My church inventory system, <span className="text-[#40C9BD]">WINGMACC</span>, was born out of a practical necessity: streamlining the way our band tracks, audits, and maintains vital equipment.
          </p>

          <p>
            As I continue expanding my technical toolkit with modern libraries like React and Tailwind CSS, my priority remains clear: writing clean, maintainable code with intentional user experience. Looking forward, my goal is to pursue a formal degree in <span className="text-[#F1F3F5] font-medium">Computer Science</span> and ultimately venture into <span className="text-[#F1F3F5] font-medium">AI Engineering</span>.
          </p>

          <div className="pt-4 flex items-center gap-4 text-xs font-mono text-[#778391]">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-[#40C9BD]" />
              Open to collaborative projects & internships
            </span>
          </div>
        </div>

        {/* Right Column: Structured Context Card */}
        <div className="lg:col-span-5 border border-[#27313A] bg-[#11171D] rounded-xl p-6 md:p-8 space-y-6">
          <div className="flex items-center justify-between border-b border-[#27313A] pb-4">
            <span className="font-mono text-xs uppercase tracking-widest text-[#778391]">
              Developer Dossier
            </span>
            <span className="font-mono text-xs text-[#40C9BD]">Active Learner</span>
          </div>

          <div className="space-y-6">
            {quickFacts.map((fact, index) => (
              <div key={index} className="space-y-1">
                <div className="font-mono text-xs text-[#778391] uppercase tracking-wider">
                  {fact.label}
                </div>
                <div className="text-[#F1F3F5] font-medium text-sm md:text-base">
                  {fact.value}
                </div>
                <div className="text-[#A1AAB5] text-xs">
                  {fact.detail}
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-[#27313A] font-mono text-xs text-[#778391]">
            Based in the Philippines · Operating on UTC+8
          </div>
        </div>
      </div>
    </section>
  )
}