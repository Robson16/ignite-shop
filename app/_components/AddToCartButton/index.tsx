'use client'

import { BasketIcon, CheckCircleIcon } from '@phosphor-icons/react'
import { ButtonHTMLAttributes, useContext } from 'react'

import { CartContext } from '@/app/_contexts/cart/CartContext'
import { Product } from '@/app/_contexts/cart/CartTypes'

import { AddToCartContainer } from './styles'

interface AddToCartButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  hasIcon?: boolean
  hasText?: boolean
  product: Product
}

export default function AddToCartButton({
  hasIcon = false,
  hasText = true,
  product,
  ...props
}: AddToCartButtonProps) {
  const { addToCart, isItemInCart } = useContext(CartContext)

  const isInCart = isItemInCart(product.id)

  function handleAddToCart(product: Product) {
    addToCart(product)
  }

  const buttonText = isInCart ? 'Produto na sacola' : 'Colocar na sacola'

  return (
    <AddToCartContainer
      {...props}
      onClick={(event) => {
        event.preventDefault()
        handleAddToCart(product)
      }}
      disabled={isInCart}
      aria-label={hasText ? undefined : buttonText}
    >
      {hasIcon &&
        (isInCart ? <CheckCircleIcon size={32} /> : <BasketIcon size={32} />)}

      {hasText && buttonText}
    </AddToCartContainer>
  )
}
