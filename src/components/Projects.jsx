import { useState, useRef } from 'react'
import useReveal from '../hooks/useReveal'

const PROJECTS = [
  {
    id: '001',
    title: 'AI-Enabled Fire Safety Compliance System',
    badge: 'National Hackathon',
    category: 'ML + MERN',
    desc: 'Real-time web application for fire departments to manage NOC processing and compliance tracking. Integrated a Linear Regression model for risk-based application prioritisation and automated document verification.',
    problem: 'Eliminated manual NOC review delays by automating risk prediction and document verification with an ML pipeline.',
    tech: ['MERN Stack', 'scikit-learn', 'Linear Regression', 'Python', 'Node.js'],
    link: 'https://fire-dept.netlify.app/',
    color: '#FF2D78',
    icon: '🔥',
    status: 'DEPLOYED',
  },
  {
    id: '002',
    title: 'E-Deewar — Student Marketplace',
    badge: '75-Day Build',
    category: 'Full Stack',
    desc: 'Full-stack marketplace enabling college students to buy, sell, and rent academic items. Implemented JWT-based authentication, product listing workflows, and a REST API backend from scratch.',
    problem: 'Reduced academic material waste on campus by creating a sustainable peer-to-peer reuse platform.',
    tech: ['MERN Stack', 'MongoDB', 'REST API', 'JWT Auth', 'Express.js'],
    link: null,
    color: '#7B2FFF',
    icon: '🏪',
    status: 'PRIVATE',
  },
  {
    id: '003',
    title: 'SQL Query Hub',
    badge: '45-Day Build · Live',
    category: 'Developer Tool',
    desc: 'Publicly deployed platform for students to write, execute, and share SQL queries in the browser. Handles live database connections via Node.js backend with Railway-hosted MySQL.',
    problem: 'Provided students and faculty a dedicated SQL practice tool to track and improve query performance in real time.',
    tech: ['React', 'Node.js', 'MySQL', 'Railway', 'Netlify', 'REST API'],
    link: 'https://run-sql-query-last.netlify.app',
    color: '#00FFD1',
    icon: '💾',
    status: 'LIVE',
  },
]

function ProjectCard({ project, index }) {
  const [hovered, setHovered] = useState(false)
  const ref = useRef(null)
  const visible = useReveal(ref)

  const colorRgb = {
    '#FF2D78': '255,45,120',
    '#7B2FFF': '123,47,255',
    '#00FFD1': '0,255,209',
  }[project.color] || '0,255,209'

  return (
    <div
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''} relative group`}
      style={{ transitionDelay: `${index * 0.15}s` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className="relative overflow-hidden h-full transition-all duration-500"
        style={{
          background: hovered
            ? `rgba(${colorRgb}, 0.04)`
            : 'rgba(10,22,40,0.4)',
          border: `1px solid rgba(${colorRgb}, ${hovered ? '0.25' : '0.1'})`,
          transform: hovered ? 'translateY(-8px)' : 'translateY(0)',
          boxShadow: hovered ? `0 30px 80px rgba(${colorRgb}, 0.08)` : 'none',
        }}
      >
        {/* Top colored bar */}
        <div className="h-px transition-all duration-500"
          style={{
            background: `linear-gradient(90deg, transparent, ${project.color}, transparent)`,
            opacity: hovered ? 0.8 : 0.2,
          }}
        />

        <div className="p-8">
          {/* Header row */}
          <div className="flex items-start justify-between mb-6">
            <div>
              <span className="font-mono text-[10px] tracking-widest"
                style={{ color: `rgba(${colorRgb}, 0.5)` }}>
                PROJECT_{project.id}
              </span>
              <div className="flex items-center gap-2 mt-2">
                <span className="font-mono text-[9px] font-bold tracking-wider px-2 py-0.5 rounded-sm"
                  style={{
                    background: `rgba(${colorRgb}, 0.1)`,
                    border: `1px solid rgba(${colorRgb}, 0.25)`,
                    color: project.color,
                  }}>
                  {project.status}
                </span>
                <span className="font-mono text-[9px] text-white/25 tracking-wider">{project.badge}</span>
              </div>
            </div>

            {/* Links */}
            <div className="flex items-center gap-2">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="w-8 h-8 flex items-center justify-center transition-all duration-200"
                  style={{
                    border: `1px solid rgba(${colorRgb}, 0.2)`,
                    color: project.color,
                  }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                    <polyline points="15,3 21,3 21,9"/>
                    <line x1="10" y1="14" x2="21" y2="3"/>
                  </svg>
                </a>
              )}
              <div className="text-2xl">{project.icon}</div>
            </div>
          </div>

          {/* Title */}
          <h3 className="font-display text-lg md:text-xl font-bold text-white/90 leading-snug mb-4">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-white/40 text-sm leading-6 mb-6">{project.desc}</p>

          {/* Problem solved */}
          <div
            className="px-4 py-3 mb-6 text-sm rounded-sm"
            style={{
              background: `rgba(${colorRgb}, 0.04)`,
              borderLeft: `2px solid rgba(${colorRgb}, 0.3)`,
            }}
          >
            <span className="font-mono text-[9px] font-bold tracking-widest mr-2"
              style={{ color: project.color }}>
              SOLVED:
            </span>
            <span className="text-white/40 text-xs leading-5">{project.problem}</span>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.tech.map(t => (
              <span
                key={t}
                className="font-mono text-[10px] px-2 py-1 rounded-sm transition-all duration-200"
                style={{
                  background: `rgba(${colorRgb}, ${hovered ? '0.06' : '0.03'})`,
                  border: `1px solid rgba(${colorRgb}, ${hovered ? '0.2' : '0.1'})`,
                  color: `rgba(${colorRgb}, ${hovered ? '0.8' : '0.5'})`,
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const visible = useReveal(ref)

  return (
    <section id="projects" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 20% 50%, rgba(123,47,255,0.025) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] text-neural/60 tracking-widest">03.</span>
            <div className="h-px flex-1 max-w-xs bg-neural/15" />
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <h2 className="font-display text-4xl md:text-6xl font-black text-white/90 uppercase tracking-tight">
              Featured<br />
              <span className="text-neural">Projects</span>
            </h2>
            <a
              href="https://github.com/sumittank"
              target="_blank"
              rel="noreferrer"
              className="font-mono text-xs text-white/25 hover:text-neural/60 transition-colors flex items-center gap-2"
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
              </svg>
              View all repos ↗
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
