'use client'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/app/_styles/global'
import { theme } from '@/app/_styles/theme'

import { CartProvider } from './_contexts/cart/CartProvider'
import StyledComponentsRegistry from './_lib/styled-components-registry'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      <StyledComponentsRegistry>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          {children}
        </ThemeProvider>
      </StyledComponentsRegistry>
    </CartProvider>
  )
}
