'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'

import { Product, ProductSliderContainer } from './styles'

interface Product {
  id: string
  name: string
  imageUrl: string
  price: number
}

interface ProductSliderProps {
  products: Product[]
}

export function ProductSlider({ products }: ProductSliderProps) {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 3,
      spacing: 48,
    },
  })

  return (
    <ProductSliderContainer ref={sliderRef} className="keen-slider">
      {products.map((product) => (
        <Product className="keen-slider__slide" key={product.id}>
          <Image
            src={product.imageUrl}
            width={520}
            height={480}
            alt={product.name}
          />

          <footer>
            <strong>{product.name}</strong>
            <span>
              {new Intl.NumberFormat('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              }).format(product.price / 100)}
            </span>
          </footer>
        </Product>
      ))}
    </ProductSliderContainer>
  )
}
