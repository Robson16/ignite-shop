import { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { redirect } from 'next/navigation'
import Stripe from 'stripe'

import { stripe } from '../_services/stripe'
import { ImageContainer, SuccessContainer } from './styles'

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

  const customerName = session.customer_details?.name
  const product = session.line_items?.data[0].price?.product as Stripe.Product

  return (
    <SuccessContainer>
      <h1>Compra efetuada</h1>

      <ImageContainer>
        <Image
          src={product.images[0]}
          width={120}
          height={110}
          alt={product.name}
        />
      </ImageContainer>

      <p>
        Uhuul <strong>{customerName}</strong>, sua{' '}
        <strong>{product.name}</strong> já está a caminho da sua casa.
      </p>

      <Link href="/">Voltar ao catálogo</Link>
    </SuccessContainer>
  )
}
