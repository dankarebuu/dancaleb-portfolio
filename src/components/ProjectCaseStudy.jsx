import dashboardImg from '../assets/wingmacc/dashboard.png'

export default function ProjectCaseStudy({ project }) {
  return (
    <article className="border border-[#27313A] bg-[#11171D] rounded-xl overflow-hidden transition-colors hover:border-[#40C9BD]/40">
      {/* Top Header Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#27313A] px-6 py-4 bg-[#171F27]/50 font-mono text-xs">
        <div className="flex items-center gap-3">
          <span className="text-[#40C9BD] font-semibold">{project.index}</span>
          <span className="text-[#778391]">/</span>
          <span className="text-[#A1AAB5] tracking-wider uppercase">{project.category}</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-[#40C9BD] hover:text-[#54D8CC] transition-colors"
          >
            <span>Live System</span>
            <span aria-hidden="true">↗</span>
          </a>
          <span className="text-[#27313A]">|</span>
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#A1AAB5] hover:text-[#F1F3F5] transition-colors"
          >
            GitHub Repo ↗
          </a>
        </div>
      </div>

      <div className="p-6 md:p-8 lg:p-10 space-y-8">
        {/* Title & Narrative */}
        <div className="max-w-3xl space-y-3">
          <h3 className="text-2xl md:text-3xl font-bold text-[#F1F3F5] tracking-tight">
            {project.title}
          </h3>
          <p className="text-lg text-[#40C9BD] font-medium">
            {project.tagline}
          </p>
          <p className="text-[#A1AAB5] text-base leading-relaxed">
            {project.description}
          </p>
        </div>

        {/* System Dashboard Preview */}
        <div className="border border-[#27313A] rounded-lg overflow-hidden bg-[#0B0E11] shadow-2xl">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-[#27313A] bg-[#171F27]/80">
            <div className="flex gap-1.5">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <span className="text-xs font-mono text-[#778391] ml-2 truncate">
              {project.liveUrl.replace('https://', '')}
            </span>
          </div>
          <img
            src={dashboardImg}
            alt={`${project.title} dashboard view`}
            className="w-full h-auto object-cover"
            loading="lazy"
          />
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          {project.stats.map((stat, i) => (
            <div
              key={i}
              className="p-4 rounded-lg border border-[#27313A] bg-[#0B0E11]/60"
            >
              <div className="text-2xl font-bold font-mono text-[#40C9BD]">
                {stat.value}
              </div>
              <div className="text-xs uppercase font-mono tracking-wider text-[#778391] mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Core Capabilities */}
        <div className="space-y-4 pt-2">
          <h4 className="text-xs font-mono uppercase tracking-widest text-[#778391]">
            Verified Key Capabilities
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.highlights.map((item, i) => (
              <div
                key={i}
                className="p-5 rounded-lg border border-[#27313A] bg-[#171F27]/30 space-y-1.5"
              >
                <div className="text-[#F1F3F5] font-semibold text-sm">
                  {item.title}
                </div>
                <div className="text-[#A1AAB5] text-xs leading-relaxed">
                  {item.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tech Stack Pills */}
        <div className="pt-2 border-t border-[#27313A] flex flex-wrap items-center gap-2">
          <span className="text-xs font-mono text-[#778391] mr-2">Built With:</span>
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              className="px-3 py-1 rounded-full text-xs font-mono bg-[#171F27] text-[#40C9BD] border border-[#27313A]"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </article>
  )
}