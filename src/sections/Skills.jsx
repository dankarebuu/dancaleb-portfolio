import { skillCategories } from '../data/skills'
import Reveal from '../components/Reveal'

export default function Skills() {
  const getBadgeStyle = (status) => {
    switch (status) {
      case 'Core':
      case 'Active Stack':
        return 'bg-[#40C9BD]/10 text-[#40C9BD] border-[#40C9BD]/30'
      case 'Proficient':
        return 'bg-[#171F27] text-[#F1F3F5] border-[#27313A]'
      case 'Learning':
      case 'Long-term':
      default:
        return 'bg-[#11171D] text-[#778391] border-[#27313A]'
    }
  }

  return (
    <section
      id="skills"
      className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#27313A]"
    >
      {/* Section Header */}
      <Reveal>
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#40C9BD]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#40C9BD]">
              03 / Capabilities
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F3F5] tracking-tight">
            Tools, technologies, and current technical focus.
          </h2>
          <p className="text-base text-[#A1AAB5] max-w-2xl">
            An honest index of the technologies I use to build real-world applications, alongside concepts I am actively studying.
          </p>
        </div>
      </Reveal>

      {/* Categories Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((group, groupIdx) => (
          <Reveal key={groupIdx} delay={groupIdx * 120}>
            <div
              className="border border-[#27313A] bg-[#11171D] rounded-xl p-6 md:p-8 flex flex-col justify-between hover:border-[#40C9BD]/30 transition-colors"
            >
              <div>
                <div className="border-b border-[#27313A] pb-4 mb-6">
                  <h3 className="text-lg font-bold text-[#F1F3F5] tracking-tight">
                    {group.category}
                  </h3>
                  <p className="text-xs text-[#778391] mt-1.5 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                <div className="space-y-4">
                  {group.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="p-3.5 rounded-lg border border-[#27313A]/60 bg-[#171F27]/40 space-y-1.5"
                    >
                      <div className="flex items-center justify-between gap-2">
                        <span className="text-sm font-semibold text-[#F1F3F5]">
                          {skill.name}
                        </span>
                        <span
                          className={`text-[10px] font-mono uppercase px-2 py-0.5 rounded border ${getBadgeStyle(
                            skill.status
                          )}`}
                        >
                          {skill.status}
                        </span>
                      </div>
                      <p className="text-xs text-[#A1AAB5] leading-relaxed">
                        {skill.note}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-[#27313A]/50 flex items-center justify-between font-mono text-[11px] text-[#778391]">
                <span>TIER {String(groupIdx + 1).padStart(2, '0')}</span>
                <span>{group.skills.length} ITEMS</span>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}