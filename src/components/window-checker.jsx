'use client'

import React from 'react'
import useWindowWidth from '../hooks/use-window-width'

const WindowChecker = () => {
  const { windowWidth, isMobile, isTablet } = useWindowWidth()

  return (
    <div>
      This is the width of the window: {windowWidth}
      {isMobile ? <div>Esto es un mobile</div> : <div>Esto ya no</div>}
      {isTablet ? <div>Esto es una tablet</div> : <div>Esto ya no</div>}
    </div>
  )
}

export default WindowChecker
