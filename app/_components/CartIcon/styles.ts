'use client'

import Link from 'next/link'
import styled from 'styled-components'

export const CartIconContainer = styled(Link)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 3rem;
  max-height: 3rem;
  padding: 1rem 0.875rem;
  background-color: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.white};
  border: 0;
  border-radius: 8px;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.gray700};
  }

  span {
    position: absolute;
    top: -0.5rem;
    right: -0.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.75rem;
    height: 1.75rem;
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.sm};

    border-radius: 50%;
    color: ${({ theme }) => theme.colors['white']};
    background-color: ${({ theme }) => theme.colors['green500']};
  }
`
