'use client'

import axios from 'axios'
import { ButtonHTMLAttributes, ReactNode, useState } from 'react'

import { CheckoutButtonContainer } from './styles'

interface CheckoutButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  defaultPriceId: string
  children: ReactNode
}

export default function CheckoutButton({
  defaultPriceId,
  children,
  ...props
}: CheckoutButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleCheckoutProduct() {
    try {
      setIsCreatingCheckoutSession(true)

      const response = await axios.post('/api/checkout', {
        priceId: defaultPriceId,
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
