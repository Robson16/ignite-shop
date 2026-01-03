import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import Image from 'next/image'

import { globalStyles } from '@/app/_styles/global'
import { getCssText } from '@/app/_styles/stitches.config'

import logoImg from './_assets/logo.svg'
import { Container, Header } from './_styles/pages/layout'

globalStyles()

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
      <head>
        <style
          id="stitches"
          dangerouslySetInnerHTML={{ __html: getCssText() }}
        />
      </head>
      <body
        className={`${roboto.variable} antialiased`}
        cz-shortcut-listen="true"
      >
        <Container>
          <Header>
            <Image src={logoImg} alt="Ignite Shop" />
          </Header>

          {children}
        </Container>
      </body>
    </html>
  )
}
