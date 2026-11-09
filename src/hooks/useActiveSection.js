import { useEffect, useMemo, useState } from 'react'

/**
 * useActiveSection — lightweight scroll-spy.
 * Returns the id of the section currently in view, or null.
 * Respects prefers-reduced-motion (returns null, no highlighting).
 */
export default function useActiveSection(sectionIds = []) {
  const [active, setActive] = useState(null)

  // Memoize so the IntersectionObserver isn't torn down/recreated every render.
  const ids = useMemo(() => sectionIds, [sectionIds])

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    if (ids.length === 0) return

    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean)

    if (elements.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        // Pick the entry with the largest intersection ratio.
        let best = null
        for (const entry of entries) {
          if (entry.isIntersecting && (!best || entry.intersectionRatio > best.intersectionRatio)) {
            best = entry
          }
        }
        if (best) setActive(best.target.id)
      },
      {
        rootMargin: '-45% 0px -50% 0px',
        threshold: 0,
      }
    )

    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [ids])

  return active
}