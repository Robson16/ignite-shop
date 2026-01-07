'use client'

import styled from 'styled-components'

export const BuyButtonContainer = styled.button`
  margin-top: auto;
  background-color: ${(props) => props.theme.colors.green500};
  border: 0;
  color: ${(props) => props.theme.colors.white};
  border-radius: 8px;
  padding: 1.25rem;
  cursor: pointer;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.md};

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme.colors.green300};
  }
`
