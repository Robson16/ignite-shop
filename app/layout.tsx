import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'
import Link from 'next/link'

import CartIcon from '@/app/_components/CartIcon'
import CartSidebar from '@/app/_components/CartSidebar'
import { Container, Header } from '@/app/_styles/pages/layout'

import { Providers } from './providers'

const roboto = Roboto({
  variable: '--font-roboto-sans',
  weight: ['400', '700'],
  display: 'swap',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Ignite Shop',
  description: 'Aplicação de marketplace',
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/manifest.json',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body className={`${roboto.variable}`} cz-shortcut-listen="true">
        <Providers>
          <Container>
            <Header>
              <Link href="/">
                <Image
                  src="/logo.svg"
                  alt="Ignite Shop"
                  width={130}
                  height={53}
                  priority
                />
              </Link>

              <CartIcon />
              <CartSidebar />
            </Header>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
