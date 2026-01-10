'use cliente'

import { ReactNode, useCallback, useState } from 'react'

import { UIContext } from './UIContext'

interface UIProviderProps {
  children: ReactNode
}

export function UIProvider({ children }: UIProviderProps) {
  const [isCartSidebarVisible, setIsCartSidebarVisible] = useState(false)

  const openCartSidebar = useCallback(() => {
    setIsCartSidebarVisible(true)
  }, [])

  const closeCartSidebar = useCallback(() => {
    setIsCartSidebarVisible(false)
  }, [])

  return (
    <UIContext.Provider
      value={{ isCartSidebarVisible, openCartSidebar, closeCartSidebar }}
    >
      {children}
    </UIContext.Provider>
  )
}
