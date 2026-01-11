import { NextResponse } from 'next/server'

import { Product } from '@/app/_contexts/cart/CartTypes'
import { stripe } from '@/app/_services/stripe'

interface PostRequestBody {
  items: Product[]
}

export async function POST(request: Request) {
  const { items }: PostRequestBody = await request.json()

  if (!items || !Array.isArray(items) || items.length === 0) {
    return NextResponse.json(
      { error: 'Items not found or is empty.' },
      { status: 400 },
    )
  }

  const successUrl = `${process.env.NEXT_URL}/success?session_id={CHECKOUT_SESSION_ID}`
  const cancelUrl = `${process.env.NEXT_URL}/`

  const lineItems = items.map((item) => {
    return {
      price: item.defaultPriceId,
      quantity: 1,
    }
  })

  const checkoutSession = await stripe.checkout.sessions.create({
    success_url: successUrl,
    cancel_url: cancelUrl,
    mode: 'payment',
    line_items: lineItems,
  })

  return NextResponse.json(
    {
      checkoutUrl: checkoutSession.url,
    },
    { status: 201 },
  )
}
