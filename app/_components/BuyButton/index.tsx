'use client'

import axios from 'axios'
import { useState } from 'react'

import { BuyButtonContainer } from './styles'

interface BuyButtonProps {
  defaultPriceId: string
}

export default function BuyButton({ defaultPriceId }: BuyButtonProps) {
  const [isCreatingCheckoutSession, setIsCreatingCheckoutSession] =
    useState(false)

  async function handleBuyProduct() {
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
    <BuyButtonContainer
      disabled={isCreatingCheckoutSession}
      onClick={handleBuyProduct}
    >
      Comprar agora
    </BuyButtonContainer>
  )
}
