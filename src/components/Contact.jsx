import { useRef, useState } from 'react'
import useReveal from '../hooks/useReveal'

const CONTACTS = [
  {
    label: 'Email',
    value: 'sumittank77756@gmail.com',
    href: 'mailto:sumittank77756@gmail.com',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="4" width="20" height="16" rx="2"/>
        <path d="m22 7-10 7L2 7"/>
      </svg>
    ),
  },
  {
    label: 'Phone',
    value: '+91 7447077756',
    href: 'tel:+917447077756',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.96a16 16 0 0 0 6 6l.82-.82a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.6 16.92z"/>
      </svg>
    ),
  },
  {
    label: 'GitHub',
    value: 'github.com/sumittank',
    href: 'https://github.com/sumittank',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/sumit-tank',
    href: 'https://linkedin.com/in/sumit-tank-7ba356289',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: 'Portfolio',
    value: 'portfolio-web-app-sumit.netlify.app',
    href: 'https://portfolio-web-app-sumit.netlify.app',
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
      </svg>
    ),
  },
  {
    label: 'Location',
    value: 'Indore, Madhya Pradesh, India',
    href: null,
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
        <circle cx="12" cy="10" r="3"/>
      </svg>
    ),
  },
]

export default function Contact() {
  const ref = useRef(null)
  const visible = useReveal(ref)

  return (
    <section id="contact" className="relative py-32 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 0%, rgba(0,255,209,0.04) 0%, transparent 60%)' }} />

      {/* Top accent */}
      <div className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, rgba(0,255,209,0.2), transparent)' }} />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} text-center mb-20`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px flex-1 max-w-xs bg-neural/15" />
            <span className="font-mono text-[10px] text-neural/60 tracking-widest">06.</span>
            <div className="h-px flex-1 max-w-xs bg-neural/15" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white/90 uppercase tracking-tight mb-6">
            Initialize<br />
            <span className="text-neural">Contact</span>
          </h2>
          <p className="text-white/35 max-w-md mx-auto leading-7">
            Open to backend roles, internships, and collaborations.<br />
            Let's build something extraordinary together.
          </p>
        </div>

        {/* Big email CTA */}
        <div className={`reveal ${visible ? 'visible' : ''} mb-16 text-center`} style={{ transitionDelay: '0.2s' }}>
          <a
            href="mailto:sumittank77756@gmail.com"
            className="group inline-block"
          >
            <div
              className="px-8 md:px-16 py-8 md:py-10 transition-all duration-500 group-hover:scale-105"
              style={{
                background: 'rgba(10,22,40,0.5)',
                border: '1px solid rgba(0,255,209,0.15)',
              }}
            >
              <div className="font-mono text-[10px] text-white/20 mb-3 tracking-widest">SEND_MESSAGE</div>
              <div
                className="font-display text-2xl md:text-4xl font-black transition-all duration-300"
                style={{ color: '#00FFD1', textShadow: '0 0 30px rgba(0,255,209,0.3)' }}
              >
                sumittank77756@gmail.com
              </div>
              <div className="font-mono text-[10px] text-white/20 mt-3 tracking-widest group-hover:text-neural/50 transition-colors">
                click to open email client ↗
              </div>
            </div>
          </a>
        </div>

        {/* Contact grid */}
        <div className={`reveal ${visible ? 'visible' : ''} grid sm:grid-cols-2 lg:grid-cols-3 gap-4`}
          style={{ transitionDelay: '0.4s' }}>
          {CONTACTS.map(({ label, value, href, icon }) =>
            href ? (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
                className="flex items-center gap-4 p-5 transition-all duration-300 group rounded-sm"
                style={{
                  background: 'rgba(10,22,40,0.3)',
                  border: '1px solid rgba(0,255,209,0.08)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,255,209,0.25)'
                  e.currentTarget.style.background = 'rgba(0,255,209,0.04)'
                  e.currentTarget.style.transform = 'translateX(6px)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(0,255,209,0.08)'
                  e.currentTarget.style.background = 'rgba(10,22,40,0.3)'
                  e.currentTarget.style.transform = 'translateX(0)'
                }}
              >
                <div className="text-neural/50 flex-shrink-0 group-hover:text-neural transition-colors">
                  {icon}
                </div>
                <div className="min-w-0">
                  <div className="font-mono text-[9px] text-white/20 mb-0.5 tracking-widest">{label}</div>
                  <div className="font-mono text-xs text-white/50 group-hover:text-white/80 transition-colors truncate">
                    {value}
                  </div>
                </div>
              </a>
            ) : (
              <div
                key={label}
                className="flex items-center gap-4 p-5 rounded-sm"
                style={{
                  background: 'rgba(10,22,40,0.3)',
                  border: '1px solid rgba(255,255,255,0.05)',
                }}
              >
                <div className="text-white/20 flex-shrink-0">{icon}</div>
                <div>
                  <div className="font-mono text-[9px] text-white/20 mb-0.5 tracking-widest">{label}</div>
                  <div className="font-mono text-xs text-white/40">{value}</div>
                </div>
              </div>
            )
          )}
        </div>

        {/* Footer */}
        <div className={`reveal ${visible ? 'visible' : ''} mt-20 pt-8 text-center`}
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)', transitionDelay: '0.6s' }}>
          <div className="flex items-center justify-center gap-3 mb-3">
            <div className="font-display text-lg font-black text-white/20 tracking-widest uppercase">
              ST
            </div>
            <div className="w-px h-4 bg-white/10" />
            <div className="font-mono text-[10px] text-white/20 tracking-widest">
              Sumit Tank · Backend Developer · 2026
            </div>
          </div>
          <p className="font-mono text-[15px] text-white/20">
            Crafted & Design By
            <p className="font-mono text-[35px] text-white/45">THINK 💖 TANK</p>
          </p>
        </div>
      </div>
    </section>
  )
}
