import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'

import { stripe } from '../_services/stripe'
import { ClearCartOnSuccess } from './_components/ClearCartOnSuccess'
import { ImagesGroup, ImageWrapper, SuccessContainer } from './styles'

interface SuccessPageProps {
  searchParams: Promise<{ session_id?: string }>
}

export const metadata: Metadata = {
  title: 'Compra efetuada | Ignite Shop',
  robots: {
    index: false,
  },
}

export default async function SuccessPage({ searchParams }: SuccessPageProps) {
  const { session_id: sessionId } = await searchParams

  if (!sessionId) {
    redirect('/')
  }

  const session = await stripe.checkout.sessions.retrieve(sessionId, {
    expand: ['line_items', 'line_items.data.price.product'],
  })

  if (!session.line_items?.data) {
    redirect('/')
  }

  const customerName = session.customer_details?.name
  const products = session.line_items.data
    .map((item) => item.price?.product)
    .filter(
      (product): product is Stripe.Product =>
        product !== null && typeof product === 'object' && 'images' in product,
    )

  if (products.length === 0) {
    redirect('/')
  }

  return (
    <SuccessContainer>
      <h1>Compra efetuada!</h1>

      <ImagesGroup>
        {products.map((product) => (
          <ImageWrapper key={product.id}>
            <Image
              src={product.images[0]}
              width={140}
              height={140}
              alt={product.name}
            />
          </ImageWrapper>
        ))}
      </ImagesGroup>

      <p>
        Uhuul <strong>{customerName}</strong>, sua{' '}
        {products.length > 1 ? (
          <>
            compra de <strong>{products.length} camisetas</strong>
          </>
        ) : (
          <strong>{products[0].name}</strong>
        )}{' '}
        já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>

      <ClearCartOnSuccess />
    </SuccessContainer>
  )
}
