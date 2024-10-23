import { useState } from 'react'
import { useIsomorphicLayoutEffect } from '../'

export const useWindowScroll = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 })

  useIsomorphicLayoutEffect(() => {
    const updatePosition = () => {
      setPosition(state => ({
        ...state,
        x: window.scrollX,
        y: window.scrollY,
      }))
    }
    window.addEventListener('scroll', updatePosition, { passive: true })
    return () => {
      window.removeEventListener('scroll', updatePosition)
    }
  }, [])

  return [position.x, position.y]
}
