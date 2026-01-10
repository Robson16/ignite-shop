import { createContext } from 'react'

interface UIContextData {
  isCartSidebarVisible: boolean
  openCartSidebar: () => void
  closeCartSidebar: () => void
}

export const UIContext = createContext({} as UIContextData)
