import { useState, useEffect, useRef } from 'react'

const ROLES = [
  'Backend Developer',
  'Python Engineer',
  'Django Architect',
  'API Craftsman',
  'Full-Stack Builder',
]

function ParticleCanvas() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let W = canvas.width = window.innerWidth
    let H = canvas.height = window.innerHeight
    let raf

    const particles = Array.from({ length: 80 }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r: Math.random() * 1.5 + 0.3,
      alpha: Math.random() * 0.5 + 0.1,
    }))

    // Neural network lines
    const draw = () => {
      ctx.clearRect(0, 0, W, H)

      // Draw connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist < 120) {
            ctx.beginPath()
            ctx.strokeStyle = `rgba(0, 255, 209, ${(1 - dist / 120) * 0.08})`
            ctx.lineWidth = 0.5
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.stroke()
          }
        }
      }

      // Draw nodes
      particles.forEach(p => {
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(0, 255, 209, ${p.alpha})`
        ctx.fill()

        p.x += p.vx
        p.y += p.vy
        if (p.x < 0 || p.x > W) p.vx *= -1
        if (p.y < 0 || p.y > H) p.vy *= -1
      })

      raf = requestAnimationFrame(draw)
    }
    draw()

    const onResize = () => {
      W = canvas.width = window.innerWidth
      H = canvas.height = window.innerHeight
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', onResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ opacity: 0.6 }}
    />
  )
}

function TypewriterRole() {
  const [roleIdx, setRoleIdx] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [typing, setTyping] = useState(true)

  useEffect(() => {
    const target = ROLES[roleIdx]
    if (typing) {
      if (displayed.length < target.length) {
        const t = setTimeout(() => setDisplayed(target.slice(0, displayed.length + 1)), 70)
        return () => clearTimeout(t)
      } else {
        const t = setTimeout(() => setTyping(false), 2000)
        return () => clearTimeout(t)
      }
    } else {
      if (displayed.length > 0) {
        const t = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40)
        return () => clearTimeout(t)
      } else {
        setRoleIdx((roleIdx + 1) % ROLES.length)
        setTyping(true)
      }
    }
  }, [displayed, typing, roleIdx])

  return (
    <span className="text-neural font-mono text-lg md:text-2xl">
      {displayed}<span className="type-cursor" />
    </span>
  )
}

export default function Hero() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center grid-bg overflow-hidden"
    >
      <ParticleCanvas />

      {/* Ambient glow orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,255,209,0.04) 0%, transparent 70%)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(123,47,255,0.06) 0%, transparent 70%)' }} />

      {/* HUD frame corners */}
      <div className="absolute top-24 left-8 w-16 h-16 pointer-events-none opacity-30"
        style={{ borderTop: '1px solid #00FFD1', borderLeft: '1px solid #00FFD1' }} />
      <div className="absolute top-24 right-8 w-16 h-16 pointer-events-none opacity-30"
        style={{ borderTop: '1px solid #00FFD1', borderRight: '1px solid #00FFD1' }} />
      <div className="absolute bottom-16 left-8 w-16 h-16 pointer-events-none opacity-30"
        style={{ borderBottom: '1px solid #00FFD1', borderLeft: '1px solid #00FFD1' }} />
      <div className="absolute bottom-16 right-8 w-16 h-16 pointer-events-none opacity-30"
        style={{ borderBottom: '1px solid #00FFD1', borderRight: '1px solid #00FFD1' }} />

      {/* HUD top status */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 flex items-center gap-3">
        <div className="w-1.5 h-1.5 rounded-full bg-neural animate-pulse" />
        {/* <span className="font-mono text-[10px] text-white/30 tracking-widest uppercase">System Online · Neural Interface v2.0</span> */}
        <div className="w-1.5 h-1.5 rounded-full bg-neural animate-pulse" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-20 text-center">

        {/* ID tag */}
        <div
          className={`inline-flex items-center gap-2 mb-8 px-4 py-2 border border-neural/20 font-mono text-xs text-white/40 tracking-widest uppercase transition-all duration-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          <span className="w-1 h-1 rounded-full bg-neural" />
          Final-Year CS Undergraduate · Indore, M.P.
          <span className="w-1 h-1 rounded-full bg-neural" />
        </div>

        {/* Name */}
        <h1
          className={`font-display font-black mb-6 transition-all duration-1000 delay-200 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
          style={{
            fontSize: 'clamp(3.5rem, 10vw, 9rem)',
            lineHeight: 0.9,
            letterSpacing: '-0.04em',
          }}
        >
          <span
            style={{
              background: 'linear-gradient(135deg, #fff 0%, #00FFD1 50%, #7B2FFF 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
            }}
          >
            SUMIT
          </span>
          <span
            style={{
              background: 'linear-gradient(135deg, #7B2FFF 0%, #00FFD1 60%, #fff 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              display: 'block',
            }}
          >
            TANK
          </span>
        </h1>

        {/* Typewriter role */}
        <div
          className={`mb-6 h-10 flex items-center justify-center transition-all duration-1000 delay-400 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <TypewriterRole />
        </div>

        {/* Tagline */}
        <p
          className={`max-w-xl mx-auto text-white/40 text-base md:text-lg leading-relaxed mb-12 font-light transition-all duration-1000 delay-500 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          Building scalable APIs, containerized microservices,<br />
          and AI-powered applications in the void of tomorrow.
        </p>

        {/* CTAs */}
        <div
          className={`flex flex-wrap items-center justify-center gap-4 mb-16 transition-all duration-1000 delay-700 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <a href="mailto:sumittank77756@gmail.com" className="btn-neural">
            Initialize Contact
          </a>
          <button
            className="btn-plasma"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </button>
          <a
            href="https://github.com/sumittank"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-white/30 hover:text-white/60 transition-colors px-4 py-3 border border-white/8 hover:border-white/20"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/sumit-tank-7ba356289"
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-2 font-mono text-xs text-white/30 hover:text-white/60 transition-colors px-4 py-3 border border-white/8 hover:border-white/20"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
            LinkedIn
          </a>
        </div>

        {/* Stats bar */}
        <div
          className={`grid grid-cols-2 md:grid-cols-5 gap-3 max-w-3xl mx-auto transition-all duration-1000 delay-1000 ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          {[
            { value: '4mo+', label: 'Internship' },
            { value: '3+', label: 'Deployed Projects' },
            { value: 'AI', label: 'Artificial Intelligence' },
            { value: 'MERN+', label: 'Full Stack' },
            { value: 'Python', label: 'Backend Development' },
          ].map(({ value, label }) => (
            <div
              key={label}
              className="hud-corner px-4 py-4 text-center"
              style={{
                background: 'rgba(10, 22, 40, 0.4)',
                border: '1px solid rgba(0,255,209,0.08)',
              }}
            >
              <div className="stat-number text-2xl font-black mb-1">{value}</div>
              <div className="font-mono text-[9px] text-white/30 uppercase tracking-widest">{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
        <span className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-neural/40 to-transparent" />
      </div>
    </section>
  )
}
