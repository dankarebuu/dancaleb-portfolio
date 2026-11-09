import { useState } from 'react'
import { notesData } from '../data/notes'
import Reveal from '../components/Reveal'

export default function Notes() {
  const [selectedNote, setSelectedNote] = useState(null)

  return (
    <section
      id="writing"
      className="py-24 px-6 md:px-12 lg:px-20 max-w-7xl mx-auto border-t border-[#27313A]"
    >
      {/* Section Header */}
      <Reveal>
        <div className="space-y-3 mb-16">
          <div className="flex items-center gap-3">
            <span className="w-8 h-px bg-[#40C9BD]" />
            <span className="font-mono text-xs uppercase tracking-widest text-[#40C9BD]">
              04 / Engineering Notes
            </span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-[#F1F3F5] tracking-tight">
            Thoughts on code, architecture, and building systems.
          </h2>
          <p className="text-base text-[#A1AAB5] max-w-2xl">
            Short technical write-ups reflecting on lessons learned while building real-world web applications.
          </p>
        </div>
      </Reveal>

      {/* Notes Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {notesData.map((note, index) => (
          <Reveal key={note.id} delay={index * 120}>
            <article
              onClick={() => setSelectedNote(note)}
              className="card-lift group border border-[#27313A] bg-[#11171D] rounded-xl p-6 md:p-8 flex flex-col justify-between cursor-pointer hover:border-[#40C9BD]/40"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between font-mono text-xs text-[#778391]">
                  <span className="text-[#40C9BD] uppercase tracking-wider">
                    {note.category}
                  </span>
                  <span>{note.readTime}</span>
                </div>

                <h3 className="text-xl font-bold text-[#F1F3F5] group-hover:text-[#40C9BD] transition-colors">
                  {note.title}
                </h3>

                <p className="text-sm text-[#A1AAB5] leading-relaxed">
                  {note.excerpt}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-[#27313A] flex items-center justify-between font-mono text-xs text-[#778391]">
                <span>{note.date}</span>
                <span className="text-[#40C9BD] flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  Read Note →
                </span>
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      {/* Note Reader Modal */}
      {selectedNote && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto border border-[#27313A] bg-[#11171D] rounded-xl p-6 md:p-10 space-y-6 shadow-2xl">
            <div className="flex items-center justify-between border-b border-[#27313A] pb-4">
              <div className="font-mono text-xs text-[#40C9BD] uppercase tracking-wider">
                {selectedNote.category} · {selectedNote.readTime}
              </div>
              <button
                onClick={() => setSelectedNote(null)}
                className="text-xs font-mono text-[#778391] hover:text-[#F1F3F5] px-3 py-1.5 rounded-lg border border-[#27313A]"
              >
                Close [ESC]
              </button>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl md:text-3xl font-bold text-[#F1F3F5] tracking-tight">
                {selectedNote.title}
              </h3>
              <div className="font-mono text-xs text-[#778391]">
                Published {selectedNote.date} by Dan Caleb
              </div>
            </div>

            <div className="text-[#A1AAB5] text-base leading-relaxed space-y-4 whitespace-pre-line border-t border-[#27313A] pt-6">
              {selectedNote.content}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}