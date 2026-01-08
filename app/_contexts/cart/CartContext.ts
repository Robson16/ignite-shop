import { createContext } from 'react'

import { Product } from './CartTypes'

interface CartContextData {
  cartItems: Product[]
  cartTotal: number
  addToCart: (product: Product) => void
  removeFromCart: (productId: string) => void
}

export const CartContext = createContext({} as CartContextData)
