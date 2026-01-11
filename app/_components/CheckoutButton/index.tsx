'use client'

import axios from 'axios'
import { ButtonHTMLAttributes, ReactNode, useContext, useState } from 'react'

import { CartContext } from '@/app/_contexts/cart/CartContext'

import { CheckoutButtonContainer } from './styles'

interface CheckoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
}

export default function CheckoutButton({
  children,
  ...props
}: CheckoutButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)
  const { cartItems } = useContext(CartContext)

  async function handleCheckoutProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        items: cartItems,
      })

      const { checkoutUrl } = await response.data

      if (checkoutUrl) {
        window.location.href = checkoutUrl
      }
    } catch (err) {
      setIsCreatingCheckoutSession(false)

      console.error(err)

      alert('Falha ao redirecionar ao checkout!')
    }
  }

  return (
    <CheckoutButtonContainer
      disabled={isCreatingCheckoutSession}
      onClick={handleCheckoutProduct}
      {...props}
    >
      {children}
    </CheckoutButtonContainer>
  )
}
