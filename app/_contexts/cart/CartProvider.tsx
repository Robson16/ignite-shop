'use client'

import { ReactNode, useCallback, useEffect, useMemo, useReducer } from 'react'

import {
  addToCartAction,
  hydrateCartAction,
  removeFromCartAction,
} from './CartActions'
import { CartContext } from './CartContext'
import { cartReducer } from './CartReducer'
import { Product } from './CartTypes'

interface CartContextProviderProps {
  children: ReactNode
}

const initialCartState = {
  cartItems: [] as Product[],
}

export function getCartTotal(items: Product[]) {
  return items.reduce(
    (sum: number, product: Product) => sum + product.numberPrice,
    0,
  )
}

export function CartProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState)

  const { cartItems } = cartState

  const cartTotal = useMemo(() => getCartTotal(cartItems), [cartItems])

  useEffect(() => {
    try {
      const stored = localStorage.getItem('@ignite-shop:cart-state-1.0.0')
      if (!stored) return
      const parsed = JSON.parse(stored)
      const items = Array.isArray(parsed.cartItems) ? parsed.cartItems : []
      dispatch(hydrateCartAction(items))
    } catch {
      // ignore malformed storage
    }
  }, [dispatch])

  useEffect(() => {
    const stateToPersist = { cartItems: cartState.cartItems }
    localStorage.setItem(
      '@ignite-shop:cart-state-1.0.0',
      JSON.stringify(stateToPersist),
    )
  }, [cartState.cartItems])

  const addToCart = useCallback(
    (data: Product) => {
      dispatch(addToCartAction(data))
    },
    [dispatch],
  )

  const removeFromCart = useCallback(
    (productId: string) => {
      dispatch(removeFromCartAction(productId))
    },
    [dispatch],
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        addToCart,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
