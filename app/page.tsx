import Image from 'next/image'

import shirt1 from './_assets/t-shirts/1.png'
import shirt2 from './_assets/t-shirts/2.png'
import shirt3 from './_assets/t-shirts/3.png'
import { HomeContainer, Product } from './_styles/pages/home'

export default function Home() {
  return (
    <HomeContainer>
      <Product>
        <Image src={shirt1} width={520} height={480} alt="Shirt 1" />

        <footer>
          <strong>Camiseta 1</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>

      <Product>
        <Image src={shirt2} width={520} height={480} alt="Shirt 2" />

        <footer>
          <strong>Camiseta 2</strong>
          <span>R$ 79,90</span>
        </footer>
      </Product>
    </HomeContainer>
  )
}
