import { useState, useEffect } from 'react'

export default function useReveal(ref, options = {}) {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    if (!ref.current) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -60px 0px', ...options }
    )

    observer.observe(ref.current)
    return () => observer.disconnect()
  }, [ref])

  return visible
}
