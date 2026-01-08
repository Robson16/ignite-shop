import { Metadata } from 'next'
import { unstable_cache } from 'next/cache'
import Stripe from 'stripe'

import { ProductSlider } from './_components/ProductSlider'
import { stripe } from './_services/stripe'
import { HomeContainer } from './_styles/pages/home'

const getProducts = unstable_cache(
  async () => {
    const response = await stripe.products.list({
      expand: ['data.default_price'],
    })

    return response.data.map((product) => {
      const price = product.default_price as Stripe.Price

      return {
        id: product.id,
        name: product.name,
        imageUrl: product.images[0],
        price: new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        }).format((price.unit_amount || 0) / 100),
        numberPrice: price.unit_amount || 0,
        description: product.description,
        defaultPriceId: price.id,
      }
    })
  },
  ['products-list'], // Cache key
  { revalidate: 60 }, // 60 seconds
)

export const metadata: Metadata = {
  title: 'Ignite Shop',
}

export default async function Home() {
  const products = await getProducts()

  return (
    <HomeContainer>
      <ProductSlider products={products} />
    </HomeContainer>
  )
}
