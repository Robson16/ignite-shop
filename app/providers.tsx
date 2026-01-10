'use client'

import { ThemeProvider } from 'styled-components'

import { GlobalStyle } from '@/app/_styles/global'
import { theme } from '@/app/_styles/theme'

import { CartProvider } from './_contexts/cart/CartProvider'
import { UIProvider } from './_contexts/ui/UIProvider'
import StyledComponentsRegistry from './_lib/styled-components-registry'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <UIProvider>
      <CartProvider>
        <StyledComponentsRegistry>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            {children}
          </ThemeProvider>
        </StyledComponentsRegistry>
      </CartProvider>
    </UIProvider>
  )
}
