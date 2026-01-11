'use client'

import {
  ReactNode,
  startTransition,
  useCallback,
  useEffect,
  useMemo,
  useReducer,
  useState,
} from 'react'

import {
  addToCartAction,
  clearCartAction,
  hydrateCartAction,
  removeFromCartAction,
} from './CartActions'
import { CartContext } from './CartContext'
import { cartReducer } from './CartReducer'
import { Product } from './CartTypes'

const CART_STORAGE_KEY = '@ignite-shop:cart-state-1.0.0'

interface CartContextProviderProps {
  children: ReactNode
}

const initialCartState = {
  cartItems: [] as Product[],
}

export function getCartTotal(items: Product[]) {
  return items.reduce(
    (sum: number, product: Product) =>
      sum + (product.quantity || 1) * product.numberPrice,
    0,
  )
}

export function getCartQuantity(items: Product[]) {
  return items.reduce((sum, product) => sum + (product.quantity || 1), 0)
}

export function CartProvider({ children }: CartContextProviderProps) {
  const [cartState, dispatch] = useReducer(cartReducer, initialCartState)
  const [isHydrated, setIsHydrated] = useState(false)

  const { cartItems } = cartState

  const cartTotal = useMemo(() => getCartTotal(cartItems), [cartItems])
  const cartQuantity = useMemo(() => getCartQuantity(cartItems), [cartItems])

  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY)

    if (stored) {
      try {
        const parsed = JSON.parse(stored)

        if (Array.isArray(parsed.cartItems)) {
          const sanitizedItems = parsed.cartItems.map((item: Product) => ({
            ...item,
            numberPrice: item.numberPrice || 0,
          }))

          dispatch(hydrateCartAction(sanitizedItems))
        }
      } catch (err) {
        console.error('Erro ao carregar carrinho:', err)
      }
    }

    startTransition(() => {
      setIsHydrated(true)
    })
  }, [])

  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify({ cartItems }))
    }
  }, [cartItems, isHydrated])

  const addToCart = useCallback(
    (data: Product) => {
      dispatch(addToCartAction(data))
    },
    [dispatch],
  )

  const clearCart = useCallback(() => {
    dispatch(clearCartAction())
    localStorage.removeItem(CART_STORAGE_KEY)
  }, [dispatch])

  const removeFromCart = useCallback(
    (productId: string) => {
      dispatch(removeFromCartAction(productId))
    },
    [dispatch],
  )

  const isItemInCart = useCallback(
    (productId: string) => {
      return cartItems.some((item) => item.id === productId)
    },
    [cartItems],
  )

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartTotal,
        cartQuantity,
        isHydrated,
        addToCart,
        removeFromCart,
        clearCart,
        isItemInCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
