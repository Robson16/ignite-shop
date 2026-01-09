'use client'

import { BasketIcon } from '@phosphor-icons/react'
import { LinkProps } from 'next/link'
import { useContext } from 'react'

import { CartContext } from '@/app/_contexts/cart/CartContext'

import { CartIconContainer } from './styles'

interface CartIconProps extends LinkProps {}

export default function CartIcon({ ...rest }: CartIconProps) {
  const { cartQuantity, isHydrated } = useContext(CartContext)

  const cartLabel =
    cartQuantity > 0 ? `Carrinho com ${cartQuantity} itens` : 'Carrinho vazio'

  return (
    <CartIconContainer {...rest} aria-label={cartLabel}>
      {isHydrated && cartQuantity > 0 && <span>{cartQuantity}</span>}
      <BasketIcon size={32} />
    </CartIconContainer>
  )
}
