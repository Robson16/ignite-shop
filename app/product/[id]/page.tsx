import { Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import Image from 'next/image'
import Stripe from 'stripe'

import BuyButton from '@/app/_components/BuyButton'
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
      defaultPriceId: price.id,
    }
  },
  ['product-detail'], // Cache key
  { revalidate: 3600 }, // 1 hour
)

export const dynamicParams = true

export async function generateStaticParams() {
  const products = await stripe.products.list({ limit: 3 })

  return products.data.map((product) => ({
    id: product.id,
  }))
}

export async function generateMetadata({
  params,
}: ProductPageProps): Promise<Metadata> {
  const { id } = await params

  const product = await getProduct(id)

  return {
    title: `${product.name} | Ignite Shop`,
    description: product.description,
    openGraph: {
      images: [
        {
          url: product.imageUrl,
          width: 800,
          height: 600,
          alt: product.name,
        },
      ],
    },
  }
}

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

        <BuyButton defaultPriceId={product.defaultPriceId} />
      </ProductDetails>
    </ProductContainer>
  )
}
