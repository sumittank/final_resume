import { useRef } from 'react'
import useReveal from '../hooks/useReveal'

export default function Experience() {
  const ref = useRef(null)
  const visible = useReveal(ref)

  return (
    <section id="experience" className="relative py-32 overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 50%, rgba(0,255,209,0.025) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-6">

        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] text-neural/60 tracking-widest">02.</span>
            <div className="h-px flex-1 max-w-xs bg-neural/15" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white/90 uppercase tracking-tight">
            Work<br />
            <span className="text-neural">Experience</span>
          </h2>
        </div>

        {/* Experience card */}
        <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.3s' }}>
          <div
            className="relative overflow-hidden rounded-sm"
            style={{
              background: 'rgba(10,22,40,0.5)',
              border: '1px solid rgba(0,255,209,0.12)',
            }}
          >
            {/* Top accent line */}
            <div className="h-px w-full"
              style={{ background: 'linear-gradient(90deg, transparent, #00FFD1, transparent)' }} />

            {/* Inner glow */}
            <div className="absolute top-0 left-0 right-0 h-40 pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,209,0.04), transparent)' }} />

            <div className="p-8 md:p-12">
              {/* Company header */}
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 mb-10">
                <div>
                  <div className="font-mono text-[10px] text-white/25 tracking-widest mb-3">
                    EMPLOYMENT RECORD
                  </div>
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-white mb-2">
                    Software Developer Intern
                  </h3>
                  <div className="flex items-center gap-3">
                    <span className="text-neural font-mono text-sm font-medium">Digivalet</span>
                    <span className="w-1 h-1 rounded-full bg-white/20" />
                    <span className="text-white/40 text-sm">Indore, M.P.</span>
                  </div>
                </div>

                <div className="flex flex-col gap-2">
                  <div
                    className="px-4 py-2 font-mono text-xs text-neural/80 tracking-wider"
                    style={{ border: '1px solid rgba(0,255,209,0.2)', background: 'rgba(0,255,209,0.04)' }}
                  >
                    Jan 2026 – Present
                  </div>
                  <div className="flex items-center gap-2 justify-end">
                    <div className="w-1.5 h-1.5 rounded-full bg-neural animate-pulse" />
                    <span className="font-mono text-[10px] text-neural/60">Active</span>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="neural-divider mb-10" />

              {/* Projects at internship */}
              <div className="grid md:grid-cols-2 gap-6 mb-10">
                {[
                  {
                    id: '01',
                    title: 'Voice-Meeter Module',
                    description: 'Built using async WebSocket connections to handle real-time Mute/Unmute events on iPad hotel clients with minimal latency.',
                    impact: 'Real-time event handling with sub-50ms latency',
                    color: '#00FFD1',
                  },
                  {
                    id: '02',
                    title: 'Django Web App (DVC)',
                    description: 'Extended and managed the hotel room automation backend — handled feature additions, business logic, and bug fixes across the codebase.',
                    impact: 'Full feature delivery for hotel automation',
                    color: '#7B2FFF',
                  },
                ].map(({ id, title, description, impact, color }) => (
                  <div
                    key={id}
                    className="relative p-6 rounded-sm glass-panel-hover"
                    style={{
                      background: 'rgba(5,12,25,0.6)',
                      border: `1px solid rgba(${color === '#00FFD1' ? '0,255,209' : '123,47,255'},0.12)`,
                      borderLeft: `2px solid ${color}30`,
                    }}
                  >
                    <div className="font-mono text-[10px] mb-4" style={{ color: color + '50' }}>
                      PROJECT_{id}
                    </div>
                    <h4 className="font-display text-base font-bold text-white mb-3">{title}</h4>
                    <p className="text-white/40 text-sm leading-6 mb-4">{description}</p>
                    <div className="flex items-center gap-2 pt-3"
                      style={{ borderTop: `1px solid ${color}15` }}>
                      <span className="font-mono text-[9px]" style={{ color: color + '60' }}>IMPACT:</span>
                      <span className="font-mono text-[10px] text-white/50">{impact}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Tech stack */}
              <div>
                <div className="font-mono text-[10px] text-white/20 tracking-widest mb-3">TECH STACK</div>
                <div className="flex flex-wrap gap-2">
                  {['Python', 'Django', 'WebSockets', 'Linux', 'SSH', 'REST APIs', 'Docker'].map(t => (
                    <span key={t} className="tech-tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Coming soon placeholder */}
        <div className={`reveal ${visible ? 'visible' : ''} mt-6`} style={{ transitionDelay: '0.5s' }}>
          <div
            className="p-6 rounded-sm flex items-center justify-between"
            style={{ border: '1px dashed rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.01)' }}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 border border-white/10 flex items-center justify-center">
                <span className="text-white/15 text-xs">+</span>
              </div>
              <span className="font-mono text-xs text-white/20">More experiences being added...</span>
            </div>
            <div className="font-mono text-[10px] text-white/15 tracking-widest">LOADING_NEXT</div>
          </div>
        </div>
      </div>
    </section>
  )
}
