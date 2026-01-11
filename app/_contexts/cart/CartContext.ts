import { createContext } from 'react'

import { Product } from './CartTypes'

interface CartContextData {
  cartItems: Product[]
  cartTotal: number
  cartQuantity: number
  isHydrated: boolean
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
  isItemInCart: (productId: string) => boolean
  clearCart: () => void
}

export const CartContext = createContext({} as CartContextData)
