'use client'

import { ThemeProvider } from 'styled-components'

import { CartProvider } from '@/app/_contexts/cart/CartProvider'
import { UIProvider } from '@/app/_contexts/ui/UIProvider'
import StyledComponentsRegistry from '@/app/_lib/styled-components-registry'
import { GlobalStyle } from '@/app/_styles/global'
import { theme } from '@/app/_styles/theme'

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
