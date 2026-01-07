import Link from 'next/link'

import { ImageContainer, SuccessContainer } from './styles'

export default function Success() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer></ImageContainer>

      <p>
        Uhuul <strong>John Doe</strong>, sua <strong>Camiseta X</strong> já está
        a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
