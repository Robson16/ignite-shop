import shirt1 from './_assets/t-shirts/1.png'
import shirt2 from './_assets/t-shirts/2.png'
import shirt3 from './_assets/t-shirts/3.png'
import { ProductSlider } from './_components/ProductSlider'
import { HomeContainer } from './_styles/pages/home'

export default async function Home() {
  const products = [
    { id: '1', name: 'Camiseta X', imageUrl: shirt1, price: 'R$ 79,90' },
    { id: '2', name: 'Camiseta Y', imageUrl: shirt2, price: 'R$ 79,90' },
    { id: '3', name: 'Camiseta Z', imageUrl: shirt3, price: 'R$ 89,90' },
    { id: '4', name: 'Camiseta W', imageUrl: shirt1, price: 'R$ 69,90' },
  ]

  return (
    <HomeContainer>
      <ProductSlider products={products} />
    </HomeContainer>
  )
}
