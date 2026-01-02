'use client'

import { useParams } from 'next/navigation'

export default function ProductPage() {
  const params = useParams()
  const id = params?.id ?? '—'

  return <h1>Página do Produto: {id}</h1>
}
