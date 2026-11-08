import { useEffect, useRef, useState } from 'react'

// Respects prefers-reduced-motion by rendering statically when motion is reduced.
const REDUCED_MOTION = (() => {
  if (typeof window === 'undefined') return false
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
})()

/**
 * Reveal — scroll-triggered entrance animation.
 * Children render statically if the user prefers reduced motion.
 */
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(REDUCED_MOTION)

  useEffect(() => {
    if (REDUCED_MOTION) return

    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true)
            observer.disconnect()
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} ${visible ? 'reveal' : 'opacity-0'}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  )
}