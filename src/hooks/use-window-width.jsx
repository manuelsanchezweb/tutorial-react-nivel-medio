'use client'

import { useEffect, useState } from 'react'

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [isMobile, setIsMobile] = useState(false)
  const [isTablet, setIsTablet] = useState(false)

  const handleResize = () => {
    setWindowWidth(window.innerWidth)

    if (window.innerWidth < 520) {
      setIsMobile(true)
    } else {
      setIsMobile(false)
    }

    if (window.innerWidth < 768) {
      setIsTablet(true)
    } else {
      setIsTablet(false)
    }
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, []) // Este efecto no depende de ninguna prop o estado, así que no tiene dependencias y se ejecutará una sola vez

  return { windowWidth, isMobile, isTablet }
}

export default useWindowWidth
