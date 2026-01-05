import Link from 'next/link'

import { SuccessContainer } from './styles'

export default function SuccessPage() {
  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <p>
        Uhuul! Sua compra de <strong>Camiseta Beyond the Limits</strong> já está
        a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
