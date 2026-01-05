import Stripe from 'stripe'

import { ProductSlider } from './_components/ProductSlider'
import { stripe } from './_services/stripe'
import { HomeContainer } from './_styles/pages/home'

export default async function Home() {
  const response = await stripe.products.list({
    expand: ['data.default_price'],
  })

  const products = response.data.map((product) => {
    const price = product.default_price as Stripe.Price

    return {
      id: product.id,
      name: product.name,
      imageUrl: product.images[0],
      price: price.unit_amount || 0,
    }
  })

  return (
    <HomeContainer>
      <ProductSlider products={products} />
    </HomeContainer>
  )
}
