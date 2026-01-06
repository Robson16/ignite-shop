import { unstable_cache } from 'next/cache'
import Image from 'next/image'
import Stripe from 'stripe'

import { stripe } from '@/app/_services/stripe'

import { ImageContainer, ProductContainer, ProductDetails } from './styles'

interface ProductPageProps {
  params: Promise<{ id: string }>
}

const getProduct = unstable_cache(
  async (productId: string) => {
    const product = await stripe.products.retrieve(productId, {
      expand: ['default_price'],
    })

    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
      }).format((price.unit_amount || 0) / 100),
      description: product.description,
    }
  },
  ['product-detail'], // Cache key
  { revalidate: 3600 }, // 1 hour
)

export default async function ProductPage({ params }: ProductPageProps) {
  const { id } = await params
  const product = await getProduct(id)

  return (
    <ProductContainer>
      <ImageContainer>
        <Image src={product.imageUrl} width={520} height={480} alt="" />
      </ImageContainer>

      <ProductDetails>
        <h1>{product.name}</h1>
        <span>{product.price}</span>

        <p>{product.description}</p>

        <button>Comprar agora</button>
      </ProductDetails>
    </ProductContainer>
  )
}
