'use client'

import 'keen-slider/keen-slider.min.css'

import { BasketIcon, CheckCircleIcon } from '@phosphor-icons/react'
import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'
import { useContext } from 'react'

import { CartContext } from '@/app/_contexts/cart/CartContext'
import { Product } from '@/app/_contexts/cart/CartTypes'

import {
  AddToCart,
  Infos,
  ProductSlide,
  ProductSliderContainer,
} from './styles'

interface ProductSliderProps {
  products: Product[]
}

export function ProductSlider({ products }: ProductSliderProps) {
  const { addToCart, isItemInCart } = useContext(CartContext)
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  function handleAddToCart(product: Product) {
    addToCart(product)
  }

  return (
    <ProductSliderContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => {
        const isInCart = isItemInCart(product.id)

        return (
          <Link
            href={`/product/${product.id}`}
            key={product.id}
            prefetch={false}
          >
            <ProductSlide className="keen-slider__slide">
              <Image
                src={product.imageUrl}
                width={520}
                height={480}
                alt={product.name}
              />

              <footer>
                <Infos>
                  <strong>{product.name}</strong>
                  <span>{product.price}</span>
                </Infos>

                <AddToCart
                  disabled={isInCart}
                  onClick={(event) => {
                    event.preventDefault()
                    handleAddToCart(product)
                  }}
                >
                  {isInCart ? (
                    <CheckCircleIcon size={32} />
                  ) : (
                    <BasketIcon size={32} />
                  )}
                </AddToCart>
              </footer>
            </ProductSlide>
          </Link>
        )
      })}
    </ProductSliderContainer>
  )
}
