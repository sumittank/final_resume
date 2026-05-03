import { useRef } from 'react'
import useReveal from '../hooks/useReveal'

export default function Education() {
  const ref = useRef(null)
  const visible = useReveal(ref)

  const education = [
    {
      degree: 'B.Tech — Computer Science',
      school: 'Acropolis Institute of Technology & Research, Indore (RGPV)',
      year: '2022 – 2026',
      grade: '8.00 CGPA',
      status: 'Ongoing',
      color: '#00FFD1',
    },
    {
      degree: 'Higher Secondary (PCM)',
      school: 'CBSE Board',
      year: '2021 – 2022',
      grade: '89.40%',
      status: 'Completed',
      color: '#7B2FFF',
    },
    {
      degree: 'Secondary School',
      school: 'CBSE Board',
      year: '2019 – 2020',
      grade: '89.20%',
      status: 'Completed',
      color: '#7B2FFF',
    },
  ]

  const achievements = [
    {
      title: 'NPTEL — Python Programming',
      sub: 'Score: 76%',
      icon: '◆',
      color: '#F59E0B',
    },
    {
      title: 'CISCO — Intro to Data Science',
      sub: 'Certified',
      icon: '◆',
      color: '#F59E0B',
    },
    {
      title: 'National Hackathon Participant',
      sub: 'Multiple editions',
      icon: '◈',
      color: '#7B2FFF',
    },
    {
      title: 'SQL Query Hub — Live Platform',
      sub: 'Built & deployed for students',
      icon: '◈',
      color: '#7B2FFF',
    },
  ]

  return (
    <section id="education" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 80% 80%, rgba(123,47,255,0.025) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] text-neural/60 tracking-widest">05.</span>
            <div className="h-px flex-1 max-w-xs bg-neural/15" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white/90 uppercase tracking-tight">
            Education &<br />
            <span className="text-neural">Achievements</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Education timeline — 3 cols */}
          <div className="lg:col-span-3">
            <div className="font-mono text-[10px] text-white/20 tracking-widest mb-6">ACADEMIC_RECORD</div>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-5 top-0 bottom-0 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(0,255,209,0.3), rgba(0,255,209,0.05))' }} />

              {education.map((e, i) => {
                const ref2 = useRef(null)
                const vis2 = useReveal(ref2)
                return (
                  <div
                    key={i}
                    ref={ref2}
                    className={`reveal ${vis2 ? 'visible' : ''} relative flex gap-6 mb-8 last:mb-0`}
                    style={{ transitionDelay: `${i * 0.15}s` }}
                  >
                    {/* Dot */}
                    <div className="relative z-10 flex-shrink-0 w-10 h-10 flex items-center justify-center"
                      style={{
                        background: 'rgba(5,10,20,0.9)',
                        border: `1px solid ${e.color}40`,
                      }}>
                      <div className="w-2 h-2 rounded-full" style={{ background: e.color, boxShadow: `0 0 8px ${e.color}` }} />
                    </div>

                    {/* Content */}
                    <div
                      className="flex-1 p-6 glass-panel glass-panel-hover rounded-sm"
                    >
                      <div className="flex flex-col md:flex-row md:items-start justify-between gap-3 mb-2">
                        <div>
                          <h3 className="font-display text-base font-bold text-white/90 mb-1">{e.degree}</h3>
                          <p className="text-white/35 text-sm">{e.school}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="font-mono text-[10px] text-white/25 mb-1">{e.year}</div>
                          <div className="font-display text-base font-bold" style={{ color: e.color }}>{e.grade}</div>
                        </div>
                      </div>
                      <div className="mt-3">
                        <span
                          className="font-mono text-[9px] px-2 py-0.5"
                          style={{
                            background: `${e.color}10`,
                            border: `1px solid ${e.color}25`,
                            color: e.color + '80',
                          }}
                        >
                          {e.status}
                        </span>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Certs + Achievements — 2 cols */}
          <div className="lg:col-span-2">
            <div className="font-mono text-[10px] text-white/20 tracking-widest mb-6">CERTIFICATIONS_&_WINS</div>
            <div className="flex flex-col gap-4">
              {achievements.map((a, i) => {
                const ref3 = useRef(null)
                const vis3 = useReveal(ref3)
                return (
                  <div
                    key={i}
                    ref={ref3}
                    className={`reveal ${vis3 ? 'visible' : ''} glass-panel glass-panel-hover p-5 rounded-sm flex items-start gap-4`}
                    style={{ transitionDelay: `${i * 0.1}s` }}
                  >
                    <span className="text-xl flex-shrink-0" style={{ color: a.color }}>{a.icon}</span>
                    <div>
                      <div className="text-white/70 text-sm font-medium mb-1">{a.title}</div>
                      <div className="font-mono text-[10px] text-white/25">{a.sub}</div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
