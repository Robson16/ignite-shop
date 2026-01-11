'use client'

import styled from 'styled-components'

export const AddToCartContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 1rem 0.875rem;
  margin-top: auto;

  font-size: ${(props) => props.theme.fontSizes.md};
  color: ${({ theme }) => theme.colors.white};

  border: 0;
  border-radius: 8px;

  background-color: ${({ theme }) => theme.colors.green500};

  transition: background-color 0.2s ease-in-out;
  cursor: pointer;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.green700};
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${({ theme }) => theme.colors.green400};
  }
`
