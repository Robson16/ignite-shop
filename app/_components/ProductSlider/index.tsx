'use client'

import 'keen-slider/keen-slider.min.css'

import { useKeenSlider } from 'keen-slider/react'
import Image from 'next/image'
import Link from 'next/link'

import AddToCartButton from '@/app/_components/AddToCartButton'
import { Product } from '@/app/_contexts/cart/CartTypes'

import { Infos, ProductSlide, ProductSliderContainer } from './styles'

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
      {products.map((product) => {
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

                <AddToCartButton hasIcon hasText={false} product={product} />
              </footer>
            </ProductSlide>
          </Link>
        )
      })}
    </ProductSliderContainer>
  )
}
