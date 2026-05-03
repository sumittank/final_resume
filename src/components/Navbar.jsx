import { useState, useEffect } from 'react'

const NAV_ITEMS = ['home', 'about', 'experience', 'projects', 'skills', 'education', 'contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('home')
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)

      const sections = NAV_ITEMS.map(id => document.getElementById(id))
      const scrollPos = window.scrollY + 120
      for (let i = sections.length - 1; i >= 0; i--) {
        if (sections[i] && sections[i].offsetTop <= scrollPos) {
          setActive(NAV_ITEMS[i])
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goto = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMobileOpen(false)
  }

  return (
    <>
      <nav
        className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
        style={{
          background: scrolled ? 'rgba(0, 5, 8, 0.92)' : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0, 255, 209, 0.08)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <button onClick={() => goto('home')} className="group flex items-center gap-2">
            <div className="relative w-9 h-9 border border-neural/30 flex items-center justify-center"
              style={{ clipPath: 'polygon(8px 0%, 100% 0%, 100% calc(100% - 8px), calc(100% - 8px) 100%, 0% 100%, 0% 8px)' }}>
              <span className="font-display text-sm font-black text-neural">ST</span>
              <div className="absolute inset-0 bg-neural/5 group-hover:bg-neural/10 transition-all" />
            </div>
            <span className="font-mono text-xs text-white/40 group-hover:text-neural/60 transition-colors hidden sm:block">
              sumit.tank
            </span>
          </button>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((id, i) => (
              <button
                key={id}
                onClick={() => goto(id)}
                className="relative px-4 py-2 group"
              >
                <span className={`font-mono text-[10px] tracking-widest uppercase transition-colors ${
                  active === id ? 'text-neural' : 'text-white/35 group-hover:text-white/70'
                }`}>
                  <span className="text-neural/40 mr-1">{String(i).padStart(2,'0')}.</span>
                  {id}
                </span>
                {active === id && (
                  <span className="absolute bottom-0.5 left-4 right-4 h-px bg-neural/60" />
                )}
              </button>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-3">
            <a href="mailto:sumittank77756@gmail.com" className="btn-neural hidden sm:block">
              Hire Me
            </a>
            {/* Mobile toggle */}
            <button
              className="md:hidden flex flex-col gap-1.5 p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              <span className={`block h-px w-6 bg-neural transition-all ${mobileOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block h-px w-4 bg-neural/60 transition-all ${mobileOpen ? 'opacity-0' : ''}`} />
              <span className={`block h-px w-6 bg-neural transition-all ${mobileOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className="fixed inset-0 z-40 md:hidden transition-all duration-300"
        style={{
          opacity: mobileOpen ? 1 : 0,
          pointerEvents: mobileOpen ? 'all' : 'none',
          background: 'rgba(0, 5, 8, 0.97)',
          backdropFilter: 'blur(20px)',
        }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {NAV_ITEMS.map((id, i) => (
            <button key={id} onClick={() => goto(id)} className="group text-center">
              <div className="font-mono text-xs text-neural/40 mb-1">{String(i).padStart(2,'0')}</div>
              <div className="font-display text-3xl font-bold text-white/70 uppercase tracking-widest
                group-hover:text-neural transition-colors">
                {id}
              </div>
            </button>
          ))}
          <a href="mailto:sumittank77756@gmail.com" className="btn-neural mt-6">
            Hire Me
          </a>
        </div>
      </div>
    </>
  )
}
