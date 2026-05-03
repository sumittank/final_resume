const ITEMS = [
  'Python Developer',
  '★',
  'Django Backend',
  '★',
  'REST API Architect',
  '★',
  'Docker Containerization',
  '★',
  'MERN Stack',
  '★',
  'ML Integration',
  '★',
  'Open to Work',
  '★',
  'Available for Hire',
  '★',
]

export default function MarqueeTicker({ color = 'neural' }) {
  const colors = {
    neural: { text: '#00FFD1', border: 'rgba(0,255,209,0.12)', bg: 'rgba(0,255,209,0.02)' },
    plasma: { text: '#7B2FFF', border: 'rgba(123,47,255,0.15)', bg: 'rgba(123,47,255,0.02)' },
  }
  const c = colors[color] || colors.neural

  const doubled = [...ITEMS, ...ITEMS]

  return (
    <div
      className="relative overflow-hidden py-4"
      style={{
        borderTop: `1px solid ${c.border}`,
        borderBottom: `1px solid ${c.border}`,
        background: c.bg,
      }}
    >
      <div
        className="flex gap-10 whitespace-nowrap"
        style={{
          animation: 'marquee 30s linear infinite',
        }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="font-mono text-xs tracking-widest uppercase flex-shrink-0"
            style={{ color: item === '★' ? c.text : 'rgba(255,255,255,0.25)' }}
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
      `}</style>
    </div>
  )
}
