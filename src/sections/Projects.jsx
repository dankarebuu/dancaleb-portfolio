import { projectsData } from '../data/projects'
import ProjectCaseStudy from '../components/ProjectCaseStudy'
import Reveal from '../components/Reveal'

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto">
      {/* Section Header */}
      <Reveal>
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#40C9BD]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#40C9BD]">
              Selected Works
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F3F5] tracking-tight">
            Practical systems built for real operations.
          </h2>
          <p className="text-base text-[#A1AAB5] max-w-2xl">
            Genuine projects built from the ground up, emphasizing practical problem-solving, reliable architectures, and clean execution.
          </p>
        </div>
      </Reveal>

      {/* Projects List */}
      <div className="space-y-12">
        {projectsData.map((project, i) => (
          <Reveal key={project.id} delay={i * 120}>
            <ProjectCaseStudy project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  )
}