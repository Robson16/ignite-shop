'use client'

import { BasketIcon } from '@phosphor-icons/react'
import { ButtonHTMLAttributes, useContext } from 'react'

import { CartContext } from '@/app/_contexts/cart/CartContext'
import { UIContext } from '@/app/_contexts/ui/UIContext'

import { CartIconContainer } from './styles'

interface CartIconProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

export default function CartIcon({ ...props }: CartIconProps) {
  const { openCartSidebar } = useContext(UIContext)
  const { cartQuantity, isHydrated } = useContext(CartContext)

  const cartLabel =
    cartQuantity > 0 ? `Carrinho com ${cartQuantity} itens` : 'Carrinho vazio'

  return (
    <CartIconContainer
      onClick={openCartSidebar}
      aria-label={cartLabel}
      {...props}
    >
      {isHydrated && cartQuantity > 0 && <span>{cartQuantity}</span>}
      <BasketIcon size={32} />
    </CartIconContainer>
  )
}
