import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'

import logoImg from './_assets/logo.svg'
import { Container, Header } from './_styles/pages/layout'
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
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${roboto.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Providers>
          <Container>
            <Header>
              <Image src={logoImg} alt="Ignite Shop" />
            </Header>
            {children}
          </Container>
        </Providers>
      </body>
    </html>
  )
}
