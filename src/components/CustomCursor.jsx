// import { useEffect, useState } from 'react'

// export default function CustomCursor() {
//   const [pos, setPos] = useState({ x: -100, y: -100 })
//   const [ringPos, setRingPos] = useState({ x: -100, y: -100 })
//   const [isHover, setIsHover] = useState(false)

//   useEffect(() => {
//     let ringX = -100, ringY = -100
//     let rafId

//     const onMove = (e) => {
//       setPos({ x: e.clientX, y: e.clientY })
//     }

//     const animateRing = () => {
//       setRingPos(prev => ({
//         x: prev.x + (pos.x - prev.x) * 0.12,
//         y: prev.y + (pos.y - prev.y) * 0.12,
//       }))
//       rafId = requestAnimationFrame(animateRing)
//     }
//     rafId = requestAnimationFrame(animateRing)

//     const onEnter = (e) => {
//       if (e.target.closest('a, button, [data-hover]')) setIsHover(true)
//     }
//     const onLeave = () => setIsHover(false)

//     window.addEventListener('mousemove', onMove)
//     document.addEventListener('mouseover', onEnter)
//     document.addEventListener('mouseout', onLeave)

//     return () => {
//       window.removeEventListener('mousemove', onMove)
//       document.removeEventListener('mouseover', onEnter)
//       document.removeEventListener('mouseout', onLeave)
//       cancelAnimationFrame(rafId)
//     }
//   }, [pos.x, pos.y])

//   return (
//     <>
//       <div
//         className="cursor-dot"
//         style={{ left: pos.x, top: pos.y }}
//       />
//       <div
//         className={`cursor-ring ${isHover ? 'hover' : ''}`}
//         style={{ left: ringPos.x, top: ringPos.y }}
//       />
//     </>
//   )
// }

import { useEffect, useRef, useState } from 'react'

export default function CustomCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const ring2Ref = useRef(null)
  const [isHover, setIsHover] = useState(false)
  const [isClick, setIsClick] = useState(false)

  useEffect(() => {
    const mouse = { x: -200, y: -200 }
    const ring = { x: -200, y: -200 }
    const ring2 = { x: -200, y: -200 }
    let rafId

    const onMove = (e) => {
      mouse.x = e.clientX
      mouse.y = e.clientY
    }

    const onOver = (e) => {
      setIsHover(!!e.target.closest('a, button, [data-hover]'))
    }

    const onDown = () => setIsClick(true)
    const onUp = () => setIsClick(false)

    const animate = () => {
      if (dotRef.current) {
        dotRef.current.style.left = mouse.x + 'px'
        dotRef.current.style.top = mouse.y + 'px'
      }

      ring.x += (mouse.x - ring.x) * 0.18
      ring.y += (mouse.y - ring.y) * 0.18
      if (ringRef.current) {
        ringRef.current.style.left = ring.x + 'px'
        ringRef.current.style.top = ring.y + 'px'
      }

      ring2.x += (mouse.x - ring2.x) * 0.07
      ring2.y += (mouse.y - ring2.y) * 0.07
      if (ring2Ref.current) {
        ring2Ref.current.style.left = ring2.x + 'px'
        ring2Ref.current.style.top = ring2.y + 'px'
      }

      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)

    return () => {
      cancelAnimationFrame(rafId)
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
    }
  }, [])

  return (
    <>
      <style>{`
        .cur-dot {
          position: fixed;
          pointer-events: none;
          z-index: 99999;
          transform: translate(-50%, -50%);
          mix-blend-mode: difference;
        }
        .cur-ring {
          position: fixed;
          pointer-events: none;
          z-index: 99998;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          transition: width 0.2s ease, height 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;
        }
        .cur-ring-2 {
          position: fixed;
          pointer-events: none;
          z-index: 99997;
          transform: translate(-50%, -50%);
          border-radius: 50%;
          transition: width 0.3s ease, height 0.3s ease, border-color 0.3s ease, opacity 0.3s ease;
        }
        @keyframes spin-cw  { to { transform: translate(-50%,-50%) rotate(360deg); } }
        @keyframes spin-ccw { to { transform: translate(-50%,-50%) rotate(-360deg); } }
        .spin-cw  { animation: spin-cw  3s linear infinite; }
        .spin-ccw { animation: spin-ccw 6s linear infinite; }
      `}</style>

      <div ref={dotRef} className="cur-dot">
        <svg width="12" height="12" viewBox="0 0 12 12">
          <circle cx="6" cy="6" r="2" fill={isClick ? '#FF2D78' : '#00FFD1'} />
          <line x1="6" y1="0"  x2="6" y2="3"  stroke={isClick ? '#FF2D78' : '#00FFD1'} strokeWidth="1"/>
          <line x1="6" y1="9"  x2="6" y2="12" stroke={isClick ? '#FF2D78' : '#00FFD1'} strokeWidth="1"/>
          <line x1="0"  y1="6" x2="3"  y2="6" stroke={isClick ? '#FF2D78' : '#00FFD1'} strokeWidth="1"/>
          <line x1="9"  y1="6" x2="12" y2="6" stroke={isClick ? '#FF2D78' : '#00FFD1'} strokeWidth="1"/>
        </svg>
      </div>

      <div
        ref={ringRef}
        className="cur-ring spin-cw"
        style={{
          width:  isHover ? 54 : isClick ? 18 : 34,
          height: isHover ? 54 : isClick ? 18 : 34,
          border: `1px dashed ${isHover ? 'rgba(0,255,209,0.95)' : 'rgba(0,255,209,0.55)'}`,
          boxShadow: isHover ? '0 0 14px rgba(0,255,209,0.3), inset 0 0 14px rgba(0,255,209,0.06)' : 'none',
        }}
      />

      <div
        ref={ring2Ref}
        className="cur-ring-2 spin-ccw"
        style={{
          width:  isHover ? 72 : 52,
          height: isHover ? 72 : 52,
          border: `1px solid ${isHover ? 'rgba(123,47,255,0.55)' : 'rgba(0,255,209,0.1)'}`,
          opacity: isClick ? 0.25 : 0.65,
        }}
      />
    </>
  )
}