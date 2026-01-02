import { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import { getCssText } from '@/stitches.config'

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
        className={`${roboto.className} antialiased`}
        cz-shortcut-listen="true"
      >
        {children}
      </body>
    </html>
  )
}
