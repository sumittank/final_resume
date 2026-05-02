import { useRef } from 'react'
import useReveal from '../hooks/useReveal'

const SKILLS = [
  {
    category: 'Backend',
    color: '#00FFD1',
    icon: '⬡',
    items: [
      { name: 'Python', level: 90 },
      { name: 'Django', level: 85 },
      { name: 'REST APIs', level: 88 },
      { name: 'OOP', level: 82 },
      { name: 'WebSockets', level: 75 },
    ],
  },
  {
    category: 'Database',
    color: '#7B2FFF',
    icon: '◈',
    items: [
      { name: 'MySQL', level: 80 },
      { name: 'MongoDB', level: 78 },
      { name: 'DBMS Concepts', level: 82 },
    ],
  },
  {
    category: 'DevOps & Tools',
    color: '#FF2D78',
    icon: '◬',
    items: [
      { name: 'Docker', level: 70 },
      { name: 'Linux', level: 75 },
      { name: 'Git', level: 85 },
      { name: 'SSH', level: 72 },
    ],
  },
  {
    category: 'Frontend',
    color: '#F59E0B',
    icon: '◇',
    items: [
      { name: 'React', level: 80 },
      { name: 'JavaScript', level: 78 },
      { name: 'Node.js', level: 76 },
      { name: 'Express.js', level: 75 },
    ],
  },
  {
    category: 'ML / AI',
    color: '#06B6D4',
    icon: '⬟',
    items: [
      { name: 'scikit-learn', level: 65 },
      { name: 'NumPy', level: 70 },
      { name: 'Pandas', level: 68 },
      { name: 'TensorFlow', level: 55 },
    ],
  },
]

function SkillBar({ name, level, color, delay }) {
  const ref = useRef(null)
  const visible = useReveal(ref)

  return (
    <div ref={ref} className="mb-4 last:mb-0">
      <div className="flex items-center justify-between mb-1.5">
        <span className="font-mono text-xs text-white/50">{name}</span>
        <span className="font-mono text-[10px]" style={{ color: color + '80' }}>{level}%</span>
      </div>
      <div className="h-px w-full" style={{ background: 'rgba(255,255,255,0.06)' }}>
        <div
          className="h-px transition-all duration-1000 ease-out"
          style={{
            width: visible ? `${level}%` : '0%',
            background: `linear-gradient(90deg, ${color}80, ${color})`,
            transitionDelay: `${delay}s`,
            boxShadow: visible ? `0 0 8px ${color}40` : 'none',
          }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const visible = useReveal(ref)

  return (
    <section id="skills" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 100%, rgba(0,255,209,0.02) 0%, transparent 60%)' }} />

      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] text-neural/60 tracking-widest">04.</span>
            <div className="h-px flex-1 max-w-xs bg-neural/15" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white/90 uppercase tracking-tight">
            Skills &<br />
            <span className="text-neural">Technologies</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {SKILLS.map((cat, i) => {
            const ref2 = useRef(null)
            const vis2 = useReveal(ref2)
            return (
              <div
                key={cat.category}
                ref={ref2}
                className={`reveal ${vis2 ? 'visible' : ''} glass-panel glass-panel-hover p-6 rounded-sm`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                {/* Category header */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-6 h-6 flex items-center justify-center font-mono text-base"
                    style={{ color: cat.color }}>
                    {cat.icon}
                  </div>
                  <div>
                    <h3 className="font-display text-sm font-bold text-white uppercase tracking-wider">
                      {cat.category}
                    </h3>
                  </div>
                  <div className="ml-auto w-8 h-px" style={{ background: cat.color + '40' }} />
                </div>

                {/* Skill bars */}
                {cat.items.map((item, j) => (
                  <SkillBar
                    key={item.name}
                    name={item.name}
                    level={item.level}
                    color={cat.color}
                    delay={j * 0.1}
                  />
                ))}
              </div>
            )
          })}

          {/* Currently learning card */}
          <div className={`reveal ${visible ? 'visible' : ''} p-6 rounded-sm`}
            style={{
              border: '1px dashed rgba(0,255,209,0.1)',
              background: 'rgba(5,10,20,0.3)',
              transitionDelay: '0.5s',
            }}>
            <div className="font-mono text-[10px] text-white/20 tracking-widest mb-4">LEARNING_NOW</div>
            <h3 className="font-display text-sm font-bold text-white/40 uppercase tracking-wider mb-6">
              Expanding Stack
            </h3>
            {['FastAPI', 'Kubernetes', 'Redis', 'GraphQL', 'LangChain'].map((item, j) => (
              <div key={item} className="flex items-center gap-3 mb-3">
                <div className="w-1.5 h-1.5 rounded-full animate-pulse"
                  style={{ background: '#00FFD1', animationDelay: `${j * 0.3}s` }} />
                <span className="font-mono text-xs text-white/30">{item}</span>
                <span className="ml-auto font-mono text-[9px] text-white/15">in progress</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
