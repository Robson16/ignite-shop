'use client'

import { useContext, useEffect } from 'react'

import { CartContext } from '@/app/_contexts/cart/CartContext'

/**
 * Este componente cliente é renderizado na página de sucesso e sua única
 * responsabilidade é limpar o carrinho de compras após a conclusão da compra.
 */
export function ClearCartOnSuccess() {
  const { clearCart } = useContext(CartContext)

  useEffect(() => {
    clearCart()
  }, [clearCart])

  return null // Este componente não renderiza nada na UI.
}
