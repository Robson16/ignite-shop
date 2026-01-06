'use client'

import Image from 'next/image'
import { useParams } from 'next/navigation'

import { ImageContainer, ProductContainer, ProductDetails } from './styles'

export default function ProductPage() {
  const params = useParams()
  const id = params?.id ?? '—'

  return (
    <ProductContainer>
      <ImageContainer></ImageContainer>

      <ProductDetails>
        <h1>Camiseta X</h1>
        <span>R$ 79,90</span>

        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo,
          illo. Alias sequi quidem id officia nemo itaque neque quo rem rerum
          nam, facilis in ea quas repudiandae quasi explicabo autem!
        </p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
