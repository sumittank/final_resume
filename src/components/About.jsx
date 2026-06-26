// import { useRef } from 'react'
// import useReveal from '../hooks/useReveal'

// export default function About() {
//   const ref = useRef(null)
//   const visible = useReveal(ref)

//   return (
//     <section id="about" className="relative py-32 overflow-hidden">
//       <div className="max-w-6xl mx-auto px-6">

//         {/* Section header */}
//         <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16`}>
//           <div className="flex items-center gap-4 mb-4">
//             <span className="font-mono text-[10px] text-neural/60 tracking-widest">01.</span>
//             <div className="h-px flex-1 max-w-xs bg-neural/15" />
//           </div>
//           <h2 className="font-display text-4xl md:text-6xl font-black text-white/90 uppercase tracking-tight">
//             About<br />
//             <span className="text-neural">Me</span>
//           </h2>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-12 items-start">
//           {/* Photo placeholder + decoration */}
//           <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
//             <div className="relative">
//               {/* Photo frame */}
//               <div
//                 className="relative mx-auto lg:mx-0 w-72 h-80 md:w-80 md:h-96"
//                 style={{
//                   clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)',
//                 }}
//               >
//                 {/* Placeholder */}
//                 <div className="w-full h-full grid-bg flex flex-col items-center justify-center"
//                   style={{
//                     background: 'linear-gradient(135deg, rgba(10,22,40,0.9) 0%, rgba(0,255,209,0.03) 100%)',
//                     border: '1px solid rgba(0,255,209,0.15)',
//                   }}
//                 >
//                   {/* Avatar placeholder */}
//                   <div className="w-28 h-28 rounded-full border-2 border-neural/30 flex items-center justify-center mb-4"
//                     style={{ background: 'rgba(0,255,209,0.04)' }}>
//                     <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="rgba(0,255,209,0.4)" strokeWidth="1">
//                       <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
//                       <circle cx="12" cy="7" r="4"/>
//                     </svg>
//                   </div>
//                   <p className="font-mono text-[10px] text-white/20 tracking-widest">[ PLACE YOUR PHOTO ]</p>
//                   <p className="font-mono text-[9px] text-white/15 mt-1">Replace src/assets/photo.jpg</p>
//                 </div>

//                 {/* Glow edge */}
//                 <div className="absolute inset-0 pointer-events-none"
//                   style={{
//                     background: 'linear-gradient(135deg, rgba(0,255,209,0.06) 0%, transparent 50%)',
//                     clipPath: 'inherit',
//                   }}
//                 />
//               </div>

//               {/* Floating HUD cards */}
//               <div className="absolute -bottom-4 -right-4 glass-panel px-4 py-3"
//                 style={{ border: '1px solid rgba(0,255,209,0.2)' }}>
//                 <div className="font-mono text-[9px] text-white/30 mb-1">STATUS</div>
//                 <div className="flex items-center gap-2">
//                   <div className="w-2 h-2 rounded-full bg-neural animate-pulse" />
//                   <span className="font-mono text-xs text-neural font-bold">OPEN TO WORK</span>
//                 </div>
//               </div>

//               <div className="absolute -top-4 -left-4 glass-panel px-4 py-3"
//                 style={{ border: '1px solid rgba(123,47,255,0.2)' }}>
//                 <div className="font-mono text-[9px] text-white/30 mb-1">LOCATION</div>
//                 <div className="font-mono text-xs text-purple-400">Indore, M.P.</div>
//               </div>

//               {/* Decorative circuit lines */}
//               <svg className="absolute -z-10" width="200" height="200" style={{ bottom: -40, left: -40, opacity: 0.08 }}>
//                 <path d="M0 100 L60 100 L60 60 L120 60" stroke="#00FFD1" strokeWidth="1" fill="none"/>
//                 <path d="M60 100 L60 140 L140 140" stroke="#00FFD1" strokeWidth="1" fill="none"/>
//                 <circle cx="60" cy="100" r="3" fill="#00FFD1"/>
//                 <circle cx="60" cy="60" r="3" fill="#00FFD1"/>
//                 <circle cx="60" cy="140" r="3" fill="#00FFD1"/>
//               </svg>
//             </div>
//           </div>

//           {/* Content */}
//           <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
//             <p className="text-white/50 text-lg leading-8 mb-8">
//               Final-year Computer Science undergraduate with{' '}
//               <span className="text-neural font-medium">4 months of backend internship</span>{' '}
//               experience at Digivalet, Indore. Proficient in{' '}
//               <span className="text-neural font-medium">Python, Django, and REST APIs</span>,
//               with hands-on containerization using{' '}
//               <span className="text-neural font-medium">Docker</span>.
//             </p>
//             <p className="text-white/35 text-base leading-7 mb-10">
//               Focused on Artificial Intelligence and applying creative,
//               forward-thinking approaches to address real-world challenges.
//               Passionate about writing clean backend code and shipping
//               products that matter.
//             </p>

//             {/* Terminal block */}
//             <div className="mb-8 rounded-sm overflow-hidden">
//               <div className="flex items-center gap-2 px-4 py-2"
//                 style={{ background: 'rgba(0,255,209,0.06)', borderBottom: '1px solid rgba(0,255,209,0.1)' }}>
//                 <div className="w-2.5 h-2.5 rounded-full bg-signal/60" />
//                 <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
//                 <div className="w-2.5 h-2.5 rounded-full bg-neural/60" />
//                 <span className="font-mono text-[10px] text-white/20 ml-2">sumit@neural:~</span>
//               </div>
//               <div className="p-4" style={{ background: 'rgba(5,10,20,0.6)' }}>
//                 {[
//                   { cmd: 'whoami', out: 'Sumit Tank — Backend Developer' },
//                   { cmd: 'skills --top', out: 'Python · Django · Docker · REST · MERN' },
//                   { cmd: 'status --current', out: 'Interning @ Digivalet · Jan 2026–Present' },
//                   { cmd: 'goal', out: 'Build systems that scale beyond limits' },
//                 ].map(({ cmd, out }) => (
//                   <div key={cmd} className="mb-3 last:mb-0">
//                     <div className="flex items-center gap-2">
//                       <span className="text-neural/60 font-mono text-xs">$</span>
//                       <span className="text-neural font-mono text-xs">{cmd}</span>
//                     </div>
//                     <div className="font-mono text-xs text-white/40 ml-4 mt-0.5">{out}</div>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Tags */}
//             <div className="flex flex-wrap gap-2">
//               {['Open to Work', 'Backend Roles', 'Django / Python', 'Full-Stack', 'ML Integration', 'Remote Friendly'].map(t => (
//                 <span key={t} className="tech-tag">{t}</span>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }





import { useRef } from 'react'
import useReveal from '../hooks/useReveal'
import myPhoto from '../assets/photo.jpg'

export default function About() {
  const ref = useRef(null)
  const visible = useReveal(ref)

  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section header */}
        <div ref={ref} className={`reveal ${visible ? 'visible' : ''} mb-16`}>
          <div className="flex items-center gap-4 mb-4">
            <span className="font-mono text-[10px] text-neural/60 tracking-widest">01.</span>
            <div className="h-px flex-1 max-w-xs bg-neural/15" />
          </div>
          <h2 className="font-display text-4xl md:text-6xl font-black text-white/90 uppercase tracking-tight">
            About<br />
            <span className="text-neural">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Photo + decoration */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.2s' }}>
            <div className="relative">
              <div
                className="relative mx-auto lg:mx-0 w-72 h-80 md:w-80 md:h-96"
                style={{
                  clipPath: 'polygon(20px 0%, 100% 0%, 100% calc(100% - 20px), calc(100% - 20px) 100%, 0% 100%, 0% 20px)',
                }}
              >
                {/* ✅ Your actual photo */}
                <img
                  src={myPhoto}
                  alt="Sumit Tank"
                  className="w-full h-full object-cover object-top"
                />

                {/* Overlay tint */}
                <div className="absolute inset-0 pointer-events-none"
                  style={{
                    background: 'linear-gradient(135deg, rgba(0,255,209,0.04) 0%, transparent 50%)',
                  }}
                />
              </div>

              {/* Floating HUD cards */}
              <div className="absolute -bottom-4 -right-4 glass-panel px-4 py-3"
                style={{ border: '1px solid rgba(0,255,209,0.2)' }}>
                <div className="font-mono text-[9px] text-white/30 mb-1">STATUS</div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-neural animate-pulse" />
                  <span className="font-mono text-xs text-neural font-bold">OPEN TO WORK</span>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 glass-panel px-4 py-3"
                style={{ border: '1px solid rgba(123,47,255,0.2)' }}>
                <div className="font-mono text-[9px] text-white/30 mb-1">LOCATION</div>
                <div className="font-mono text-xs text-purple-400">Indore, M.P.</div>
              </div>

              {/* Decorative circuit lines */}
              <svg className="absolute -z-10" width="200" height="200" style={{ bottom: -40, left: -40, opacity: 0.08 }}>
                <path d="M0 100 L60 100 L60 60 L120 60" stroke="#00FFD1" strokeWidth="1" fill="none"/>
                <path d="M60 100 L60 140 L140 140" stroke="#00FFD1" strokeWidth="1" fill="none"/>
                <circle cx="60" cy="100" r="3" fill="#00FFD1"/>
                <circle cx="60" cy="60" r="3" fill="#00FFD1"/>
                <circle cx="60" cy="140" r="3" fill="#00FFD1"/>
              </svg>
            </div>
          </div>

          {/* Content */}
          <div className={`reveal ${visible ? 'visible' : ''}`} style={{ transitionDelay: '0.4s' }}>
            <p className="text-white/50 text-lg leading-8 mb-8">
              Computer Science undergraduate with{' '}
              {/* <span className="text-neural font-medium">4 months of backend internship</span>{' '} */}
              {/* experience at Digivalet, Indore. Proficient in{' '} */}
              <span className="text-neural font-medium">Python, Django, and REST APIs</span>,
              with hands-on containerization using{' '}
              <span className="text-neural font-medium">Docker</span>.
            </p>
            <p className="text-white/35 text-base leading-7 mb-10">
              Focused on Artificial Intelligence and applying creative,
              forward-thinking approaches to address real-world challenges.
              Passionate about writing clean backend code and shipping
              products that matter.
            </p>

            {/* Terminal block */}
            <div className="mb-8 rounded-sm overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-2"
                style={{ background: 'rgba(0,255,209,0.06)', borderBottom: '1px solid rgba(0,255,209,0.1)' }}>
                <div className="w-2.5 h-2.5 rounded-full bg-signal/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <div className="w-2.5 h-2.5 rounded-full bg-neural/60" />
                <span className="font-mono text-[10px] text-white/20 ml-2">sumit@neural:~</span>
              </div>
              <div className="p-4" style={{ background: 'rgba(5,10,20,0.6)' }}>
                {[
                  { cmd: 'whoami', out: 'Sumit Tank — Backend Developer' },
                  { cmd: 'skills --top', out: 'Python · Django · Docker · REST · MERN' },
                  // { cmd: 'status --current', out: 'Interning @ Digivalet · Jan 2026–Present' },
                  { cmd: 'goal', out: 'Build systems that scale beyond limits' },
                ].map(({ cmd, out }) => (
                  <div key={cmd} className="mb-3 last:mb-0">
                    <div className="flex items-center gap-2">
                      <span className="text-neural/60 font-mono text-xs">$</span>
                      <span className="text-neural font-mono text-xs">{cmd}</span>
                    </div>
                    <div className="font-mono text-xs text-white/40 ml-4 mt-0.5">{out}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {['Open to Work', 'Backend Roles', 'Django / Python', 'Full-Stack', 'ML Integration', 'Remote Friendly'].map(t => (
                <span key={t} className="tech-tag">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}