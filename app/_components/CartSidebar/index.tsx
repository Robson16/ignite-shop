'use client'

import { XIcon } from '@phosphor-icons/react'
import Image from 'next/image'
import { useContext } from 'react'

import { CartContext } from '@/app/_contexts/cart/CartContext'
import { UIContext } from '@/app/_contexts/ui/UIContext'

import CheckoutButton from '../CheckoutButton'
import {
  CartSidebarActions,
  CartSidebarCloseButton,
  CartSidebarContainer,
  CartSidebarProducts,
  CartSidebarResume,
} from './styles'

export default function CartSidebar() {
  const { isCartSidebarVisible, closeCartSidebar } = useContext(UIContext)
  const { cartItems, cartQuantity, cartTotal, removeFromCart } =
    useContext(CartContext)

  const formattedCartTotal = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(cartTotal / 100)

  return (
    <CartSidebarContainer $visible={isCartSidebarVisible}>
      <CartSidebarCloseButton onClick={closeCartSidebar}>
        <XIcon size={32} />
      </CartSidebarCloseButton>

      <h3>Sacola de compras</h3>

      <CartSidebarProducts>
        {cartItems.map((item) => (
          <li key={item.id}>
            <figure>
              <Image
                src={item.imageUrl}
                width={90}
                height={80}
                alt={item.name}
              />
            </figure>
            <div>
              <span>{item.name}</span>
              <strong>{item.price}</strong>
              <button onClick={() => removeFromCart(item.id)}>Remover</button>
            </div>
          </li>
        ))}
      </CartSidebarProducts>

      <CartSidebarResume>
        <div>
          <span>Quantidade</span>
          <span>{cartQuantity}</span>
        </div>
        <div>
          <strong>Valor total</strong>
          <strong>{formattedCartTotal}</strong>
        </div>
      </CartSidebarResume>
      <CartSidebarActions>
        <CheckoutButton defaultPriceId={''}>Finalizar compra</CheckoutButton>
      </CartSidebarActions>
    </CartSidebarContainer>
  )
}
